import { Vec3 } from "vec3";

function derivedVec3(src: Vec3, offsetY: number): Vec3 {
  return new Proxy(src, {
    get(target, prop, receiver) {
      if (prop === "y") return target.y + offsetY;
      const val = Reflect.get(target, prop, receiver);
      return typeof val === "function" ? val.bind(receiver) : val;
    },
  }) as unknown as Vec3;
}

export default function (bot: Bot) {
  let state = "fight";
  function setState(newState: string) {
    if (state == newState) return;
    state = newState;
    console.log(state);
  }

  bot.on("physicsTick", () => {
    if (!bot.target) return;
    if (state == "fight") {
      if (bot.moving) return;
      if (bot.entity.position.y > bot.target!.position.y + 50) {
        bot.equip(bot.inventory.items().find((i) => i.name == "mace")!, "hand");
        bot
          .moveTo(bot.target!.position)
          .then(() => bot.target && bot.attack(bot.target));
      } else {
        bot.moveTo(derivedVec3(bot.target!.position, 60));
      }
    } else if (state == "flee") {
      bot.moveTo(derivedVec3(bot.target!.position, 100));
      if (bot.entity.equipment[1]?.name != "enchanted_golden_apple") {
        const item = bot.inventory
          .items()
          .find((i) => i.name == "enchanted_golden_apple");
        if (!item) {
          console.log("uh uh");
          setState("fight");
          return;
        }
        bot.equip(item, "off-hand");
      }
      setState("heal");
      bot.activateItem(true);
    }
  });
  bot.on("health", () => {
    console.log("health " + bot.health);
    if (bot.health > 16) setState("fight");
    else setState("flee");
  });
}
