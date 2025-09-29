'use client';
import { useState, useCallback } from 'react';

export type ToastType = 'success' | 'error' | 'warning' | 'info';

export interface Toast {
	id: string;
	message: string;
	type: ToastType;
	duration?: number;
}

type ToastFunctions = {
	success: (message: string, duration?: number) => string;
	error: (message: string, duration?: number) => string;
	warning: (message: string, duration?: number) => string;
	info: (message: string, duration?: number) => string;
};

let toastFunctions: ToastFunctions | null = null;

export function useToast() {
	const [toasts, setToasts] = useState<Toast[]>([]);

	const removeToast = useCallback((id: string) => {
		setToasts((prev) => prev.filter((toast) => toast.id !== id));
	}, []);

	const addToast = useCallback(
		(
			message: string,
			type: ToastType = 'info',
			duration: number = 3000
		): string => {
			const id = Math.random().toString(36).substr(2, 9);

			setToasts((prev) => [...prev, { id, message, type, duration }]);

			if (duration > 0) {
				setTimeout(() => {
					removeToast(id);
				}, duration);
			}

			return id;
		},
		[removeToast]
	);

	const clearAllToasts = useCallback(() => {
		setToasts([]);
	}, []);

	const toastMethods: ToastFunctions = {
		success: (message: string, duration?: number) =>
			addToast(message, 'success', duration),
		error: (message: string, duration?: number) =>
			addToast(message, 'error', duration),
		warning: (message: string, duration?: number) =>
			addToast(message, 'warning', duration),
		info: (message: string, duration?: number) =>
			addToast(message, 'info', duration),
	};

	if (typeof window !== 'undefined') {
		toastFunctions = toastMethods;
	}

	return {
		toasts,
		addToast,
		removeToast,
		clearAllToasts,
		...toastMethods,
	};
}

export const toast: ToastFunctions = {
	success: (message: string, duration?: number) =>
		toastFunctions?.success(message, duration) ?? '',
	error: (message: string, duration?: number) =>
		toastFunctions?.error(message, duration) ?? '',
	warning: (message: string, duration?: number) =>
		toastFunctions?.warning(message, duration) ?? '',
	info: (message: string, duration?: number) =>
		toastFunctions?.info(message, duration) ?? '',
};
