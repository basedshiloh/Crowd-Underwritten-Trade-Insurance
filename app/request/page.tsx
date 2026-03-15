import Link from "next/link";
import { createCoverageAction } from "./actions";
import { RequestForm } from "./request-form";

export default function RequestPage() {
  return (
    <div className="flex flex-1 flex-col gap-8">
      <header className="flex items-center gap-4">
        <Link href="/" className="text-slate-400 hover:text-slate-200">
          ← Back
        </Link>
        <h1 className="text-2xl font-semibold">Request coverage</h1>
      </header>

      <p className="text-sm text-slate-300">
        Request SOL coverage for a trade on a token. You must hold at least the tier’s % of the governance token supply to request at this size.
      </p>

      <RequestForm createCoverageAction={createCoverageAction} />
    </div>
  );
}
