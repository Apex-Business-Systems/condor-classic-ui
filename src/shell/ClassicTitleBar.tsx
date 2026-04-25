import { forwardRef, type HTMLAttributes } from "react";

import { joinClassNames } from "../utils/joinClassNames";

export type ClassicTitleBarProps = HTMLAttributes<HTMLDivElement>;

export const ClassicTitleBar = forwardRef<HTMLDivElement, ClassicTitleBarProps>(({ className, ...props }, ref) => {
  return <header ref={ref} className={joinClassNames("title-bar", className)} {...props} />;
});

ClassicTitleBar.displayName = "ClassicTitleBar";
