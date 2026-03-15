"use server";

import { addUnderwriterStake, getRequest } from "@/lib/agent";
import { canParticipate } from "@/lib/coverage";

export type UnderwriteState = { ok: true } | { ok: false; error: string };

export async function underwriteAction(_prev: UnderwriteState | null, formData: FormData): Promise<UnderwriteState> {
  const requestId = String(formData.get("requestId") ?? "").trim();
  const underwriter = String(formData.get("underwriter") ?? "anon").trim();
  const amountStakedSol = Number(formData.get("amountStakedSol"));
  const userHoldPercentOfSupply = Number(formData.get("userHoldPercentOfSupply"));

  if (!requestId || amountStakedSol <= 0) {
    return { ok: false, error: "Request ID and stake amount (SOL) are required." };
  }

  const request = getRequest(requestId);
  if (!request) return { ok: false, error: "Request not found." };
  const allowed = canParticipate(userHoldPercentOfSupply, request.coverageAmountSol);
  if (!allowed) {
    return { ok: false, error: "Your token hold % is below the tier required to underwrite this coverage size." };
  }

  const result = addUnderwriterStake(requestId, underwriter, amountStakedSol);
  if (!result.ok) return { ok: false, error: result.error };
  return { ok: true };
}
