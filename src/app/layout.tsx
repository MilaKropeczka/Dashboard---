'use client';
import './globals.css';
import { gradients } from '@/lib/colors';

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='pl'>
			<body
				className={`flex h-full min-h-screen bg-gradient-to-br ${gradients.background}`}>
				{children}
			</body>
		</html>
	);
}
