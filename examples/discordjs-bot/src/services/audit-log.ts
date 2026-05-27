export type AuditEntry = {
  guildId: string;
  userId: string;
  action: string;
  metadata?: Record<string, string | number | boolean | null>;
};

export async function writeAuditLog(entry: AuditEntry) {
  console.log(JSON.stringify({ level: "info", type: "audit", ...entry }));
}
