# AGENTS.md

Copybara Documentation - Starlight-based docs site.

## Commands

```bash
bun install      # Install dependencies
bun dev          # Start dev server at localhost:4321
bun build        # Build for production
bun preview      # Preview production build
```

## Setup (Run Once After Clone)

```bash
lefthook install   # Install git hooks
```

## Rules

1. **Git**: `git branch --show-current` before commit. `git add <file>` explicitly.
2. **Formatting**: Run `dprint fmt` before commit.
3. **Build**: Run `bun build` to verify changes.

## Repository Layout

| Path                    | Purpose                        |
| ----------------------- | ------------------------------ |
| `src/content/docs/`     | Documentation pages (MDX)      |
| `src/assets/`           | Images and static assets       |
| `public/`               | Public static files            |
| `astro.config.ts`       | Astro/Starlight configuration  |
| `.github/workflows/`    | CI/CD workflows                |
