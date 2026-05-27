import { encodeCustomId } from "../runtime/custom-id.js";

export function buildAssistantRequest(input: { guildId: string; userId: string; prompt: string }) {
  return {
    customId: encodeCustomId({ namespace: "ai", action: "ask", entityId: input.userId }),
    safePrompt: input.prompt.slice(0, 1800),
    privacyNote: "Do not store raw private messages unless the guild explicitly configured logging.",
    guildId: input.guildId
  };
}
