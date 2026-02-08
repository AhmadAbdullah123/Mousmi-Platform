# Mousmi Platform (Frontend)

Arabic-first frontend for the Mousmi platform (Individuals, Organizations, and Admin). Built with Next.js App Router, TypeScript, Tailwind, and shadcn/ui.

## Requirements

- Node.js 18+ (recommended)
- npm (or pnpm/yarn)

## Install

```bash
npm install
```

## Run (Development)

```bash
npm run dev
```

App runs at http://localhost:3000

## Scripts

- `npm run dev` - local dev server
- `npm run build` - production build
- `npm run start` - run production build
- `npm run lint` - lint (requires eslint installed)

## Main Routes

### Public

- `/` - Landing page
- `/signin` - Unified sign in (Individuals / Organizations)
- `/signup` - Unified sign up (Individuals / Organizations)

### Individual Platform

- `/platform/[platform]/jobs`
- `/platform/[platform]/profile`
- `/platform/[platform]/history`
- `/platform/[platform]/settings`

### Organization Platform

- `/platform/[platform]/org/dashboard`
- `/platform/[platform]/org/profile`
- `/platform/[platform]/org/employees`
- `/platform/[platform]/org/jobs`
- `/platform/[platform]/org/settings`

### Admin Panel

- `/admin/signin`
- `/admin/dashboard`
- `/admin/organizations`
- `/admin/settings`

## Platforms

Supported platform slugs:

- `hajj`
- `coop`
- `entertainment`

Example: `/platform/hajj/jobs`

## Admin Mock Credentials

Admin login is UI-only (mock).

- Email: `admin@mosmi.sa`
- Password: `Admin123`

## Notes

- All forms and admin actions are UI-only (no backend integration yet).
- RTL is enabled globally.
- Organization sidebar has platform switching buttons only for Individuals.

## Handoff Pointers (Backend)

- Forms to wire: `/signin`, `/signup`
- Organization review actions: `/admin/organizations`
- Jobs / Employees management: `/platform/[platform]/org/*`

If you need an API contract draft, tell me and I can add one.