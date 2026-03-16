'use client';

export function DashboardShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-background-3 dark:bg-background-7">
      <div className="min-w-0 flex-1 flex flex-col">
        <main className="min-h-0 flex-1">{children}</main>
      </div>
    </div>
  );
}
