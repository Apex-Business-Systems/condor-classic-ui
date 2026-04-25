import { forwardRef, type HTMLAttributes } from "react";

import { joinClassNames } from "../utils/joinClassNames";

export type ClassicWindowBodyProps = HTMLAttributes<HTMLDivElement>;

export const ClassicWindowBody = forwardRef<HTMLDivElement, ClassicWindowBodyProps>(
  ({ className, ...props }, ref) => {
    return <div ref={ref} className={joinClassNames("window-body", className)} {...props} />;
  },
);

ClassicWindowBody.displayName = "ClassicWindowBody";
