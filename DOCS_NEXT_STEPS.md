# Documentation Next Steps

Living document tracking documentation improvements. Updated as work progresses.

---

## Completed ✓

### High Priority (All Done)

- [x] **Troubleshooting by Symptom Index** - Error quick-reference table in common-issues.mdx
- [x] **Missing Modules** - archive, patch, buildozer documented
- [x] **Performance Guide** - JVM, globs, caching, benchmarks

### Medium Priority (All Done)

- [x] **GitLab CI** - Full pipeline examples in cicd/gitlab-ci.mdx
- [x] **State Management** - GitOrigin-RevId, recovery, multi-workflow
- [x] **Metadata Module** - scrubber, verify_match, map_references
- [x] **Advanced Use Cases** - multi-target, vendor, rollout, cross-org
- [x] **Module Index** - Quick reference tables in reference/index.mdx
- [x] **Community Resources** - Blog posts, company examples, production configs
- [x] **FAQ Page** - 20+ questions with links to original threads/issues
- [x] **Syntax Highlighting** - .gitattributes trick for GitHub

### Previous Session

- [x] Fixed duplicate H1 headings (59 pages)
- [x] Rewrote authentication page
- [x] Added unsupported platforms (Bitbucket, Azure DevOps, Gitea)
- [x] Expanded glossary, authoring, glob references
- [x] Added utility modules (re2, datetime, hashing, html, python)

---

## In Progress

Nothing currently in progress.

---

## Future Ideas

### Documentation Improvements

1. **Quick Reference Card** - One-page cheat sheet for printing
2. **Jenkins Pipeline Examples** - Complement GitLab CI guide
3. **Troubleshooting Decision Tree** - Visual flowchart for common issues
4. **Migration Guides** - From git-filter-repo, git-subtree, etc.
5. **Configuration Validator** - Interactive config checker (if feasible)

### Content from Research

Based on community research, consider adding:

1. **OpenXLA Quirks Deep Dive** - Document the PR close vs merge behavior
2. **Gerrit Integration Guide** - Expand on CUE's Gerrit↔GitHub pattern
3. **Hasura Lessons Learned** - Multi-author attribution workarounds
4. **MongoDB Pattern** - Internal→public with scrubbing best practices

### New Use Cases

1. **Fork Maintenance** - Keeping forks synced with upstream + local patches
2. **License Header Management** - Adding/updating license headers during sync
3. **API Versioning** - Syncing different API versions to different branches
4. **Changelog Generation** - Auto-generating changelogs during sync

### Technical Deep Dives

1. **Transformation Ordering** - How transformation order affects results
2. **Regex Patterns Cookbook** - Common regex patterns for scrubbing
3. **Label Debugging** - How to debug label issues in commits
4. **Conflict Resolution** - Handling merge conflicts in bidirectional sync

### Integration Guides

1. **ArgoCD + Copybara** - GitOps with Copybara
2. **Terraform Modules** - Syncing Terraform between repos
3. **Helm Charts** - Chart distribution patterns
4. **Docker Registry** - Image build triggers from Copybara

---

## External Resources Found

### Company Examples (Production Configs)

| Company   | Repo                                                                                            | Pattern                        |
| --------- | ----------------------------------------------------------------------------------------------- | ------------------------------ |
| MongoDB   | [mongo/copy.bara.sky](https://github.com/mongodb/mongo/blob/master/copy.bara.sky)               | Internal→public with scrubbing |
| CUE       | [cue/_scripts/copy.bara.sky](https://github.com/cuelang/cue/blob/master/_scripts/copy.bara.sky) | Gerrit↔GitHub bidirectional    |
| WireQuery | [wirequery/copy.bara.sky](https://github.com/wirequery/wirequery/blob/main/copy.bara.sky)       | Open source sync               |

### Blog Posts & Articles

- [Kubesimplify: Moving code between GIT repositories](https://blog.kubesimplify.com/moving-code-between-git-repositories-with-copybara)
- [Hasura: CI/CD and the story of a monorepo](https://hasura.io/blog/building-hasura-ci-cd-and-the-story-of-a-monorepo)
- [OpenXLA: Copybara quirks](https://openxla.org/xla/copybara)
- [StackFoss Medium: Copybara overview](https://stackfoss.medium.com/copybara-a-tool-for-transforming-and-moving-code-between-repositories-315a75502f6d)

### Tools & Actions

- [Olivr/copybara-action](https://github.com/Olivr/copybara-action) - GitHub Actions integration
- [ittaiz/Copybara-sync-example](https://github.com/ittaiz/Copybara-sync-example) - Example repo

### Community

- [Copybara Google Group](https://groups.google.com/g/copybara-discuss) - Official mailing list
- [GitHub Issues](https://github.com/google/copybara/issues) - Bug reports and features

---

## Statistics

| Metric          | Count |
| --------------- | ----- |
| Total pages     | 72    |
| Reference pages | 18    |
| Guide pages     | 9     |
| Config pages    | 5     |
| Troubleshooting | 3     |
| Use case pages  | 6     |

Last updated: Current session
