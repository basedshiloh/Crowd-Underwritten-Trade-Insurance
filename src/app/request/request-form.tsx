'use client';

import { useFormState, useFormStatus } from 'react-dom';
import type { CreateCoverageState } from './actions';

export function RequestForm({
  createCoverageAction,
}: {
  createCoverageAction: (
    prev: CreateCoverageState | null,
    formData: FormData
  ) => Promise<CreateCoverageState>;
}) {
  const [state, formAction] = useFormState(createCoverageAction, null);
  const { pending: isPending } = useFormStatus();

  return (
    <form
      action={formAction}
      className="flex flex-col gap-4 rounded-xl border border-stroke-5 bg-background-7 p-6 dark:border-stroke-6"
    >
      <label className="flex flex-col gap-1">
        <span className="text-tagline-1 font-medium text-secondary dark:text-accent">Coverage (SOL)</span>
        <input
          type="number"
          name="coverageAmountSol"
          step="0.1"
          min="0.1"
          required
          className="rounded border border-stroke-3 bg-background-4 px-3 py-2 text-secondary dark:border-stroke-6 dark:bg-background-9 dark:text-accent"
          placeholder="3"
        />
      </label>
      <label className="flex flex-col gap-1">
        <span className="text-tagline-1 font-medium text-secondary dark:text-accent">Token symbol / mint</span>
        <input
          type="text"
          name="tokenMint"
          required
          className="rounded border border-stroke-3 bg-background-4 px-3 py-2 text-secondary dark:border-stroke-6 dark:bg-background-9 dark:text-accent"
          placeholder="TOKENX"
        />
      </label>
      <label className="flex flex-col gap-1">
        <span className="text-tagline-1 font-medium text-secondary dark:text-accent">Duration (hours)</span>
        <input
          type="number"
          name="durationHours"
          min="1"
          defaultValue={12}
          className="rounded border border-stroke-3 bg-background-4 px-3 py-2 text-secondary dark:border-stroke-6 dark:bg-background-9 dark:text-accent"
        />
      </label>
      <label className="flex flex-col gap-1">
        <span className="text-tagline-1 font-medium text-secondary dark:text-accent">Premium (SOL, optional)</span>
        <input
          type="number"
          name="premiumSol"
          step="0.01"
          min="0"
          className="rounded border border-stroke-3 bg-background-4 px-3 py-2 text-secondary dark:border-stroke-6 dark:bg-background-9 dark:text-accent"
          placeholder="Auto"
        />
      </label>
      <label className="flex flex-col gap-1">
        <span className="text-tagline-1 font-medium text-secondary dark:text-accent">
          Market cap at placement (mock, for resolution)
        </span>
        <input
          type="number"
          name="marketCapAtPlacement"
          min="0"
          defaultValue={100000}
          className="rounded border border-stroke-3 bg-background-4 px-3 py-2 text-secondary dark:border-stroke-6 dark:bg-background-9 dark:text-accent"
        />
      </label>
      <input type="hidden" name="requester" value="web-user" />
      <button
        type="submit"
        disabled={isPending}
        className="mt-2 rounded-lg bg-primary-600 px-4 py-2 font-medium text-white hover:bg-primary-500 disabled:opacity-50"
      >
        {isPending ? 'Creating…' : 'Create coverage request'}
      </button>
      {state?.ok === true && (
        <div className="rounded-lg border border-primary-700 bg-primary-900/30 p-3 text-tagline-2 text-primary-200 dark:border-primary-600">
          Request created. ID: <code className="font-mono">{state.requestId}</code>. Required hold to
          participate: {state.requiredHoldPercent}% of token supply.
        </div>
      )}
      {state?.ok === false && (
        <div className="rounded-lg border border-ns-red bg-ns-red/20 p-3 text-tagline-2 text-ns-red">
          {state.error}
        </div>
      )}
    </form>
  );
}
