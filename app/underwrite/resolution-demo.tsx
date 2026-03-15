"use client";

import { useState } from "react";
import { resolveByMarketCap } from "@/lib/coverage";

export function ResolutionDemo({
  requestId,
  marketCapAtPlacement,
  survivalThresholdPercent,
}: {
  requestId: string;
  marketCapAtPlacement: number;
  survivalThresholdPercent: number;
}) {
  const [currentMarketCap, setCurrentMarketCap] = useState(marketCapAtPlacement);
  const outcome = resolveByMarketCap(marketCapAtPlacement, currentMarketCap, survivalThresholdPercent);
  const thresholdValue = (survivalThresholdPercent / 100) * marketCapAtPlacement;

  return (
    <div className="rounded-lg border border-slate-600 bg-slate-800/30 p-3">
      <p className="mb-2 text-xs font-medium text-slate-400">Resolution demo (mock)</p>
      <label className="mb-2 flex items-center gap-2 text-sm">
        <span>Current market cap:</span>
        <input
          type="number"
          value={currentMarketCap}
          onChange={(e) => setCurrentMarketCap(Number(e.target.value))}
          className="w-28 rounded border border-slate-600 bg-slate-800 px-2 py-1 text-slate-100"
        />
      </label>
      <p className="text-sm">
        Placement: {marketCapAtPlacement} · Threshold: {survivalThresholdPercent}% = {thresholdValue.toLocaleString()}. Outcome:{" "}
        <strong className={outcome === "survived" ? "text-emerald-400" : "text-red-400"}>{outcome}</strong>
        {outcome === "survived" ? " → underwriters earn premium" : " → coverage paid from staked SOL"}
      </p>
    </div>
  );
}
