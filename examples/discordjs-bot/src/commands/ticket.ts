import {
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
  SlashCommandBuilder,
  type ChatInputCommandInteraction
} from "discord.js";
import { encodeCustomId } from "../runtime/custom-id.js";

export const ticketCommand = {
  data: new SlashCommandBuilder().setName("ticket-panel").setDescription("Create a modern ticket panel"),
  async execute(interaction: ChatInputCommandInteraction) {
    const row = new ActionRowBuilder<ButtonBuilder>().addComponents(
      new ButtonBuilder()
        .setCustomId(encodeCustomId({ namespace: "ticket", action: "open" }))
        .setLabel("Open ticket")
        .setStyle(ButtonStyle.Primary)
    );
    await interaction.reply({
      content: "Use the button to open a guided ticket flow.",
      components: [row],
      ephemeral: true
    });
  }
};
