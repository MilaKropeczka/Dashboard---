import { gradients } from '@/lib/colors';
import { Toaster } from '@/components/Toaster/Toaster';

export default function Home() {
	return (
		<>
			<main className='flex flex-row w-full gap-4'>
				<div className='grid gap-6 w-full h-full grid-cols-1 sm:grid-cols-2 md:grid-cols-4 auto-rows-[150px]'>
					<div
						className={`bg-gradient-to-r ${gradients.card} shadow-xl rounded-3xl sm:col-span-2 sm:row-span-2`}></div>
					<div className='bg-white/60 shadow-xl rounded-3xl'></div>
					<div className='bg-white/60 shadow-xl rounded-3xl'></div>
					<div className='bg-white/60 shadow-xl rounded-3xl'></div>
					<div className='bg-white/60 shadow-xl rounded-3xl'></div>
					<div className='bg-white/60 shadow-xl rounded-3xl sm:col-span-2 sm:row-span-2'></div>
					<div className='bg-white/60 shadow-xl rounded-3xl sm:col-span-2 sm:row-span-2'></div>
				</div>
			</main>
			<Toaster />
		</>
	);
}
