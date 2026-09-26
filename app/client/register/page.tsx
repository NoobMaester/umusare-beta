"use client";

import Link from "next/link";
import { ArrowLeft, Eye, EyeOff, LockKeyhole, Mail, Phone, User } from "lucide-react";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation"

export default function ClientRegisterPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const [success, setSuccess] = useState("");

  const router = useRouter();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (password !== confirmPassword) {
      setError("Password do not match");
      return;
    }

    setError("");
    setSuccess("");
    setIsLoading(true);

    try {
      const response = await fetch(
        "http://localhost:4400/api/auth/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            firstName,
            lastName,
            email,
            phone,
            password,
          }),
        }
      );

      const data = await response.json();

      console.log("auth response:", {
        status: response.status,
        data,
      })

      if (!response.ok) {
        throw new Error(data.message || "Registration failed");
      }

      setSuccess("Account created seccessfully. Redirecting to sign in...")

      setFirstName("");
      setLastName("");
      setEmail("");
      setPhone("");
      setPassword("");
      setConfirmPassword("");

      setTimeout(() => {
        router.push("/client/login");
      }, 3000);

    } catch (error) {
      setError(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again."
      );
      setIsLoading(false);
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
        <section className="flex flex-1 flex-col justify-center py-12">
          <div className="mb-9">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.16em] text-primary">
              Create account
            </p>

            <h1 className="max-w-sm text-4xl font-extrabold leading-[1.05] tracking-[-0.04em] sm:text-5xl">
              Le&apos;s get you home safely.
            </h1>

            <p className="mt-5 max-w-sm text-base leading-7 text-muted">
              Create your Umusaâre account to request a trusted driver when
              you shouldn&apos;t drive.
            </p>
          </div>


          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Name */}
            <div>
              <label
                htmlFor="firstName"
                className="mb-2 block text-sm font-semibold"
              >
                First name
              </label>

              <div className="relative">
                <User
                  size={18}
                  strokeWidth={1.8}
                  className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-muted"
                />

                <input
                  id="firsName"
                  name="firstName"
                  type="text"
                  autoComplete="firstName"
                  placeholder="Your first name"
                  value={firstName}
                  onChange={(event) => setFirstName(event.target.value)}
                  required
                  className="h-14 w-full border border-border bg-surface pl-12 pr-4 text-sm text-foreground outline-none transition-colors placeholder:text-muted focus:border-primary"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="lastName"
                className="mb-2 block text-sm font-semibold"
              >
                Last name
              </label>

              <div className="relative">
                <User
                  size={18}
                  strokeWidth={1.8}
                  className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-muted"
                />

                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  autoComplete="lastName"
                  placeholder="Your last name"
                  value={lastName}
                  onChange={(event) => setLastName(event.target.value)}
                  required
                  className="h-14 w-full border border-border bg-surface pl-12 pr-4 text-sm text-foreground outline-none transition-colors placeholder:text-muted focus:border-primary"
                />
              </div>
            </div>

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
            {/* Phone */}
            <div>
              <label
                htmlFor="phone"
                className="mb-2 block text-sm font-semibold"
              >
                Phone number
              </label>

              <div className="relative">
                <Phone
                  size={18}
                  strokeWidth={1.8}
                  className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-muted"
                />

                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  autoComplete="phone"
                  placeholder="+2507000000"
                  value={phone}
                  onChange={(event) => setPhone(event.target.value)}
                  required
                  className="h-14 w-full border border-border bg-surface pl-12 pr-4 text-sm text-foreground outline-none transition-colors placeholder:text-muted focus:border-primary"
                />
              </div>
            </div>
            {/* Password */}
            <div>
              <label
                htmlFor="password"
                className="mb-2 block text-sm font-semibold"
              >
                Password
              </label>

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
                  autoComplete="new-password"
                  placeholder="Create a password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  required
                  minLength={8}
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
                    <Eye size={18} strokeWidth={1.8} />
                  ) : (
                    <EyeOff size={18} strokeWidth={1.8} />
                  )}
                </button>
              </div>

              <p className="mt-2 text-xs text-muted">
                Use at least 8 characters.
              </p>
            </div>

            {/* Confirm password */}
            <div>
              <label
                htmlFor="confirmPassword"
                className="mb-2 block text-sm font-semibold"
              >
                Confirm password
              </label>

              <div className="relative">
                <LockKeyhole
                  size={18}
                  strokeWidth={1.8}
                  className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-muted"
                />

                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  autoComplete="new-password"
                  placeholder="Enter your password again"
                  value={confirmPassword}
                  onChange={(event) =>
                    setConfirmPassword(event.target.value)
                  }
                  required
                  minLength={8}
                  className="h-14 w-full border border-border bg-surface pl-12 pr-12 text-sm text-foreground outline-none transition-colors placeholder:text-muted focus:border-primary"
                />

                <button
                  type="button"
                  onClick={() =>
                    setShowConfirmPassword((current) => !current)
                  }
                  aria-label={
                    showConfirmPassword
                      ? "Hide password"
                      : "Show password"
                  }
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-muted transition-colors hover:text-foreground"
                >
                  {showConfirmPassword ? (
                    <Eye size={18} strokeWidth={1.8} />
                  ) : (
                    <EyeOff size={18} strokeWidth={1.8} />
                  )}
                </button>
              </div>
            </div>

            {/* Submit */}
            {error && (
              <div
                role="alert"
                className="border border-danger/40 bg-danger/10 px-4 py-3 text-sm text-danger"
              >
                {error}
              </div>
            )}


            {success && (
              <div
                role="status"
                className="border border-success/40 bg-success/10 px-4 py-3 text-sm text-success"
              >
                {success}
              </div>
            )}

            <button
              type="submit"
              disabled={isLoading}
              className="flex h-14 w-full items-center cursor-pointer justify-center bg-primary px-6 text-sm font-extrabold text-primary-foreground transition-opacity hover:opacity-90"
            >
              {isLoading ? "Creating account..." : "Create account"}
            </button>

            <p className="text-center text-xs leading-5 text-muted">
              By creating an account, you agree to use Umusaâre responsibly
              and provide accurate information.
            </p>
          </form>

          {/* Login */}
          <div className="mt-8 border-t border-border pt-7 text-center">
            <p className="text-sm text-muted">
              Already have an account?{" "}
              <Link
                href="/client/login"
                className="font-bold text-primary hover:underline"
              >
                Sign in
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