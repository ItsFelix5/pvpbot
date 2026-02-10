export default function (bot: Bot) {
  const interval = setInterval(() => {
    if (!bot.entity.onGround)
      bot._client.write("position", {
        x: bot.entity.position.x,
        y: bot.entity.position.y - 0.0313,
        z: bot.entity.position.z,
        flags: { onGround: true },
      });
  }, 2000);
  return () => clearInterval(interval);
}
