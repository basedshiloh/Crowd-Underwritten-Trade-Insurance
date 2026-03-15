'use server';

import { createCoverageRequest } from '@/lib/agent';
import { getRequiredHoldPercentForCoverage } from '@/lib/coverage';

export type CreateCoverageState =
  | { ok: true; requestId: string; requiredHoldPercent: number }
  | { ok: false; error: string };

export async function createCoverageAction(
  _prev: CreateCoverageState | null,
  formData: FormData
): Promise<CreateCoverageState> {
  const coverageAmountSol = Number(formData.get('coverageAmountSol'));
  const tokenMint = String(formData.get('tokenMint') ?? '').trim();
  const durationHours = Number(formData.get('durationHours')) || 12;
  const premiumSol = formData.get('premiumSol') ? Number(formData.get('premiumSol')) : undefined;
  const marketCapAtPlacement = Number(formData.get('marketCapAtPlacement')) || 0;
  const requester = String(formData.get('requester') ?? 'anon');

  if (!tokenMint || coverageAmountSol <= 0) {
    return { ok: false, error: 'Token and coverage (SOL) are required.' };
  }

  const result = createCoverageRequest({
    coverageAmountSol,
    tokenMint,
    durationHours,
    premiumSol,
    requester,
    marketCapAtPlacement,
  });

  if (!result.ok) return { ok: false, error: result.error };

  const requiredHoldPercent = getRequiredHoldPercentForCoverage(result.request.coverageAmountSol);
  return { ok: true, requestId: result.request.id, requiredHoldPercent };
}
