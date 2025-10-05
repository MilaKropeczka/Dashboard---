import { useEffect, useState } from 'react';

export default function useTheme() {
	const getDarkMode = () => {
		if (typeof window === 'undefined') return false;
		const stored = localStorage.getItem('theme');
		const prefersDark = window.matchMedia(
			'(prefers-color-scheme: dark)'
		).matches;
		return stored === 'dark' || (!stored && prefersDark);
	};

	const [isDark, setIsDark] = useState(getDarkMode);

	useEffect(() => {
		const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
		const updateTheme = () => {
			const dark = getDarkMode();
			document.documentElement.classList.toggle('dark', dark);
			setIsDark(dark);
		};

		updateTheme();
		mediaQuery.addEventListener('change', updateTheme);
		window.addEventListener('storage', updateTheme);

		return () => {
			mediaQuery.removeEventListener('change', updateTheme);
			window.removeEventListener('storage', updateTheme);
		};
	}, []);

	const toggleTheme = () => {
		const newTheme = !isDark;
		document.documentElement.classList.toggle('dark', newTheme);
		localStorage.setItem('theme', newTheme ? 'dark' : 'light');
		setIsDark(newTheme);
		window.dispatchEvent(new Event('storage'));
	};

	return { isDark, toggleTheme };
}
