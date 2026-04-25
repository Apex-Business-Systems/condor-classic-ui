import type { SelectHTMLAttributes, ReactNode } from "react";

export type ClassicSelectProps = SelectHTMLAttributes<HTMLSelectElement> & {
  children: ReactNode;
};

export function ClassicSelect({ children, size = 1, ...props }: ClassicSelectProps) {
  return (
    <div className="dropdown">
      <select size={size} {...props}>
        {children}
      </select>
      <div className="dropdown-button" />
    </div>
  );
}