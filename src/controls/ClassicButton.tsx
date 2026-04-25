import type { ButtonHTMLAttributes, ReactNode } from "react";

export type ClassicButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
};

export function ClassicButton({ children, type = "button", ...props }: ClassicButtonProps) {
  return (
    <button type={type} {...props}>
      {children}
    </button>
  );
}