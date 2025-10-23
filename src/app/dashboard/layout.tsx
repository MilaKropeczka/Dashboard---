import type { ReactNode } from 'react';
import Sidebar from '@/components/Navigation/Sidebar';
import BottomNav from '@/components/Navigation/BottomNav';
import { ThemeButton } from '@/components/ThemeButton';

export default function DashboardLayout({ children }: { children: ReactNode }) {
	return (
		<div className='flex w-full min-h-screen max-w-[1920px] mx-auto'>
			<Sidebar />
			<div className='flex flex-col flex-1 h-screen'>
				<ThemeButton />
				<div className='flex flex-col flex-1 overflow-hidden'>
					<main className='flex-1 overflow-auto'>{children}</main>
					<BottomNav />
				</div>
			</div>
		</div>
	);
}
