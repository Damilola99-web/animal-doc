import prismadb from '@/lib/prismadb';
import { auth } from '@clerk/nextjs';
import { Disease } from '@prisma/client';
import { NextResponse } from 'next/server';

export const POST = async (req: Request, res: Response) => {
	const body = await req.json();
	const { userId } = auth();
	const { symptom1, symptom2 } = body;

	if (!userId) {
		return new NextResponse('Unauthorized', { status: 401 });
	}

	const diseases = await prismadb.disease.findMany();

	const matchingDiseases: Disease[] = [];
	const mathingSymptom1: Disease[] = [];
	const mathingSymptom2: Disease[] = [];

	for (const disease of diseases) {
		if (
			disease.symptoms.includes(symptom1) &&
			disease.symptoms.includes(symptom2)
		) {
			matchingDiseases.push(disease);
		}
		if (disease.symptoms.includes(symptom1)) {
			mathingSymptom1.push(disease);
		}
		if (disease.symptoms.includes(symptom2)) {
			mathingSymptom2.push(disease);
		}
	}

	const matchingDiseaseIds = matchingDiseases.map((disease) => disease.id);
	const matchingDisease = matchingDiseases.map(
		(disease) => disease.diseaseName
	);

	const history = await prismadb.predictions.create({
		data: {
			userId,
			noticedSymptoms: [symptom1, symptom2],
			diseases: matchingDisease,
			diseaseIds: matchingDiseaseIds,
		},
	});

	return NextResponse.json(
		{
			matchingDiseases,
			mathingSymptom1,
			mathingSymptom2,
			symptom1,
			symptom2,
		},
		{ status: 200 }
	);
};
