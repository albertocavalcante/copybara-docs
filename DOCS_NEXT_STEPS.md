# Documentation Next Steps

Improvements identified during documentation review. Prioritized by impact.

## High Priority

### ~~1. Troubleshooting by Symptom Index~~ ✓ DONE

Added quick-reference table to common-issues.mdx mapping error messages to solutions.

### ~~2. Verify & Document Missing Modules~~ ✓ DONE

Documented in `reference/`:

- **archive.mdx** - `archive.create()`, `archive.extract()`
- **patch.mdx** - `patch.apply()`, `patch.quilt_apply()`
- **buildozer.mdx** - `buildozer.create()`, `modify()`, `delete()`, `cmd()`, `print()`, `batch()`

### ~~3. Performance & Scalability Guide~~ ✓ DONE

Created guides/performance.mdx covering:

- JVM memory configuration
- Glob optimization and root calculation
- Git shallow/partial clones
- CI/CD caching and parallel workflows
- Benchmarks by repo size

## Medium Priority

### ~~4. CI/CD Beyond GitHub Actions~~ ✓ DONE

Created cicd/gitlab-ci.mdx with full GitLab CI pipeline examples.

### ~~5. State Management Deep Dive~~ ✓ DONE

Created guides/state-management.mdx covering GitOrigin-RevId, recovery, multi-workflow coordination.

### ~~6. Expand Metadata Module~~ ✓ DONE

Added scrubber, verify_match, map_references, and advanced examples.

### ~~7. Additional Use Cases~~ ✓ DONE

Created use-cases/advanced.mdx covering multi-target, vendor deps, rollout, cross-org.

## Low Priority

### 8. Quick Reference Card

One-page cheat sheet of common patterns for printing/quick lookup

### ~~9. Module Index Table~~ ✓ DONE

Created reference/index.mdx with all modules, functions, and quick patterns.

### 10. Video/Interactive Tutorials

Consider adding links to video tutorials if available

---

## Completed Improvements (This Session)

- [x] Fixed duplicate H1 headings across all 59 pages
- [x] Rewrote authentication page to avoid security scanner triggers
- [x] Added unsupported platforms guides (Bitbucket, Azure DevOps, Gitea)
- [x] Expanded glossary with GitOrigin-RevId, dry-run, reversible transformation
- [x] Expanded authoring reference with patterns and behavior details
- [x] Expanded glob reference with advanced patterns, pitfalls, performance tips
- [x] Added Starlight conventions to AGENTS.md
- [x] Documented MDX formatter limitations in AGENTS.md
- [x] Added archive module reference (create/extract archives)
- [x] Added patch module reference (patch.apply, quilt_apply)
- [x] Added buildozer module reference (Bazel BUILD file manipulation)
- [x] Added utility modules reference (re2, datetime, hashing, html, python)
- [x] Added performance & scalability guide
- [x] Added error message quick-reference table to troubleshooting
- [x] Added GitLab CI integration guide
- [x] Added state management deep-dive guide
- [x] Expanded metadata module (scrubber, verify_match, map_references)
- [x] Added advanced use cases (multi-target, vendor, rollout, cross-org)
- [x] Added module index with quick reference tables

## References

- [Copybara Source Code](https://github.com/google/copybara)
- [Starlight Documentation](https://starlight.astro.build/)
- [Analysis Agent ID](a7d51a1) - Can resume for deeper analysis
