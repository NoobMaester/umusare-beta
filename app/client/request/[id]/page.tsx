"use client";

import Link from "next/link";
import {
  ArrowLeft,
  CarFront,
  Check,
  Clock3,
  MapPin,
  Phone,
  ShieldCheck,
  Star,
  UserRound,
} from "lucide-react";
import { useState } from "react";

type RequestStatus =
  | "ACCEPTED"
  | "DRIVER_ARRIVING"
  | "DRIVER_ARRIVED"
  | "IN_PROGRESS"
  | "COMPLETED";

type PaymentStatus = "PENDING" | "PAID" | "FAILED" | "REFUNDED";

const requestStatus: RequestStatus = "COMPLETED";
const paymentStatus: PaymentStatus = "PAID";

const statusContent = {
  ACCEPTED: {
    label: "Driver assigned",
    title: "Your driver accepted the request.",
    description:
      "Your driver is preparing to come to your pickup location.",
  },
  DRIVER_ARRIVING: {
    label: "Driver on the way",
    title: "Your driver is coming to you.",
    description:
      "Stay at your pickup location. We'll let you know when your driver arrives.",
  },
  DRIVER_ARRIVED: {
    label: "Driver has arrived",
    title: "Your driver is here.",
    description:
      "Meet your driver and confirm your destination before starting the trip.",
  },
  IN_PROGRESS: {
    label: "Trip in progress",
    title: "You're on your way.",
    description:
      "Your Umusaâre driver is taking you and your vehicle to your destination.",
  },
  COMPLETED: {
    label: "Trip completed",
    title: "You've arrived safely.",
    description:
      "Your trip is complete. Thank you for choosing Umusaâre.",
  },
};

const steps = [
  {
    key: "accepted",
    label: "Driver assigned",
  },
  {
    key: "arriving",
    label: "Driver arriving",
  },
  {
    key: "arrived",
    label: "Driver arrived",
  },
  {
    key: "trip",
    label: "Trip in progress",
  },
];

const statusStep: Record<RequestStatus, number> = {
  ACCEPTED: 0,
  DRIVER_ARRIVING: 1,
  DRIVER_ARRIVED: 2,
  IN_PROGRESS: 3,
  COMPLETED: 4,
};

