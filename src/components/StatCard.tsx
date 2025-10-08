'use client';
import { LucideIcon } from 'lucide-react';

interface StatCardProps {
	title: string;
	value: string;
	icon: LucideIcon;
}

export default function StatCard({ title, value, icon: Icon }: StatCardProps) {
	return (
		<div className='flex flex-col items-center justify-center w-full h-full gap-2 p-5'>
			<div className='size-10 flex items-center justify-center rounded-xl bg-gradient-to-bl from-violet-500 to-pink-500 shadow-md'>
				<Icon className='size-5 text-white' />
			</div>
			<span className='text-sm text-gray-700 dark:text-gray-300 mt-1'>
				{title}
			</span>
			<span className='text-xl font-semibold text-gray-900 dark:text-gray-100'>
				{value}
			</span>
		</div>
	);
}
