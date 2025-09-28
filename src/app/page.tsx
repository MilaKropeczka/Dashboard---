'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import {
	FiHome,
	FiBarChart2,
	FiSettings,
	FiSidebar,
	FiLogOut,
} from 'react-icons/fi';
import { signOut } from 'next-auth/react';
import { gradients } from '@/lib/colors';

export default function Home() {
	const [collapsed, setCollapsed] = useState(false);
	const [loggingOut, setLoggingOut] = useState(false);

	const menuItems = [
		{ icon: <FiHome size={24} />, label: 'Dashboard', active: false },
		{ icon: <FiBarChart2 size={24} />, label: 'Analytics', active: true },
		{ icon: <FiSettings size={24} />, label: 'Settings', active: false },
	];

	async function handleLogout() {
		setLoggingOut(true);
		try {
			await signOut({
				redirect: true,
				callbackUrl: '/login',
			});
		} catch (err) {
			setLoggingOut(false);
		}
	}

	return (
		<div
			className={`flex h-screen gap-3 p-3 bg-gradient-to-br ${gradients.background}`}>
			<div
				className={`flex flex-col justify-between transition-all duration-300 ${
					collapsed ? 'w-16' : 'w-68'
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

					{menuItems.map((item, i) => (
						<button
							key={i}
							className={`flex gap-2 p-3 w-full rounded-lg cursor-pointer transition
								${
									item.active
										? `bg-gradient-to-r ${gradients.activeButton} text-white font-semibold shadow-lg hover:opacity-90 active:scale-95`
										: 'hover:text-gray-700'
								}
								${collapsed ? 'justify-center' : ''}`}>
							{item.icon}
							{!collapsed && <span>{item.label}</span>}
						</button>
					))}
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
			</div>
			<div className='flex flex-row w-full gap-4'>
				<div className='grid gap-6 w-full h-full grid-cols-1 sm:grid-cols-2 md:grid-cols-4 auto-rows-[150px]'>
					<div
						className={`bg-gradient-to-r ${gradients.card} shadow-xl rounded-3xl sm:col-span-2 sm:row-span-2`}></div>
					<div className='bg-white/60 shadow-xl rounded-3xl'></div>
					<div className='bg-white/60 shadow-xl rounded-3xl'></div>
					<div className='bg-white/60 shadow-xl rounded-3xl'></div>
					<div className='bg-white/60 shadow-xl rounded-3xl'></div>
					<div className='bg-white/60 shadow-xl rounded-3xl sm:col-span-2 sm:row-span-2'></div>
					<div className='bg-white/60 shadow-xl rounded-3xl sm:col-span-2 sm:row-span-2'></div>
				</div>
			</div>
		</div>
	);
}
