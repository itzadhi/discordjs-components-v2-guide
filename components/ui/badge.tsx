import * as React from "react";
import { cn } from "@/lib/utils";

const variants = {
  red: "border-red-300/25 bg-red-600/20 text-red-100",
  outline: "border-slate-500/25 bg-white/[.04] text-slate-200"
};

export function Badge({
  className,
  variant = "outline",
  ...props
}: React.HTMLAttributes<HTMLSpanElement> & { variant?: keyof typeof variants }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-3 py-1 text-xs font-black uppercase tracking-[0.14em]",
        variants[variant],
        className
      )}
      {...props}
    />
  );
}
