import Link from "next/link";
import { ArrowRight, ShieldCheck } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
        <div className="relative overflow-hidden border border-border bg-primary px-7 py-12 sm:px-12 sm:py-16 lg:px-16 lg:py-20">
          <div className="relative z-10 max-w-2xl">
            <div className="flex h-11 w-11 items-center justify-center border border-primary-foreground/20 bg-primary-foreground/10 text-primary-foreground">
              <ShieldCheck size={21} strokeWidth={1.8} />
            </div>

            <p className="mt-8 text-sm font-semibold uppercase tracking-[0.18em] text-primary-foreground/70">
              Make the safe choice
            </p>

            <h2 className="mt-4 text-4xl font-bold tracking-tight text-primary-foreground sm:text-5xl lg:text-6xl">
              When you shouldn&apos;t drive, don&apos;t.
            </h2>

            <p className="mt-6 max-w-xl text-base leading-7 text-primary-foreground/75 sm:text-lg">
              Get yourself and your vehicle home safely with Umusaâre.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/client/login"
                className="inline-flex items-center justify-center gap-2 bg-primary-foreground px-6 py-3.5 text-sm font-semibold text-primary transition-opacity hover:opacity-90"
              >
                I need a driver
                <ArrowRight size={17} />
              </Link>

              <Link
                href="/driver/login"
                className="inline-flex items-center justify-center border border-primary-foreground/25 px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground/10"
              >
                Become a driver
              </Link>
            </div>
          </div>

          <div
            aria-hidden="true"
            className="absolute -right-24 -top-24 h-72 w-72 border border-primary-foreground/10"
          />

          <div
            aria-hidden="true"
            className="absolute -bottom-32 -right-10 h-80 w-80 border border-primary-foreground/10"
          />
        </div>
      </div>
    </section>
  );
}