export default function (bot: Bot) {
  bot.on("messagestr", (msg) => {
    if (msg.endsWith("up")) bot.entity.position.y += 1;
    if (msg.endsWith("down")) bot.entity.position.y -= 1;
    if (msg.endsWith("attack")) bot.attack(bot.nearestEntity()!);
  });
}
