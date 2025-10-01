'use client';

import { Sun, Moon } from 'lucide-react';
import useTheme from '@/lib/useTheme';
import { motion } from 'framer-motion';

export const ThemeButton = () => {
	const { isDark, toggleTheme } = useTheme();

	return (
		<div className='fixed top-0 right-0 z-30 p-3'>
			<button
				onClick={toggleTheme}
				className='relative w-14 h-7 rounded-full shadow-xl bg-white/95 dark:bg-gray-600 transition-colors duration-300 flex items-center cursor-pointer p-1 m-3'>
				<motion.div
					className='absolute size-5 bg-gray-400 rounded-full flex items-center justify-center'
					animate={{ x: isDark ? 28 : 0 }}
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
