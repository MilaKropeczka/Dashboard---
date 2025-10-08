'use client';
import { LucideIcon } from 'lucide-react';

interface StatCardProps {
	title: string;
	value: string;
	icon: LucideIcon;
	income?: string;
	expenses?: string;
}

export default function TotalBalance({
	title,
	value,
	icon: Icon,
	income,
	expenses,
}: StatCardProps) {
	return (
		<div className='flex flex-col w-full max-w-sm rounded-2xl shadow-sm p-5 gap-4 bg-white/60 dark:bg-gray-700/95'>
			<div className='flex items-center justify-between'>
				<div className='flex items-center gap-3'>
					<div className='flex items-center justify-center size-10 rounded-xl bg-gradient-to-bl from-violet-500 to-pink-500 shadow'>
						<Icon className='size-5 text-white' />
					</div>
					<div className='flex flex-col'>
						<span className='text-sm text-gray-600 dark:text-gray-400'>
							{title}
						</span>
						<span className='text-2xl font-semibold text-gray-900 dark:text-gray-100'>
							{value}
						</span>
					</div>
				</div>
			</div>

			{(income || expenses) && (
				<div className='flex items-center justify-between text-sm font-medium pt-3 border-t border-zinc-200 dark:border-zinc-800'>
					{income && (
						<div className='flex flex-col'>
							<span className='text-gray-500 dark:text-gray-400'>
								Income
							</span>
							<span className='text-green-600 dark:text-green-400'>
								↑ {income}
							</span>
						</div>
					)}
					{expenses && (
						<div className='flex flex-col text-right'>
							<span className='text-gray-500 dark:text-gray-400'>
								Expenses
							</span>
							<span className='text-red-600 dark:text-red-400'>
								↓ {expenses}
							</span>
						</div>
					)}
				</div>
			)}
		</div>
	);
}
