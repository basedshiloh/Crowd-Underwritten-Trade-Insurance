/**
 * Post a coverage request so underwriters can see it and stake.
 * Placeholder: append to in-memory / file store; replace with Discord, API, or chain.
 */

import type { CoverageRequest } from "../types/coverage.js";

export type PostResult = { ok: true; request: CoverageRequest } | { ok: false; error: string };

/** In-memory store for demo; replace with DB or API */
const openRequests: Map<string, CoverageRequest> = new Map();

export function postRequest(request: CoverageRequest): PostResult {
  if (openRequests.has(request.id)) {
    return { ok: false, error: "Request ID already exists" };
  }
  openRequests.set(request.id, request);
  return { ok: true, request };
}

export function getRequest(id: string): CoverageRequest | undefined {
  return openRequests.get(id);
}

export function listOpenRequests(): CoverageRequest[] {
  return Array.from(openRequests.values()).filter((r) => r.status === "open");
}
