'use client';

import { useState } from 'react';
import { signIn } from 'next-auth/react';

export function LoginForm() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [loading, setLoading] = useState(false);

	async function handleSubmit(e: React.FormEvent) {
		e.preventDefault();
		setLoading(true);
		try {
			await signIn('credentials', {
				redirect: true,
				email,
				password,
				callbackUrl: '/dashboard',
			});
		} catch (err) {
			setLoading(false);
		}
	}

	return (
		<div className='flex flex-col items-center bg-white/60 dark:bg-gray-700/95 shadow-2xl rounded-3xl px-2 py-12 sm:px-10 m-2 w-104'>
			<h2 className='text-3xl font-bold bg-gradient-to-r from-violet-600 to-pink-500 dark:from-violet-500/90 dark:to-pink-500/90  bg-clip-text text-transparent pb-5'>
				Sign in
			</h2>
			<form
				onSubmit={handleSubmit}
				className='w-full flex flex-col gap-4'>
				<input
					type='email'
					placeholder='email@testowy.pl'
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					className='w-full px-4 py-3 rounded-xl border border-violet-300/40 bg-white/60 dark:bg-gray-700/95 text-violet-900 dark:text-white/90 placeholder-violet-700/50 dark:placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent transition'
				/>
				<input
					type='password'
					placeholder='password'
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					className='w-full px-4 py-3 rounded-xl border border-violet-300/40 bg-white/60 dark:bg-gray-700/95 text-violet-900 dark:text-white/90 placeholder-violet-700/50 dark:placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-transparent transition'
				/>
				<button
					type='submit'
					disabled={loading}
					className='mt-2 w-full py-3 rounded-lg bg-gradient-to-r from-violet-500 to-pink-500 dark:from-violet-500/95 dark:to-pink-500/95 text-white font-semibold shadow-lg hover:opacity-90 active:scale-95 transition cursor-pointer disabled:opacity-70'>
					{loading ? 'Logging in...' : 'Log in'}
				</button>
			</form>
		</div>
	);
}
