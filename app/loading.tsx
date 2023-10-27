'use client';

import { Loader } from '@/components/custom/Loader';

export default function Loading() {
	return (
		<div className=' w-screen h-screen overflow-hidden flex items-center justify-center'>
			<Loader />
		</div>
	);
}
