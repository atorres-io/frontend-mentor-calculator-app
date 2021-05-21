import WebpackPwaManifest from 'webpack-pwa-manifest';

plugins: [
	new WebpackPwaManifest({
		name: 'Calculator Progressive Web App',
		short_name: 'CPWA',
		description:
			'Frontend Mentor challenge on an Calculator Progressive Web App',
		crossorigin: 'use-credentials', //can be null, use-credentials or anonymous
		icons: [
			{
				src: path.resolve('src/Assets/Images/logoX.png'),
				sizes: [96, 128, 192, 256, 384, 512], // multiple sizes
			},
			{
				src: path.resolve('src/Assets/Images/large-icon.png'),
				size: '1024x1024', // you can also use the specifications pattern
			},
			{
				src: path.resolve('src/Assets/Images/maskable-icon.png'),
				size: '1024x1024',
				purpose: 'maskable',
			},
		],
	}),
];
