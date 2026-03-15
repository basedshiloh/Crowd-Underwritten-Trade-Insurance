/**
 * Crowd-underwritten trade insurance — shared types
 */

export type RequestStatus =
  | "open"      // Accepting underwriter stakes
  | "active"    // Coverage period started
  | "resolved"  // Outcome decided
  ;

export type Outcome = "survived" | "rugged";

/** A coverage request from a trader */
export interface CoverageRequest {
  id: string;
  /** Token/mint to insure the trade against (e.g. TOKENX) */
  tokenMint: string;
  /** Coverage amount in SOL (or smallest unit) */
  coverageAmountSol: number;
  /** Duration of coverage in hours */
  durationHours: number;
  /** Premium in SOL paid by trader to underwriters if token survives */
  premiumSol: number;
  status: RequestStatus;
  /** When the coverage period ends (or started for active) */
  expiresAt: string; // ISO
  createdAt: string;
  /** Trader wallet (or agent identifier) */
  requester: string;
  /**
   * Market cap of the token when insurance was placed (same unit as currentMarketCap, e.g. SOL or USD).
   * Used to decide survived vs rugged: current market cap must be above survivalThresholdPercent of this.
   */
  marketCapAtPlacement: number;
  /**
   * Survival threshold as a percentage (0–100). If token market cap at resolution is >= this % of
   * marketCapAtPlacement → "survived". Otherwise → "rugged".
   * Example: 80 means "must stay above 80% of placement market cap".
   */
  survivalThresholdPercent: number;
}

/** A single underwriter's stake against a request (in SOL) */
export interface UnderwriterStake {
  id: string;
  requestId: string;
  /** Underwriter wallet */
  underwriter: string;
  /** Amount staked in SOL (this backs the coverage; not the governance token) */
  amountStakedSol: number;
  /** When they staked */
  stakedAt: string;
}

/**
 * Tier: to insure or underwrite up to maxCoverageSol, you must hold at least
 * requiredHoldPercentOfSupply of the governance token (e.g. INSURE) — you don't stake the token, you just hold it.
 */
export interface ParticipationTier {
  /** Max coverage (SOL) this tier allows */
  maxCoverageSol: number;
  /** Required hold: % of token total supply (e.g. 0.1 = 0.1%) */
  requiredHoldPercentOfSupply: number;
}

/** Default tiers: e.g. 1 SOL → 0.1%, 5 SOL → 0.2%, 10 SOL → 0.3%, etc. */
export const DEFAULT_TIERS: ParticipationTier[] = [
  { maxCoverageSol: 1, requiredHoldPercentOfSupply: 0.1 },
  { maxCoverageSol: 5, requiredHoldPercentOfSupply: 0.2 },
  { maxCoverageSol: 10, requiredHoldPercentOfSupply: 0.3 },
  { maxCoverageSol: 25, requiredHoldPercentOfSupply: 0.5 },
  { maxCoverageSol: 50, requiredHoldPercentOfSupply: 1 },
  { maxCoverageSol: 100, requiredHoldPercentOfSupply: 2 },
];

/**
 * Required hold (% of token supply) to insure or underwrite a given coverage amount (SOL).
 * Uses the smallest tier that covers coverageSol; tiers should be sorted by maxCoverageSol ascending.
 */
export function getRequiredHoldPercentForCoverage(
  coverageSol: number,
  tiers: ParticipationTier[] = DEFAULT_TIERS
): number {
  const sorted = [...tiers].sort((a, b) => a.maxCoverageSol - b.maxCoverageSol);
  const tier = sorted.find((t) => t.maxCoverageSol >= coverageSol);
  return tier ? tier.requiredHoldPercentOfSupply : sorted[sorted.length - 1]!.requiredHoldPercentOfSupply;
}

/**
 * Whether a user can participate (insure or underwrite) at this coverage level.
 * They must hold at least the tier's % of total token supply (held in wallet, not staked).
 */
export function canParticipate(
  userHoldPercentOfSupply: number,
  coverageSol: number,
  tiers: ParticipationTier[] = DEFAULT_TIERS
): boolean {
  const required = getRequiredHoldPercentForCoverage(coverageSol, tiers);
  return userHoldPercentOfSupply >= required;
}

/** Resolved request: who gets premium vs who pays coverage */
export interface Resolution {
  requestId: string;
  outcome: Outcome;
  resolvedAt: string;
  /** Premium distributed to underwriters (when survived) */
  premiumDistributed?: boolean;
  /** Coverage paid to trader from staked collateral (when rugged) */
  coveragePaid?: boolean;
}

/**
 * Determine outcome from market cap at resolution vs placement.
 * Survived = current market cap is at or above threshold % of placement market cap; else rugged.
 */
export function resolveByMarketCap(
  marketCapAtPlacement: number,
  currentMarketCap: number,
  survivalThresholdPercent: number
): Outcome {
  if (marketCapAtPlacement <= 0) return "rugged";
  const threshold = (survivalThresholdPercent / 100) * marketCapAtPlacement;
  return currentMarketCap >= threshold ? "survived" : "rugged";
}
