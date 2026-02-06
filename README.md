# Copybara Documentation

> **Unofficial community documentation** for [Google Copybara](https://github.com/google/copybara) - the code transformation and synchronization tool.

## Disclaimer

This is **not official documentation**. It is a community-maintained resource created to help users understand and use Copybara. For official information, please refer to:

- [Official Copybara Repository](https://github.com/google/copybara)
- [Official Reference Documentation](https://github.com/google/copybara/blob/master/docs/reference.md)
- [Official Examples](https://github.com/google/copybara/blob/master/docs/examples.md)

## Overview

Copybara is Google's tool for transforming and moving code between repositories. This documentation covers:

- **Getting Started** - Installation, quick start, core concepts
- **Workflows** - SQUASH, ITERATIVE, CHANGE_REQUEST modes
- **Origins & Destinations** - Git, GitHub, Gerrit integrations
- **Transformations** - Moving files, replacing text, filtering content
- **Use Cases** - Open sourcing, importing, mirroring, monorepo extraction
- **CI/CD** - GitHub Actions, authentication, automation patterns
- **Reference** - CLI, core module, git module, metadata

## Development

```bash
# Install dependencies
bun install

# Start dev server
bun dev

# Build for production
bun build

# Preview production build
bun preview
```

## Contributing

This documentation is maintained at [github.com/albertocavalcante/copybara-docs](https://github.com/albertocavalcante/copybara-docs).

Contributions are welcome! Please open an issue or pull request.

## Acknowledgements

- **[Copybara](https://github.com/google/copybara)** is developed by Google and licensed under the [Apache License 2.0](https://github.com/google/copybara/blob/master/LICENSE).
- This documentation site is built with [Astro Starlight](https://starlight.astro.build/).
- Starlark syntax highlighting uses the grammar from [bazelbuild/vscode-bazel](https://github.com/bazelbuild/vscode-bazel).

## License

This documentation is licensed under [MIT](LICENSE).

Copybara itself is licensed under [Apache License 2.0](https://www.apache.org/licenses/LICENSE-2.0) by Google.
