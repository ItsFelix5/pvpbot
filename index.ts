import mineflayer from "mineflayer";
import { watch, readdir } from "fs";

let bot: mineflayer.Bot;
let on: mineflayer.Bot["on"];
createBot();
export function createBot() {
  bot = mineflayer.createBot({
    username: "MaceyMcMaceface",
    host: "server.botfights.hackcraft.hackclub.com",
    mainHand: "left",
    physicsEnabled: false,
  });

  on = bot.on.bind(bot);
  readdir("./behaviors", (_err, files) => files.forEach(load));

  bot.on("end", () => void createBot());
  return bot;
}

let logic: Record<string, () => void> = {};
async function load(file: string) {
  logic[file]?.();
  let listeners: { event: any; listener: any }[] = [];
  bot.on = (event, listener) => {
    on(event, listener);
    listeners.push({ event, listener });
    return bot;
  };
  let unload = (
    await import(`./behaviors/${file}?update=${Date.now()}`)
  )?.default?.(bot);
  logic[file] = () => {
    listeners.forEach((listener) => bot.off(listener.event, listener.listener));
    unload?.();
  };
}

let debounce: NodeJS.Timeout;
watch("./behaviors", (event, file) => {
  if (!file) return;
  if (debounce) clearTimeout(debounce);
  debounce = setTimeout(() => {
    console.log("reloading " + file);
    load(file);
  }, 100);
});
