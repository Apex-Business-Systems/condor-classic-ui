import { forwardRef, type InputHTMLAttributes } from "react";

import { joinClassNames } from "../utils/joinClassNames";

export type ClassicInputProps = InputHTMLAttributes<HTMLInputElement>;

export const ClassicInput = forwardRef<HTMLInputElement, ClassicInputProps>(
  ({ className, ...props }, ref) => {
    return <input ref={ref} className={joinClassNames("input", className)} {...props} />;
  },
);

ClassicInput.displayName = "ClassicInput";
