import Link from "next/link";
import {
  ArrowRight,
  CarFront,
  ShieldCheck,
} from "lucide-react";

export default function AudienceSection() {
  return (
    <section className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
        <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-primary">
              Built for both sides
            </p>

            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              One service.
              <br />
              Two ways to use it.
            </h2>

            <p className="mt-6 max-w-lg text-base leading-7 text-muted sm:text-lg">
              Whether you need someone to take the wheel or you want to
              become the person people can rely on, Umusaâre gives you a
              straightforward way to get started.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <article className="border border-border bg-surface p-7 sm:p-8">
              <div className="flex h-11 w-11 items-center justify-center border border-border bg-background text-primary">
                <CarFront size={21} strokeWidth={1.8} />
              </div>

              <p className="mt-8 text-sm font-medium uppercase tracking-[0.14em] text-muted">
                For clients
              </p>

              <h3 className="mt-3 text-2xl font-semibold text-surface-foreground">
                Keep your car. Skip the drive.
              </h3>

              <p className="mt-4 text-sm leading-6 text-muted">
                When you are not in a position to drive, request an approved
                driver to take you and your vehicle home safely.
              </p>

              <Link
                href="/client/register"
                className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-transform duration-200 hover:translate-x-1"
              >
                I need a driver
                <ArrowRight size={16} />
              </Link>
            </article>

            <article className="border border-border bg-surface p-7 sm:p-8">
              <div className="flex h-11 w-11 items-center justify-center border border-border bg-background text-primary">
                <ShieldCheck size={21} strokeWidth={1.8} />
              </div>

              <p className="mt-8 text-sm font-medium uppercase tracking-[0.14em] text-muted">
                For drivers
              </p>

              <h3 className="mt-3 text-2xl font-semibold text-surface-foreground">
                Turn your driving skills into income.
              </h3>

              <p className="mt-4 text-sm leading-6 text-muted">
                Join a network of responsible drivers, complete the
                verification process, and accept trips that fit your
                availability.
              </p>

              <Link
                href="/driver/register"
                className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-transform duration-200 hover:translate-x-1"
              >
                Become a driver
                <ArrowRight size={16} />
              </Link>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}