'use client';

import { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';
import { motion } from 'framer-motion';
import useTheme from '@/hooks/useTheme';

export const ThemeButton = () => {
	const { isDark, toggleTheme } = useTheme();
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) return null;

	return (
		<div className='fixed top-0 right-0 z-30 p-3'>
			<button
				onClick={toggleTheme}
				className='relative w-18 h-9 md:w-14 md:h-7 rounded-full shadow-xl bg-white/95 dark:bg-gray-600 transition-colors duration-300 flex items-center cursor-pointer p-1 m-3'>
				<motion.div
					className='absolute size-7 md:size-5 bg-gray-400 rounded-full flex items-center justify-center'
					animate={{ x: isDark ? 'calc(100% + 8px)' : 0 }}
					transition={{
						type: 'spring',
						stiffness: 500,
						damping: 30,
					}}>
					{isDark ? (
						<Sun className='size-3' />
					) : (
						<Moon className='text-white/95 size-3' />
					)}
				</motion.div>
			</button>
		</div>
	);
};
