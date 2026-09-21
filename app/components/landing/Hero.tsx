import Link from "next/link";
import { ArrowRight, ShieldCheck } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-background">
      <div className="mx-auto grid min-h-screen max-w-7xl items-center gap-16 px-6 pb-16 pt-32 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:pb-20 lg:pt-28">
        {/* Copy */}
        <div className="relative z-10 max-w-3xl">
          <div className="mb-7 flex items-center gap-3 text-sm font-medium text-primary">
            <ShieldCheck size={18} strokeWidth={1.8} />
            <span>The safe way home</span>
          </div>

          <h1 className="max-w-3xl text-5xl font-extrabold leading-[0.98] tracking-[-0.04em] text-foreground sm:text-6xl lg:text-[5.5rem]">
            When you shouldn&apos;t drive, don&apos;t.
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-8 text-muted sm:text-xl">
            Get yourself and your vehicle home safely with a trusted Umusa&acirc;re
            driver.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/client/register"
              className="group inline-flex items-center justify-center gap-3 bg-primary px-6 py-4 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
            >
              I Need a Driver
              <ArrowRight
                size={18}
                strokeWidth={2}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>

            <Link
              href="/driver/register"
              className="inline-flex items-center justify-center border border-border px-6 py-4 text-sm font-semibold text-foreground transition-colors hover:bg-surface"
            >
              Become a Driver
            </Link>
          </div>

          <div className="mt-8 flex items-center gap-3 text-sm text-muted">
            <span className="h-px w-8 bg-border" />
            <span>Your car stays with you. You don&apos;t have to drive it.</span>
          </div>
        </div>

        {/* Visual */}
        <div className="relative hidden min-h-[560px] items-center justify-center lg:flex">
          <div className="absolute inset-y-0 right-0 w-px bg-border/70" />

          <div className="relative w-full max-w-xl">
            {/* Road */}
            <div className="absolute left-1/2 top-1/2 h-[520px] w-[230px] -translate-x-1/2 -translate-y-1/2 border-x border-border bg-surface" />

            {/* Road markings */}
            <div className="absolute left-1/2 top-1/2 h-[520px] w-px -translate-x-1/2 -translate-y-1/2 border-l border-dashed border-primary/50" />

            {/* Vehicle */}
            <div className="relative mx-auto flex h-[250px] w-[390px] items-center justify-center">
              <div className="absolute h-36 w-[310px] border border-foreground/50 bg-background">
                <div className="absolute left-10 right-10 top-8 h-16 border border-border bg-surface" />

                <div className="absolute bottom-[-14px] left-10 h-7 w-7 border-2 border-foreground bg-background" />
                <div className="absolute bottom-[-14px] right-10 h-7 w-7 border-2 border-foreground bg-background" />
              </div>

              <div className="absolute left-1/2 top-4 h-px w-24 -translate-x-1/2 bg-primary" />
            </div>

            {/* Destination marker */}
            <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 items-center gap-3 border border-border bg-background px-4 py-3">
              <span className="h-2 w-2 bg-primary" />
              <span className="text-xs font-medium uppercase tracking-[0.18em] text-muted">
                Home
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}