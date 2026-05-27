import { SlashCommandBuilder, type ChatInputCommandInteraction } from "discord.js";
import { getWalletSummary } from "../projects/economy-system.js";

export const economyCommand = {
  data: new SlashCommandBuilder().setName("wallet").setDescription("Show your wallet safely"),
  async execute(interaction: ChatInputCommandInteraction) {
    const wallet = await getWalletSummary(interaction.user.id);
    await interaction.reply({
      content: `Balance: ${wallet.balance} coins. Daily cooldown: ${wallet.cooldown}.`,
      ephemeral: true
    });
  }
};
