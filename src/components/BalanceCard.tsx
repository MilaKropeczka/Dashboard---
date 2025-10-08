'use client';
import {
	Wallet,
	TrendingUp,
	TrendingDown,
	ArrowUp,
	ArrowDown,
	BarChart2,
} from 'lucide-react';

export default function BalanceCard() {
	const total = 7300;
	const income = 3500;
	const expenses = 3000;

	const monthly = income - expenses;
	const trendUp = monthly >= 0;
	const trendColor = trendUp ? 'text-violet-400' : 'text-pink-400';

	return (
		<div className='py-6 px-6 flex flex-col justify-between h-full gap-4'>
			<div className='flex items-start justify-between'>
				<div className='flex flex-col gap-0.5'>
					<p className='text-sm font-medium text-gray-400'>
						Total Balance
					</p>
					<div className='flex items-center gap-3'>
						<div className='flex items-center justify-center size-8 rounded-lg bg-gradient-to-br from-violet-600 to-pink-500 shrink-0'>
							<Wallet className='size-5 text-white' />
						</div>
						<p className='text-xl font-bold tracking-tight text-gray-50'>
							<span className='font-medium mr-0.5'>$</span>
							{total.toLocaleString()}
						</p>
					</div>
				</div>
				<BarChart2 className='size-5 text-pink-400 mt-1' />
			</div>

			<div className='flex flex-col gap-2 p-4 rounded-xl bg-gray-800/60 flex-grow justify-center'>
				<p className='text-xs uppercase font-medium tracking-wider text-gray-400'>
					Month-over-Month Trend
				</p>
				<div className='flex items-baseline justify-between'>
					<div className='flex items-baseline gap-2'>
						<div className='flex items-center justify-center size-8 rounded-lg bg-gray-700 shrink-0'>
							{trendUp ? (
								<TrendingUp
									className={`size-5 ${trendColor}`}
								/>
							) : (
								<TrendingDown
									className={`size-5 ${trendColor}`}
								/>
							)}
						</div>
						<p className={`text-xl font-bold ${trendColor}`}>
							{monthly.toLocaleString()}
							<span className='font-medium ml-0.5'>$</span>
						</p>
					</div>
				</div>
			</div>

			<div className='flex justify-between gap-4'>
				<div className='flex flex-col gap-1 w-1/2 p-3 rounded-lg bg-gray-800/35'>
					<div className='flex items-center gap-2'>
						<ArrowUp className='size-5 text-violet-500' />
						<p className='text-sm font-medium text-violet-300'>
							Income
						</p>
					</div>
					<p className='text-lg font-semibold text-gray-200 pl-7'>
						<span className='font-medium mr-0.5'>$</span>
						{income.toLocaleString()}
					</p>
				</div>

				<div className='flex flex-col gap-1 w-1/2 p-3 rounded-lg bg-gray-800/35'>
					<div className='flex items-center gap-2'>
						<ArrowDown className='w-5 h-5 text-pink-500' />
						<p className='text-sm font-medium text-pink-300'>
							Expenses
						</p>
					</div>
					<p className='text-lg font-semibold text-gray-200 pl-7'>
						<span className='font-medium mr-0.5'>$</span>
						{expenses.toLocaleString()}
					</p>
				</div>
			</div>
		</div>
	);
}
