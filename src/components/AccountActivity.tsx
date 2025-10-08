'use client';
import {
	LineChart,
	Line,
	XAxis,
	YAxis,
	Tooltip,
	ResponsiveContainer,
} from 'recharts';

const data = [
	{ day: 'Mon', income: 320, expense: 180 },
	{ day: 'Tue', income: 290, expense: 220 },
	{ day: 'Wed', income: 340, expense: 260 },
	{ day: 'Thu', income: 310, expense: 190 },
	{ day: 'Fri', income: 360, expense: 300 },
	{ day: 'Sat', income: 420, expense: 340 },
	{ day: 'Sun', income: 380, expense: 260 },
];

export default function AccountActivity() {
	return (
		<div className='flex flex-col w-full h-full p-6 justify-between'>
			<h2 className='text-lg font-semibold text-gray-800 dark:text-gray-100 mb-2'>
				Account Activity
			</h2>
			<div className='flex-1'>
				<ResponsiveContainer width='100%' height='100%'>
					<LineChart data={data}>
						<XAxis
							dataKey='day'
							stroke='#9ca3af'
							fontSize={12}
							tickLine={false}
							axisLine={false}
						/>
						<YAxis hide />
						<Tooltip
							contentStyle={{
								backgroundColor: '#1f2937',
								border: 'none',
								color: '#fff',
								fontSize: 12,
							}}
						/>
						<Line
							type='monotone'
							dataKey='income'
							stroke='#8b5cf6'
							strokeWidth={2.5}
							dot={false}
						/>
						<Line
							type='monotone'
							dataKey='expense'
							stroke='#ec4899'
							strokeWidth={2.5}
							dot={false}
						/>
					</LineChart>
				</ResponsiveContainer>
			</div>
		</div>
	);
}
