import * as React from "react";

type Props = React.TextareaHTMLAttributes<HTMLTextAreaElement> & { className?: string };
export function Textarea({ className = "", ...rest }: Props) {
  return <textarea className={`w-full rounded-2xl border border-slate-300 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-sky-200 ${className}`} {...rest} />;
}
