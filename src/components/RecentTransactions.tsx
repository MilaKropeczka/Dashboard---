'use client';
import { motion } from 'framer-motion';
import { ArrowDownRight, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

export default function RecentTransactions() {
	const transactions = [
		{
			id: 1,
			name: 'Spotify Subscription',
			type: 'expense',
			amount: -29.99,
			date: 'Oct 3',
		},
		{
			id: 2,
			name: 'Freelance Project',
			type: 'income',
			amount: 450.0,
			date: 'Oct 1',
		},
		{
			id: 3,
			name: 'Groceries',
			type: 'expense',
			amount: -86.5,
			date: 'Sep 29',
		},
		{
			id: 4,
			name: 'Electric Bill',
			type: 'expense',
			amount: -120.0,
			date: 'Sep 28',
		},
	];

	return (
		<div className='flex flex-col w-full h-full gap-3'>
			<div className='flex items-center justify-between'>
				<h2 className='text-lg font-semibold text-gray-800 dark:text-gray-100'>
					Recent Transactions
				</h2>
				<Link
					href='#'
					className='text-sm text-violet-600 dark:text-pink-400 hover:underline'>
					Więcej
				</Link>
			</div>

			<div className='flex flex-col gap-3'>
				{transactions.map((transaction) => (
					<motion.div
						key={transaction.id}
						initial={{ opacity: 0, y: 15 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.3 }}
						className='flex items-center justify-between p-3 rounded-2xl bg-white/60 dark:bg-gray-700/90 shadow-xl dark:shadow-xl/20'>
						<div className='flex items-center gap-3'>
							<div
								className={`p-2 rounded-full ${
									transaction.type === 'income'
										? 'bg-gradient-to-r from-violet-500 to-pink-500'
										: 'bg-gray-300 dark:bg-gray-600'
								}`}>
								{transaction.type === 'income' ? (
									<ArrowUpRight className='text-white size-4' />
								) : (
									<ArrowDownRight className='text-gray-800 dark:text-gray-100 size-4' />
								)}
							</div>
							<div className='flex flex-col'>
								<span className='text-gray-800 dark:text-gray-100 text-sm font-medium'>
									{transaction.name}
								</span>
								<span className='text-xs text-gray-500 dark:text-gray-400'>
									{transaction.date}
								</span>
							</div>
						</div>
						<div
							className={`text-sm font-semibold ${
								transaction.type === 'income'
									? 'text-violet-600 dark:text-pink-400'
									: 'text-gray-700 dark:text-gray-300'
							}`}>
							{transaction.amount > 0 ? '+' : ''}
							{transaction.amount.toFixed(2)} USD
						</div>
					</motion.div>
				))}
			</div>
		</div>
	);
}
