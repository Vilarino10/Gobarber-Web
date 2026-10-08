import { createContext } from 'react';
import { ToastMessage } from './index';

export interface ToastContextData {
  addToast: (data: Omit<ToastMessage, 'id'>) => void;
  removeToast(id: string): void;
}

export const ToastContext = createContext<ToastContextData>(
  {} as ToastContextData,
);
