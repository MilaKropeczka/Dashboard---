'use client';
import Chart from '@/components/Chart';
import SavingGoal from '@/components/SavingsGoal';

const data = [
	{ name: 'Jan', Income: 4200, Expenses: 2800 },
	{ name: 'Feb', Income: 3800, Expenses: 3200 },
	{ name: 'Mar', Income: 5100, Expenses: 4100 },
	{ name: 'Apr', Income: 2900, Expenses: 1900 },
	{ name: 'May', Income: 4500, Expenses: 3700 },
	{ name: 'Jun', Income: 5200, Expenses: 4300 },
	{ name: 'Jul', Income: 4800, Expenses: 3500 },
	{ name: 'Aug', Income: 4100, Expenses: 3100 },
	{ name: 'Sep', Income: 3900, Expenses: 2900 },
	{ name: 'Oct', Income: 4700, Expenses: 3600 },
	{ name: 'Nov', Income: 4300, Expenses: 3300 },
	{ name: 'Dec', Income: 5900, Expenses: 4800 },
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
			<div className='bg-white/60 dark:bg-gray-700/95 shadow-xl rounded-3xl sm:row-span-2'></div>
			<div className='bg-white/60 dark:bg-gray-700/95 shadow-xl rounded-3xl sm:row-span-2'>
				<SavingGoal />
			</div>
		</div>
	);
}
