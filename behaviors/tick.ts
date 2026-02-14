export default function (bot: Bot) {
  let interval: NodeJS.Timeout;
  bot.on("spawn", () => {
    interval = setInterval(() => {
      bot.emit("physicsTick");
    }, 50);
  });

  return () => clearInterval(interval);
}
