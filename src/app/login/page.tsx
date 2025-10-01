import { LoginForm } from './LoginForm';
import { DemoAccess } from './DemoAccess';

export default async function LoginPage() {
	return (
		<div className='w-full h-screen flex justify-center items-center bg-gradient-to-br from-violet-200 via-pink-200 to-violet-300 dark:bg-none dark:bg-gray-800'>
			<DemoAccess />
			<LoginForm />
		</div>
	);
}
