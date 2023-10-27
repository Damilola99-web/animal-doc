'use client';

import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useRouter } from 'next/navigation';

interface TableData {
	id: number;
	symptom1: string;
	symptom2: string;
	date: Date;
	disease: string;
}

export default function Table({
	tableData,
	columns,
}: {
	tableData: TableData[];
	columns: GridColDef[];
}) {
	const router = useRouter();
	return (
		<DataGrid
			rows={tableData}
			columns={columns}
			initialState={{
				pagination: {
					paginationModel: { page: 0, pageSize: 10 },
				},
			}}
			pageSizeOptions={[10, 20, 25]}
			onRowClick={({ row }) => {
				router.push(`/result/${row.predictionId}`);
			}}
		/>
	);
}
