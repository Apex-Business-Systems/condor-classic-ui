import { forwardRef, type HTMLAttributes } from "react";

import { joinClassNames } from "../utils/joinClassNames";

export type ClassicDialogTitleProps = HTMLAttributes<HTMLHeadingElement>;

export const ClassicDialogTitle = forwardRef<HTMLHeadingElement, ClassicDialogTitleProps>(
  ({ className, ...props }, ref) => {
    return <h2 ref={ref} className={joinClassNames("dialog-title", className)} {...props} />;
  },
);

ClassicDialogTitle.displayName = "ClassicDialogTitle";
