"use client";

import Link from "next/link";
import { ArrowLeft, CarFront, LoaderCircle, ShieldCheck } from "lucide-react";

export default function SearchingForDriverPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="border-b border-border">
        <div className="mx-auto flex h-16 w-full max-w-3xl items-center px-5 sm:px-8">
          <Link
            href="/client"
            className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-foreground"
          >
            <ArrowLeft size={17} strokeWidth={1.8} />
            Dashboard
          </Link>
        </div>
      </header>

      <div className="mx-auto flex min-h-[calc(100vh-4rem)] w-full max-w-3xl flex-col px-5 py-10 sm:px-8 sm:py-14">
        {/* Status */}
        <section className="flex flex-1 flex-col items-center justify-center text-center">
          <div className="relative flex h-24 w-24 items-center justify-center border border-primary/40">
            <div className="absolute inset-2 border border-primary/20" />

            <CarFront
              size={34}
              strokeWidth={1.6}
              className="relative text-primary"
            />

            <LoaderCircle
              size={92}
              strokeWidth={1}
              className="absolute animate-spin text-primary/30"
            />
          </div>

          <p className="mt-9 text-sm font-semibold uppercase tracking-[0.16em] text-primary">
            Request sent
          </p>

          <h1 className="mt-3 max-w-lg text-3xl font-extrabold tracking-[-0.035em] sm:text-4xl">
            Finding you a driver.
          </h1>

          <p className="mt-4 max-w-md text-sm leading-6 text-muted sm:text-base">
            We&apos;re looking for an available verified driver near you. You can
            stay on this screen while we find a match.
          </p>

          {/* Request summary */}
          <div className="mt-10 w-full border border-border bg-surface text-left">
            <div className="border-b border-border px-5 py-4">
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-muted">
                Your request
              </p>
            </div>

            <div className="divide-y divide-border">
              <div className="flex items-center justify-between gap-5 px-5 py-4">
                <span className="text-sm text-muted">Status</span>

                <span className="inline-flex items-center gap-2 text-sm font-bold text-primary">
                  <span className="h-1.5 w-1.5 bg-primary" />
                  Searching
                </span>
              </div>

              <div className="flex items-center justify-between gap-5 px-5 py-4">
                <span className="text-sm text-muted">Vehicle</span>

                <span className="text-sm font-semibold">
                  Toyota Corolla
                </span>
              </div>
            </div>
          </div>

          {/* Safety */}
          <div className="mt-8 flex max-w-md items-start gap-3 text-left">
            <ShieldCheck
              size={19}
              strokeWidth={1.8}
              className="mt-0.5 shrink-0 text-primary"
            />

            <p className="text-xs leading-5 text-muted">
              Only verified Umusaâre drivers can accept your request. Your
              vehicle stays with you throughout the trip.
            </p>
          </div>

          {/* Cancel */}
          <button
            type="button"
            className="mt-8 text-sm font-semibold text-muted transition-colors hover:text-danger"
            onClick={() => {
              // Cancellation API will be connected here.
            }}
          >
            Cancel request
          </button>
        </section>
      </div>
    </main>
  );
}