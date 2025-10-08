'use client';
import useTheme from '@/hooks/useTheme';
import { PieChart, Pie, Cell, Legend, ResponsiveContainer } from 'recharts';

export default function CategoryBreakdown() {
	const { isDark } = useTheme();

	const data = [
		{ name: 'Food', value: 40, color: '#8b5cf6' },
		{ name: 'Transport', value: 25, color: '#a855f7' },
		{ name: 'Entertainment', value: 20, color: '#ec4899' },
		{ name: 'Others', value: 15, color: '#f472b6' },
	];

	return (
		<div className='flex flex-col items-center justify-center w-full h-full'>
			<ResponsiveContainer width='100%'>
				<PieChart>
					<Pie
						data={data}
						dataKey='value'
						nameKey='name'
						cx='50%'
						cy='50%'
						innerRadius={50}
						outerRadius={80}
						paddingAngle={3}
						startAngle={90}
						stroke='none'
						cornerRadius={5}
						endAngle={-270}>
						{data.map((entry, index) => (
							<Cell key={index} fill={entry.color} />
						))}
					</Pie>
					<Legend
						verticalAlign='bottom'
						formatter={(value) => (
							<span
								style={{
									color: isDark ? '#ffffff' : '#111827',
									fontSize: 12,
								}}>
								{value}
							</span>
						)}
					/>
				</PieChart>
			</ResponsiveContainer>
		</div>
	);
}
