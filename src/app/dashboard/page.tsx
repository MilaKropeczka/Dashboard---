'use client';
import Chart from '@/components/Chart';

const data = [
	{ name: 'Jan', Income: 4000, Expenses: 2400 },
	{ name: 'Feb', Income: 3000, Expenses: 1398 },
	{ name: 'Mar', Income: 2000, Expenses: 6800 },
	{ name: 'Apr', Income: 2780, Expenses: 3908 },
	{ name: 'May', Income: 1890, Expenses: 4800 },
	{ name: 'Jun', Income: 2390, Expenses: 3800 },
];

export default function Home() {
	return (
		<div className='grid gap-6 w-full h-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 auto-rows-[150px] p-3'>
			<div className='bg-white/60 dark:bg-gray-700/95 shadow-xl rounded-3xl sm:col-span-2 row-span-2 flex items-center justify-center p-4'>
				<Chart data={data} />
			</div>
			<div className='bg-white/60 dark:bg-gray-700/95 shadow-xl rounded-3xl'></div>
			<div className='bg-white/60 dark:bg-gray-700/95 shadow-xl rounded-3xl'></div>
			<div className='bg-white/60 dark:bg-gray-700/95 shadow-xl rounded-3xl'></div>
			<div className='bg-white/60 dark:bg-gray-700/95 shadow-xl rounded-3xl'></div>
			<div className='bg-white/60 dark:bg-gray-700/95 shadow-xl rounded-3xl sm:col-span-2 sm:row-span-2'></div>
			<div className='bg-white/60 dark:bg-gray-700/95 shadow-xl rounded-3xl sm:col-span-2 sm:row-span-2'></div>
		</div>
	);
}
