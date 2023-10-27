import { Button } from '@/components/ui/button';
import { getDisease } from '@/lib/apiCalls';

export default async function page({
	params: { id },
}: {
	params: { id: string };
}) {
	try {
		const disease = await getDisease(id);
		return (
			<div className=' flex flex-col p-4 space-y-2'>
				<p className=' text-lg md:text-xl font-semibold'>{disease?.diseaseName}</p>
				<p className='text-lg'>{disease?.information}</p>
				<p className='font-bold'>Symptoms : </p>
				<div className='flex flex-wrap gap-2'>
					{disease?.symptoms.map((symptom) => (
						<Button
							variant={'secondary'}
							className=' shadow-md text-xs px-3 py-2 border-2 border-pink-600'
						>
							{symptom}
						</Button>
					))}
				</div>
				<p className='font-bold'>Treatment:</p>
				<div className='flex flex-wrap gap-2'>
					{disease?.treatment.map((treatment) => (
						<Button
							variant={'secondary'}
							className=' shadow-md text-xs px-3 py-2 border-2 border-pink-600'
						>
							{treatment}
						</Button>
					))}
				</div>
				<p className='font-bold'>Prevention:</p>
				<div className='flex flex-wrap gap-2'>
					{disease?.prevention.map((prevention) => (
						<Button
							variant={'secondary'}
							className=' shadow-md text-xs px-3 py-2 border-2 border-pink-600'
						>
							{prevention}
						</Button>
					))}
				</div>
			</div>
		);
	} catch (error) {
		if (error) {
			return (
				<p>Invalid url passed, disease does not exist on our server</p>
			);
		}
	}
}
