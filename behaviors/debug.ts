// logging

export default function (bot: Bot) {
  bot.on("messagestr", (msg) => console.log(msg));
  bot.on("kicked", (reason) => console.warn("kicked", reason));
  bot.on("error", (e) => console.error(e.message));
}
