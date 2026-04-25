import { forwardRef, type HTMLAttributes } from "react";

import { joinClassNames } from "../utils/joinClassNames";

export type ClassicMenuBarProps = HTMLAttributes<HTMLDivElement>;

export const ClassicMenuBar = forwardRef<HTMLDivElement, ClassicMenuBarProps>(({ className, ...props }, ref) => {
  return <nav ref={ref} className={joinClassNames("menu-bar", className)} {...props} />;
});

ClassicMenuBar.displayName = "ClassicMenuBar";
