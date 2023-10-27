import Image from 'next/image';

export const Loader = () => {
	return (
		<div className='h-full flex flex-col gap-y-4 items-center justify-center'>
			<div className='w-10 h-10 animate-spin relative'>
				<Image
					alt='Loader'
					src='/logo.png'
					fill
				/>
			</div>
		</div>
	);
};
