export default function (bot: Bot) {
  bot.on("spawn", () => bot.chat("/login felixbot"));
}
