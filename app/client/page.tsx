"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import {
  ArrowRight,
  CarFront,
  Clock3,
  LogOut,
  MapPin,
  ShieldCheck,
  UserRound,
} from "lucide-react";

interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  role: string;
}


export default function ClientDashboardPage() {

  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const router = useRouter();


  useEffect(() => {
    async function loadUser() {
      try {
        const response = await fetch(
          "http://localhost:4400/api/auth/me",
          {
            credentials: "include",
          }
        );

        if (!response.ok) {
          router.push("/client/login");
          return;
        }

        const data = await response.json();

        setUser(data.user);
      } catch (error) {
        console.error("Failed to load authenticated user:", error);
        router.push("/client/login");
      } finally {
        setIsLoading(false);
      }
    }

    loadUser();
  }, [router]);

  async function handleLogout() {
    try {
      await fetch("http://localhost:4400/api/auth/logout", {
        method: "POST",
        credentials: "include",
      });
    } catch (error) {
      console.error("Logout failed:", error);
    } finally {
      router.push("/client/login");
    }
  }

  if (isLoading) {
    return (
      <main className="min-h-screen bg-background text-foreground">
        <div className="flex min-h-screen items-center justify-center">
          <p className="text-sm text-muted">
            Loading your account...
          </p>
        </div>
      </main>
    );
  }
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="border-b border-border">
        <div className="mx-auto flex h-16 w-full max-w-5xl items-center justify-between px-5 sm:px-8">
          <Link
            href="/client"
            className="text-sm font-extrabold tracking-[0.16em]"
          >
            UMUSAÂRE
          </Link>

          <nav className="flex items-center gap-5">
            <Link
              href="/client/profile"
              aria-label="Profile"
              className="text-muted transition-colors hover:text-foreground"
            >
              <UserRound size={19} strokeWidth={1.8} />
            </Link>

            <button
              type="button"
              aria-label="Log out"
              className="cursor-pointer text-muted transition-colors hover:text-foreground"
              onClick={handleLogout}
            >
              <LogOut size={19} strokeWidth={1.8} />
            </button>
          </nav>
        </div>
      </header>

      {/* Content */}
      <div className="mx-auto w-full max-w-5xl px-5 py-10 sm:px-8 sm:py-14">
        {/* Greeting */}
        <section className="mb-10">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-primary">
            Good to see you, {user?.firstName}
          </p>

          <h1 className="text-3xl font-extrabold tracking-[-0.035em] sm:text-4xl">
            Where are you heading?
          </h1>

          <p className="mt-3 max-w-xl text-sm leading-6 text-muted sm:text-base">
            When you shouldn&apos;t drive, don&apos;t. Request a trusted driver and
            bring yourself and your vehicle home safely.
          </p>
        </section>

        {/* Main request */}
        <section className="border border-border bg-surface">
          <div className="p-6 sm:p-8">
            <div className="mb-8 flex items-start justify-between gap-6">
              <div>
                <p className="text-lg font-bold">Need a driver?</p>

                <p className="mt-2 max-w-md text-sm leading-6 text-muted">
                  Tell us where you are and where you&apos;re going. We&apos;ll help
                  match you with an available driver.
                </p>
              </div>

              <div className="hidden h-11 w-11 shrink-0 items-center justify-center border border-border sm:flex">
                <CarFront
                  size={21}
                  strokeWidth={1.7}
                  className="text-primary"
                />
              </div>
            </div>

            <Link
              href="/client/request"
              className="group flex min-h-14 w-full items-center justify-between bg-primary px-5 text-sm font-extrabold text-primary-foreground transition-opacity hover:opacity-90 sm:w-auto sm:min-w-64"
            >
              <span>Request a driver</span>

              <ArrowRight
                size={19}
                strokeWidth={2}
                className="transition-transform duration-200 group-hover:translate-x-1"
              />
            </Link>
          </div>
        </section>

        {/* Quick information */}
        <section className="mt-8 grid gap-px border border-border bg-border sm:grid-cols-3">
          <InfoItem
            icon={<MapPin size={19} strokeWidth={1.8} />}
            title="Your location"
            value="Set when requesting"
          />

          <InfoItem
            icon={<CarFront size={19} strokeWidth={1.8} />}
            title="Your vehicle"
            value="Not added yet"
            href="/client/profile"
          />

          <InfoItem
            icon={<Clock3 size={19} strokeWidth={1.8} />}
            title="Past trips"
            value="View your history"
            href="/client/trips"
          />
        </section>

        {/* Safety */}
        <section className="mt-10 border-t border-border pt-8">
          <div className="flex items-start gap-4">
            <ShieldCheck
              size={21}
              strokeWidth={1.7}
              className="mt-0.5 shrink-0 text-primary"
            />

            <div>
              <p className="text-sm font-bold">Your safety comes first.</p>

              <p className="mt-2 max-w-2xl text-sm leading-6 text-muted">
                Umusaâre drivers are verified before they can accept client
                requests. Your vehicle stays with you throughout the trip.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

function InfoItem({
  icon,
  title,
  value,
  href,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
  href?: string;
}) {
  const content = (
    <div className="flex min-h-28 flex-col justify-between bg-surface p-5">
      <div className="text-muted">{icon}</div>

      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.12em] text-muted">
          {title}
        </p>

        <p
          className={`mt-1 text-sm font-semibold ${href ? "text-primary" : "text-foreground"
            }`}
        >
          {value}
        </p>
      </div>
    </div>
  );

  if (href) {
    return (
      <Link href={href} className="transition-opacity hover:opacity-80">
        {content}
      </Link>
    );
  }

  return content;
}