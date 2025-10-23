import './globals.css';
import { Toaster } from '@/components/Toaster/Toaster';

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html>
			<head>
				<script
					dangerouslySetInnerHTML={{
						__html: `
              (function() {
                try {
                  const stored = localStorage.getItem('theme');
                  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  const dark = stored === 'dark' || (!stored && prefersDark);
                  document.documentElement.classList.toggle('dark', dark);
                } catch(e) {}
              })();
            `,
					}}
				/>
			</head>
			<body className='flex h-full min-h-screen bg-gradient-to-br from-violet-200 via-pink-200 to-violet-300 dark:bg-none dark:bg-gray-800'>
				{children}
				<Toaster />
			</body>
		</html>
	);
}
