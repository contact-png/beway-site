
import React from 'react';
import clsx from 'clsx';
type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: 'primary' | 'secondary' | 'ghost' };
export default function Button({ variant='primary', className, ...props }: Props) {
  const base = 'btn ' + (variant==='primary' ? 'btn-primary' : variant==='secondary' ? 'btn-secondary' : '');
  return <button {...props} className={clsx(base, className)} />;
}
