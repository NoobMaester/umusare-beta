import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col gap-12 py-12 sm:py-16 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-sm">
            <Link
              href="/"
              className="text-lg font-extrabold tracking-[-0.04em] text-foreground"
            >
              UMUSA&Acirc;RE
            </Link>

            <p className="mt-4 text-sm leading-6 text-muted">
              The safe way home. A driver when you need one, so you and your
              vehicle can get home safely.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-x-16 gap-y-10 sm:grid-cols-3">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">
                Explore
              </p>

              <nav className="mt-5 flex flex-col gap-3">
                <Link
                  href="#how-it-works"
                  className="text-sm text-foreground transition-colors hover:text-primary"
                >
                  How it works
                </Link>

                <Link
                  href="#safety"
                  className="text-sm text-foreground transition-colors hover:text-primary"
                >
                  Safety
                </Link>
              </nav>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">
                Join
              </p>

              <nav className="mt-5 flex flex-col gap-3">
                <Link
                  href="/client/register"
                  className="text-sm text-foreground transition-colors hover:text-primary"
                >
                  Need a driver
                </Link>

                <Link
                  href="/driver/register"
                  className="text-sm text-foreground transition-colors hover:text-primary"
                >
                  Become a driver
                </Link>
              </nav>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">
                Account
              </p>

              <nav className="mt-5 flex flex-col gap-3">
                <Link
                  href="/login"
                  className="inline-flex items-center gap-1.5 text-sm text-foreground transition-colors hover:text-primary"
                >
                  Log in
                  <ArrowUpRight size={14} />
                </Link>
              </nav>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-border py-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} Umusa&acirc;re. All rights reserved.
          </p>

          <p>
            The safe way home.
          </p>
        </div>
      </div>
    </footer>
  );
}