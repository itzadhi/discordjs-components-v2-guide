import { encodeCustomId } from "../runtime/custom-id.js";

const balances = new Map<string, number>();

export async function getWalletSummary(userId: string) {
  return {
    balance: balances.get(userId) ?? 0,
    cooldown: "ready",
    customId: encodeCustomId({ namespace: "economy", action: "daily", entityId: userId })
  };
}

export async function addCoins(userId: string, amount: number) {
  const next = (balances.get(userId) ?? 0) + amount;
  balances.set(userId, next);
  return next;
}
