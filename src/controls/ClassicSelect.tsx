import type { ReactNode, SelectHTMLAttributes } from "react";

export type ClassicSelectProps = SelectHTMLAttributes<HTMLSelectElement> & {
  children: ReactNode;
  wrapperClassName?: string;
};

export function ClassicSelect({
  children,
  size = 1,
  wrapperClassName,
  ...props
}: ClassicSelectProps) {
  const wrapperClasses = ["dropdown", wrapperClassName].filter(Boolean).join(" ");

  return (
    <div className={wrapperClasses}>
      <select size={size} {...props}>
        {children}
      </select>
      <div className="dropdown-button" />
    </div>
  );
}