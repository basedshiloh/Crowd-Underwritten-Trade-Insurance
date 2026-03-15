/**
 * Agent: parse user message → create coverage request → post for underwriters.
 *
 * Example:
 *   User: "I want to insure a 3 SOL trade on TOKENX"
 *   Agent: posts request (Coverage: 3 SOL, Duration: 12h, Premium: 0.1 SOL)
 */

import { parseCoverageIntent, buildCoverageRequest } from "./parse-request.js";
import { postRequest, listOpenRequests } from "./post-request.js";
import { getRequiredHoldPercentForCoverage, type CoverageRequest } from "../types/coverage.js";

export { parseCoverageIntent, buildCoverageRequest, postRequest, listOpenRequests };
export type { CoverageRequest };

/** Generate a simple unique id (replace with UUID or chain-based id) */
function nextId(): string {
  return `req_${Date.now()}_${Math.random().toString(36).slice(2, 9)}`;
}

/**
 * Handle user message: try to parse as coverage request and post it.
 * @param marketCapAtPlacement - Token market cap when insurance is placed (set when coverage goes active, or from oracle at creation).
 */
export function handleUserMessage(
  text: string,
  requester: string,
  marketCapAtPlacement: number = 0
): { success: true; request: CoverageRequest } | { success: false; reason: string } {
  const intent = parseCoverageIntent(text);
  if (!intent) {
    return { success: false, reason: "Could not parse coverage request. Try: 'Insure 3 SOL on TOKENX'" };
  }

  const request = buildCoverageRequest(intent, requester, nextId(), marketCapAtPlacement);
  const result = postRequest(request);

  if (!result.ok) {
    return { success: false, reason: result.error };
  }
  return { success: true, request: result.request };
}

/**
 * Format a posted request for display to underwriters.
 * To participate you must hold ≥ tier % of governance token supply; underwriting is in SOL.
 */
export function formatRequestForUnderwriters(req: CoverageRequest): string {
  const requiredHoldPercent = getRequiredHoldPercentForCoverage(req.coverageAmountSol);
  return [
    "📋 **New coverage request**",
    `Coverage: ${req.coverageAmountSol} SOL`,
    `Token: ${req.tokenMint}`,
    `Duration: ${req.durationHours} hours`,
    `Premium: ${req.premiumSol} SOL`,
    `Survival: market cap must stay ≥ ${req.survivalThresholdPercent}% of placement (${req.marketCapAtPlacement})`,
    `Request ID: \`${req.id}\``,
    `To insure/underwrite: hold ≥ ${requiredHoldPercent}% of token supply. Stake SOL to underwrite.`,
  ].join("\n");
}
