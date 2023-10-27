'use client';
import { Button } from '@/components/ui/button';
import { useAuth } from '@clerk/nextjs';
import Image from 'next/image';
import Link from 'next/link';

export const Navbar = () => {
	const { isSignedIn } = useAuth();
	return (
		<div className=' flex p-4 md:px-8 justify-between items-center w-full bg-transparent shadow-md h-[100px]'>
			<div className=' flex space-x-3 items-center'>
				<p className='text-lg font-bold'>Disease AI</p>
				<Image
					src='/logo.png'
					alt='logo'
					width={50}
					height={50}
				/>
			</div>
			<Link href={isSignedIn ? '/dashboard' : '/sign-in'}>
				<Button variant={'secondary'}>
					{isSignedIn ? 'Go to Dashboard' : 'Login'}
				</Button>
			</Link>
		</div>
	);
};
