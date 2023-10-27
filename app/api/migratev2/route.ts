import prismadb from '@/lib/prismadb';
import symptoms from '../../../symptoms.json';
import { NextResponse } from 'next/server';

export async function POST(req: Request, res: Response) {
	try {
		const diseaseData = symptoms.map((symptom) => ({
			name: symptom,
		}));

		const response = await prismadb.symptoms.createMany({
			data: diseaseData,
		});
		return NextResponse.json(response);
	} catch (error) {
		return new NextResponse('Internal error', { status: 500 });
	}
}
