'use client';

import { useFormState, useFormStatus } from 'react-dom';
import { cn } from '@/utils/cn';
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
      className="flex flex-col gap-4 rounded-xl border border-stroke-3 bg-background-4 p-6 dark:border-stroke-6 dark:bg-background-8"
    >
      <label className="flex flex-col gap-1.5">
        <span className="text-tagline-1 font-semibold text-secondary dark:text-accent">Coverage (ETH)</span>
        <input
          type="number"
          name="coverageAmountSol"
          step="0.1"
          min="0.1"
          required
          className="rounded-lg border border-stroke-3 bg-background-1 px-3 py-2.5 text-secondary placeholder:text-secondary/50 dark:border-stroke-6 dark:bg-background-9 dark:text-accent dark:placeholder:text-accent/50"
          placeholder="3"
        />
      </label>
      <label className="flex flex-col gap-1.5">
        <span className="text-tagline-1 font-semibold text-secondary dark:text-accent">Token symbol / mint</span>
        <input
          type="text"
          name="tokenMint"
          required
          className="rounded-lg border border-stroke-3 bg-background-1 px-3 py-2.5 text-secondary placeholder:text-secondary/50 dark:border-stroke-6 dark:bg-background-9 dark:text-accent dark:placeholder:text-accent/50"
          placeholder="TOKENX"
        />
      </label>
      <label className="flex flex-col gap-1.5">
        <span className="text-tagline-1 font-semibold text-secondary dark:text-accent">Duration (hours)</span>
        <input
          type="number"
          name="durationHours"
          min="1"
          defaultValue={12}
          className="rounded-lg border border-stroke-3 bg-background-1 px-3 py-2.5 text-secondary dark:border-stroke-6 dark:bg-background-9 dark:text-accent"
        />
      </label>
      <label className="flex flex-col gap-1.5">
        <span className="text-tagline-1 font-semibold text-secondary dark:text-accent">Premium (ETH, optional)</span>
        <input
          type="number"
          name="premiumSol"
          step="0.01"
          min="0"
          className="rounded-lg border border-stroke-3 bg-background-1 px-3 py-2.5 text-secondary placeholder:text-secondary/50 dark:border-stroke-6 dark:bg-background-9 dark:text-accent dark:placeholder:text-accent/50"
          placeholder="Auto"
        />
      </label>
      <label className="flex flex-col gap-1.5">
        <span className="text-tagline-1 font-semibold text-secondary dark:text-accent">
          Market cap at placement (mock, for resolution)
        </span>
        <input
          type="number"
          name="marketCapAtPlacement"
          min="0"
          defaultValue={100000}
          className="rounded-lg border border-stroke-3 bg-background-1 px-3 py-2.5 text-secondary dark:border-stroke-6 dark:bg-background-9 dark:text-accent"
        />
      </label>
      <input type="hidden" name="requester" value="web-user" />
      <div
          className={cn(
            'group/btn-v2 mt-2 w-full rounded-full transition-transform duration-500 ease-in-out md:w-auto',
            isPending && 'pointer-events-none'
          )}
        >
        <button
          type="submit"
          disabled={isPending}
          className="btn-xl-v2 btn-primary-v2 group-hover/btn-v2:border group-hover/btn-v2:border-black group-hover/btn-v2:bg-secondary group-hover/btn-v2:shadow-[0_1px_2px_0_rgba(16,24,40,0.26)] mx-auto inline-flex h-12 w-full cursor-pointer items-center justify-center gap-1.5 rounded-full text-center font-medium lowercase text-nowrap transition-all duration-500 ease-in-out disabled:opacity-50 md:mx-0 md:h-auto md:w-auto"
        >
          <span className="inline-block transition-transform duration-300 ease-in-out first-letter:uppercase">
            {isPending ? 'Creating…' : 'Create coverage request'}
          </span>
          <div className="relative size-6 overflow-hidden">
            <span className="btn-v2-icon absolute inset-0 size-6 -translate-x-6 transition-all duration-300 ease-in-out group-hover/btn-v2:translate-x-1">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M11 5H13V7H11V5Z" />
                <path d="M5 5H7V7H5V5Z" />
                <path d="M14 8H16V10H14V8Z" />
                <path d="M8 8H10V10H8V8Z" />
                <path d="M17 11H19V13H17V11Z" />
                <path d="M11 11H13V13H11V11Z" />
                <path d="M14 14H16V16H14V14Z" />
                <path d="M8 14H10V16H8V14Z" />
                <path d="M11 17H13V19H11V17Z" />
                <path d="M5 17H7V19H5V17Z" />
              </svg>
            </span>
            <span className="btn-v2-icon absolute size-6 -translate-x-2 transition-all duration-300 ease-in-out group-hover/btn-v2:translate-x-6">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M11 5H13V7H11V5Z" />
                <path d="M5 5H7V7H5V5Z" />
                <path d="M14 8H16V10H14V8Z" />
                <path d="M8 8H10V10H8V8Z" />
                <path d="M17 11H19V13H17V11Z" />
                <path d="M11 11H13V13H11V11Z" />
                <path d="M14 14H16V16H14V14Z" />
                <path d="M8 14H10V16H8V14Z" />
                <path d="M11 17H13V19H11V17Z" />
                <path d="M5 17H7V19H5V17Z" />
              </svg>
            </span>
          </div>
        </button>
      </div>
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
