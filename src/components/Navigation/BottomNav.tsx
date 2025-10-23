'use client';

import { useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { FiMoreHorizontal, FiX } from 'react-icons/fi';
import { bottomMenu, sideMenu } from './menuConfig';
import React from 'react';

export default function BottomNav() {
	const [open, setOpen] = useState(false);
	const router = useRouter();
	const pathname = usePathname();

	const iconClasses = (isActive: boolean, originalClass: string) =>
		isActive ? 'text-white' : originalClass;

	return (
		<>
			<nav className='md:hidden flex justify-around bg-white dark:bg-gray-900 border-t border-gray-300 dark:border-gray-700 dark:text-white/95'>
				{bottomMenu.map((item, i) => {
					const isActive = pathname === item.path;
					return (
						<button
							key={i}
							onClick={() => router.push(item.path)}
							className={`cursor-pointer flex flex-col items-center justify-center m-1 py-2 px-1 transition duration-300 ${
								isActive &&
								'bg-gradient-to-bl from-violet-500 to-pink-500 text-white rounded-md shadow-lg px-2 sm:px-4'
							}`}>
							{React.cloneElement(item.icon, {
								className: iconClasses(
									isActive,
									(item.icon.props.className as string) || ''
								),
							})}
							<span className='text-xs mt-1'>{item.label}</span>
						</button>
					);
				})}

				<button
					onClick={() => setOpen((isOpen) => !isOpen)}
					className={`cursor-pointer flex flex-col items-center justify-center m-1 py-2 transition-all ${
						sideMenu.some((item) => item.path === pathname)
							? 'bg-gradient-to-bl from-violet-500 to-pink-500 px-4 text-white rounded-md shadow-lg'
							: 'hover:text-gray-800 dark:text-white/95 dark:hover:text-white/60'
					}`}>
					<FiMoreHorizontal size={24} />
					<span className='text-xs mt-1'>More</span>
				</button>
			</nav>

			{open && (
				<motion.div
					className='fixed inset-0 z-40 bg-black/30 backdrop-blur flex'
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					onClick={() => setOpen(false)}>
					<div
						className='w-64 bg-white dark:bg-gray-900 dark:text-white/95 h-full p-1'
						onClick={(e) => e.stopPropagation()}>
						<button
							onClick={() => setOpen(false)}
							className='cursor-pointer absolute top-2 right-2 p-2 rounded-full hover:bg-gray-100 transition-all duration-300'>
							<FiX size={24} />
						</button>

						{sideMenu.map((item, i) => {
							const isActive = pathname === item.path;
							return (
								<button
									key={i}
									onClick={async () => {
										if (item.path) router.push(item.path);
										if (item.action) await item.action();
										setOpen(false);
									}}
									className={`group flex w-full rounded-md items-center gap-4 py-3 my-1 px-3 cursor-pointer transition-all duration-300 hover:bg-gray-50 dark:hover:bg-gray-800 ${
										isActive
											? 'bg-gradient-to-bl from-violet-500 to-pink-500 text-white shadow-md'
											: ''
									}`}>
									{React.cloneElement(item.icon, {
										className: iconClasses(
											isActive,
											(item.icon.props
												.className as string) || ''
										),
									})}
									<span
										className={`transition-all duration-300 ${
											item.label === 'Logout' &&
											'text-red-700'
										}`}>
										{item.label}
									</span>
								</button>
							);
						})}
					</div>
				</motion.div>
			)}
		</>
	);
}
