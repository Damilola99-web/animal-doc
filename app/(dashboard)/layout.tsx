import Navbar from '@/components/custom/Navbar';
import Sidebar from '@/components/custom/Sidebar';
import { ReactNode } from 'react';

const DashboardLayout = async ({ children }: { children: ReactNode }) => {

	return (
		<div className=' h-full relative'>
			<div className='hidden h-full md:flex md:w-72 md:flex-col md:fixed md:inset-y-0 bg-gray-900'>
				<Sidebar />
			</div>
			<main className=' md:pl-72'>
				<Navbar />
				{children}
			</main>
		</div>
	);
};

export default DashboardLayout;
