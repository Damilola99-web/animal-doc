import { getUserPredictions } from '@/lib/apiCalls';
import { auth } from '@clerk/nextjs';
import { GridColDef } from '@mui/x-data-grid';
import Table from './components/Table';

export default async function page() {
	const { userId } = auth();
	const predictionHistory = await getUserPredictions(userId!);
	const tableData = predictionHistory.map((prediction, i) => ({
		id: i + 1,
		predictionId : prediction.id,
		symptom1: prediction.noticedSymptoms[0],
		symptom2: prediction.noticedSymptoms[1],
		date: prediction.createdAt,
		disease: prediction.diseases[0] || 'No matching disease ',
	}));



	const columns: GridColDef[] = [
		{ field: 'id', headerName: 'ID', width: 50 },
		{ field: 'symptom1', headerName: 'Symptom 1', width: 120 },
		{ field: 'symptom2', headerName: 'Symptom 2', width: 120 },
		{
			field: 'date',
			headerName: 'Date',
			type: 'date',
			width: 150,
		},
		{
			field: 'disease',
			headerName: 'Predicted Disease',
			width: 180,
		},
	];

	return (
		<div className=' flex flex-col p-4 lg:p-6'>
			<p className=' text-lg md:text-xl my-3 font-semibold'>Prediction History</p>
			<p className=' my-3'>Check your prediction history over the time. You can see more details by clicking on the particular prediction you want to check.</p>
			<Table
				columns={columns}
				tableData={tableData}

			/>
		</div>
	);
}
