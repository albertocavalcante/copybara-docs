# FAQ Source Verification

Tracking verification status for FAQ answers. Last verified: 2024-02-09.

## General

| Question               | Source                                                                                   | Status   | Notes                                                                |
| ---------------------- | ---------------------------------------------------------------------------------------- | -------- | -------------------------------------------------------------------- |
| Is Copybara stateless? | [Issue #196](https://github.com/google/copybara/issues/196)                              | VERIFIED | Direct collaborator quote                                            |
| Custom state label?    | [Mailing list](https://groups.google.com/g/copybara-discuss/c/h8bO8G0Udog) + source code | VERIFIED | Updated: `experimental_custom_rev_id` → `custom_rev_id` (deprecated) |
| Bidirectional sync?    | [Issue #140](https://github.com/google/copybara/issues/140)                              | VERIFIED | Issue still open, no official solution                               |

## Configuration

| Question               | Source                                                      | Status   | Notes                       |
| ---------------------- | ----------------------------------------------------------- | -------- | --------------------------- |
| Environment variables? | [Issue #125](https://github.com/google/copybara/issues/125) | VERIFIED | Three approaches documented |
| Split config files?    | [Issue #268](https://github.com/google/copybara/issues/268) | VERIFIED | `load()` is supported       |
| Config file naming?    | [Issue #127](https://github.com/google/copybara/issues/127) | VERIFIED | Requirement, not convention |

## Docker & CI

| Question               | Source                                                      | Status   | Notes                              |
| ---------------------- | ----------------------------------------------------------- | -------- | ---------------------------------- |
| Official Docker image? | [Issue #82](https://github.com/google/copybara/issues/82)   | VERIFIED | NO official image - community only |
| Docker CLI arguments?  | [Issue #158](https://github.com/google/copybara/issues/158) | VERIFIED | Use environment variables          |
| GitHub Actions?        | [Issue #123](https://github.com/google/copybara/issues/123) | VERIFIED | Community action available         |

## Authentication

| Question       | Source                                                                                                             | Status   | Notes              |
| -------------- | ------------------------------------------------------------------------------------------------------------------ | -------- | ------------------ |
| Deploy keys?   | [Issue #131](https://github.com/google/copybara/issues/131), [#264](https://github.com/google/copybara/issues/264) | VERIFIED | Multiple solutions |
| Private repos? | [Mailing list](https://groups.google.com/g/copybara-discuss/c/WlmBc6XlvSs)                                         | VERIFIED | SSH mount approach |

## Workflows & Testing

| Question         | Source                                                                                                                                                            | Status   | Notes                        |
| ---------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ---------------------------- |
| Test workflow?   | [Mailing list 3TOr1ExHReU](https://groups.google.com/g/copybara-discuss/c/3TOr1ExHReU), [1IImRPHnpHc](https://groups.google.com/g/copybara-discuss/c/1IImRPHnpHc) | VERIFIED | dry-run + folder.destination |
| Preview changes? | [Issue #43](https://github.com/google/copybara/issues/43)                                                                                                         | VERIFIED | folder.destination()         |

## Transformations

| Question                         | Source                                                      | Status   | Notes                        |
| -------------------------------- | ----------------------------------------------------------- | -------- | ---------------------------- |
| Overlay files?                   | [Issue #43](https://github.com/google/copybara/issues/43)   | VERIFIED | Two approaches documented    |
| Custom transformations examples? | [Issue #254](https://github.com/google/copybara/issues/254) | VERIFIED | MongoDB, CUE examples linked |

## Workflow Modes

| Question             | Source                                                      | Status   | Notes                      |
| -------------------- | ----------------------------------------------------------- | -------- | -------------------------- |
| SQUASH vs ITERATIVE? | [Issue #265](https://github.com/google/copybara/issues/265) | VERIFIED | Use case guidance provided |
| Merge commits?       | [Issue #99](https://github.com/google/copybara/issues/99)   | VERIFIED | Linear history by design   |

## File Selection

| Question                           | Source                                                                                                         | Status   | Notes                             |
| ---------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------- | --------------------------------- |
| origin_files vs destination_files? | [Issue #56](https://github.com/google/copybara/issues/56), [#75](https://github.com/google/copybara/issues/75) | VERIFIED | Common mistake documented         |
| Excluded files still copied?       | [Issue #56](https://github.com/google/copybara/issues/56)                                                      | VERIFIED | origin_files vs destination_files |

## Troubleshooting

| Question                | Source                                                                                                           | Status   | Notes                     |
| ----------------------- | ---------------------------------------------------------------------------------------------------------------- | -------- | ------------------------- |
| No changes to migrate?  | Common behavior                                                                                                  | VERIFIED | Documented solutions      |
| No new changes for ref? | [Issue #27](https://github.com/google/copybara/issues/27)                                                        | VERIFIED | --last-rev guidance       |
| Stuck on initial run?   | [Mailing list](https://groups.google.com/g/copybara-discuss/c/la2jAUxXqPo)                                       | VERIFIED | Large repo/network causes |
| Submodules?             | [Issue #84](https://github.com/google/copybara/issues/84), [#216](https://github.com/google/copybara/issues/216) | VERIFIED | Limited support           |

## Feature Requests

| Question                 | Source                                                      | Status   | Notes                         |
| ------------------------ | ----------------------------------------------------------- | -------- | ----------------------------- |
| GitLab/Bitbucket native? | [Issue #153](https://github.com/google/copybara/issues/153) | VERIFIED | Git works, no API integration |
| Force push?              | [Issue #136](https://github.com/google/copybara/issues/136) | VERIFIED | Not recommended               |

---

## Corrections Made (2024-02-09)

1. **custom_rev_id deprecation**: Updated from `experimental_custom_rev_id` to `custom_rev_id` with deprecation notice
2. **Docker image**: Corrected to state NO official image exists (Issue #82 still open)
3. **Config splitting**: Confirmed `load()` IS supported (Issue #268)
4. **Config naming**: Clarified it's a requirement, not convention (Issue #127)
