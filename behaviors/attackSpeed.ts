// Calculate bot.attackSpeed

export default function (bot: Bot) {
  bot.attackSpeed = 4;

  bot.on("entityAttributes", (entity) => {
    if (entity != bot.entity) return;
    const attribute = (entity as any).attributes["generic.attack_speed"];
    if (!attribute) return;
    let attackSpeed = attribute.value;
    attribute.modifiers?.forEach((modifier: any) => {
      if (modifier.operation == 0) attackSpeed += modifier.amount;
      else attackSpeed *= 1 + modifier.amount;
    });
    bot.attackSpeed = 20 / attackSpeed;
    console.log("attack speed " + attackSpeed);
  });
}
