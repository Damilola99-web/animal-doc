import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ClerkProvider } from '@clerk/nextjs';
import { ModalProvider } from '@/components/modalProvider';
import { getSymptoms } from '@/lib/apiCalls';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Disease Prediction',
	description: 'The AI powered disease prediction app.',
};

export default async function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const symptoms = await getSymptoms();
	return (
		<ClerkProvider>
			<html lang='en'>
				<body className={inter.className}>
					<ModalProvider symptoms={symptoms} />
					{children}
				</body>
			</html>
		</ClerkProvider>
	);
}
