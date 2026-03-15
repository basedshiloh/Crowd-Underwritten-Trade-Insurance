/**
 * Underwriter stakes: who staked how much against which request.
 */

import type { UnderwriterStake } from "./coverage.js";

export type { UnderwriterStake };

/** In-memory store for demo; replace with DB or program accounts */
const stakesByRequest = new Map<string, UnderwriterStake[]>();

export function addStake(stake: UnderwriterStake): void {
  const list = stakesByRequest.get(stake.requestId) ?? [];
  const existing = list.find((s) => s.underwriter === stake.underwriter);
  if (existing) {
    existing.amountStaked += stake.amountStaked;
  } else {
    list.push({ ...stake, id: stake.id || `stake_${Date.now()}_${stake.underwriter.slice(0, 8)}` });
  }
  stakesByRequest.set(stake.requestId, list);
}

export function getStakes(requestId: string): UnderwriterStake[] {
  return stakesByRequest.get(requestId) ?? [];
}

export function totalStaked(requestId: string): number {
  return getStakes(requestId).reduce((sum, s) => sum + s.amountStaked, 0);
}
