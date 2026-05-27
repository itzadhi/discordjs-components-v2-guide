import { REST, Routes } from "discord.js";
import { config } from "./config.js";
import { commands } from "./runtime/registry.js";

const rest = new REST({ version: "10" }).setToken(config.DISCORD_TOKEN);
const body = commands.map((command) => command.data.toJSON());

if (config.DISCORD_GUILD_ID) {
  await rest.put(Routes.applicationGuildCommands(config.DISCORD_CLIENT_ID, config.DISCORD_GUILD_ID), { body });
} else {
  await rest.put(Routes.applicationCommands(config.DISCORD_CLIENT_ID), { body });
}

console.log(`Registered ${body.length} application commands.`);
