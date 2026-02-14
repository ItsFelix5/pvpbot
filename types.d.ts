import mineflayer from "mineflayer";
import { Entity } from "prismarine-entity";
import { Vec3 } from "vec3";
import TypedEmitter from "typed-emitter";

declare global {
  interface Bot extends mineflayer.Bot {
    attackSpeed: number;
    target: Entity | undefined;
    moveTo(pos: Vec3): Promise<void>;
    moving: boolean;
  }
}
