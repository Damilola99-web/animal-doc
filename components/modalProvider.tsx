'use client';

import { useEffect, useState } from 'react';
import { ProModal } from './custom/ProModal';
import { Symptoms } from '@prisma/client';

export const ModalProvider = ({ symptoms }: { symptoms: Symptoms[] }) => {
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) {
		return null;
	}

	return (
		<>
			<ProModal symptoms={symptoms} />
		</>
	);
};
