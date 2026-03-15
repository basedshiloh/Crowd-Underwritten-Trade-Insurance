"use client";

import { useFormState, useFormStatus } from "react-dom";
import type { UnderwriteState } from "./actions";

export function UnderwriteForm({
  requestId,
  requiredHoldPercent,
  underwriteAction,
}: {
  requestId: string;
  requiredHoldPercent: number;
  underwriteAction: (prev: UnderwriteState | null, formData: FormData) => Promise<UnderwriteState>;
}) {
  const [state, formAction] = useFormState(underwriteAction, null);
  const { pending } = useFormStatus();

  return (
    <form action={formAction} className="mb-4 flex flex-wrap items-end gap-3 rounded-lg border border-slate-600 bg-slate-800/50 p-3">
      <input type="hidden" name="requestId" value={requestId} />
      <input type="hidden" name="underwriter" value="web-user" />
      <label className="flex flex-col gap-1">
        <span className="text-xs font-medium text-slate-400">Stake (SOL)</span>
        <input
          type="number"
          name="amountStakedSol"
          step="0.1"
          min="0.1"
          required
          className="w-24 rounded border border-slate-600 bg-slate-800 px-2 py-1.5 text-sm text-slate-100"
        />
      </label>
      <label className="flex flex-col gap-1">
        <span className="text-xs font-medium text-slate-400">Your hold % of supply (mock)</span>
        <input
          type="number"
          name="userHoldPercentOfSupply"
          step="0.01"
          min="0"
          defaultValue={requiredHoldPercent}
          className="w-24 rounded border border-slate-600 bg-slate-800 px-2 py-1.5 text-sm text-slate-100"
        />
      </label>
      <p className="text-xs text-slate-400">Need ≥ {requiredHoldPercent}% to underwrite</p>
      <button
        type="submit"
        disabled={pending}
        className="rounded bg-emerald-600 px-3 py-1.5 text-sm font-medium text-white hover:bg-emerald-500 disabled:opacity-50"
      >
        {pending ? "Staking…" : "Stake SOL"}
      </button>
      {state?.ok === true && <span className="text-sm text-emerald-300">Staked.</span>}
      {state?.ok === false && <span className="text-sm text-red-300">{state.error}</span>}
    </form>
  );
}
