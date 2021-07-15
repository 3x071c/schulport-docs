const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
	baseUrl: '/',
	favicon: 'img/favicon.ico',
	onBrokenLinks: 'throw',
	onBrokenMarkdownLinks: 'warn',
	organizationName: '3x071c',
	plugins: ['@docusaurus/plugin-ideal-image'],
	presets: [
		[
			'@docusaurus/preset-classic',
			{
				blog: {
					editUrl: 'https://github.com/3x071c/schulport-docs/edit/master/website/blog/',
					showReadingTime: true,
				},
				docs: {
					editUrl: 'https://github.com/3x071c/schulport-docs/edit/master/website/',
					sidebarPath: require.resolve('./sidebars.js'),
				},
				theme: {
					customCss: require.resolve('./src/css/custom.css'),
				},
			},
		],
	],
	projectName: 'schulport-docs',
	tagline: 'The app that enables pupils to check important dates, events, homework, substitution schedules, and more',
	themeConfig: {
		footer: {
			copyright: `Copyright © ${new Date().getFullYear()} Victor Homic`,
			links: [
				{
					items: [
						{
							label: 'Introduction',
							to: '/docs/intro',
						},
					],
					title: 'Documentation',
				},
				{
					items: [
						{
							label: 'Blog',
							to: '/blog',
						},
						{
							href: 'https://github.com/3x071c/schulport-docs',
							label: 'GitHub',
						},
					],
					title: 'More',
				},
			],
			style: 'dark',
		},
		navbar: {
			items: [
				{
					docId: 'intro',
					label: 'Documentation',
					position: 'left',
					type: 'doc',
				},
				{
					label: 'Blog',
					position: 'left',
					to: '/blog',
				},
				{
					href: 'https://github.com/3x071c/schulport-docs',
					label: 'GitHub',
					position: 'right',
				},
			],
			logo: {
				alt: 'My Site Logo',
				src: 'img/logo.svg',
			},
			title: 'Schulport',
		},
		prism: {
			darkTheme: darkCodeTheme,
			theme: lightCodeTheme,
		},
	},
	themes: ['@docusaurus/theme-live-codeblock'],
	title: 'Schulport Documentation',
	url: 'https://docs.schulport.com',
};
