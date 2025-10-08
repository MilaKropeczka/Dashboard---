'use client';
import React from 'react';

export default function BudgetOverview() {
	const budgets = [
		{ category: 'Food', spent: 420, limit: 600 },
		{ category: 'Transport', spent: 180, limit: 250 },
		{ category: 'Entertainment', spent: 300, limit: 400 },
		{ category: 'Shopping', spent: 220, limit: 300 },
	];

	return (
		<div className='flex flex-col w-full h-full justify-center p-6 gap-4'>
			<h2 className='text-lg font-semibold text-gray-800 dark:text-gray-100'>
				Budget Overview
			</h2>

			<div className='flex flex-col gap-3'>
				{budgets.map((item, index) => {
					const percent = Math.min(
						Math.round((item.spent / item.limit) * 100),
						100
					);

					return (
						<div key={index} className='flex flex-col gap-1'>
							<div className='flex justify-between text-xs text-gray-700 dark:text-gray-300'>
								<span>{item.category}</span>
								<span>{percent}%</span>
							</div>
							<div className='w-full h-3 rounded-full bg-gray-300 dark:bg-gray-600 overflow-hidden'>
								<div
									className='h-full rounded-full transition-all duration-700 ease-in-out shadow-sm'
									style={{
										width: `${percent}%`,
										backgroundImage:
											'linear-gradient(90deg, #8b5cf6 0%, #a855f7 40%, #ec4899 100%)',
									}}></div>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
}
