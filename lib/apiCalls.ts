import { Disease } from '@prisma/client';
import prismadb from './prismadb';

export type PredictionResult = {
	matchingDiseases: Disease[];
	mathingSymptom1: Disease[];
	mathingSymptom2: Disease[];
	symptom1: string;
	symptom2: string;
};

export const getSymptoms = async () => {
	const symptoms = await prismadb.symptoms.findMany();
	return symptoms;
};

export const getDisease = async (id: string) => {
	const disease = await prismadb.disease.findUnique({ where: { id } });
	return disease;
};

export const getDiseases = async (page: number) => {
	let skip = 0 + (page - 1) * 20;

	const diseases = await prismadb.disease.findMany({
		orderBy: { diseaseName: 'asc' },
		take: 20,
		skip,
	});
	return diseases;
};

export const getUserPredictions = async (userId: string) => {
	const predictions = await prismadb.predictions.findMany({
		where: { userId },
	});
	return predictions;
};

export const getHistory = async (id: string) => {
	const prediction = await prismadb.predictions.findUnique({ where: { id } });
	return prediction;
};
