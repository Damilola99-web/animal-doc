'use client';

import { Card } from '@/components/ui/card';
import { useProModal } from '@/hooks/useProModal';
import { cn } from '@/lib/utils';
import {
	ArrowRight,
	Code,
	ImageIcon,
	MessageSquare,
	Music,
	PieChart,
	PlusSquare,
	Rabbit,
	VideoIcon,
} from 'lucide-react';
import { useRouter } from 'next/navigation';

const tools = [
	{
		label: 'Prediction Results',
		icon: PieChart,
		href: '/result',
		color: 'text-green-700',
		bgColor: 'bg-green-700/10',
	},
	{
		label: 'Animal Diseases',
		icon: Rabbit,
		href: '/disease',
		color: 'text-pink-700',
		bgColor: 'bg-pink-700/10',
	},
];

export default function Home() {
	const router = useRouter();
	const predictModal = useProModal();
	return (
		<div className='p-3'>
			<div className=' mb-8 space-y-4'>
				<h2 className=' text-2xl md:text-4xl font-bold text-center'>
					Explore the power of Disease Prediction
				</h2>
				<p className=' text-muted-foreground font-light text-sm md:text-lg text-center'>
					Predict animal diseases easily with the power of our application.
				</p>
			</div>
			<div className='px-4 md:px-20 lg:px-32 space-y-4'>
				<Card
					onClick={predictModal.open}
					className='p-4 border-black/5 flex items-center
						 justify-between hover:shadow-md
						  transition cursor-pointer'
				>
					<div className='flex items-center gap-x-4'>
						<div
							className={cn(
								'p-2 w-fit rounded-md',
								'bg-violet-500/10'
							)}
						>
							<PlusSquare
								className={cn('w-8 h-8', 'text-violet-500')}
							></PlusSquare>
						</div>
						<div className='font-semibold'>Predict Disease</div>
					</div>
					<ArrowRight className='w-5 h-5' />
				</Card>
				{tools.map((tool) => (
					<Card
						onClick={() => router.push(tool.href)}
						key={tool.href}
						className='p-4 border-black/5 flex items-center
						 justify-between hover:shadow-md
						  transition cursor-pointer'
					>
						<div className='flex items-center gap-x-4'>
							<div
								className={cn(
									'p-2 w-fit rounded-md',
									tool.bgColor
								)}
							>
								<tool.icon
									className={cn('w-8 h-8', tool.color)}
								></tool.icon>
							</div>
							<div className='font-semibold'>{tool.label}</div>
						</div>
						<ArrowRight className='w-5 h-5' />
					</Card>
				))}
			</div>
		</div>
	);
}
