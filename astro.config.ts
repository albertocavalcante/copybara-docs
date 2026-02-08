import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightLinksValidator from 'starlight-links-validator';
import sitemap from '@astrojs/sitemap';
import astroD2 from 'astro-d2';
import fs from 'node:fs';

// Load TextMate grammar for Starlark syntax highlighting
const starlarkGrammar = JSON.parse(
	fs.readFileSync(new URL('./starlark.tmLanguage.json', import.meta.url), 'utf-8')
);

export default defineConfig({
	site: 'https://copybara.hallucinatedocs.com',
	base: '/',

	integrations: [
		astroD2({
			theme: {
				default: '0', // Neutral Default (light)
				dark: '200', // Dark Mauve (dark)
			},
			pad: 20,
			layout: 'dagre',
		}),
		sitemap(),
		starlight({
			plugins: [
				starlightLinksValidator(),
			],
			title: 'Copybara Docs',
			description: 'Comprehensive documentation for Google Copybara - code transformation and sync tool',
			favicon: '/favicon.svg',
			lastUpdated: true,
			tableOfContents: { minHeadingLevel: 2, maxHeadingLevel: 3 },
			expressiveCode: {
				themes: ['github-dark', 'github-light'],
				shiki: {
					langs: [starlarkGrammar],
					langAlias: {
						bzl: 'starlark',
						bazel: 'starlark',
						bara: 'starlark',
						sky: 'starlark',
					},
				},
				styleOverrides: {
					borderRadius: '0.625rem',
					codeFontFamily: "'JetBrains Mono', 'SF Mono', 'Fira Code', ui-monospace, monospace",
					codeFontSize: '0.875rem',
					codeLineHeight: '1.65',
				},
			},
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/google/copybara' },
			],
			editLink: {
				baseUrl: 'https://github.com/albertocavalcante/copybara-docs/edit/main/',
			},
			sidebar: [
				{
					label: 'Getting Started',
					items: [
						{ label: 'Introduction', slug: 'getting-started/introduction' },
						{ label: 'Installation', slug: 'getting-started/installation' },
						{ label: 'Quick Start', slug: 'getting-started/quick-start' },
						{ label: 'Concepts', slug: 'getting-started/concepts' },
					],
				},
				{
					label: 'Guides',
					items: [
						{ label: 'Overview', slug: 'guides' },
						{ label: 'Hello World', slug: 'guides/hello-world' },
						{ label: 'Open Source a Project', slug: 'guides/open-source-project' },
						{ label: 'Sync Docs via PR', slug: 'guides/sync-docs-via-pr' },
					],
				},
				{
					label: 'Workflows',
					items: [
						{ label: 'Overview', slug: 'workflows/overview' },
						{ label: 'Workflow Modes', slug: 'workflows/modes' },
						{ label: 'CHANGE_REQUEST', slug: 'workflows/change-request' },
						{ label: 'SQUASH vs ITERATIVE', slug: 'workflows/squash-vs-iterative' },
						{ label: 'Feedback Workflows', slug: 'workflows/feedback' },
					],
				},
				{
					label: 'Origins & Destinations',
					items: [
						{ label: 'Overview', slug: 'endpoints/overview' },
						{ label: 'Git Origins', slug: 'endpoints/git-origins' },
						{ label: 'Git Destinations', slug: 'endpoints/git-destinations' },
						{ label: 'GitHub Integration', slug: 'endpoints/github' },
						{ label: 'GitLab Integration', slug: 'endpoints/gitlab' },
						{ label: 'Gerrit Integration', slug: 'endpoints/gerrit' },
						{ label: 'Folder Origin/Destination', slug: 'endpoints/folder' },
					],
				},
				{
					label: 'Transformations',
					items: [
						{ label: 'Overview', slug: 'transformations/overview' },
						{ label: 'Moving Files', slug: 'transformations/move' },
						{ label: 'Text Replacement', slug: 'transformations/replace' },
						{ label: 'Filtering & Verification', slug: 'transformations/filter' },
						{ label: 'Metadata', slug: 'transformations/metadata' },
						{ label: 'Custom Transformations', slug: 'transformations/custom' },
					],
				},
				{
					label: 'Configuration',
					items: [
						{ label: 'File Structure', slug: 'config/file-structure' },
						{ label: 'Glob Patterns', slug: 'config/glob-patterns' },
						{ label: 'Authoring', slug: 'config/authoring' },
						{ label: 'Labels & Markers', slug: 'config/labels' },
					],
				},
				{
					label: 'Use Cases',
					items: [
						{ label: 'Open Sourcing', slug: 'use-cases/open-sourcing' },
						{ label: 'Importing Contributions', slug: 'use-cases/importing' },
						{ label: 'Mirroring Repos', slug: 'use-cases/mirroring' },
						{ label: 'Monorepo Extraction', slug: 'use-cases/monorepo' },
						{ label: 'Documentation Sync', slug: 'use-cases/docs-sync' },
					],
				},
				{
					label: 'CI/CD Integration',
					items: [
						{ label: 'GitHub Actions', slug: 'cicd/github-actions' },
						{ label: 'Authentication', slug: 'cicd/authentication' },
						{ label: 'Automation Patterns', slug: 'cicd/automation' },
					],
				},
				{
					label: 'Reference',
					items: [
						{ label: 'Glossary', slug: 'reference/glossary' },
						{ label: 'CLI Reference', slug: 'reference/cli' },
						{ label: 'Core Module', slug: 'reference/core' },
						{ label: 'Git Module', slug: 'reference/git' },
						{ label: 'Metadata Module', slug: 'reference/metadata' },
						{ label: 'Authoring Module', slug: 'reference/authoring' },
						{ label: 'Remote Files Module', slug: 'reference/remotefiles' },
					{ label: 'HTTP Module', slug: 'reference/http' },
					{ label: 'Format Module', slug: 'reference/format' },
						{ label: 'Glob Reference', slug: 'reference/glob' },
					],
				},
				{
					label: 'Troubleshooting',
					items: [
						{ label: 'Common Issues', slug: 'troubleshooting/common-issues' },
						{ label: 'Debugging', slug: 'troubleshooting/debugging' },
					],
				},
			],
		}),
	],
});
