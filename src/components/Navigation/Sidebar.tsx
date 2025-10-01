'use client';

import { useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { FiSidebar, FiLogOut } from 'react-icons/fi';
import { signOut } from 'next-auth/react';
import { bottomMenu, sideMenu } from './menuConfig';
import React from 'react';

export default function Sidebar() {
	const [collapsed, setCollapsed] = useState(false);
	const [loggingOut, setLoggingOut] = useState(false);
	const router = useRouter();
	const pathname = usePathname();

	const handleLogout = async () => {
		setLoggingOut(true);
		try {
			await signOut({ redirect: true, callbackUrl: '/login' });
		} catch {
			setLoggingOut(false);
		}
	};

	const menuItems = [
		...bottomMenu,
		...sideMenu.filter((item) => item.label !== 'Logout'),
	];

	const buttonClasses = (isActive: boolean, collapsed: boolean) =>
		`flex gap-2 p-3 w-full rounded-lg cursor-pointer transition-all duration-300 ${
			collapsed && 'justify-center'
		} ${
			isActive
				? 'bg-gradient-to-r from-violet-500/95 to-pink-500/95 text-white shadow-lg dark:shadow-lg/20'
				: 'hover:bg-gray-50 dark:hover:bg-gray-700'
		}`;

	const iconClasses = (isActive: boolean, originalClass: string) =>
		isActive ? 'text-white' : originalClass;

	return (
		<nav
			className={`hidden md:flex flex-col justify-between sticky top-0 h-screen transition-all duration-300 mx-3 ${
				collapsed ? 'w-16' : 'w-64'
			}`}>
			<div className='flex flex-col'>
				<div className='w-full flex flex-col relative h-12'>
					<motion.button
						onClick={() => setCollapsed(!collapsed)}
						initial={false}
						animate={{ left: collapsed ? '75%' : '100%' }}
						transition={{ duration: 0.3 }}
						className='bg-white hover:bg-gray-50 text-black dark:bg-gray-900 dark:hover:bg-black dark:text-white/95 absolute top-1/2 -translate-y-1/2 -translate-x-full p-3 rounded-full shadow-lg cursor-pointer transition duration-300'>
						<FiSidebar />
					</motion.button>
				</div>

				{menuItems.map((item, i) => {
					const isActive = pathname === item.path;
					return (
						<button
							key={i}
							onClick={() => router.push(item.path as string)}
							className={buttonClasses(isActive, collapsed)}>
							{React.cloneElement(item.icon, {
								className: iconClasses(
									isActive,
									(item.icon.props.className as string) || ''
								),
							})}
							{!collapsed && (
								<span
									className={`transition-all duration-300 text-black/95 dark:text-white/95 ${
										isActive && 'text-white/95'
									}`}>
									{item.label}
								</span>
							)}
						</button>
					);
				})}
			</div>

			<button
				onClick={handleLogout}
				disabled={loggingOut}
				className={`flex gap-2 p-3 w-full rounded-lg cursor-pointer transition-all duration-300 hover:text-red-600 ${
					collapsed && 'justify-center'
				}`}>
				<FiLogOut
					className='text-black/95 dark:text-white/90'
					size={24}
				/>
				{!collapsed && (
					<span className='text-black/95 dark:text-white/90'>
						{loggingOut ? 'Logging out...' : 'Logout'}
					</span>
				)}
			</button>
		</nav>
	);
}
