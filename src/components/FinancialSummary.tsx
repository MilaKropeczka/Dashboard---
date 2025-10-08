'use client';
import { TrendingUp, TrendingDown } from 'lucide-react';

export default function FinancialSummary() {
	const income = 4700;
	const expenses = 3600;

	return (
		<div className='flex flex-col justify-center items-center bg-white/60 dark:bg-gray-700/95 shadow-xl rounded-3xl p-5 gap-4 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl'>
			<div className='flex items-center gap-3'>
				<div className='w-10 h-10 flex items-center justify-center rounded-2xl bg-gradient-to-br from-green-400 via-green-500 to-green-600 shadow-md'>
					<TrendingUp className='w-5 h-5 text-white' />
				</div>
				<div className='flex flex-col items-start'>
					<span className='text-sm text-gray-700 dark:text-gray-300'>
						Income
					</span>
					<span className='text-lg font-semibold text-gray-900 dark:text-gray-100'>
						${income.toLocaleString()}
					</span>
				</div>
			</div>

			<div className='flex items-center gap-3'>
				<div className='w-10 h-10 flex items-center justify-center rounded-2xl bg-gradient-to-br from-pink-400 via-pink-500 to-pink-600 shadow-md'>
					<TrendingDown className='w-5 h-5 text-white' />
				</div>
				<div className='flex flex-col items-start'>
					<span className='text-sm text-gray-700 dark:text-gray-300'>
						Expenses
					</span>
					<span className='text-lg font-semibold text-gray-900 dark:text-gray-100'>
						${expenses.toLocaleString()}
					</span>
				</div>
			</div>
		</div>
	);
}
