"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowLeft, Eye, EyeOff, LockKeyhole, Mail } from "lucide-react";
import { FormEvent, useState } from "react";


export default function ClientLoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("");

  const router = useRouter();

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setError(error);
    setIsLoading(!isLoading)

    try{
      const response = await fetch("http://localhost:4400/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({
          email,
          password
        }),
      });

      const data = await response.json();
      
      

      if(!response.ok){
        throw new Error(data.message || "Login failed");
      }
      router.push("/client");
    } catch (error){
      setError(
        error instanceof Error
        ? error.message
        : "Something went wrong. Please try again"
      )
    }
  }

  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="mx-auto flex min-h-screen w-full max-w-md flex-col px-6 py-6">
        {/* Header */}
        <header className="flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-foreground"
          >
            <ArrowLeft size={17} strokeWidth={1.8} />
            Back
          </Link>

          <Link
            href="/"
            className="text-sm font-extrabold tracking-[0.16em] text-foreground"
          >
            UMUSAÂRE
          </Link>
        </header>

        {/* Main */}
        <section className="flex flex-1 flex-col justify-center py-16">
          <div className="mb-10">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.16em] text-primary">
              Client
            </p>

            <h1 className="max-w-sm text-4xl font-extrabold leading-[1.05] tracking-[-0.04em] sm:text-5xl">
              Welcome back.
            </h1>

            <p className="mt-5 max-w-sm text-base leading-7 text-muted">
              Sign in to request a driver and get yourself and your vehicle
              home safely.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-semibold"
              >
                Email address
              </label>

              <div className="relative">
                <Mail
                  size={18}
                  strokeWidth={1.8}
                  className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-muted"
                />

                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  required
                  className="h-14 w-full border border-border bg-surface pl-12 pr-4 text-sm text-foreground outline-none transition-colors placeholder:text-muted focus:border-primary"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <div className="mb-2 flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-semibold"
                >
                  Password
                </label>

                <Link
                  href="/client/forgot-password"
                  className="text-sm font-semibold text-primary hover:underline"
                >
                  Forgot password?
                </Link>
              </div>

              <div className="relative">
                <LockKeyhole
                  size={18}
                  strokeWidth={1.8}
                  className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-muted"
                />

                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="current-password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  required
                  className="h-14 w-full border border-border bg-surface pl-12 pr-12 text-sm text-foreground outline-none transition-colors placeholder:text-muted focus:border-primary"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword((current) => !current)}
                  aria-label={
                    showPassword ? "Hide password" : "Show password"
                  }
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-muted transition-colors hover:text-foreground"
                >
                  {showPassword ? (
                    <EyeOff size={18} strokeWidth={1.8} />
                  ) : (
                    <Eye size={18} strokeWidth={1.8} />
                  )}
                </button>
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="flex h-14 w-full items-center justify-center bg-primary px-6 text-sm font-extrabold text-primary-foreground transition-opacity hover:opacity-90"
            >
              Sign in
            </button>
          </form>

          {/* Register */}
          <div className="mt-8 border-t border-border pt-7 text-center">
            <p className="text-sm text-muted">
              Don&apos;t have an account?{" "}
              <Link
                href="/client/register"
                className="font-bold text-primary hover:underline"
              >
                Create one
              </Link>
            </p>
          </div>
        </section>

        {/* Footer */}
        <footer className="pb-2 text-center">
          <p className="text-xs text-muted">
            Your car stays with you. You don&apos;t have to drive it.
          </p>
        </footer>
      </div>
    </main>
  );
}