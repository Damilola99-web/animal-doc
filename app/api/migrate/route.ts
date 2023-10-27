import prismadb from '@/lib/prismadb';
import diseases from '../../../diseases.json';
import { NextResponse } from 'next/server';

export async function POST(req: Request, res: Response) {
	try {
		const diseaseData = diseases.map((disease) => ({
			diseaseName: disease.diseaseName,
			symptoms: disease.symptoms,
			information: disease.information,
			prevention: disease.prevention,
			treatment: disease.treatment,
		}));
		console.log(diseaseData);
		const response = await prismadb.disease.createMany({
			data: diseaseData,
		});
		return NextResponse.json(response);
	} catch (error) {
		return new NextResponse('Internal error', { status: 500 });
	}
}
