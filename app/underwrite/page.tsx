import Link from "next/link";
import { listOpenRequests, getStakes, totalStakedSol } from "@/lib/agent";
import { getRequiredHoldPercentForCoverage } from "@/lib/coverage";
import { underwriteAction } from "./actions";
import { UnderwriteForm } from "./underwrite-form";
import { ResolutionDemo } from "./resolution-demo";

export default async function UnderwritePage() {
  const requests = listOpenRequests();

  return (
    <div className="flex flex-1 flex-col gap-8">
      <header className="flex items-center gap-4">
        <Link href="/" className="text-slate-400 hover:text-slate-200">
          ← Back
        </Link>
        <h1 className="text-2xl font-semibold">Underwrite trades</h1>
      </header>

      <p className="text-sm text-slate-300">
        Open coverage requests. Stake SOL to underwrite; you must hold at least the tier’s % of the governance token supply.
      </p>

      {requests.length === 0 ? (
        <p className="rounded-xl border border-slate-700 bg-slate-900/40 p-6 text-slate-400">No open requests. Create one from the request page.</p>
      ) : (
        <ul className="flex flex-col gap-6">
          {requests.map((req) => {
            const stakes = getStakes(req.id);
            const totalSol = totalStakedSol(req.id);
            const requiredHold = getRequiredHoldPercentForCoverage(req.coverageAmountSol);
            return (
              <li key={req.id} className="rounded-xl border border-slate-700 bg-slate-900/40 p-6">
                <div className="mb-4 grid gap-2 text-sm">
                  <p>
                    <strong>Token:</strong> {req.tokenMint} · <strong>Coverage:</strong> {req.coverageAmountSol} SOL · <strong>Premium:</strong> {req.premiumSol} SOL
                  </p>
                  <p>
                    Duration: {req.durationHours}h · Survival: market cap ≥ {req.survivalThresholdPercent}% of placement ({req.marketCapAtPlacement})
                  </p>
                  <p>
                    Required hold to participate: <strong>{requiredHold}%</strong> of supply · Total staked: <strong>{totalSol} SOL</strong>
                  </p>
                  <p className="text-slate-400">Request ID: <code className="font-mono text-xs">{req.id}</code></p>
                </div>
                <UnderwriteForm requestId={req.id} requiredHoldPercent={requiredHold} underwriteAction={underwriteAction} />
                <ResolutionDemo
                  requestId={req.id}
                  marketCapAtPlacement={req.marketCapAtPlacement}
                  survivalThresholdPercent={req.survivalThresholdPercent}
                />
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
