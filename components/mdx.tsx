"use client";

import * as Tabs from "@radix-ui/react-tabs";
import { AlertTriangle, Info, ShieldAlert } from "lucide-react";

export function Callout({
  title,
  children,
  tone = "red"
}: {
  title: string;
  children: React.ReactNode;
  tone?: "red" | "slate";
}) {
  return (
    <aside
      className={[
        "my-6 rounded-2xl border p-5",
        tone === "red" ? "border-red-400/25 bg-red-950/25" : "border-slate-500/20 bg-slate-950/50"
      ].join(" ")}
    >
      <p className="mb-2 flex items-center gap-2 text-sm font-black uppercase tracking-[0.16em] text-red-200">
        <Info className="h-4 w-4" /> {title}
      </p>
      <div className="text-slate-300">{children}</div>
    </aside>
  );
}

export function OutdatedWarning({ oldWay, why, modern }: { oldWay: string; why: string; modern: string }) {
  return (
    <aside className="my-6 rounded-2xl border border-amber-400/25 bg-amber-950/20 p-5">
      <p className="mb-3 flex items-center gap-2 text-sm font-black uppercase tracking-[0.16em] text-amber-200">
        <AlertTriangle className="h-4 w-4" /> Outdated Method Warning
      </p>
      <div className="grid gap-3 text-sm leading-6 text-slate-300 md:grid-cols-3">
        <div>
          <p className="font-bold text-amber-100">Old method</p>
          <p>{oldWay}</p>
        </div>
        <div>
          <p className="font-bold text-amber-100">Why it is outdated</p>
          <p>{why}</p>
        </div>
        <div>
          <p className="font-bold text-amber-100">Modern replacement</p>
          <p>{modern}</p>
        </div>
      </div>
    </aside>
  );
}

type ReferenceTableProps = {
  headers?: string[] | string;
  rows?: string[][] | string;
  data?: string | { headers: string[]; rows: string[][] };
};

function parseJsonProp<T>(value: unknown, fallback: T): T {
  if (typeof value === "string") {
    try {
      return JSON.parse(value) as T;
    } catch {
      return fallback;
    }
  }
  return (value ?? fallback) as T;
}

export function ReferenceTable({ headers, rows, data }: ReferenceTableProps) {
  const parsed = parseJsonProp<{ headers: string[]; rows: string[][] }>(data, { headers: [], rows: [] });
  const safeHeaders = parseJsonProp<string[]>(headers, parsed.headers);
  const safeRows = parseJsonProp<string[][]>(rows, parsed.rows);

  return (
    <div className="my-6 overflow-x-auto rounded-2xl border border-red-400/20">
      <table>
        <thead>
          <tr>
            {safeHeaders.map((header) => (
              <th key={header}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {safeRows.map((row, index) => (
            <tr key={index}>
              {row.map((cell) => (
                <td key={cell}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function ComparisonTabs({
  items,
  data
}: {
  items?: { label: string; value: string; body: string }[] | string;
  data?: string;
}) {
  const safeItems = parseJsonProp<{ label: string; value: string; body: string }[]>(items ?? data, []);

  return (
    <Tabs.Root defaultValue={safeItems[0]?.value} className="my-6 rounded-2xl border border-red-400/20 bg-black/30 p-3">
      <Tabs.List className="flex flex-wrap gap-2">
        {safeItems.map((item) => (
          <Tabs.Trigger
            key={item.value}
            value={item.value}
            className="rounded-xl border border-red-400/15 px-4 py-2 text-sm font-bold text-slate-300 transition data-[state=active]:border-red-300/60 data-[state=active]:bg-red-600/20 data-[state=active]:text-red-50"
          >
            {item.label}
          </Tabs.Trigger>
        ))}
      </Tabs.List>
      {safeItems.map((item) => (
        <Tabs.Content
          key={item.value}
          value={item.value}
          className="mt-4 rounded-xl bg-slate-950/70 p-4 text-sm leading-7 text-slate-300"
        >
          <p>{item.body}</p>
        </Tabs.Content>
      ))}
    </Tabs.Root>
  );
}

export function SecurityNote({ children }: { children: React.ReactNode }) {
  return (
    <Callout title="Security note">
      <ShieldAlert className="mr-2 inline h-4 w-4" />
      {children}
    </Callout>
  );
}
