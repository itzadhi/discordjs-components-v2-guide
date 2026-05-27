import { PermissionFlagsBits, type GuildMember, type Interaction } from "discord.js";

export function isGuildManager(interaction: Interaction) {
  if (!interaction.inCachedGuild()) return false;
  const member = interaction.member as GuildMember;
  return member.permissions.has(PermissionFlagsBits.ManageGuild);
}
