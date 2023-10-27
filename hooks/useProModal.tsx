import prismadb from '@/lib/prismadb';
import { create } from 'zustand';

interface usePromodalStore {
	isOpen: boolean;
	open: () => void;
	close: () => void;
}

export const useProModal = create<usePromodalStore>((set) => ({
	isOpen: false,
	close: () => set({ isOpen: false }),
	open: () => set({ isOpen: true }),
}));


