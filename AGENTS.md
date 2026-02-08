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

## Starlight Conventions

### No H1 Headings in Content

Starlight automatically renders the frontmatter `title` as the page's H1 heading. **Do not add `# Heading` in MDX content** - it creates duplicates.

Per [Starlight's authoring guide](https://starlight.astro.build/guides/authoring-content/):

> "We recommend starting each page with regular paragraph text content and using on-page headings from `<h2>` and down."

**Correct:**

```mdx
---
title: My Page Title
---

Introduction paragraph text here.

## First Section
```

**Wrong:**

```mdx
---
title: My Page Title
---

# My Page Title   ← DON'T DO THIS

Introduction text.
```

## Known Limitations

### MDX Code Blocks Inside Tabs Components

The dprint/prettier formatter **cannot correctly format MDX files** that contain fenced code blocks inside `<Tabs>` / `<TabItem>` components. The formatter breaks indentation and merges multi-line code into single lines.

**Affected files** are excluded in `dprint.json` under the `excludes` array.

**Related issues:**

- [dprint-plugin-markdown#93](https://github.com/dprint/dprint-plugin-markdown/issues/93) - MDX support
- [prettier#15740](https://github.com/prettier/prettier/issues/15740) - Code blocks after components
- [mdx-js/mdx#1476](https://github.com/mdx-js/mdx/issues/1476) - Code blocks in nested components

**When editing these files:**

- Code blocks must start at column 0 (no indentation) even inside `<TabItem>`
- Leave empty lines before/after code blocks inside components
- Manually format with consistent indentation (4 spaces for Starlark/bash)
- Run `bun build` to verify MDX parses correctly

## Repository Layout

| Path                 | Purpose                       |
| -------------------- | ----------------------------- |
| `src/content/docs/`  | Documentation pages (MDX)     |
| `src/assets/`        | Images and static assets      |
| `public/`            | Public static files           |
| `astro.config.ts`    | Astro/Starlight configuration |
| `.github/workflows/` | CI/CD workflows               |
