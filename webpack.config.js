import WebpackPwaManifest from 'webpack-pwa-manifest';

plugins: [
	new WebpackPwaManifest({
		name: 'Calculator Progressive Web App',
		short_name: 'CPWA',
		description:
			'Frontend Mentor challenge on an Calculator Progressive Web App',
		crossorigin: 'use-credentials',
		icons: [
			{
				src: path.resolve('src/Assets/Images/logo-x.png'),
				sizes: [96, 128, 192, 256, 384, 512],
			},
			{
				src: path.resolve('src/Assets/Images/large-icon.png'),
				size: '1024x1024',
			},
			{
				src: path.resolve('src/Assets/Images/maskable-icon.png'),
				size: '1024x1024',
				purpose: 'maskable',
			},
		],
	}),
];
