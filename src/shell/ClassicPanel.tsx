import { forwardRef, type HTMLAttributes } from "react";

import { joinClassNames } from "../utils/joinClassNames";

export type ClassicPanelProps = HTMLAttributes<HTMLDivElement>;

export const ClassicPanel = forwardRef<HTMLDivElement, ClassicPanelProps>(({ className, ...props }, ref) => {
  return <section ref={ref} className={joinClassNames("panel", className)} {...props} />;
});

ClassicPanel.displayName = "ClassicPanel";
