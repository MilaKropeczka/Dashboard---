import { useEffect, useState } from 'react';

export default function useThemeToggle() {
	const [isDark, setIsDark] = useState(false);

	useEffect(() => {
		const root = document.documentElement;
		const stored = localStorage.getItem('theme');
		const prefersDark = window.matchMedia(
			'(prefers-color-scheme: dark)'
		).matches;
		const dark = stored === 'dark' || (!stored && prefersDark);
		root.classList.toggle('dark', dark);
		setIsDark(dark);
	}, []);

	const toggleTheme = () => {
		const root = document.documentElement;
		const newTheme = !isDark;
		root.classList.toggle('dark', newTheme);
		localStorage.theme = newTheme ? 'dark' : 'light';
		setIsDark(newTheme);
	};

	return { isDark, toggleTheme };
}
