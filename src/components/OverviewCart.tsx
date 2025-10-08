'use client';

import {
	ArrowUp,
	ArrowDown,
	TrendingUp,
	TrendingDown,
	Calendar,
} from 'lucide-react';

interface OverviewCardProps {
	income?: string;
	expenses?: string;
}

export default function OverviewCard({ income, expenses }: OverviewCardProps) {
	return (
		<div className='flex flex-col items-center justify-center p-4 gap-4'>
			<div className='flex w-full justify-between gap-4'>
				{income && (
					<div className='flex flex-col items-center justify-center flex-1 p-4'>
						<div className='flex items-center justify-center size-10 rounded-xl bg-gradient-to-bl from-violet-500 to-pink-500 shadow mb-2'>
							<TrendingUp className='text-white text-2xl' />
						</div>
						<span className='text-xs text-violet-500'>Income</span>
						<span className='text-lg font-semibold text-gray-900 dark:text-gray-100 mt-1'>
							{income}
						</span>
					</div>
				)}

				{expenses && (
					<div className='flex flex-col items-center justify-center flex-1 p-4'>
						<div className='flex items-center justify-center size-10 rounded-xl bg-gradient-to-bl from-violet-500 to-pink-500 shadow mb-2'>
							<TrendingDown className='text-white text-2xl' />
						</div>
						<span className='text-xs text-pink-500'>Expenses</span>
						<span className='text-lg font-semibold text-gray-900 dark:text-gray-100 mt-1'>
							{expenses}
						</span>
					</div>
				)}
			</div>
		</div>
	);
}
