export default function (bot: Bot) {
  function packet(data: any, { name }: { name: string }) {
    if (
      ![
        "update_time",
        "keep_alive",
        "sync_entity_position",
        "rel_entity_move",
        "entity_look",
        "entity_move_look",
        "entity_head_rotation",
        "player_chat",
        "block_change",
        "player_info",
        "sound_effect",
        "tracked_waypoint",
        "map_chunk",
        "system_chat",
        "bundle_delimiter",
        "spawn_entity",
        "entity_metadata",
        "entity_velocity",
        "entity_update_attributes",
        "entity_equipment",
        "declare_commands",
        "experience",
        "advancements",
        "window_items",
        "declare_recipes",
        "registry_data",
        "animation",
        "position",
        "tags",
        "game_state_change",
        "world_particles",
        "update_light",
        "unload_chunk",
        "update_view_position",
        "entity_effect",
        "multi_block_change",
        "hurt_animation",
        "damage_event",
        "block_break_animation",
        "remove_entity_effect",
        "collect",
      ].includes(name)
    )
      console.log(name, data);
  }
  bot.on("messagestr", (msg) => console.log(msg));
  bot.on("kicked", (reason) => console.warn("kicked", reason));
  bot.on("error", (e) => console.error(e.message));

  //bot._client.on("packet", packet);
  //return () => bot._client.off("packet", packet);
}
