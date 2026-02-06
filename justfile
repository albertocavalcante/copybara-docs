# Copybara Documentation - Task Runner

# Default recipe: show available commands
default:
    @just --list

# Install dependencies
install:
    bun install

# Setup project (run once after clone)
setup: install
    lefthook install

# Start development server
dev:
    bun run dev

# Build for production
build:
    bun run build

# Preview production build locally
preview: build
    bun run preview

# Format code
fmt:
    dprint fmt

# Check formatting without modifying
fmt-check:
    dprint check

# Build and verify (pre-commit check)
check: fmt build

# Clean build artifacts
clean:
    rm -rf dist .astro
