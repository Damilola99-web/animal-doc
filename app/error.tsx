'use client';

import { ErrorBox } from '@/components/custom/ErrorBox';
import Navbar from '@/components/custom/Navbar';

export default function Error() {
	return (
		<div className=' w-screen h-screen flex flex-col items-start'>
			<Navbar />
			<ErrorBox
				head='An Error occurred'
				description='An error occurred please refresh this page.'
			/>
		</div>
	);
}
