'use client';

import { useProModal } from '@/hooks/useProModal';

import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
} from '../ui/dialog';
import { useState } from 'react';
import { Loader } from './Loader';
import { SelectForm } from './ModalSelect';
import { Disease, Symptoms } from '@prisma/client';
import { PredictionResult } from '@/lib/apiCalls';
import Link from 'next/link';
import { Button } from '../ui/button';

export const ProModal = ({ symptoms }: { symptoms: Symptoms[] }) => {
	const proModal = useProModal();
	const [loading, setLoading] = useState(false);
	const [data, setData] = useState<null | PredictionResult>(null);

	if (loading) {
		return (
			<Dialog
				open={proModal.isOpen}
				onOpenChange={proModal.close}
			>
				<DialogContent>
					<DialogHeader>
						<DialogTitle className='flex justify-center items-center flex-col gap-y-4 pb-2'>
							<div className=' flex items-center gap-x-2 font-bold py-1'>
								Result is Loading
							</div>
						</DialogTitle>
						<DialogDescription className='text-center py-5  space-y-2 text-zinc-900 font-medium'>
							<Loader />
						</DialogDescription>
					</DialogHeader>
				</DialogContent>
			</Dialog>
		);
	}
	if (data) {
		return (
			<Dialog
				open={proModal.isOpen}
				onOpenChange={() => {
					setData(null);
					proModal.close();
				}}
			>
				<DialogContent>
					<DialogHeader>
						<DialogTitle className='flex justify-center items-center flex-col gap-y-4 pb-2'>
							<div className=' flex items-center gap-x-2 font-bold py-1'>
								Prediction Result
							</div>
						</DialogTitle>
						<DialogDescription className='text-center py-3  space-y-2 text-zinc-900'>
							{data.matchingDiseases.length > 0 ? (
								<p className=''>
									The predicted diseases are below, click on
									them for more information.
								</p>
							) : (
								<p>
									No actual matching disease, but you can view
									diseases related to the symptoms
								</p>
							)}
							<div className=' flex flex-wrap gap-2 '>
								{data.matchingDiseases.length > 0 &&
									data.matchingDiseases.map((disease) => (
										<Link
											onClick={proModal.close}
											href={`/disease/${disease.id}`}
										>
											<Button
												variant={'secondary'}
												className=' shadow-md text-xs px-3 py-2 border-2 border-pink-600'
											>
												{disease.diseaseName}
											</Button>
										</Link>
									))}
							</div>
							<div className=' flex flex-col  '>
								{data.matchingDiseases.length == 0 && (
									<div className=' flex flex-col space-y-3'>
										<div>
											<p className=' my-3 text-left'>
												Diseases relating to{' '}
												{data.symptom1} :
											</p>
											<div className=' flex flex-wrap gap-2'>
												{data.mathingSymptom1
													.slice(0, 5)
													.map((disease) => (
														<Link
															onClick={
																proModal.close
															}
															href={`/disease/${disease.id}`}
														>
															<Button
																variant={
																	'secondary'
																}
																className=' shadow-md text-xs px-3 py-2 border-2 border-pink-600'
															>
																{disease
																	.diseaseName
																	.length <=
																10
																	? disease.diseaseName
																	: disease.diseaseName.slice(
																			0,
																			20
																	  ) + '...'}
															</Button>
														</Link>
													))}
											</div>
										</div>
										<div>
											<p className=' my-3 text-left'>
												Diseases relating to{' '}
												{data.symptom2} :
											</p>
											<div className='flex flex-wrap gap-2'>
												{data.mathingSymptom2
													.slice(0, 5)
													.map((disease) => (
														<Link
															onClick={
																proModal.close
															}
															href={`/disease/${disease.id}`}
														>
															<Button
																variant={
																	'secondary'
																}
																className=' shadow-md text-xs px-3 py-2 border-2 border-pink-600'
															>
																{disease
																	.diseaseName
																	.length <=
																10
																	? disease.diseaseName
																	: disease.diseaseName.slice(
																			0,
																			20
																	  ) + '...'}
															</Button>
														</Link>
													))}
											</div>
										</div>
									</div>
								)}
							</div>
						</DialogDescription>
					</DialogHeader>
				</DialogContent>
			</Dialog>
		);
	}

	return (
		<Dialog
			open={proModal.isOpen}
			onOpenChange={proModal.close}
		>
			<DialogContent>
				<DialogHeader>
					<DialogTitle className='flex justify-center items-center flex-col gap-y-4 pb-2'>
						<div className=' flex items-center gap-x-2 font-bold py-1'>
							Predict Animal Diseases
						</div>
					</DialogTitle>
					<DialogDescription className='text-center pt-2 space-y-2 text-zinc-900 font-medium'>
						<SelectForm
							symptoms={symptoms}
							setData={setData}
							setLoading={setLoading}
						/>
					</DialogDescription>
				</DialogHeader>
			</DialogContent>
		</Dialog>
	);
};
