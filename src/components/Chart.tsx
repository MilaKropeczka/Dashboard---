'use client';
import { useEffect, useState } from 'react';
import useTheme from '@/hooks/useTheme';
import {
	XAxis,
	LabelList,
	CartesianGrid,
	ResponsiveContainer,
	Bar,
	BarChart,
	Legend,
} from 'recharts';

interface ChartData {
	name: string;
	Income: number;
	Expenses: number;
}

interface Props {
	data: ChartData[];
}

export default function Chart({ data }: Props) {
	const { isDark } = useTheme();
	const [filteredData, setFilteredData] = useState(data);

	useEffect(() => {
		const updateData = () => {
			const width = window.innerWidth;
			if (width < 359) setFilteredData(data.slice(0, 3));
			else if (width < 400) setFilteredData(data.slice(0, 4));
			else if (width < 1200) setFilteredData(data.slice(0, 6));
			else setFilteredData(data.slice(0, 8));
		};

		updateData();
		window.addEventListener('resize', updateData);
		return () => window.removeEventListener('resize', updateData);
	}, [data]);

	return (
		<ResponsiveContainer width='100%' height='100%'>
			<BarChart data={filteredData} barSize={30} barGap={2}>
				<linearGradient id='incomeGradient' x1='0' y1='0' x2='0' y2='1'>
					<stop offset='100%' stopColor='#8b5cf6' stopOpacity={0.9} />
					<stop offset='100%' stopColor='#c4b5fd' stopOpacity={0.9} />
				</linearGradient>
				<linearGradient
					id='expensesGradient'
					x1='0'
					y1='0'
					x2='0'
					y2='1'>
					<stop offset='100%' stopColor='#ec4899' stopOpacity={0.9} />
					<stop offset='100%' stopColor='#f9a8d4' stopOpacity={0.9} />
				</linearGradient>

				<CartesianGrid
					strokeDasharray='3 3'
					strokeOpacity={0.2}
					className='stroke-black/40 dark:stroke-white/40'
				/>
				<XAxis
					dataKey='name'
					axisLine={false}
					tickLine={false}
					tick={{
						fill: isDark ? '#ffffff' : '#111827',
						fontSize: 12,
					}}
				/>
				<Legend
					formatter={(value) => (
						<span className='text-black/95 dark:text-white/95'>
							{value}
						</span>
					)}
				/>
				<Bar
					dataKey='Income'
					fill='url(#incomeGradient)'
					radius={[10, 10, 0, 0]}>
					<LabelList
						dataKey='Income'
						position='top'
						fill={isDark ? '#e5e5e5' : '#111827'}
						fontSize={12}
					/>
				</Bar>
				<Bar
					dataKey='Expenses'
					fill='url(#expensesGradient)'
					radius={[10, 10, 0, 0]}>
					<LabelList
						dataKey='Expenses'
						position='top'
						fill={isDark ? '#e5e5e5' : '#111827'}
						fontSize={12}
					/>
				</Bar>
			</BarChart>
		</ResponsiveContainer>
	);
}
