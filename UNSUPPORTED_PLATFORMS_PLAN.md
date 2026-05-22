# Plan: Documentation for Non-First-Class Git Platforms

## Objective

Create documentation to help users work with Git platforms that don't have first-class Copybara support (like Bitbucket, Codeberg, Gitea, Azure DevOps, etc.).

## First-Class Supported Platforms

| Platform    | Origin                | Destination                | PR/MR/CL                                     |
| ----------- | --------------------- | -------------------------- | -------------------------------------------- |
| Generic Git | `git.origin()`        | `git.destination()`        | No                                           |
| GitHub      | `git.github_origin()` | `git.github_destination()` | `git.github_pr_destination()`                |
| GitLab      | `git.gitlab_origin()` | -                          | `git.gitlab_mr_destination()` (experimental) |
| Gerrit      | `git.gerrit_origin()` | `git.gerrit_destination()` | Built-in (CLs)                               |

## Unsupported Platforms to Cover

### Tier 1 (Most Popular)

- **Bitbucket Cloud** - Atlassian hosted, REST API v2
- **Bitbucket Server/Data Center** - Self-hosted, different API
- **Azure DevOps / Azure Repos** - Microsoft, REST API

### Tier 2 (Self-Hosted / OSS)

- **Gitea** - Lightweight, GitHub-like API
- **Forgejo** - Gitea fork, same API
- **Gogs** - Predecessor to Gitea
- **Codeberg** - Hosted Forgejo instance
- **GitBucket** - Scala-based GitHub clone

### Tier 3 (Enterprise / Niche)

- **AWS CodeCommit** - AWS Git hosting
- **Phabricator/Phorge** - Uses Differential (Arcanist)
- **RhodeCode** - Enterprise
- **Sourcehut (sr.ht)** - Minimalist, email-based workflow

---

## Approaches to Document

### Approach 1: Generic Git (Direct Push)

**Works for:** ALL platforms
**Limitations:** No PR/MR creation, bypasses code review

```starlark
# Works with ANY Git server
origin = git.origin(
    url = "https://bitbucket.org/org/repo.git",
    ref = "main",
)
destination = git.destination(
    url = "https://bitbucket.org/org/other-repo.git",
    push = "main",
)
```

**Pros:**

- Universal compatibility
- Simple configuration
- Works with SSH and HTTPS

**Cons:**

- No PR/MR creation
- Bypasses code review
- May violate branch protection policies

**Use cases:**

- Mirror between platforms
- Push to unprotected branches
- Internal sync where review isn't required

---

### Approach 2: Push to Feature Branch + Manual PR

**Works for:** ALL platforms
**Effort:** Low (manual step required)

```starlark
destination = git.destination(
    url = "https://bitbucket.org/org/repo.git",
    push = "copybara/sync-latest",  # Feature branch, not main
)
```

Then manually create PR in the platform's UI.

**Pros:**

- Simple
- Works with any platform
- Respects code review

**Cons:**

- Manual PR creation step
- Not fully automated

**Use cases:**

- Low-frequency syncs
- When human oversight is desired anyway

---

### Approach 3: Push to Branch + Platform CLI

**Works for:** Platforms with CLIs (Bitbucket, Azure DevOps, GitHub, GitLab)
**Effort:** Medium

```bash
# Copybara pushes to branch
java -jar copybara.jar migrate copy.bara.sky sync

# Then create PR via platform CLI
# Bitbucket Cloud
pip install bitbucket-cli
bb pr create --source copybara/sync --dest main --title "Sync"

# Azure DevOps
az repos pr create --source-branch copybara/sync --target-branch main

# Gitea (tea CLI)
tea pr create --head copybara/sync --base main
```

**Pros:**

- Scriptable
- Uses official tools
- Can be wrapped in CI

**Cons:**

- Requires additional tooling
- Two-step process
- Platform-specific scripts

---

### Approach 4: HTTP Endpoint with Custom API Calls

**Works for:** Any platform with REST API
**Effort:** High (requires Starlark coding)

