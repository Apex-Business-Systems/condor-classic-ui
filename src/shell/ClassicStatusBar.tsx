import type { ReactNode } from "react";

export type ClassicStatusBarProps = {
  children: ReactNode;
};

export function ClassicStatusBar({ children }: ClassicStatusBarProps) {
  return (
    <div className="status-bar">
      {children}
    </div>
  );
}