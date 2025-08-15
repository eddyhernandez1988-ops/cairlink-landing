import * as React from "react";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  asChild?: boolean;
  href?: string;
  variant?: "solid" | "outline";
  className?: string;
  children?: React.ReactNode;
};

export function Button({ asChild, href, variant = "solid", className = "", children, ...rest }: Props) {
  const base = "inline-flex items-center justify-center px-4 py-2 rounded-2xl text-sm font-medium transition border";
  const solid = "bg-sky-600 text-white border-sky-600 hover:bg-sky-700";
  const outline = "bg-white text-slate-900 border-slate-300 hover:bg-slate-50";
  const styles = `${base} ${variant === "solid" ? solid : outline} ${className}`;

  if (asChild && href) {
    return (
      <a href={href} className={styles} {...(rest as any)}>
        {children}
      </a>
    );
  }
  return (
    <button className={styles} {...rest}>
      {children}
    </button>
  );
}
