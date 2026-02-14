export default function (bot: Bot) {
  bot.on("entityMoved", (entity) => {
    if (entity.name == "player") {
      bot.target = entity;
    }
  });
  bot.on("entityGone", (entity) => {
    if (entity == bot.target) {
      bot.target = undefined;
    }
  });
}
