/**
 * Parse natural-language coverage requests into structured CoverageRequest.
 * Example: "I want to insure a 3 SOL trade on TOKENX" → { coverageAmountSol: 3, tokenMint: "TOKENX", ... }
 */

import type { CoverageRequest } from "../types/coverage.js";

const DEFAULT_DURATION_HOURS = 12;
const DEFAULT_PREMIUM_RATE = 0.1; // e.g. 0.1 SOL per 3 SOL coverage

export interface ParsedIntent {
  coverageAmountSol: number;
  tokenMintOrSymbol: string;
  durationHours?: number;
  premiumSol?: number;
}

/**
 * Simple regex-based parser for phrases like:
 * - "insure 3 SOL on TOKENX"
 * - "I want to insure a 3 SOL trade on TOKENX"
 * - "3 SOL coverage for TOKENX, 12 hours"
 */
export function parseCoverageIntent(text: string): ParsedIntent | null {
  const normalized = text.trim().toLowerCase();

  // Match: (number) SOL ... (on|for) TOKEN
  const solMatch = normalized.match(/(\d+(?:\.\d+)?)\s*sol\b/);
  const tokenMatch = normalized.match(/(?:on|for)\s+([a-z0-9_]+)/i)
    || normalized.match(/\b([A-Z][A-Z0-9]{2,})\b/); // e.g. TOKENX

  if (!solMatch || !tokenMatch) return null;

  const coverageAmountSol = parseFloat(solMatch[1]);
  const tokenMintOrSymbol = tokenMatch[1].toUpperCase();

  let durationHours = DEFAULT_DURATION_HOURS;
  const durationMatch = normalized.match(/(\d+)\s*hours?/);
  if (durationMatch) durationHours = parseInt(durationMatch[1], 10);

  let premiumSol = Math.min(coverageAmountSol * 0.05, DEFAULT_PREMIUM_RATE);
  const premiumMatch = normalized.match(/premium[:\s]+(\d+(?:\.\d+)?)\s*sol/);
  if (premiumMatch) premiumSol = parseFloat(premiumMatch[1]);

  return {
    coverageAmountSol,
    tokenMintOrSymbol,
    durationHours,
    premiumSol,
  };
}

/**
 * Build a CoverageRequest from parsed intent and IDs.
 */
export function buildCoverageRequest(
  intent: ParsedIntent,
  requester: string,
  requestId: string
): CoverageRequest {
  const now = new Date();
  const durationMs = (intent.durationHours ?? DEFAULT_DURATION_HOURS) * 60 * 60 * 1000;
  const expiresAt = new Date(now.getTime() + durationMs);

  return {
    id: requestId,
    tokenMint: intent.tokenMintOrSymbol,
    coverageAmountSol: intent.coverageAmountSol,
    durationHours: intent.durationHours ?? DEFAULT_DURATION_HOURS,
    premiumSol: intent.premiumSol ?? intent.coverageAmountSol * 0.05,
    status: "open",
    expiresAt: expiresAt.toISOString(),
    createdAt: now.toISOString(),
    requester,
  };
}
