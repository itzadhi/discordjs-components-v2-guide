import { encodeCustomId } from "../runtime/custom-id.js";
import { writeAuditLog } from "../services/audit-log.js";

export async function createModerationCase(input: {
  guildId: string;
  moderatorId: string;
  targetId: string;
  reason: string;
}) {
  const caseId = `case_${Date.now()}`;
  await writeAuditLog({
    guildId: input.guildId,
    userId: input.moderatorId,
    action: "moderation.case.create",
    metadata: { caseId, targetId: input.targetId }
  });
  return {
    caseId,
    customId: encodeCustomId({ namespace: "moderation", action: "review", entityId: caseId }),
    auditChannelMessage: `Case ${caseId}: ${input.reason}`
  };
}