export default function ActiveRequestPage() {
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState("");
  const [reviewSubmitted, setReviewSubmitted] = useState(false);

  const current = statusContent[requestStatus];
  const currentStep = statusStep[requestStatus];

  function handleReviewSubmit() {
    if (!rating) return;

    // Review API will be connected here.
    console.log({
      rating,
      review,
    });

    setReviewSubmitted(true);
  }

  const isCompleted = requestStatus === "COMPLETED";

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

      <div className="mx-auto w-full max-w-3xl px-5 py-8 sm:px-8 sm:py-12">
        {/* Status */}
        <section>
          <div className="flex h-12 w-12 items-center justify-center bg-primary text-primary-foreground">
            {isCompleted ? (
              <Check size={24} strokeWidth={2.5} />
            ) : (
              <CarFront size={23} strokeWidth={1.8} />
            )}
          </div>

          <p className="mt-6 text-sm font-semibold uppercase tracking-[0.16em] text-primary">
            {current.label}
          </p>

          <h1 className="mt-3 text-3xl font-extrabold tracking-[-0.035em] sm:text-4xl">
            {current.title}
          </h1>

          <p className="mt-3 max-w-xl text-sm leading-6 text-muted sm:text-base">
            {current.description}
          </p>
        </section>

        {/* Progress */}
        {!isCompleted && (
          <section className="mt-8 border border-border bg-surface p-5 sm:p-6">
            <div className="space-y-5">
              {steps.map((step, index) => {
                const complete = index < currentStep;
                const active = index === currentStep;

                return (
                  <div key={step.key} className="flex items-center gap-4">
                    <div
                      className={`flex h-8 w-8 shrink-0 items-center justify-center border ${
                        complete || active
                          ? "border-primary bg-primary text-primary-foreground"
                          : "border-border text-muted"
                      }`}
                    >
                      {complete ? (
                        <Check size={15} strokeWidth={2.5} />
                      ) : (
                        <span className="text-xs font-bold">{index + 1}</span>
                      )}
                    </div>

                    <span
                      className={`text-sm ${
                        active || complete
                          ? "font-bold text-foreground"
                          : "text-muted"
                      }`}
                    >
                      {step.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </section>
        )}

        {/* Driver */}
        <section className="mt-5 border border-border bg-surface">
          <div className="border-b border-border p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-muted">
              Your driver
            </p>
          </div>

          <div className="p-6">
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center border border-border">
                <UserRound
                  size={25}
                  strokeWidth={1.6}
                  className="text-muted"
                />
              </div>

              <div className="min-w-0">
                <h2 className="font-bold">Jean Claude</h2>

                <p className="mt-1 text-sm text-muted">
                  Verified Umusaâre driver
                </p>
              </div>

              {!isCompleted && (
                <a
                  href="tel:+250000000000"
                  aria-label="Call driver"
                  className="ml-auto flex h-11 w-11 shrink-0 items-center justify-center border border-border text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
                >
                  <Phone size={18} strokeWidth={1.8} />
                </a>
              )}
            </div>

            <div className="mt-6 flex items-center gap-4 border-t border-border pt-6">
              <CarFront
                size={22}
                strokeWidth={1.7}
                className="shrink-0 text-primary"
              />

              <div>
                <p className="text-sm font-bold">Toyota Corolla</p>

                <p className="mt-1 text-xs text-muted">
                  RAB 123A · White
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Route */}
        <section className="mt-5 border border-border bg-surface">
          <div className="border-b border-border p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-muted">
              Your route
            </p>
          </div>

          <div className="p-6">
            <div className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="mt-1 h-3 w-3 bg-primary" />

                <div className="my-2 h-10 w-px bg-border" />

                <div className="h-3 w-3 border border-foreground" />
              </div>

              <div className="flex-1 space-y-6">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-muted">
                    Pickup
                  </p>

                  <p className="mt-1 text-sm font-semibold">
                    Kigali Convention Centre
                  </p>
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-muted">
                    Destination
                  </p>

                  <p className="mt-1 text-sm font-semibold">
                    Kimihurura
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Completed trip details */}
        {isCompleted && (
          <>
            <section className="mt-5 border border-border bg-surface">
              <div className="border-b border-border p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-muted">
                  Trip summary
                </p>
              </div>

              <div className="divide-y divide-border">
                <div className="flex items-center justify-between gap-5 p-6">
                  <div className="flex items-center gap-3">
                    <Clock3
                      size={19}
                      strokeWidth={1.8}
                      className="text-muted"
                    />

                    <span className="text-sm text-muted">
                      Trip duration
                    </span>
                  </div>

                  <span className="text-sm font-bold">34 min</span>
                </div>

                <div className="flex items-center justify-between gap-5 p-6">
                  <div className="flex items-center gap-3">
                    <MapPin
                      size={19}
                      strokeWidth={1.8}
                      className="text-muted"
                    />

                    <span className="text-sm text-muted">
                      Distance
                    </span>
                  </div>

                  <span className="text-sm font-bold">11.8 km</span>
                </div>

                <div className="flex items-center justify-between gap-5 p-6">
                  <span className="text-sm font-semibold">Total</span>

                  <span className="text-xl font-extrabold">
                    RWF 8,500
                  </span>
                </div>
              </div>
            </section>

            {/* Payment */}
            <section className="mt-5 border border-border bg-surface p-6">
              <div className="flex items-start justify-between gap-5">
                <div>
                  <p className="text-sm font-bold">Payment</p>

                  <p className="mt-1 text-xs text-muted">
                    Trip payment status
                  </p>
                </div>

                <PaymentStatusBadge status={paymentStatus} />
              </div>
            </section>

            {/* Review */}
            <section className="mt-5 border border-border bg-surface">
              <div className="border-b border-border p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-muted">
                  Your driver
                </p>

                <h2 className="mt-2 text-lg font-bold">
                  How was your trip?
                </h2>

                <p className="mt-1 text-sm leading-6 text-muted">
                  Your feedback helps us maintain a trusted driver network.
                </p>
              </div>

              <div className="p-6">
                {reviewSubmitted ? (
                  <div className="border border-primary/30 p-5">
                    <div className="flex items-start gap-3">
                      <Check
                        size={19}
                        strokeWidth={2.2}
                        className="mt-0.5 shrink-0 text-primary"
                      />

                      <div>
                        <p className="text-sm font-bold">
                          Thanks for your feedback.
                        </p>

                        <p className="mt-1 text-xs leading-5 text-muted">
                          Your review has been recorded.
                        </p>
                      </div>
                    </div>
                  </div>
                ) : (
                  <>
                    <div
                      className="flex gap-2"
                      aria-label="Rate your driver"
                    >
                      {[1, 2, 3, 4, 5].map((value) => (
                        <button
                          key={value}
                          type="button"
                          aria-label={`${value} star${
                            value === 1 ? "" : "s"
                          }`}
                          onClick={() => setRating(value)}
                          className="flex h-11 w-11 items-center justify-center border border-border transition-colors hover:border-primary"
                        >
                          <Star
                            size={20}
                            strokeWidth={1.7}
                            className={
                              value <= rating
                                ? "fill-primary text-primary"
                                : "text-muted"
                            }
                          />
                        </button>
                      ))}
                    </div>

                    <textarea
                      value={review}
                      onChange={(event) => setReview(event.target.value)}
                      rows={4}
                      maxLength={300}
                      placeholder="Tell us about your experience (optional)"
                      className="mt-5 w-full resize-none border border-border bg-background p-4 text-sm leading-6 outline-none transition-colors placeholder:text-muted focus:border-primary"
                    />

                    <button
                      type="button"
                      disabled={!rating}
                      onClick={handleReviewSubmit}
                      className="mt-4 flex h-12 w-full items-center justify-center bg-primary text-sm font-extrabold text-primary-foreground transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-40"
                    >
                      Submit review
                    </button>
                  </>
                )}
              </div>
            </section>
          </>
        )}

        {/* Safety */}
        <section className="mt-7 flex items-start gap-3">
          <ShieldCheck
            size={19}
            strokeWidth={1.8}
            className="mt-0.5 shrink-0 text-primary"
          />

          <p className="text-xs leading-5 text-muted">
            Your trip information is recorded securely as part of your
            Umusaâre trip history.
          </p>
        </section>

        {/* Actions */}
        {isCompleted && (
          <Link
            href="/client"
            className="mt-8 flex h-14 w-full items-center justify-center bg-primary text-sm font-extrabold text-primary-foreground transition-opacity hover:opacity-90"
          >
            Back to dashboard
          </Link>
        )}
      </div>
    </main>
  );
}

function PaymentStatusBadge({
  status,
}: {
  status: PaymentStatus;
}) {
  const labels: Record<PaymentStatus, string> = {
    PENDING: "Payment pending",
    PAID: "Paid",
    FAILED: "Payment failed",
    REFUNDED: "Refunded",
  };

  const styles: Record<PaymentStatus, string> = {
    PENDING: "border-border text-muted",
    PAID: "border-success/40 text-success",
    FAILED: "border-danger/40 text-danger",
    REFUNDED: "border-border text-muted",
  };

  return (
    <span
      className={`border px-3 py-1.5 text-xs font-bold ${styles[status]}`}
    >
      {labels[status]}
    </span>
  );
}