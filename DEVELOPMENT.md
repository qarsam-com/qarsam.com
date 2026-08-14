# Development Guide

## Commands
- `npm run dev` — start the local development server.
- `npm run lint` — run ESLint with zero warnings allowed.
- `npm run build` — create the production build.

## Architecture
- App Router lives in `src/app`.
- Shared UI components live in `src/components/ui`.
- Layout primitives live in `src/components/layout`.
- Shared hooks and form utilities live in `src/lib`.
- Shared type definitions live in `src/types`.

## Component Principles
- Prefer Server Components; add `"use client"` only when hooks/browser APIs are required.
- Keep components composable and variant-driven.
- Use `cn()` for all class merging.
- Preserve semantic HTML and keyboard accessibility.

## Validation
Run `npm run lint` and `npm run build` before merging changes.
