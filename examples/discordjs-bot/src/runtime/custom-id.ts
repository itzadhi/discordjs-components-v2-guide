export type CustomId = {
  namespace: string;
  action: string;
  entityId?: string;
};

export function encodeCustomId(input: CustomId) {
  return [input.namespace, input.action, input.entityId].filter(Boolean).join(":").slice(0, 100);
}

export function parseCustomId(customId: string): CustomId {
  const [namespace = "", action = "", entityId] = customId.split(":");
  return { namespace, action, entityId };
}
