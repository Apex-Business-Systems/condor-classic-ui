import { forwardRef, type HTMLAttributes } from "react";

import { joinClassNames } from "../utils/joinClassNames";

export type ClassicDialogActionsProps = HTMLAttributes<HTMLDivElement>;

export const ClassicDialogActions = forwardRef<HTMLDivElement, ClassicDialogActionsProps>(
  ({ className, ...props }, ref) => {
    return <footer ref={ref} className={joinClassNames("dialog-actions", className)} {...props} />;
  },
);

ClassicDialogActions.displayName = "ClassicDialogActions";
