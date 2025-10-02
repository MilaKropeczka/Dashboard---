import { useEffect, useState } from 'react';

export default function useTheme() {
	const [isDark, setIsDark] = useState(false);

	useEffect(() => {
		const checkTheme = () => {
			const stored = localStorage.getItem('theme');
			const prefersDark = window.matchMedia(
				'(prefers-color-scheme: dark)'
			).matches;
			const dark = stored === 'dark' || (!stored && prefersDark);
			setIsDark(dark);
		};

		const handleStorageChange = () => {
			checkTheme();
		};

		const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
		mediaQuery.addEventListener('change', checkTheme);

		checkTheme();

		window.addEventListener('storage', handleStorageChange);

		return () => {
			mediaQuery.removeEventListener('change', checkTheme);
			window.removeEventListener('storage', handleStorageChange);
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
