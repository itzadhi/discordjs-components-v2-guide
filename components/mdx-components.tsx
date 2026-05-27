import { CodeFrame } from "@/components/code-frame";
import { Callout, ComparisonTabs, OutdatedWarning, ReferenceTable } from "@/components/mdx";
import { MermaidDiagram } from "@/components/mermaid-diagram";

export const mdxComponents = {
  pre: CodeFrame,
  Callout,
  OutdatedWarning,
  ReferenceTable,
  ComparisonTabs,
  MermaidDiagram
};
