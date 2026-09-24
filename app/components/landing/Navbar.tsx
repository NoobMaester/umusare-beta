"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/90 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
        <Link
          href="/"
          onClick={closeMenu}
          className="text-xl font-bold tracking-tight text-foreground"
        >
          UMUSA&Acirc;RE
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          <a
            href="#how-it-works"
            className="text-sm text-muted transition-colors hover:text-foreground"
          >
            How it works
          </a>

          <a
            href="#safety"
            className="text-sm text-muted transition-colors hover:text-foreground"
          >
            Safety
          </a>

          <a
            href="/driver/login"
            className="text-sm text-muted transition-colors hover:text-foreground"
          >
            For Drivers
          </a>


          <Link
            href="/client/login"
            className="bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
          >
            I Need a Driver
          </Link>
        </nav>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="flex h-10 w-10 items-center justify-center border border-border text-foreground lg:hidden"
        >
          <span className="sr-only">
            {open ? "Close menu" : "Open menu"}
          </span>

          <div className="flex w-5 flex-col gap-1.5">
            <span
              className={`block h-px w-full bg-current transition-transform ${
                open ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`block h-px w-full bg-current transition-opacity ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-px w-full bg-current transition-transform ${
                open ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </div>
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col px-6 py-5">
            <a
              href="#how-it-works"
              onClick={closeMenu}
              className="border-b border-border py-4 text-sm text-muted"
            >
              How it works
            </a>

            <a
              href="#safety"
              onClick={closeMenu}
              className="border-b border-border py-4 text-sm text-muted"
            >
              Safety
            </a>

            <a
              href="/driver/login"
              onClick={closeMenu}
              className="border-b border-border py-4 text-sm text-muted"
            >
              For Drivers
            </a>

            <Link
              href="/client/login"
              onClick={closeMenu}
              className="mt-5 bg-primary px-5 py-3 text-center text-sm font-semibold text-primary-foreground"
            >
              I Need a Driver
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}