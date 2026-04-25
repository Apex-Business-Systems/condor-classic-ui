import type { TextareaHTMLAttributes } from "react";

export type ClassicTextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement>;

export function ClassicTextarea(props: ClassicTextareaProps) {
  return <textarea {...props} />;
}