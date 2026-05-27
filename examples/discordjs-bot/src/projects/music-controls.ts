import type { ButtonInteraction } from "discord.js";
import type { CustomId } from "../runtime/custom-id.js";
import { encodeCustomId } from "../runtime/custom-id.js";

export const musicControls = {
  pause: encodeCustomId({ namespace: "music", action: "pause" }),
  resume: encodeCustomId({ namespace: "music", action: "resume" }),
  skip: encodeCustomId({ namespace: "music", action: "skip" })
};

export async function handleMusicComponent(interaction: ButtonInteraction, route: CustomId) {
  await interaction.reply({ content: `Music action queued: ${route.action}`, ephemeral: true });
}
