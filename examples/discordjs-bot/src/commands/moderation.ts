import { SlashCommandBuilder, type ChatInputCommandInteraction } from "discord.js";
import { createModerationCase } from "../projects/moderation-system.js";

export const moderationCommand = {
  data: new SlashCommandBuilder()
    .setName("moderation-case")
    .setDescription("Create a moderation case safely")
    .addUserOption((option) => option.setName("user").setDescription("User to record").setRequired(true))
    .addStringOption((option) => option.setName("reason").setDescription("Reason").setRequired(true)),
  async execute(interaction: ChatInputCommandInteraction) {
    const user = interaction.options.getUser("user", true);
    const reason = interaction.options.getString("reason", true);
    const result = await createModerationCase({
      guildId: interaction.guildId ?? "dm",
      moderatorId: interaction.user.id,
      targetId: user.id,
      reason
    });
    await interaction.reply({ content: `Created case ${result.caseId}.`, ephemeral: true });
  }
};
