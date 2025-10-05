'use client';
import { RadialBarChart, RadialBar, PolarAngleAxis } from 'recharts';

export default function SavingGoal() {
	const totalGoal = 10000;
	const totalSaved = 7300;
	const monthlyGoal = 2500;
	const monthlySaved = 1500;

	const totalPercentage = Math.round((totalSaved / totalGoal) * 100);
	const monthlyPercentage = Math.round((monthlySaved / monthlyGoal) * 100);

	const data = [
		{
			name: 'Savings',
			value: totalPercentage,
			fill: 'url(#violetPinkGradient)',
		},
	];

	return (
		<div className='flex flex-col items-center justify-center w-full h-full gap-5 p-6'>
			<div className='relative flex flex-col items-center justify-center'>
				<RadialBarChart
					width={180}
					height={180}
					cx='50%'
					cy='50%'
					innerRadius='70%'
					outerRadius='100%'
					barSize={22}
					data={data}
					startAngle={90}
					endAngle={-270}>
					<defs>
						<linearGradient
							id='violetPinkGradient'
							x1='0%'
							y1='0%'
							x2='100%'
							y2='0%'>
							<stop offset='0%' stopColor='#8b5cf6' />{' '}
							<stop offset='50%' stopColor='#a855f7' />{' '}
							<stop offset='100%' stopColor='#ec4899' />{' '}
						</linearGradient>
					</defs>

					<PolarAngleAxis
						type='number'
						domain={[0, 100]}
						tick={false}
					/>
					<RadialBar
						dataKey='value'
						cornerRadius={50}
						background={{ fill: 'rgba(156,163,175,0.3)' }}
					/>
				</RadialBarChart>

				<span className='absolute text-2xl font-semibold text-gray-800 dark:text-gray-100 drop-shadow-sm'>
					{totalPercentage}%
				</span>
			</div>

			<div className='flex flex-col gap-2 w-full'>
				<div className='flex justify-between text-sm text-gray-700 dark:text-gray-200 mx-2'>
					<span>Monthly goal</span>
					<span>{monthlyPercentage}%</span>
				</div>

				<div className='w-full h-5 rounded-full bg-gray-300 dark:bg-gray-600 overflow-hidden'>
					<div
						className='h-full rounded-full transition-all duration-700 ease-in-out shadow-sm'
						style={{
							width: `${monthlyPercentage}%`,
							backgroundImage:
								'linear-gradient(90deg, #8b5cf6 0%, #a855f7 40%, #ec4899 100%)',
						}}></div>
				</div>

				<p className='text-xs text-gray-500 dark:text-gray-400 mx-2'>
					{monthlySaved.toLocaleString()} /{' '}
					{monthlyGoal.toLocaleString()} USD
				</p>
			</div>
		</div>
	);
}
