import { forwardRef, type HTMLAttributes } from "react";

import { joinClassNames } from "../utils/joinClassNames";

export type ClassicDesktopProps = HTMLAttributes<HTMLElement>;

export const ClassicDesktop = forwardRef<HTMLElement, ClassicDesktopProps>(({ className, ...props }, ref) => {
  return <main ref={ref} className={joinClassNames("desktop", className)} {...props} />;
});

ClassicDesktop.displayName = "ClassicDesktop";
