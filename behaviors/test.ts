export default function (bot: Bot) {
  bot.on("messagestr", async (msg) => {
    if (msg.endsWith("attack")) bot.attack(bot.nearestEntity()!);
    if (msg.endsWith("ping")) bot.chat("pong");
    if (msg.endsWith("target")) bot.chat(bot.target?.username ?? "none");
    // if (msg.endsWith("slam")) {
    //   bot.entity.position.y += 10;
    //   await bot.moveTo(bot.target!.position.offset(0, 35, 0));
    //   await bot.moveTo(bot.target!.position);
    //   bot.attack(bot.nearestEntity()!);
    // }
    // if (msg.endsWith("use")) {
    //   bot.activateItem(true);
    // }
    // if (msg.endsWith("crystal")) {
    //   const obsidian = bot.findBlock({ matching: (b) => b.name == "obsidian" });
    //   if (obsidian) {
    //     bot._client.write("block_place", {
    //       hand: 0,
    //       location: obsidian.position.offset(0, 1, 0),
    //       direction: 1,
    //       cursorX: 0.5,
    //       cursorY: 1,
    //       cursorZ: 0.5,
    //       insideBlock: false,
    //       worldBorderHit: false,
    //       sequence: 0,
    //     });
    //   }
    // }
  });
}
