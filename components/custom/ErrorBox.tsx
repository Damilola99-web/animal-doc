'use client';
import { ArrowRight } from 'lucide-react';
import { Button } from '../ui/button';
import Link from 'next/link';

export const ErrorBox = ({
	description,
	head,
}: {
	head: string;
	description: string;
}) => {
	return (
		<div className=' p-4 space-y-4 flex flex-col items-center justify-center w-full h-full self-center text-center'>
			<p className=' font-bold text-lg'>{head}</p>
			<p className=' text-sm'>{description}</p>
			<Link href={'/'}>
				<Button
					className=' space-x-3 flex'
					variant={'secondary'}
				>
					<p>Go to Homepage</p> <ArrowRight className=' w-4 h-4' />{' '}
				</Button>
			</Link>
		</div>
	);
};
