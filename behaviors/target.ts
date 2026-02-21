export default function (bot: Bot) {
  let ready = false;
  bot.on("messagestr", async (msg) => {
    if (msg.endsWith("go activate")) ready = true;
  });
  bot.on("entityMoved", (entity) => {
    if (entity.name == "player" && bot.target == undefined && ready) {
      bot.target = entity;
      const messages = [
        "I'm coming for ya " + entity.username,
        "This town ain't big enough for the both of us, " + entity.username,
        "You lookin' at me, " + entity.username + "?",
        "Hey " + entity.username + ", wanna fight?",
        "You can't hide from me, " + entity.username + "!",
        "Prepare yourself, " + entity.username + "!",
        "Initiating smackage on " + entity.username,
        "How dare you enter this arena " + entity.username + "?!",
      ];
      bot.chat(messages[Math.floor(Math.random() * messages.length)]!);
    }
  });
  bot.on("entityGone", (entity) => {
    if (entity == bot.target) {
      bot.target = undefined;
      bot.chat("gottem");
    }
  });
}
