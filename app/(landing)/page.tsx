'use client';

import { useAuth } from '@clerk/nextjs';
import { Navbar } from './components/Navbar';
import { Activity, Book, History } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Footer } from './components/Footer';

export default function Landing() {
	const { isSignedIn } = useAuth();
	return (
		<div className=' w-full flex flex-col items-start'>
			<Navbar />
			<div className='w-full relative min-h-[350px] max-h-[calc(100vh-100px)]'>
				<img
					className=' w-full min-w-full h-full object-cover min-h-[350px] max-h-[calc(100vh-100px)]'
					src={'/5.jpg'}
					alt='livestock'
				/>
				<div className=' w-full items-center justify-center flex h-full absolute top-0 left-0 bg-gradient-to-r from-pink-500/90  to-black/50'>
					<div className=' w-full self-center flex flex-col max-w-[500px] lg:max-w-[1000px] items-center justify-center space-y-4 md:space-y-8 p-4 md:p-8 text-center lg:text-left lg:items-start'>
						<p className=' text-2xl md:text-5xl lg:text-8xl font-bold text-[#eaf4f7]'>
							Want to find out about Animal Diseases?
						</p>
						<p className=' lg:text-xl md:text-base  text-[#eaf4f7]'>
						Read on 100+ animal diseases available on our website; their symptoms, prevention and treatment.
						</p>
						<Link href={isSignedIn ? '/dashboard' : '/sign-in'}>
							<Button
								variant={'secondary'}
								size={'lg'}
								className=' text-white bg-red-500 rounded-md'
							>
								Get started
							</Button>
						</Link>
					</div>
				</div>
			</div>
			{/* <SectionTwo /> */}
			<SectionThree />
			<SectionFour />
			<Footer />
		</div>
	);
}

const SectionTwo = () => {
	const services = [
		{
			title: 'Predict Disease',
			icon: Activity,
			details:
				'Easily predict animal disease with our data powered platform by stating the symptoms.',
		},
		{
			title: 'View Prediction History',
			icon: History,
			details:
				'Easily view prediction history after predicting diseases, based on the symptoms provided.',
		},
		{
			title: 'Explore Animal Diseases',
			icon: Book,
			details:
				'Read on 100+ animal diseases available on our website; their symptoms, prevention and treatment.',
		},
	];
	return (
		<div className=' my-10  space-y-6 md:space-y-0 items-center justify-center flex-col md:flex-row p-4 md:py-14 lg:py-16 md:p-8 w-full flex   md:space-x-8 lg:space-x-16  text-center'>
			{services.map((service) => (
				<div className=' items-center text-center lg:items-start lg:justify-start lg:text-left flex flex-col max-w-[220px] space-y-4 '>
					<service.icon
						className=' text-[#396379]'
						size={45}
					/>
					<p className=' text-[#396379] font-bold text-lg'>
						{service.title}
					</p>
					<p className=' text-[#a0b3c5] text-base'>
						{service.details}
					</p>
				</div>
			))}
		</div>
	);
};

const SectionThree = () => {
	const items = [
		{
			heading: 'Predict Disease',
			no: 1,
			details:
				'Easily predict animal disease with our data powered platform by stating the symptoms.',
		},
		{
			heading: 'View Prediction History',
			no: 2,
			details:
				'Easily view prediction history after predicting diseases, based on the symptoms provided.',
		},
		{
			heading: 'Explore Animal Diseases',
			no: 3,
			details:
				'Read on 100+ animal diseases available on our website; their symptoms, prevention and treatment.',
		},
	];
	return (
		<div className=' py-9 md:py-12 p-6 w-full flex flex-col space-y-6 items-center justify-center text-center'>
			<p className=' mb-7 lg:mb-14 text-xl md:text-2xl lg:text-4xl font-semibold capitalize text-[#396379] '>
				This is how it works
			</p>
			<div className=' flex flex-col md:flex-row items-start md:space-x-4 md:space-y-0 space-y-5 '>
				{items.map((item) => (
					<div className='flex flex-col max-w-[260px] items-center justify-center space-y-4 '>
						<div className=' w-14 flex items-center justify-center font-bold h-14 mb-6  rounded-full bg-[#ffb454] text-white'>
							{item.no}
						</div>
						<p className=' text-lg capitalize font-semibold text-[#396379]'>
							{item.heading}
						</p>
						<p className='  text-[#a0b3c5]'>{item.details}</p>
					</div>
				))}
			</div>
		</div>
	);
};

const SectionFour = () => {
	const { isSignedIn } = useAuth();
	return (
		<div className=' space-y-6 md:p-10 lg:p-12 p-6 w-full lg:min-h-[400px] my-5 flex flex-col text-center items-center justify-center min-h-[300px] bg-[#eaf4f7]'>
			<p className=' md:text-2xl lg:text-3xl text-xl text-[#396379] font-semibold '>
				Get Correct Prediction
			</p>
			<p className=' max-w-[550px] md:text-lg lg:text-xl text-base  text-[#a0b3c5]'>
				Easily predict animal disease with our data powered platform by
				stating the symptoms.
			</p>
			<Link href={isSignedIn ? '/dashboard' : '/sign-in'}>
				<Button
					variant={'secondary'}
					size={'lg'}
					className='  text-white bg-red-500 rounded-md'
				>
					Get started Now
				</Button>
			</Link>
		</div>
	);
};

// bg for the 4th section #eaf4f7
// text cloor #396379
// subtitle text #a0b3c5
// the yellow color #ffb454
