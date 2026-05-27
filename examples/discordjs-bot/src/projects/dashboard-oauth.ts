import { encodeCustomId } from "../runtime/custom-id.js";

export function buildDashboardConfirmation(guildId: string) {
  return {
    customId: encodeCustomId({ namespace: "dashboard", action: "confirm", entityId: guildId }),
    oauthScopes: ["identify", "guilds"],
    stateKey: `dashboard:${guildId}`
  };
}
