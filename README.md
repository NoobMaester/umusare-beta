# Umusaâre

> **The safe way home.**

Umusaâre is a mobile-first driver-safety platform that connects people who should not or cannot drive with trusted drivers who can safely take them and their vehicle home.

The core idea is simple:

**When you shouldn't drive, don't.**

Your car stays with you. You don't have to drive it.

## Project Status

Early-stage MVP / product build.

The current work focuses on:

- Public landing page
- Client experience
- Driver experience
- Super Admin experience
- Authentication
- Driver verification
- Driver requests and trip lifecycle
- Payments and reviews

## Product Structure

```text
/
├── Client
│   ├── Registration
│   ├── Dashboard
│   ├── Request a driver
│   ├── Active trip
│   ├── Trip history
│   ├── Vehicles
│   └── Profile
│
├── Driver
│   ├── Registration / application
│   ├── Verification
│   ├── Dashboard
│   ├── Availability
│   ├── Incoming requests
│   ├── Active trip
│   └── Earnings
│
└── Super Admin
    ├── Drivers
    ├── Clients
    ├── Requests / trips
    ├── Payments
    └── Reviews
```

## Tech Stack

### Frontend

- Next.js
- TypeScript
- Tailwind CSS
- Lucide React
- Manrope

### Backend

- Express
- TypeScript
- Prisma
- PostgreSQL

### Development

- npm
- Git / GitHub
- Vercel

## Design Direction

Umusaâre is intentionally designed to avoid the visual language of generic ride-hailing apps and SaaS dashboards.

### Brand principles

- Trustworthy
- Calm
- Mature
- Safety-focused
- Modern
- Distinctive
- Human

### Visual system

The initial interface uses:

- Charcoal / near-black background
- Warm off-white text
- Electric lime as the primary accent
- Flat surfaces
- Crisp borders
- Strong typography
- Minimal animation
- Generous spacing

Brand colors are defined centrally in `app/globals.css` so the visual system can be changed without hunting through individual components.

### Icons

Umusaâre uses **Lucide React** for interface icons.

No emoji icons, improvised icon shapes, or generic icon substitutions.

## Core Product Flow

### Client

```text
Register
   ↓
Request driver
   ↓
Searching
   ↓
Driver assigned
   ↓
Driver arriving
   ↓
Driver arrived
   ↓
Trip in progress
   ↓
Trip completed
   ↓
Payment
   ↓
Review
```

### Driver

```text
Apply
   ↓
Verification pending
   ↓
Approved
   ↓
Go online
   ↓
Receive request
   ↓
Accept
   ↓
Arrive
   ↓
Start trip
   ↓
Complete trip
   ↓
Earnings
```

## Request States

```text
PENDING
SEARCHING
ACCEPTED
DRIVER_ARRIVING
DRIVER_ARRIVED
IN_PROGRESS
COMPLETED
```

A request can also be cancelled before completion where applicable.

## Payment States

```text
PENDING
PAID
FAILED
REFUNDED
```

## MVP Scope

The first version intentionally avoids unnecessary complexity.

### Included

- Client registration and authentication
- Driver applications
- Driver approval
- Driver availability
- Driver requests
- Trip lifecycle
- Vehicle information
- Payments
- Reviews
- Super Admin management

### Not included in the MVP

- Surge pricing
- AI matching
- Subscriptions
- Referral programs
- Corporate accounts
- Multiple-city operations
- Team accounts
- Advanced analytics
- Wallet system
- In-app chat
- Sophisticated live GPS tracking
- Automated driver payouts
- Promo codes

These can be evaluated later based on real product needs.

## Getting Started

Clone the repository and install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

## Environment Variables

Create a local environment file when backend integration is enabled:

```text
.env.local
```

Environment variables should never be committed to the repository.

## Project Principles

This project is being built as a real product, not as a disposable demo.

That means:

- Build the simplest version that solves the actual problem.
- Prefer clear architecture over unnecessary abstraction.
- Keep the interface intentional.
- Don't add features just because they are common in similar apps.
- Don't copy the visual identity of existing ride-hailing platforms.
- Keep brand decisions centralized and easy to change.
- Build mobile-first because the product's primary use case is mobile.
- Make safety and accountability part of the product itself, not just marketing copy.

## License

This project is currently private and proprietary.

All rights reserved.
