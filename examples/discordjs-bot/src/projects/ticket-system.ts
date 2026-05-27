import {
  ActionRowBuilder,
  ModalBuilder,
  TextInputBuilder,
  TextInputStyle,
  type ButtonInteraction,
  type ModalSubmitInteraction,
  type StringSelectMenuInteraction
} from "discord.js";
import type { CustomId } from "../runtime/custom-id.js";

type TicketInteraction = ButtonInteraction | StringSelectMenuInteraction | ModalSubmitInteraction;

export async function handleTicketComponent(interaction: TicketInteraction, route: CustomId) {
  if (route.action === "open" && interaction.isButton()) {
    const modal = new ModalBuilder()
      .setCustomId("ticket:submit")
      .setTitle("Open a ticket")
      .addComponents(
        new ActionRowBuilder<TextInputBuilder>().addComponents(
          new TextInputBuilder()
            .setCustomId("summary")
            .setLabel("What do you need?")
            .setStyle(TextInputStyle.Paragraph)
            .setRequired(true)
        )
      );
    await interaction.showModal(modal);
    return;
  }

  if (route.action === "submit" && interaction.isModalSubmit()) {
    const summary = interaction.fields.getTextInputValue("summary");
    await interaction.reply({ content: `Ticket received: ${summary.slice(0, 120)}`, ephemeral: true });
  }
}
