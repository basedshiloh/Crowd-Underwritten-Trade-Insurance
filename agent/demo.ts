/**
 * Demo: user says "I want to insure a 3 SOL trade on TOKENX" → agent posts request.
 * Survival = market cap at resolution must be ≥ threshold % of market cap at placement.
 * Run: npm run demo
 */

import { handleUserMessage, formatRequestForUnderwriters, listOpenRequests } from "./index.js";
import { addStake, totalStakedSol } from "../types/stake.js";
import { resolveByMarketCap, getRequiredHoldPercentForCoverage } from "../types/coverage.js";

// 1. Trader requests coverage (market cap at placement e.g. from oracle when coverage starts)
const message = "I want to insure a 3 SOL trade on TOKENX";
const marketCapAtPlacement = 100_000; // e.g. SOL or USD at placement
console.log("User:", message);

const result = handleUserMessage(message, "trader_wallet_abc", marketCapAtPlacement);
if (!result.success) {
  console.log("Agent:", result.reason);
  process.exit(1);
}

console.log("\nAgent posts request:\n");
console.log(formatRequestForUnderwriters(result.request));

// 2. Underwriters stake SOL (must hold tier % of token supply to participate)
const requiredHold = getRequiredHoldPercentForCoverage(result.request.coverageAmountSol);
console.log("\nTier: to insure/underwrite", result.request.coverageAmountSol, "SOL → must hold ≥", requiredHold + "% of token supply");

addStake({
  id: "stake_1",
  requestId: result.request.id,
  underwriter: "alice_wallet",
  amountStakedSol: 1.5,
  stakedAt: new Date().toISOString(),
});
addStake({
  id: "stake_2",
  requestId: result.request.id,
  underwriter: "bob_wallet",
  amountStakedSol: 1,
  stakedAt: new Date().toISOString(),
});

console.log("\nUnderwriters staked SOL:");
console.log("  Alice: 1.5 SOL");
console.log("  Bob: 1 SOL");
console.log("  Total staked:", totalStakedSol(result.request.id), "SOL");

// 3. Resolution: above threshold % of placement market cap = survived, else rugged
const { marketCapAtPlacement: refMc, survivalThresholdPercent } = result.request;
const currentMarketCapScenario1 = 85_000;  // 85% of 100k → above 80% → survived
const currentMarketCapScenario2 = 50_000; // 50% of 100k → below 80% → rugged
const outcome1 = resolveByMarketCap(refMc, currentMarketCapScenario1, survivalThresholdPercent);
const outcome2 = resolveByMarketCap(refMc, currentMarketCapScenario2, survivalThresholdPercent);

console.log("\nResolution (market cap vs placement):");
console.log("  Placement market cap:", refMc, "| Survival threshold:", survivalThresholdPercent + "%");
console.log("  Current 85k (85% of placement) →", outcome1, "→ underwriters earn premium");
console.log("  Current 50k (50% of placement) →", outcome2, "→ coverage paid from staked SOL");
console.log("\nOpen requests:", listOpenRequests().length);
