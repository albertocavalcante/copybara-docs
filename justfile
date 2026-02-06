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
    bun dev

# Build for production
build:
    bun build

# Preview production build locally
preview: build
    bun preview

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
