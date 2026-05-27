import { ticketCommand } from "../commands/ticket.js";
import { moderationCommand } from "../commands/moderation.js";
import { economyCommand } from "../commands/economy.js";

export const commands = [ticketCommand, moderationCommand, economyCommand];
export const commandMap = new Map(commands.map((command) => [command.data.name, command]));
