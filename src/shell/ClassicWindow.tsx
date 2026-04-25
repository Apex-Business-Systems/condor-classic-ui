import { forwardRef, type HTMLAttributes } from "react";

import { joinClassNames } from "../utils/joinClassNames";

export type ClassicWindowProps = HTMLAttributes<HTMLElement>;

export const ClassicWindow = forwardRef<HTMLElement, ClassicWindowProps>(({ className, ...props }, ref) => {
  return <section ref={ref} className={joinClassNames("window", className)} {...props} />;
});

ClassicWindow.displayName = "ClassicWindow";
