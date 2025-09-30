'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import {
	FiHome,
	FiBarChart2,
	FiSettings,
	FiGrid,
	FiPieChart,
	FiList,
	FiMoreHorizontal,
	FiX,
	FiLogOut,
	FiSidebar,
} from 'react-icons/fi';
import { signOut } from 'next-auth/react';
import { useRouter, usePathname } from 'next/navigation';
import { gradients } from '@/lib/colors';

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const [collapsed, setCollapsed] = useState(false);
	const [loggingOut, setLoggingOut] = useState(false);
	const [open, setOpen] = useState(false);
	const router = useRouter();
	const pathname = usePathname();

	const bottomMenu = [
		{ icon: <FiHome size={24} />, label: 'Dashboard', path: '/dashboard' },
		{
			icon: <FiList size={24} />,
			label: 'Transactions',
			path: '/dashboard/transactions',
		},
		{
			icon: <FiPieChart size={24} />,
			label: 'Budget',
			path: '/dashboard/budget',
		},
	];

	const sideMenu = [
		{
			icon: <FiGrid size={24} />,
			label: 'Categories',
			path: '/dashboard/categories',
		},
		{
			icon: <FiBarChart2 size={24} />,
			label: 'Reports',
			path: '/dashboard/reports',
		},
		{
			icon: <FiSettings size={24} />,
			label: 'Settings',
			path: '/dashboard/settings',
		},
		{
			icon: (
				<FiLogOut
					className='transition-all duration-300 group-hover:text-red-500 text-red-700'
					size={24}
				/>
			),
			label: 'Logout',
			action: async () => {
				setLoggingOut(true);
				try {
					await signOut({ redirect: true, callbackUrl: '/login' });
				} catch {
					setLoggingOut(false);
				}
			},
		},
	];

	const menuItems = [
		...bottomMenu,
		...sideMenu.filter((item) => item.label !== 'Logout'),
	];

	const buttonClasses = (isActive: boolean, collapsed: boolean) =>
		`flex gap-2 p-3 w-full rounded-lg cursor-pointer transition-all duration-300 ${
			collapsed ? 'justify-center' : ''
		} ${
			isActive
				? `bg-gradient-to-r ${gradients.activeButton} text-white shadow-lg`
				: 'hover:text-gray-700'
		}`;

	async function handleLogout() {
		setLoggingOut(true);
		try {
			await signOut({ redirect: true, callbackUrl: '/login' });
		} catch (err) {
			console.log(err);
			setLoggingOut(false);
		}
	}

	return (
		<div className='flex w-full min-h-screen'>
			<nav
				className={`hidden md:flex flex-col justify-between sticky top-0 h-screen transition-all duration-300 mx-3 ${
					collapsed ? 'w-16' : 'w-64'
				}`}>
				<div className='w-full flex flex-col'>
					<div className='w-full flex flex-col relative h-12'>
						<motion.button
							onClick={() => setCollapsed(!collapsed)}
							initial={false}
							animate={{ left: collapsed ? '75%' : '100%' }}
							transition={{ duration: 0.3, ease: 'easeInOut' }}
							className='absolute top-1/2 -translate-y-1/2 -translate-x-full p-2 rounded-full bg-white shadow-lg hover:bg-gray-50 cursor-pointer'>
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
								{item.icon}
								{!collapsed && <span>{item.label}</span>}
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
					<FiLogOut size={24} />
					{!collapsed && (
						<span>{loggingOut ? 'Logging out...' : 'Logout'}</span>
					)}
				</button>
			</nav>

			<main className='flex-1 overflow-auto'>{children}</main>

			<nav className='md:hidden fixed bottom-0 left-0 right-0 bg-white z-50 flex justify-around'>
				{bottomMenu.map((item, i) => {
					const isActive = pathname === item.path;
					return (
						<motion.button
							key={i}
							onClick={() => router.push(item.path)}
							initial={{ scale: 1 }}
							whileTap={{ scale: 0.9 }}
							className={`cursor-pointer flex flex-col items-center justify-center transition-all m-1 py-2 px-1 ${
								isActive &&
								`bg-gradient-to-bl ${gradients.activeButton} text-white rounded-md shadow-lg px-2 sm:px-4`
							}`}>
							{item.icon}
							<span className='text-xs mt-1'>{item.label}</span>
						</motion.button>
					);
				})}

				<button
					onClick={() => setOpen((isOpen) => !isOpen)}
					className={`cursor-pointer flex flex-col items-center justify-center m-1 py-2 transition-all ${
						sideMenu.some((item) => item.path === pathname)
							? `bg-gradient-to-bl ${gradients.activeButton} px-4 text-white rounded-md shadow-lg`
							: 'text-gray-600 hover:text-gray-800'
					}`}>
					<FiMoreHorizontal size={24} />
					<span className='text-xs mt-1'>More</span>
				</button>
			</nav>

			<motion.nav
				className={`fixed inset-0 z-40 bg-black/30 backdrop-blur md:hidden flex`}
				initial={{ opacity: 0 }}
				animate={{ opacity: open ? 1 : 0 }}
				transition={{ duration: 0.3 }}
				onClick={() => setOpen(false)}>
				<div
					className='w-64 bg-white h-full p-1'
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
								className={`group flex w-full rounded-md items-center gap-4 py-3 my-1 px-3 cursor-pointer transition-all duration-300 hover:bg-gray-100 ${
									isActive &&
									`bg-gradient-to-bl ${gradients.activeButton} text-white shadow-md`
								}`}>
								{item.icon}
								<span
									className={`transition-all duration-300 ${
										item.label === 'Logout' &&
										'group-hover:text-red-500 text-red-700'
									}`}>
									{`${item.label}${
										item.label === 'Logout' && loggingOut
											? '...'
											: ''
									}`}
								</span>
							</button>
						);
					})}
				</div>
			</motion.nav>
		</div>
	);
}
