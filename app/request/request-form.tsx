"use client";

import { useFormState, useFormStatus } from "react-dom";
import type { CreateCoverageState } from "./actions";

export function RequestForm({
  createCoverageAction,
}: {
  createCoverageAction: (prev: CreateCoverageState | null, formData: FormData) => Promise<CreateCoverageState>;
}) {
  const [state, formAction] = useFormState(createCoverageAction, null);
  const { pending: isPending } = useFormStatus();

  return (
    <form action={formAction} className="flex flex-col gap-4 rounded-xl border border-slate-700 bg-slate-900/40 p-6">
      <label className="flex flex-col gap-1">
        <span className="text-sm font-medium">Coverage (SOL)</span>
        <input
          type="number"
          name="coverageAmountSol"
          step="0.1"
          min="0.1"
          required
          className="rounded border border-slate-600 bg-slate-800 px-3 py-2 text-slate-100"
          placeholder="3"
        />
      </label>
      <label className="flex flex-col gap-1">
        <span className="text-sm font-medium">Token symbol / mint</span>
        <input
          type="text"
          name="tokenMint"
          required
          className="rounded border border-slate-600 bg-slate-800 px-3 py-2 text-slate-100"
          placeholder="TOKENX"
        />
      </label>
      <label className="flex flex-col gap-1">
        <span className="text-sm font-medium">Duration (hours)</span>
        <input
          type="number"
          name="durationHours"
          min="1"
          defaultValue={12}
          className="rounded border border-slate-600 bg-slate-800 px-3 py-2 text-slate-100"
        />
      </label>
      <label className="flex flex-col gap-1">
        <span className="text-sm font-medium">Premium (SOL, optional)</span>
        <input
          type="number"
          name="premiumSol"
          step="0.01"
          min="0"
          className="rounded border border-slate-600 bg-slate-800 px-3 py-2 text-slate-100"
          placeholder="Auto"
        />
      </label>
      <label className="flex flex-col gap-1">
        <span className="text-sm font-medium">Market cap at placement (mock, for resolution)</span>
        <input
          type="number"
          name="marketCapAtPlacement"
          min="0"
          defaultValue={100000}
          className="rounded border border-slate-600 bg-slate-800 px-3 py-2 text-slate-100"
        />
      </label>
      <input type="hidden" name="requester" value="web-user" />
      <button
        type="submit"
        disabled={isPending}
        className="mt-2 rounded-lg bg-sky-600 px-4 py-2 font-medium text-white hover:bg-sky-500 disabled:opacity-50"
      >
        {isPending ? "Creating…" : "Create coverage request"}
      </button>
      {state?.ok === true && (
        <div className="rounded-lg border border-emerald-700 bg-emerald-900/30 p-3 text-sm text-emerald-200">
          Request created. ID: <code className="font-mono">{state.requestId}</code>. Required hold to participate:{" "}
          {state.requiredHoldPercent}% of token supply.
        </div>
      )}
      {state?.ok === false && (
        <div className="rounded-lg border border-red-800 bg-red-900/30 p-3 text-sm text-red-200">{state.error}</div>
      )}
    </form>
  );
}
