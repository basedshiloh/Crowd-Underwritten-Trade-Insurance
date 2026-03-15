/**
 * Crowd-underwritten trade insurance — types and resolution logic.
 */

export type RequestStatus = 'open' | 'active' | 'resolved';

export type Outcome = 'survived' | 'rugged';

export interface CoverageRequest {
  id: string;
  tokenMint: string;
  coverageAmountSol: number;
  durationHours: number;
  premiumSol: number;
  status: RequestStatus;
  expiresAt: string;
  createdAt: string;
  requester: string;
  marketCapAtPlacement: number;
  survivalThresholdPercent: number;
}

export interface UnderwriterStake {
  id: string;
  requestId: string;
  underwriter: string;
  amountStakedSol: number;
  stakedAt: string;
}

export interface ParticipationTier {
  maxCoverageSol: number;
  requiredHoldPercentOfSupply: number;
}

export const DEFAULT_TIERS: ParticipationTier[] = [
  { maxCoverageSol: 1, requiredHoldPercentOfSupply: 0.1 },
  { maxCoverageSol: 5, requiredHoldPercentOfSupply: 0.2 },
  { maxCoverageSol: 10, requiredHoldPercentOfSupply: 0.3 },
  { maxCoverageSol: 25, requiredHoldPercentOfSupply: 0.5 },
  { maxCoverageSol: 50, requiredHoldPercentOfSupply: 1 },
  { maxCoverageSol: 100, requiredHoldPercentOfSupply: 2 },
];

export function getRequiredHoldPercentForCoverage(
  coverageSol: number,
  tiers: ParticipationTier[] = DEFAULT_TIERS
): number {
  const sorted = [...tiers].sort((a, b) => a.maxCoverageSol - b.maxCoverageSol);
  const tier = sorted.find((t) => t.maxCoverageSol >= coverageSol);
  return tier ? tier.requiredHoldPercentOfSupply : sorted[sorted.length - 1]!.requiredHoldPercentOfSupply;
}

export function canParticipate(
  userHoldPercentOfSupply: number,
  coverageSol: number,
  tiers: ParticipationTier[] = DEFAULT_TIERS
): boolean {
  const required = getRequiredHoldPercentForCoverage(coverageSol, tiers);
  return userHoldPercentOfSupply >= required;
}

export interface Resolution {
  requestId: string;
  outcome: Outcome;
  resolvedAt: string;
  premiumDistributed?: boolean;
  coveragePaid?: boolean;
}

export function resolveByMarketCap(
  marketCapAtPlacement: number,
  currentMarketCap: number,
  survivalThresholdPercent: number
): Outcome {
  if (marketCapAtPlacement <= 0) return 'rugged';
  const threshold = (survivalThresholdPercent / 100) * marketCapAtPlacement;
  return currentMarketCap >= threshold ? 'survived' : 'rugged';
}
