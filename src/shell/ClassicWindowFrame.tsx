import { forwardRef, type HTMLAttributes } from "react";

import { joinClassNames } from "../utils/joinClassNames";

export type ClassicWindowFrameProps = HTMLAttributes<HTMLDivElement>;

export const ClassicWindowFrame = forwardRef<HTMLDivElement, ClassicWindowFrameProps>(
  ({ className, ...props }, ref) => {
    return <div ref={ref} className={joinClassNames("window-frame", className)} {...props} />;
  },
);

ClassicWindowFrame.displayName = "ClassicWindowFrame";
