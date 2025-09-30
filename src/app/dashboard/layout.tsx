'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import {
	FiHome,
	FiBarChart2,
	FiSettings,
	FiSidebar,
	FiLogOut,
	FiList,
	FiGrid,
	FiTarget,
} from 'react-icons/fi';
import { signOut } from 'next-auth/react';
import { useRouter, usePathname } from 'next/navigation';

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const [collapsed, setCollapsed] = useState(false);
	const [loggingOut, setLoggingOut] = useState(false);
	const router = useRouter();
	const pathname = usePathname();

	const menuItems = [
		{
			icon: <FiHome size={24} />,
			label: 'Dashboard',
			active: false,
			path: '/dashboard',
		},
		{
			icon: <FiList size={24} />,
			label: 'Transactions',
			active: true,
			path: '/dashboard/transactions',
		},
		{
			icon: <FiGrid size={24} />,
			label: 'Categories',
			active: false,
			path: '/dashboard/categories',
		},
		{
			icon: <FiTarget size={24} />,
			label: 'Budget',
			active: false,
			path: '/dashboard/budget',
		},
		{
			icon: <FiBarChart2 size={24} />,
			label: 'Reports',
			active: false,
			path: '/dashboard/reports',
		},
		{
			icon: <FiSettings size={24} />,
			label: 'Settings',
			active: false,
			path: '/dashboard/settings',
		},
	];

	async function handleLogout() {
		setLoggingOut(true);
		try {
			await signOut({
				redirect: true,
				callbackUrl: '/login',
			});
		} catch (err) {
			console.log(err);
			setLoggingOut(false);
		}
	}

	return (
		<>
			<nav
				className={`flex flex-col justify-between transition-all duration-300 ${
					collapsed ? 'w-16' : 'w-68'
				}`}>
				<div className='w-full flex flex-col'>
					<div className='w-full flex flex-col relative h-12'>
						<motion.button
							onClick={() => setCollapsed(!collapsed)}
							initial={false}
							animate={{ left: collapsed ? '75%' : '100%' }}
							transition={{
								duration: 0.3,
								ease: 'easeInOut',
							}}
							className='absolute top-1/2 -translate-y-1/2 -translate-x-full p-2 rounded-full bg-white shadow-lg hover:bg-gray-50 cursor-pointer'>
							<FiSidebar />
						</motion.button>
					</div>

					{menuItems.map((item, i) => {
						const isActive = pathname === item.path;
						return (
							<button
								key={i}
								className={`flex gap-2 p-3 w-full rounded-lg cursor-pointer transition
    ${collapsed && 'justify-center'}
    ${
		isActive
			? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold shadow-lg hover:opacity-90 active:scale-95'
			: 'hover:text-gray-700'
	}`}
								onClick={() => router.push(item.path)}>
								{item.icon}
								{!collapsed && <span>{item.label}</span>}
							</button>
						);
					})}
				</div>

				<button
					onClick={handleLogout}
					disabled={loggingOut}
					className={`flex gap-2 p-3 w-full rounded-lg cursor-pointer transition hover:text-red-600
						${collapsed ? 'justify-center' : ''}`}>
					<FiLogOut size={24} />
					{!collapsed && (
						<span>{loggingOut ? 'Logging out...' : 'Logout'}</span>
					)}
				</button>
			</nav>
			<main className='flex flex-row w-full gap-4'>{children}</main>
		</>
	);
}
