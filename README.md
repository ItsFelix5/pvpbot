# *Felixs epic minecraft pvp bot that smacks you with a mace*, (DBA "MaceyMcMaceface")
Official winner of The Bot Leagues of Hack Club :D

This bot based on mineflayer reads and hot reloads all files in ./behaviors and uses these to:
* Find a target (player) once someone says "go activate"
* move 60 blocks above them (at 5 blocks/tick, could be 10 but that requires syncing server and client ticks)
* Fall down and smack the target with a mace
* Repeat until the target is dead (it should be on first hit, even with full prot 4 and egaps)
* Incase health drops below 8 hearts, stay atleast 100 blocks above the target, gapple and wait for health to regen
* Prevent fly kicking by moving down very slightly every few ticks

### Usage:
1) Make sure you have bun installed
2) Download the project
3) Change the server ip in index.ts on line 10 (it is currently set to the bot fight server)
4) Run bun index.ts
5) Give it a mace and optionally egaps
6) Say "go activate" in chat

*Make sure your server is on 1.21.4 or uses viaversion/viabackwards*
*The server must be in offline mode for the bot to be able to connect*
