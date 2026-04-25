import { forwardRef, type DialogHTMLAttributes } from "react";

import { joinClassNames } from "../utils/joinClassNames";

export type ClassicDialogProps = DialogHTMLAttributes<HTMLDialogElement>;

export const ClassicDialog = forwardRef<HTMLDialogElement, ClassicDialogProps>(({ className, ...props }, ref) => {
  return <dialog ref={ref} className={joinClassNames("dialog", className)} {...props} />;
});

ClassicDialog.displayName = "ClassicDialog";
