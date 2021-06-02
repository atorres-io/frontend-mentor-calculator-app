export const getLocalColorScheme = () => localStorage.getItem('colorScheme');

export const setLocalColorScheme = color => {
	localStorage.setItem('colorScheme', color);
};
