import {
  BadgeCheck,
  CarFront,
  ShieldCheck,
  UserCheck,
} from "lucide-react";

const safetyFeatures = [
  {
    icon: UserCheck,
    title: "Driver verification",
    description:
      "Drivers go through an approval process before they can accept trips on the platform.",
  },
  {
    icon: ShieldCheck,
    title: "Safety comes first",
    description:
      "The service is designed around responsible driving and getting everyone home safely.",
  },
  {
    icon: CarFront,
    title: "Your vehicle stays with you",
    description:
      "Umusaâre is built around a simple promise: your car gets home with you, not left behind.",
  },
  {
    icon: BadgeCheck,
    title: "A trusted network",
    description:
      "Clients and drivers build accountability through completed trips and reviews.",
  },
];

export default function SafetySection() {
  return (
    <section id="safety" className="border-t border-border bg-surface">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
        <div className="grid gap-16 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-primary">
              Safety & trust
            </p>

            <h2 className="max-w-xl text-3xl font-bold tracking-tight text-surface-foreground sm:text-4xl lg:text-5xl">
              When someone takes the wheel, trust matters.
            </h2>

            <p className="mt-6 max-w-lg text-base leading-7 text-muted sm:text-lg">
              Umusaâre is designed to make every trip feel accountable,
              transparent, and focused on getting you home safely.
            </p>
          </div>

          <div className="grid border-l border-t border-border sm:grid-cols-2">
            {safetyFeatures.map((feature) => {
              const Icon = feature.icon;

              return (
                <article
                  key={feature.title}
                  className="border-b border-r border-border p-7 sm:p-8"
                >
                  <div className="flex h-11 w-11 items-center justify-center border border-border bg-background text-primary">
                    <Icon size={21} strokeWidth={1.8} />
                  </div>

                  <h3 className="mt-7 text-lg font-semibold text-surface-foreground">
                    {feature.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-muted">
                    {feature.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}