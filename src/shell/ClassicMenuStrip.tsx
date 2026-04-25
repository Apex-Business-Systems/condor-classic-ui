import { forwardRef, type HTMLAttributes } from "react";

import { joinClassNames } from "../utils/joinClassNames";

export type ClassicMenuStripProps = HTMLAttributes<HTMLUListElement>;

export const ClassicMenuStrip = forwardRef<HTMLUListElement, ClassicMenuStripProps>(
  ({ className, ...props }, ref) => {
    return <ul ref={ref} className={joinClassNames("menu-strip", className)} {...props} />;
  },
);

ClassicMenuStrip.displayName = "ClassicMenuStrip";
