'use client';

import { Button } from '@/components/ui/button';
import {
	LayoutDashboard,
	Menu,
	PieChart,
	PlusSquare,
	Rabbit,
} from 'lucide-react';
import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetTrigger,
} from '@/components/ui/sheet';
import Sidebar from '@/components/custom/Sidebar';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useProModal } from '@/hooks/useProModal';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({ weight: '600', subsets: ['latin'] });

const MobileSidebar = () => {
	const pathname = usePathname();
	const predictModal = useProModal();

	const routes = [
		{
			label: 'Dashboard',
			icon: LayoutDashboard,
			href: '/dashboard',
			color: 'text-sky-500',
		},
		{
			label: 'Prediction Results',
			icon: PieChart,
			href: '/result',
			color: 'text-green-700',
		},
		{
			label: 'Animal Diseases',
			icon: Rabbit,
			href: '/disease',
			color: 'text-pink-700',
		},
	];

	const [isMounted, setIsMounted] = useState(false);

	useEffect(() => {
		setIsMounted(true);
	}, []);

	if (!isMounted) {
		return null;
	}

	return (
		<Sheet>
			<SheetTrigger>
				<Button
					variant={'ghost'}
					size={'icon'}
					className='md:hidden'
				>
					<Menu />
				</Button>
			</SheetTrigger>
			<SheetContent
				side={'left'}
				className='p-0'
			>
				<div className=' space-y-4 py-4 flex flex-col h-full bg-[#111827] text-white'>
					<div className='px-3 py-2 flex-1'>
						<Link
							className=' flex items-center pl-3 mb-14'
							href={'/dashboard'}
						>
							<div className='relative w-8 h-8 mr-4'>
								<Image
									fill
									alt='logo'
									src={'/logo.png'}
								/>
							</div>
							<h1
								className={cn(
									'text-2xl font-bold',
									montserrat.className
								)}
							>
								Disease AI
							</h1>
						</Link>
						<div className='space-y-1'>
							{routes.map((route) => (
								<Link
									className={cn(
										'text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition',
										pathname === route.href
											? 'text-white bg-white/10'
											: 'text-zinc-400'
									)}
									key={route.href}
									href={route.href}
								>
									<SheetClose asChild>
										<div className=' items-center flex flex-1'>
											<route.icon
												className={cn(
													'h-5 w-5 mr-3',
													route.color
												)}
											></route.icon>
											{route.label}
										</div>
									</SheetClose>
								</Link>
							))}
							<SheetClose asChild>
								<div
									onClick={predictModal.open}
									className={cn(
										'text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition',
										predictModal.isOpen
											? 'text-white bg-white/10'
											: 'text-zinc-400'
									)}
								>
									<div className=' items-center flex flex-1'>
										<PlusSquare
											className={cn(
												'h-5 w-5 mr-3',
												'text-violet-500'
											)}
										></PlusSquare>
										{'Predict Disease'}
									</div>
								</div>
							</SheetClose>
						</div>
					</div>
				</div>
			</SheetContent>
		</Sheet>
	);
};

export default MobileSidebar;
