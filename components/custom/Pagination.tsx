'use client';

import { useRouter } from 'next/navigation';
import ResponsivePagination from 'react-responsive-pagination';
import 'react-responsive-pagination/themes/classic.css';

export default function Pagination({ currentPage }: { currentPage: number }) {
	const router = useRouter();
	const handlePageChange = (pageNo: number) => {
		router.push(`/disease?page=${pageNo}`);
	};
	return (
		<ResponsivePagination
			current={currentPage}
			total={6}
			onPageChange={handlePageChange}
		/>
	);
}
