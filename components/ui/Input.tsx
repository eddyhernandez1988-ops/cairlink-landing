import * as React from "react";

type Props = React.InputHTMLAttributes<HTMLInputElement> & { className?: string };
export function Input({ className = "", ...rest }: Props) {
  return <input className={`w-full rounded-2xl border border-slate-300 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-sky-200 ${className}`} {...rest} />;
}
