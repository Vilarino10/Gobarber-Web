import { useContext } from 'react';

import { ToastContext } from '../context/ToastContext/context';

import type { ToastContextData } from '../context/ToastContext/context';

export function useToast(): ToastContextData {
  const context = useContext(ToastContext);

  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }

  return context;
}

export default useToast;
