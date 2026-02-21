# *Felixs epic minecraft pvp bot that smacks you with a mace*, (DBA "MaceyMcMaceface")
Official winner of The Bot Leagues of Hack Club :D

This bot based on mineflayer reads and hot reloads all files in ./behaviors and uses these to:
1) Find a target (player) once someone says "go activate"
2) move 60 blocks above them (at 5 blocks/tick, could be 10 but that requires syncing server and client ticks)
3) Fall down and smack the target with a mace
4) Repeat until the target is dead (it should be on first hit, even with full prot 4 and egaps)
5) Incase health drops below 8 hearts, stay atleast 100 blocks above the target, gapple and wait for health to regen
6) Prevent fly kicking by moving down very slightly every few ticks

### Usage:
Make sure you have bun installed
Download the project
Change the server ip in index.ts (it is currently set to the bot fight server)
Run bun index.ts

###### Yes I linked the readme as a demo. Idk what else I can do, sorry shipwrights :P
