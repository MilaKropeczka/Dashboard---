import NextAuth, { type AuthOptions } from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { users } from '@/lib/mockDb';

export const authOptions: AuthOptions = {
	providers: [
		Credentials({
			name: 'Credentials',
			credentials: {
				email: { label: 'Email', type: 'email' },
				password: { label: 'Password', type: 'password' },
			},
			async authorize(credentials) {
				const user = users.find(
					(u) =>
						u.email === credentials?.email &&
						u.password === credentials?.password
				);
				if (user) {
					return { id: user.id, email: user.email };
				}
				return null;
			},
		}),
	],
	session: { strategy: 'jwt' as const },
	pages: { signIn: '/login' },
	secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
