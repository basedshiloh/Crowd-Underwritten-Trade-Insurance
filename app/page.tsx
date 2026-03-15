import Link from "next/link";

export default function HomePage() {
  return (
    <div className="flex flex-1 flex-col gap-8">
      <header className="space-y-3">
        <h1 className="text-3xl font-semibold tracking-tight">
          Crowd-Underwritten Trade Insurance
        </h1>
        <p className="text-sm text-slate-300">
          Traders request SOL coverage on risky tokens. Underwriters stake SOL to back them, gated by
          how much of the governance token they hold.
        </p>
      </header>

      <section className="grid gap-4 sm:grid-cols-2">
        <Link
          href="/request"
          className="rounded-xl border border-slate-700 bg-slate-900/40 p-4 hover:border-sky-400 hover:bg-slate-900 transition-colors"
        >
          <h2 className="text-lg font-medium">Request coverage</h2>
          <p className="mt-2 text-xs text-slate-300">
            Ask to insure a SOL-sized trade on a token. See required token hold tier and survival rule.
          </p>
        </Link>

        <Link
          href="/underwrite"
          className="rounded-xl border border-slate-700 bg-slate-900/40 p-4 hover:border-emerald-400 hover:bg-slate-900 transition-colors"
        >
          <h2 className="text-lg font-medium">Underwrite trades</h2>
          <p className="mt-2 text-xs text-slate-300">
            Browse open coverage requests and simulate staking SOL as an underwriter.
          </p>
        </Link>
      </section>

      <section className="mt-auto space-y-1 text-xs text-slate-400">
        <p>
          Survival is based on market cap at resolution vs market cap when insurance was placed (e.g. must
          stay above 80%).
        </p>
        <p>
          This MVP is a simulation layer only. On-chain programs, wallets, and real SOL flows come next.
        </p>
      </section>
    </div>
  );
}

