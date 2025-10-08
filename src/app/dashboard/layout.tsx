import type { ReactNode } from 'react';
import Sidebar from '@/components/Navigation/Sidebar';
import BottomNav from '@/components/Navigation/BottomNav';

export default function DashboardLayout({ children }: { children: ReactNode }) {
	return (
		<div className='flex w-full min-h-screen max-w-[1920px] mx-auto'>
			<Sidebar />
			<main className='flex-1 overflow-auto'>{children}</main>
			<BottomNav />
		</div>
	);
}
