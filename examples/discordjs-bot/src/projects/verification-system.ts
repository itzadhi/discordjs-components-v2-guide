import type { ButtonInteraction, ModalSubmitInteraction, StringSelectMenuInteraction } from "discord.js";
import type { CustomId } from "../runtime/custom-id.js";
import { encodeCustomId } from "../runtime/custom-id.js";

type VerificationInteraction = ButtonInteraction | StringSelectMenuInteraction | ModalSubmitInteraction;

export const verificationButtonId = encodeCustomId({ namespace: "verify", action: "start" });

export async function handleVerificationComponent(interaction: VerificationInteraction, route: CustomId) {
  if (route.action !== "start") {
    await interaction.reply({ content: "Unknown verification step.", ephemeral: true });
    return;
  }
  await interaction.reply({
    content: "Verification passed. A production bot would assign the configured role here.",
    ephemeral: true
  });
}
