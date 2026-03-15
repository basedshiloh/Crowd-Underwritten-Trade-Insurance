import type { ReactNode } from "react";
import "./globals.css";

export const metadata = {
  title: "Crowd-Underwritten Trade Insurance",
  description: "SOL-based, token-gated crowd underwriting for degen trades.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-slate-950 text-slate-50">
        <main className="mx-auto flex min-h-screen max-w-3xl flex-col px-4 py-8">
          {children}
        </main>
      </body>
    </html>
  );
}

