import './globals.css';
import { Toaster } from '@/components/Toaster/Toaster';
import { ThemeButton } from '@/components/ThemeButton';

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='pl'>
			<body className='flex h-full min-h-screen bg-gradient-to-br from-violet-200 via-pink-200 to-violet-300 dark:bg-none dark:bg-gray-800'>
				{children}
				<Toaster />
				<ThemeButton />
			</body>
		</html>
	);
}
