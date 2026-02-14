import { Vec3 } from "vec3";

export default function (bot: Bot) {
  let resolve: (() => void) | null = null;
  let antiFlyKick = 0;
  let target: Vec3;
  bot.moving = false;
  bot.moveTo = (pos) => {
    target = pos;
    bot.moving = true;
    return new Promise<void>((r) => {
      resolve = r;
    });
  };

  bot.on("physicsTick", () => {
    if (bot.entity.onGround) antiFlyKick = 0;
    else if (antiFlyKick++ > 40) {
      bot.entity.position.y -= 0.0313;
      antiFlyKick = 0;
      return;
    }
    if (!target) return;

    const d = target.minus(bot.entity.position);
    const dist = d.norm();

    if (dist <= 3) {
      resolve?.();
      resolve = null;
      bot.moving = false;
      return;
    }

    let step = 5;
    if (step > dist) step = dist;
    if (step < 0.02) step = 0.02;
    d.scale(step / dist);

    if (d.y < -0.03125) antiFlyKick = 0;
    bot.entity.position.add(d);
  });
}
