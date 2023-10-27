import Pagination from '@/components/custom/Pagination';
import { Button } from '@/components/ui/button';
import { getDiseases } from '@/lib/apiCalls';
import Link from 'next/link';

interface IPage {
	params: { slug: string };
	searchParams: { [key: string]: string | string[] | undefined };
}

export default async function page({ searchParams }: IPage) {
	const pageNo = parseInt(searchParams.page as string) || 1;
	const diseases = await getDiseases(pageNo);

	return (
		<div className=' p-4 flex flex-col space-y-3 '>
			<p>Top Diseases from the database : Page {pageNo}</p>
			{diseases.map((disease) => (
				<Link href={`/disease/${disease.id}`}>
					<div className=' w-full p-4 shadow-lg border-2 rounded-md'>
						<p>{disease.diseaseName}</p>
						<p>{disease.information}</p>
						<div className=' flex flex-wrap gap-2 my-2'>
							{' '}
							{disease?.symptoms.map((symptom) => (
								<Button
									variant={'secondary'}
									className=' shadow-md text-xs px-3 py-2 border-2 border-pink-600'
								>
									{symptom}
								</Button>
							))}
						</div>
					</div>
				</Link>
			))}
			<Pagination currentPage={pageNo} />
		</div>
	);
}
