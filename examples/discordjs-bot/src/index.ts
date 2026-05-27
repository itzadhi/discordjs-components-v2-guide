import { Client, Events, GatewayIntentBits } from "discord.js";
import { config } from "./config.js";
import { handleInteraction } from "./runtime/handle-interaction.js";

const client = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMembers, GatewayIntentBits.GuildVoiceStates]
});

client.once(Events.ClientReady, (readyClient) => {
  console.log(`Logged in as ${readyClient.user.tag}`);
});

client.on(Events.InteractionCreate, handleInteraction);

await client.login(config.DISCORD_TOKEN);
