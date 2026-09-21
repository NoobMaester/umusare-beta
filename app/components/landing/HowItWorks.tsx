import {
  CarFront,
  CircleCheck,
  UserRound,
} from "lucide-react";

const steps = [
  {
    number: "01",
    icon: CarFront,
    title: "Tell us where you are",
    description:
      "Request a driver from wherever you are. Add your vehicle and destination so we know exactly what you need.",
  },
  {
    number: "02",
    icon: UserRound,
    title: "A driver comes to you",
    description:
      "We connect you with an approved Umusaâre driver who can safely drive you and your vehicle home.",
  },
  {
    number: "03",
    icon: CircleCheck,
    title: "Get home safely",
    description:
      "Your driver takes the wheel. You arrive at your destination with your vehicle safely with you.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="border-t border-border bg-surface">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
        <div className="max-w-2xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-primary">
            How it works
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-surface-foreground sm:text-4xl lg:text-5xl">
            Getting home safely should be simple.
          </h2>

          <p className="mt-6 text-base leading-7 text-muted sm:text-lg">
            Umusaâre takes care of the part that matters most: getting you,
            your vehicle, and everyone around you home safely.
          </p>
        </div>

        <div className="mt-16 grid gap-px overflow-hidden border border-border bg-border lg:grid-cols-3">
          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <article
                key={step.number}
                className="group bg-surface p-8 transition-colors duration-200 hover:bg-background sm:p-10"
              >
                <div className="flex items-start justify-between">
                  <div className="flex h-12 w-12 items-center justify-center border border-border bg-background text-primary">
                    <Icon size={22} strokeWidth={1.8} />
                  </div>

                  <span className="font-mono text-sm text-muted">
                    {step.number}
                  </span>
                </div>

                <h3 className="mt-10 text-xl font-semibold text-surface-foreground">
                  {step.title}
                </h3>

                <p className="mt-4 text-sm leading-6 text-muted sm:text-base">
                  {step.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}