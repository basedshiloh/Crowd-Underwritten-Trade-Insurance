import Link from 'next/link';
import { type ReactNode } from 'react';

export type QuickActionItem = {
  icon: ReactNode;
  title: string;
  description: string;
  href: string;
};

export function QuickActions({ actions }: { actions: QuickActionItem[] }) {
  return (
    <div className="mb-8">
      <h2 className="text-heading-6 mb-4 font-semibold text-secondary dark:text-accent">
        Quick actions
      </h2>
      <div className="grid gap-4 sm:grid-cols-2">
        {actions.map(({ icon, title, description, href }) => (
          <Link
            key={href}
            href={href}
            className="group flex gap-4 rounded-xl border border-stroke-5-80 bg-background-4 p-4 transition-colors hover:border-primary-500/30 hover:bg-primary-500/5 dark:border-stroke-6-80 dark:bg-background-8 dark:hover:border-primary-500/30 dark:hover:bg-primary-500/10"
          >
            <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-lg bg-primary-500/10 text-primary-500 dark:bg-primary-500/15 dark:text-primary-400">
              {icon}
            </span>
            <div className="min-w-0 flex-1">
              <span className="text-tagline-1 font-semibold text-secondary group-hover:text-primary-500 dark:text-accent dark:group-hover:text-primary-400">
                {title}
              </span>
              <p className="mt-0.5 text-tagline-3 text-secondary/70 dark:text-accent/70">
                {description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
