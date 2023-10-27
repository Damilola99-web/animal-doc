import { Button } from '@/components/ui/button';
import { getHistory } from '@/lib/apiCalls';
import Link from 'next/link';
import { formatDistanceToNow } from 'date-fns';

export default async function page({
	params: { id },
}: {
	params: { id: string };
}) {
	try {
		const Hitory = await getHistory(id);
		return (
			<div className=' flex flex-col p-4 space-y-2'>
				<p className='  font-semibold'>
					Date predicted: {formatDistanceToNow(Hitory?.createdAt!)} ago.
				</p>
				<p className='text-lg'>
					Click on the predicted diseases to read more on them, else
					there are no matching diseases.
				</p>
				<p className='font-bold'>Noticed Symptoms : </p>
				<div className='flex flex-wrap gap-2'>
					{Hitory?.noticedSymptoms.map((symptom) => (
						<Button
							variant={'secondary'}
							className=' shadow-md text-xs px-3 py-2 border-2 border-pink-600'
						>
							{symptom}
						</Button>
					))}
				</div>
				<p className='font-bold'>Predicted Diseases:</p>
				<div className='flex flex-wrap gap-2'>
					{Hitory?.diseases.map((disease, i) => (
						<Link href={`/disease/${Hitory.diseaseIds[i]}`}>
							<Button
								variant={'secondary'}
								className=' shadow-md text-xs px-3 py-2 border-2 border-pink-600'
							>
								{disease}
							</Button>
						</Link>
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
