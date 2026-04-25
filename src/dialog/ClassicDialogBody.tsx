import { forwardRef, type HTMLAttributes } from "react";

import { joinClassNames } from "../utils/joinClassNames";

export type ClassicDialogBodyProps = HTMLAttributes<HTMLDivElement>;

export const ClassicDialogBody = forwardRef<HTMLDivElement, ClassicDialogBodyProps>(({ className, ...props }, ref) => {
  return <div ref={ref} className={joinClassNames("dialog-body", className)} {...props} />;
});

ClassicDialogBody.displayName = "ClassicDialogBody";
