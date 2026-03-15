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
}

/** A single underwriter's stake against a request */
export interface UnderwriterStake {
  id: string;
  requestId: string;
  /** Underwriter wallet */
  underwriter: string;
  /** Amount of INSURE (or stake token) staked */
  amountStaked: number;
  /** When they staked */
  stakedAt: string;
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
