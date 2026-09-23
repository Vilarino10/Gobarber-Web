declare module '@unform/web' {
  import { ReactElement, ReactNode, Ref } from 'react';
  import type { FormHandles } from '@unform/core';

  export interface FormProps<T = Record<string, unknown>> {
    initialData?: Record<string, unknown>;
    onSubmit(data: T): void;
    children?: ReactNode;
    ref?: Ref<FormHandles>;
  }

  export function Form<T = Record<string, unknown>>(
    props: FormProps<T>,
  ): ReactElement | null;
}
