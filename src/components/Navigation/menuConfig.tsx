import {
	FiHome,
	FiBarChart2,
	FiSettings,
	FiGrid,
	FiPieChart,
	FiList,
	FiLogOut,
} from 'react-icons/fi';
import { signOut } from 'next-auth/react';

export const bottomMenu = [
	{
		icon: <FiHome size={24} className='dark:text-green-400' />,
		label: 'Dashboard',
		path: '/dashboard',
	},
	{
		icon: <FiList size={24} className='dark:text-blue-400' />,
		label: 'Transactions',
		path: '/dashboard/transactions',
	},
	{
		icon: <FiPieChart size={24} className='dark:text-yellow-400' />,
		label: 'Budget',
		path: '/dashboard/budget',
	},
];

export const sideMenu = [
	{
		icon: <FiGrid size={24} className='dark:text-purple-400' />,
		label: 'Categories',
		path: '/dashboard/categories',
	},
	{
		icon: <FiBarChart2 size={24} className='dark:text-red-400' />,
		label: 'Reports',
		path: '/dashboard/reports',
	},
	{
		icon: <FiSettings size={24} className='dark:text-teal-400' />,
		label: 'Settings',
		path: '/dashboard/settings',
	},
	{
		icon: (
			<FiLogOut
				size={24}
				className='text-red-700 transition-all duration-300 group-hover:text-red-500'
			/>
		),
		label: 'Logout',
		action: async () => {
			await signOut({ redirect: true, callbackUrl: '/login' });
		},
	},
];
