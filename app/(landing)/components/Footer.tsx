import { Facebook, Mail, PhoneCall, Twitter } from 'lucide-react';
import Link from 'next/link';

export const Footer = () => {
	return (
		<div className=' items-center justify-center text-center w-full md:items-start md:justify-start md:text-left md:space-x-6 md:space-y-0 md:flex-row p-4 px-10 flex flex-col space-y-8'>
			<div className=' flex flex-col space-y-3 max-w-[350px]'>
				<div className=' flex space-x-4 items-center justify-center md:justify-start '>
					<img
						className='w-8'
						src='/logo.png'
						alt='logo'
					/>
					<p className='md:text-lg font-semibold text-[#396379]'>
						Disease AI
					</p>
				</div>
				<p className='text-sm md:text-base text-[#a0b3c5]'>
					40, Funnab Estate, Abeokuta, Ogun State.
				</p>
			</div>
			<div className=' flex flex-col space-y-3 max-w-[350px]'>
				<p className=' text-sm md:text-base font-semibold text-[#396379]'>
					&copy; 2023 All rights reserved.
				</p>
			</div>
		</div>
	);
};
