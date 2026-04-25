import type { InputHTMLAttributes } from "react";

export type ClassicInputProps = InputHTMLAttributes<HTMLInputElement>;

export function ClassicInput(props: ClassicInputProps) {
  return <input {...props} />;
}