import { getLocalColorScheme, setLocalColorScheme } from './StorageService';

export const getColorScheme = () => {
	const preferDarkScheme =
		window.matchMedia &&
		window.matchMedia('(prefers-color-scheme: dark)').matches;

	let finalColorScheme = undefined;
	const localColorScheme = getLocalColorScheme(); //@return String|null

	localColorScheme !== null
		? (finalColorScheme = localColorScheme)
		: (finalColorScheme = preferDarkScheme ? 'dark' : 'neutral');

	return finalColorScheme;
};

export const updateColorScheme = newColor => {
	document.documentElement.setAttribute('data-theme', newColor);
	setLocalColorScheme(newColor);
};