```starlark
def _create_bitbucket_pr(ctx):
    response = ctx.destination.post(
        url = "https://api.bitbucket.org/2.0/repositories/org/repo/pullrequests",
        headers = {"Content-Type": "application/json"},
        body = http.json({
            "title": "Sync from source",
            "source": {"branch": {"name": "copybara/sync"}},
            "destination": {"branch": {"name": "main"}},
        }),
    )
    return ctx.success() if response.status_code == 201 else ctx.error("PR creation failed")

core.feedback(
    name = "create_pr",
    origin = ...,  # Trigger on push
    destination = http.endpoint(
        hosts = [
            http.host(
                host = "api.bitbucket.org",
                auth = http.bearer_auth(
                    creds = credentials.static_secret("bb_token", "BITBUCKET_TOKEN"),
                ),
            ),
        ],
    ),
    actions = [core.action(impl = _create_bitbucket_pr)],
)
```

**Pros:**

- Fully integrated with Copybara
- Can be triggered automatically
- Works with any REST API

**Cons:**

- Complex Starlark code
- Need to understand platform API
- Harder to debug

**Platform API Documentation:**

- Bitbucket Cloud: https://developer.atlassian.com/cloud/bitbucket/rest/
- Bitbucket Server: https://docs.atlassian.com/bitbucket-server/rest/
- Azure DevOps: https://docs.microsoft.com/en-us/rest/api/azure/devops/git/
- Gitea: https://docs.gitea.io/en-us/api-usage/

---

### Approach 5: Webhook + External Automation

**Works for:** Any platform with webhooks
**Effort:** Medium-High

```
[Copybara] --push--> [Branch] --webhook--> [CI System] --API--> [Create PR]
```

Example with GitHub Actions (even for non-GitHub destinations):

```yaml
# Triggered by branch push
on:
  push:
    branches: ["copybara/**"]

jobs:
  create-pr:
    runs-on: ubuntu-latest
    steps:
      - name: Create Bitbucket PR
        run: |
          curl -X POST \
            -H "Authorization: Bearer ${{ secrets.BITBUCKET_TOKEN }}" \
            -H "Content-Type: application/json" \
            -d '{"title":"Sync","source":{"branch":{"name":"${{ github.ref_name }}"}},"destination":{"branch":{"name":"main"}}}' \
            https://api.bitbucket.org/2.0/repositories/org/repo/pullrequests
```

**Pros:**

- Separation of concerns
- Use existing CI infrastructure
- Easier to debug and modify

**Cons:**

- Requires CI setup
- More moving parts
- Delayed PR creation (async)

---

### Approach 6: API Proxy/Translation Layer

**Works for:** Platforms with compatible API structure
**Effort:** Very High (requires running a service)

**Concept:** Run a proxy that translates GitHub API calls to the target platform's API.

**Existing projects:**

- gitea-github-migrator (limited)
- Custom nginx/Caddy reverse proxy with request transformation

**Example architecture:**

```
[Copybara] --GitHub API--> [Proxy] --Bitbucket API--> [Bitbucket]
```

**Pros:**

- Could use `git.github_pr_destination()` as-is
- Single configuration change (URL)

**Cons:**

- Requires running additional infrastructure
- Complex to implement correctly
- API differences may cause issues
- Security considerations

**Verdict:** Generally not recommended unless you have specific expertise and infrastructure.

---

### Approach 7: Post-Migration Script Wrapper

**Works for:** ALL platforms
**Effort:** Low-Medium

```bash
#!/bin/bash
# sync-with-pr.sh

# Run Copybara
java -jar copybara.jar migrate copy.bara.sky sync

# Check if changes were pushed
if git ls-remote --exit-code origin copybara/sync; then
    # Create PR using platform-specific method
    case "$PLATFORM" in
        bitbucket)
            curl -X POST ... # Bitbucket API
            ;;
        azure)
            az repos pr create ...
            ;;
        gitea)
            curl -X POST ... # Gitea API
            ;;
    esac
fi
```

**Pros:**

- Simple shell scripting
- Easy to understand and modify
- No Copybara changes needed

**Cons:**

- External to Copybara
- Need to handle error cases
- Less integrated

---

### Approach 8: Fork to Supported Platform

**Works for:** When you control the workflow
**Effort:** Medium

```
[Source] --Copybara--> [GitHub Mirror] --native PR--> [GitHub]
                             |
                             v
                     [Sync to Bitbucket via git push]
```

**Pros:**

- Uses Copybara's full PR capabilities
- Review happens on supported platform

**Cons:**

- Adds intermediary repository
- More complex topology
- May not be acceptable for security/compliance

