import type { CoverageRequest, UnderwriterStake } from '@/lib/coverage';
import { resolveByMarketCap } from '@/lib/coverage';

const DEFAULT_SURVIVAL_THRESHOLD_PERCENT = 80;

const requestsStore = new Map<string, CoverageRequest>();
const stakesStore = new Map<string, UnderwriterStake[]>();

function nextRequestId(): string {
  return `req_${Date.now()}_${Math.random().toString(36).slice(2, 9)}`;
}

export interface CreateCoverageInput {
  coverageAmountSol: number;
  tokenMint: string;
  durationHours: number;
  premiumSol?: number;
  survivalThresholdPercent?: number;
  requester: string;
  marketCapAtPlacement: number;
}

export function createCoverageRequest(
  input: CreateCoverageInput
): { ok: true; request: CoverageRequest } | { ok: false; error: string } {
  const now = new Date();
  const durationMs = input.durationHours * 60 * 60 * 1000;
  const expiresAt = new Date(now.getTime() + durationMs);
  const id = nextRequestId();
  const premiumSol = input.premiumSol ?? Math.min(input.coverageAmountSol * 0.05, 0.1);
  const survivalThresholdPercent = input.survivalThresholdPercent ?? DEFAULT_SURVIVAL_THRESHOLD_PERCENT;

  const request: CoverageRequest = {
    id,
    tokenMint: input.tokenMint.toUpperCase(),
    coverageAmountSol: input.coverageAmountSol,
    durationHours: input.durationHours,
    premiumSol,
    status: 'open',
    expiresAt: expiresAt.toISOString(),
    createdAt: now.toISOString(),
    requester: input.requester,
    marketCapAtPlacement: input.marketCapAtPlacement,
    survivalThresholdPercent,
  };

  requestsStore.set(id, request);
  return { ok: true, request };
}

export function listOpenRequests(): CoverageRequest[] {
  return Array.from(requestsStore.values()).filter((r) => r.status === 'open');
}

export function listAllRequests(): CoverageRequest[] {
  return Array.from(requestsStore.values()).sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );
}

export function getRequestsByRequester(requester: string): CoverageRequest[] {
  return listAllRequests().filter((r) => r.requester === requester);
}

export function getRequestsUnderwrittenBy(underwriter: string): CoverageRequest[] {
  const requestIds = new Set<string>();
  for (const [reqId, stakes] of stakesStore) {
    if (stakes.some((s) => s.underwriter === underwriter)) requestIds.add(reqId);
  }
  return listAllRequests().filter((r) => requestIds.has(r.id));
}

export function getStakeForRequest(underwriter: string, requestId: string): UnderwriterStake | undefined {
  return getStakes(requestId).find((s) => s.underwriter === underwriter);
}

export function resolveRequest(
  requestId: string,
  currentMarketCap: number
): { ok: true; outcome: 'survived' | 'rugged' } | { ok: false; error: string } {
  const request = requestsStore.get(requestId);
  if (!request) return { ok: false, error: 'Request not found' };
  if (request.status === 'resolved') return { ok: false, error: 'Already resolved' };
  const outcome = resolveByMarketCap(
    request.marketCapAtPlacement,
    currentMarketCap,
    request.survivalThresholdPercent
  );
  const now = new Date().toISOString();
  request.status = 'resolved';
  request.outcome = outcome;
  request.resolvedAt = now;
  return { ok: true, outcome };
}

export function getRequest(id: string): CoverageRequest | undefined {
  return requestsStore.get(id);
}

export function getStakes(requestId: string): UnderwriterStake[] {
  return stakesStore.get(requestId) ?? [];
}

export function totalStakedSol(requestId: string): number {
  return getStakes(requestId).reduce((sum, s) => sum + s.amountStakedSol, 0);
}

export function addUnderwriterStake(
  requestId: string,
  underwriter: string,
  amountStakedSol: number
): { ok: true; stake: UnderwriterStake } | { ok: false; error: string } {
  const request = requestsStore.get(requestId);
  if (!request) return { ok: false, error: 'Request not found' };
  if (request.status !== 'open') return { ok: false, error: 'Request is not open for underwriting' };

  const list = stakesStore.get(requestId) ?? [];
  const existing = list.find((s) => s.underwriter === underwriter);
  const stake: UnderwriterStake = {
    id: `stake_${Date.now()}_${underwriter.slice(0, 8)}`,
    requestId,
    underwriter,
    amountStakedSol,
    stakedAt: new Date().toISOString(),
  };
  if (existing) {
    existing.amountStakedSol += amountStakedSol;
  } else {
    list.push(stake);
  }
  stakesStore.set(requestId, list);
  return { ok: true, stake };
}
