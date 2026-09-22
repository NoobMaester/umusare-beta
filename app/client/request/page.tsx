"use client";

import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  CarFront,
  ChevronDown,
  MapPin,
  Navigation,
  ShieldCheck,
} from "lucide-react";
import { FormEvent, useState } from "react";

const vehicles = [
  {
    id: "vehicle-1",
    label: "Toyota Corolla",
    details: "RAB 123A",
  },
  {
    id: "vehicle-2",
    label: "Toyota RAV4",
    details: "RAC 456B",
  },
];

export default function RequestDriverPage() {
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const [vehicle, setVehicle] = useState("");
  const [note, setNote] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    // Request API will be connected here.
    console.log({
      pickup,
      destination,
      vehicle,
      note,
    });
  }

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

      <div className="mx-auto w-full max-w-3xl px-5 py-9 sm:px-8 sm:py-12">
        {/* Intro */}
        <section className="mb-9">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-primary">
            Request a driver
          </p>

          <h1 className="text-3xl font-extrabold tracking-[-0.035em] sm:text-4xl">
            Tell us where you&apos;re going.
          </h1>

          <p className="mt-3 max-w-xl text-sm leading-6 text-muted sm:text-base">
            We&apos;ll use these details to find an available Umusaâre driver for
            you.
          </p>
        </section>

        <form onSubmit={handleSubmit}>
          {/* Route */}
          <section className="border border-border bg-surface">
            <div className="border-b border-border p-6 sm:p-7">
              <div className="flex items-center gap-3">
                <Navigation
                  size={19}
                  strokeWidth={1.8}
                  className="text-primary"
                />

                <h2 className="text-base font-bold">Your route</h2>
              </div>
            </div>

            <div className="space-y-6 p-6 sm:p-7">
              {/* Pickup */}
              <div>
                <label
                  htmlFor="pickup"
                  className="mb-2 block text-sm font-semibold"
                >
                  Pickup location
                </label>

                <div className="relative">
                  <MapPin
                    size={18}
                    strokeWidth={1.8}
                    className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-primary"
                  />

                  <input
                    id="pickup"
                    name="pickup"
                    type="text"
                    placeholder="Where should the driver meet you?"
                    value={pickup}
                    onChange={(event) => setPickup(event.target.value)}
                    required
                    className="h-14 w-full border border-border bg-background pl-12 pr-4 text-sm outline-none transition-colors placeholder:text-muted focus:border-primary"
                  />
                </div>

                <button
                  type="button"
                  className="mt-2 inline-flex items-center gap-2 text-xs font-semibold text-primary hover:underline"
                  onClick={() => {
                    // GPS/location access will be connected here.
                  }}
                >
                  <Navigation size={14} strokeWidth={1.8} />
                  Use my current location
                </button>
              </div>

              {/* Destination */}
              <div>
                <label
                  htmlFor="destination"
                  className="mb-2 block text-sm font-semibold"
                >
                  Destination
                </label>

                <div className="relative">
                  <MapPin
                    size={18}
                    strokeWidth={1.8}
                    className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-muted"
                  />

                  <input
                    id="destination"
                    name="destination"
                    type="text"
                    placeholder="Where are you going?"
                    value={destination}
                    onChange={(event) => setDestination(event.target.value)}
                    required
                    className="h-14 w-full border border-border bg-background pl-12 pr-4 text-sm outline-none transition-colors placeholder:text-muted focus:border-primary"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Vehicle */}
          <section className="mt-5 border border-border bg-surface">
            <div className="border-b border-border p-6 sm:p-7">
              <div className="flex items-center gap-3">
                <CarFront
                  size={19}
                  strokeWidth={1.8}
                  className="text-primary"
                />

                <div>
                  <h2 className="text-base font-bold">Your vehicle</h2>

                  <p className="mt-1 text-xs text-muted">
                    The driver will drive this vehicle.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 sm:p-7">
              {vehicles.length > 0 ? (
                <div className="relative">
                  <select
                    id="vehicle"
                    name="vehicle"
                    value={vehicle}
                    onChange={(event) => setVehicle(event.target.value)}
                    required
                    className="h-14 w-full appearance-none border border-border bg-background px-4 pr-12 text-sm text-foreground outline-none transition-colors focus:border-primary"
                  >
                    <option value="" disabled>
                      Select a vehicle
                    </option>

                    {vehicles.map((item) => (
                      <option key={item.id} value={item.id}>
                        {item.label} — {item.details}
                      </option>
                    ))}
                  </select>

                  <ChevronDown
                    size={18}
                    strokeWidth={1.8}
                    className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-muted"
                  />
                </div>
              ) : (
                <div className="border border-border p-5">
                  <p className="text-sm font-semibold">
                    You haven&apos;t added a vehicle yet.
                  </p>

                  <p className="mt-2 text-sm leading-6 text-muted">
                    Add your vehicle before requesting a driver.
                  </p>

                  <Link
                    href="/client/profile"
                    className="mt-4 inline-flex text-sm font-bold text-primary hover:underline"
                  >
                    Add vehicle
                  </Link>
                </div>
              )}
            </div>
          </section>

          {/* Optional note */}
          <section className="mt-5 border border-border bg-surface">
            <div className="p-6 sm:p-7">
              <label
                htmlFor="note"
                className="block text-sm font-semibold"
              >
                Note for your driver{" "}
                <span className="font-normal text-muted">(optional)</span>
              </label>

              <textarea
                id="note"
                name="note"
                rows={4}
                maxLength={300}
                placeholder="Anything your driver should know?"
                value={note}
                onChange={(event) => setNote(event.target.value)}
                className="mt-3 w-full resize-none border border-border bg-background p-4 text-sm leading-6 outline-none transition-colors placeholder:text-muted focus:border-primary"
              />

              <p className="mt-2 text-xs text-muted">
                {note.length}/300
              </p>
            </div>
          </section>

          {/* Safety note */}
          <div className="mt-7 flex items-start gap-3">
            <ShieldCheck
              size={19}
              strokeWidth={1.8}
              className="mt-0.5 shrink-0 text-primary"
            />

            <p className="text-xs leading-5 text-muted">
              Your vehicle stays with you. The assigned driver will drive you
              and your vehicle to your destination.
            </p>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="group mt-8 flex h-14 w-full items-center justify-between bg-primary px-5 text-sm font-extrabold text-primary-foreground transition-opacity hover:opacity-90"
          >
            <span>Request a driver</span>

            <ArrowRight
              size={19}
              strokeWidth={2}
              className="transition-transform duration-200 group-hover:translate-x-1"
            />
          </button>
        </form>
      </div>
    </main>
  );
}