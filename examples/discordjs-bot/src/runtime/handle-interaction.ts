import type { Interaction } from "discord.js";
import { commandMap } from "./registry.js";
import { parseCustomId } from "./custom-id.js";
import { handleTicketComponent } from "../projects/ticket-system.js";
import { handleVerificationComponent } from "../projects/verification-system.js";
import { handleMusicComponent } from "../projects/music-controls.js";

export async function handleInteraction(interaction: Interaction) {
  if (interaction.isChatInputCommand()) {
    const command = commandMap.get(interaction.commandName);
    if (!command) return;
    await command.execute(interaction);
    return;
  }

  if (interaction.isButton() || interaction.isStringSelectMenu() || interaction.isModalSubmit()) {
    const route = parseCustomId(interaction.customId);
    if (route.namespace === "ticket") return handleTicketComponent(interaction, route);
    if (route.namespace === "verify") return handleVerificationComponent(interaction, route);
    if (route.namespace === "music" && interaction.isButton()) return handleMusicComponent(interaction, route);
  }
}
