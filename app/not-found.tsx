'use client';

import { ErrorBox } from '@/components/custom/ErrorBox';
import { Navbar } from './(landing)/components/Navbar';


export default function Error() {
	return (
		<div className=' w-screen h-screen flex flex-col items-start'>
			<Navbar />
			<ErrorBox head='404 page not found.' description='The page you requested for is not on our server. Please go back
				to home page.' />
		</div>
	);
}