---

## Platform-Specific Notes

### Bitbucket Cloud

**API Base:** `https://api.bitbucket.org/2.0`

**Create PR:**

```bash
curl -X POST \
  -H "Authorization: Bearer $TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "title": "Sync from source",
    "source": {"branch": {"name": "copybara/sync"}},
    "destination": {"branch": {"name": "main"}}
  }' \
  https://api.bitbucket.org/2.0/repositories/{workspace}/{repo}/pullrequests
```

**CLI:** `bitbucket-cli` (pip install) or Atlassian's official tools

### Bitbucket Server/Data Center

**API Base:** `https://your-server.com/rest/api/1.0`

**Create PR:**

```bash
curl -X POST \
  -H "Authorization: Bearer $TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "title": "Sync from source",
    "fromRef": {"id": "refs/heads/copybara/sync"},
    "toRef": {"id": "refs/heads/main"}
  }' \
  https://your-server.com/rest/api/1.0/projects/{project}/repos/{repo}/pull-requests
```

### Azure DevOps

**API Base:** `https://dev.azure.com/{organization}/{project}/_apis`

**Create PR:**

```bash
curl -X POST \
  -H "Authorization: Basic $(echo -n :$PAT | base64)" \
  -H "Content-Type: application/json" \
  -d '{
    "sourceRefName": "refs/heads/copybara/sync",
    "targetRefName": "refs/heads/main",
    "title": "Sync from source"
  }' \
  "https://dev.azure.com/{org}/{project}/_apis/git/repositories/{repo}/pullrequests?api-version=7.0"
```

**CLI:** `az repos pr create`

### Gitea / Forgejo / Codeberg

**API Base:** `https://your-instance.com/api/v1` (or `https://codeberg.org/api/v1`)

**Create PR:**

```bash
curl -X POST \
  -H "Authorization: token $TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "title": "Sync from source",
    "head": "copybara/sync",
    "base": "main"
  }' \
  https://codeberg.org/api/v1/repos/{owner}/{repo}/pulls
```

**CLI:** `tea` (Gitea CLI)

### AWS CodeCommit

**Note:** CodeCommit doesn't have PRs - uses AWS CodeGuru Reviewer or third-party tools.

**Workaround:** Use AWS CodePipeline to trigger Lambda that creates PR in another system.

---

## Recommended Approach by Use Case

| Use Case                  | Recommended Approach                                     |
| ------------------------- | -------------------------------------------------------- |
| One-time/rare sync        | Approach 2 (Manual PR)                                   |
| Regular automated sync    | Approach 5 (Webhook + CI) or Approach 7 (Wrapper Script) |
| Fully integrated solution | Approach 4 (HTTP Endpoint)                               |
| Simple mirror (no review) | Approach 1 (Direct Push)                                 |
| Enterprise with resources | Approach 6 (Proxy) - only if justified                   |

---

## Documentation Structure (Proposed)

### Option A: Single comprehensive page

`/guides/unsupported-platforms.mdx`

### Option B: Multiple pages

- `/guides/unsupported-platforms/overview.mdx` - Approaches summary
- `/guides/unsupported-platforms/bitbucket.mdx` - Bitbucket specific
- `/guides/unsupported-platforms/azure-devops.mdx` - Azure specific
- `/guides/unsupported-platforms/gitea.mdx` - Gitea/Forgejo/Codeberg
- `/guides/unsupported-platforms/generic.mdx` - General patterns

### Option C: Add to existing pages

- Add "Other Platforms" section to `/endpoints/overview.mdx`
- Add platform-specific snippets to relevant pages

---

## Questions for Decision

1. **Depth vs. Breadth:** Cover many platforms briefly, or few platforms deeply?

2. **Working examples:** Should we include tested, working API call examples for each platform?

3. **Starlark examples:** Include full http.endpoint() examples for each platform?

4. **CI examples:** Include GitHub Actions/GitLab CI examples for each platform?

5. **Scope:** Include enterprise platforms (Phabricator, RhodeCode) or focus on common ones?

6. **Maintenance:** How to keep platform API examples up-to-date?

---

## Implementation Notes

- All approaches use `git.origin()` and `git.destination()` as the foundation
- PR creation is always a separate step (push first, then create PR)
- Token/credential management is critical for all approaches
- Error handling and idempotency should be emphasized
