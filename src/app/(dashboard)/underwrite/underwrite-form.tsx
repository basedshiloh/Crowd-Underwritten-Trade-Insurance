'use client';

import { useFormState, useFormStatus } from 'react-dom';
import type { UnderwriteState } from './actions';

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
    <form
      action={formAction}
      className="mb-4 flex flex-wrap items-end gap-3 rounded-lg border border-stroke-5 bg-background-9 p-3 dark:border-stroke-6"
    >
      <input type="hidden" name="requestId" value={requestId} />
      <input type="hidden" name="underwriter" value="web-user" />
      <label className="flex flex-col gap-1">
        <span className="text-tagline-3 font-medium text-secondary dark:text-accent">Stake (SOL)</span>
        <input
          type="number"
          name="amountStakedSol"
          step="0.1"
          min="0.1"
          required
          className="w-24 rounded border border-stroke-3 bg-background-4 px-2 py-1.5 text-tagline-2 text-secondary dark:border-stroke-6 dark:bg-background-7 dark:text-accent"
        />
      </label>
      <label className="flex flex-col gap-1">
        <span className="text-tagline-3 font-medium text-secondary dark:text-accent">
          Your hold % of supply (mock)
        </span>
        <input
          type="number"
          name="userHoldPercentOfSupply"
          step="0.01"
          min="0"
          defaultValue={requiredHoldPercent}
          className="w-24 rounded border border-stroke-3 bg-background-4 px-2 py-1.5 text-tagline-2 text-secondary dark:border-stroke-6 dark:bg-background-7 dark:text-accent"
        />
      </label>
      <p className="text-tagline-3 text-secondary/80 dark:text-accent/80">
        Need ≥ {requiredHoldPercent}% to underwrite
      </p>
      <button
        type="submit"
        disabled={pending}
        className="rounded bg-primary-600 px-3 py-1.5 text-tagline-2 font-medium text-white hover:bg-primary-500 disabled:opacity-50"
      >
        {pending ? 'Staking…' : 'Stake SOL'}
      </button>
      {state?.ok === true && (
        <span className="text-tagline-2 text-ns-green">Staked.</span>
      )}
      {state?.ok === false && (
        <span className="text-tagline-2 text-ns-red">{state.error}</span>
      )}
    </form>
  );
}
