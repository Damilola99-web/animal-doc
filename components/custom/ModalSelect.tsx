'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import Select from 'react-select';

import { Button } from '@/components/ui/button';
import { Form, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { Zap } from 'lucide-react';
import { Dispatch, SetStateAction, useState } from 'react';
import { Disease, Symptoms } from '@prisma/client';
import { PredictionResult } from '@/lib/apiCalls';

const FormSchema = z.object({
	symptom1: z.object(
		{ value: z.string(), label: z.string() },
		{ required_error: 'Please select a symptom. ' }
	),

	symptom2: z.object(
		{ value: z.string(), label: z.string() },
		{ required_error: 'Please select a symptom. ' }
	),
});

interface ISelect {
	setData: Dispatch<SetStateAction<null | PredictionResult>>;
	setLoading: Dispatch<SetStateAction<boolean>>;
	symptoms: Symptoms[];
}

export function SelectForm({ setLoading, setData, symptoms }: ISelect) {
	const form = useForm<z.infer<typeof FormSchema>>({
		resolver: zodResolver(FormSchema),
	});

	const [error, setError] = useState<null | string>(null);

	const options = symptoms.map((symptom) => ({
		label: symptom.name,
		value: symptom.name,
	}));

	async function onSubmit(data: z.infer<typeof FormSchema>) {
		setLoading(true);
		try {
			const result = await axios.post('/api/predict', {
				symptom1: data.symptom1.value,
				symptom2: data.symptom2.value,
			});

			setData(result.data);
		} catch (error: any) {
			setError(error.message);
			console.log({ error });
		} finally {
			setLoading(false);
		}
	}

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className='w-full p-4 space-y-6'
			>
				<p className=' text-base'>
					Select two symptoms noticed to diagnose the disease.
				</p>
				<FormField
					control={form.control}
					name='symptom1'
					render={({ field }) => (
						<FormItem>
							<Select
								styles={{
									control: (baseStyles, state) => ({
										...baseStyles,
										paddingLeft: '1rem',
										paddingRight: '1rem',
										paddingTop: '5px',
										paddingBottom: '5px',
									}),
								}}
								className=' text-left'
								value={field.value}
								onChange={field.onChange}
								// @ts-ignore
								options={options}
								placeholder='Select a symptom'
							/>

							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name='symptom2'
					render={({ field }) => (
						<FormItem>
							<Select
								styles={{
									control: (baseStyles, state) => ({
										...baseStyles,
										paddingLeft: '1rem',
										paddingRight: '1rem',
										paddingTop: '5px',
										paddingBottom: '5px',
									}),
								}}
								className=' text-left'
								value={field.value}
								onChange={field.onChange}
								// @ts-ignore
								options={options}
								placeholder='Select a symptom'
							/>
							<FormMessage />
						</FormItem>
					)}
				/>
				<Button
					className=' flex space-x-3'
					type='submit'
					variant={'premium'}
					size={'lg'}
				>
					<p> Predict Disease</p>
					<Zap
						size={18}
						fill='white'
					/>
				</Button>
			</form>
		</Form>
	);
}
