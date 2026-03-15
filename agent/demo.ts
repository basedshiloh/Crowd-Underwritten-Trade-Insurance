/**
 * Demo: user says "I want to insure a 3 SOL trade on TOKENX" → agent posts request.
 * Run: npx tsx agent/demo.ts  or  node --experimental-strip-types agent/demo.ts
 */

import { handleUserMessage, formatRequestForUnderwriters, listOpenRequests } from "./index.js";
import { addStake, getStakes, totalStaked } from "../types/stake.js";

// 1. Trader requests coverage
const message = "I want to insure a 3 SOL trade on TOKENX";
console.log("User:", message);

const result = handleUserMessage(message, "trader_wallet_abc");
if (!result.success) {
  console.log("Agent:", result.reason);
  process.exit(1);
}

console.log("\nAgent posts request:\n");
console.log(formatRequestForUnderwriters(result.request));

// 2. Underwriters stake
addStake({
  id: "stake_1",
  requestId: result.request.id,
  underwriter: "alice_wallet",
  amountStaked: 1000,
  stakedAt: new Date().toISOString(),
});
addStake({
  id: "stake_2",
  requestId: result.request.id,
  underwriter: "bob_wallet",
  amountStaked: 500,
  stakedAt: new Date().toISOString(),
});

console.log("\nUnderwriters staked:");
console.log("  Alice: 1000 INSURE");
console.log("  Bob: 500 INSURE");
console.log("  Total staked:", totalStaked(result.request.id), "INSURE");

// 3. Outcome (conceptual)
console.log("\nOutcome (conceptual):");
console.log("  If TOKENX survives → underwriters earn", result.request.premiumSol, "SOL premium");
console.log("  If TOKENX rugs → coverage", result.request.coverageAmountSol, "SOL paid from staked collateral");

console.log("\nOpen requests:", listOpenRequests().length);
