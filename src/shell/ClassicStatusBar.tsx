import { forwardRef, type HTMLAttributes } from "react";

import { joinClassNames } from "../utils/joinClassNames";

export type ClassicStatusBarProps = HTMLAttributes<HTMLDivElement>;

export const ClassicStatusBar = forwardRef<HTMLDivElement, ClassicStatusBarProps>(({ className, ...props }, ref) => {
  return <footer ref={ref} className={joinClassNames("status-bar", className)} {...props} />;
});

ClassicStatusBar.displayName = "ClassicStatusBar";
