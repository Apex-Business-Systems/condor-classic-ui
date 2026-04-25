import { forwardRef, type TextareaHTMLAttributes } from "react";

import { joinClassNames } from "../utils/joinClassNames";

export type ClassicTextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement>;

export const ClassicTextarea = forwardRef<HTMLTextAreaElement, ClassicTextareaProps>(
  ({ className, ...props }, ref) => {
    return <textarea ref={ref} className={joinClassNames("textarea", className)} {...props} />;
  },
);

ClassicTextarea.displayName = "ClassicTextarea";
