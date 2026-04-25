import type { ReactNode } from "react";

export type ClassicWindowProps = {
  title: ReactNode;
  active?: boolean;
  children: ReactNode;
};

export function ClassicWindow({ title, active = true, children }: ClassicWindowProps) {
  return (
    <div className={active ? "window active" : "window"}>
      <div className="title-bar">
        <div className="title-bar-text">{title}</div>
      </div>
      <div className="window-body">{children}</div>
    </div>
  );
}