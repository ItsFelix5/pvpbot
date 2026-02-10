import mineflayer from "mineflayer";

declare global {
  interface Bot extends mineflayer.Bot {
    attackSpeed: number;
  }
}
