import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from "react";

import { joinClassNames } from "../utils/joinClassNames";

export type ClassicButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
};

export const ClassicButton = forwardRef<HTMLButtonElement, ClassicButtonProps>(
  ({ children, className, type = "button", ...props }, ref) => {
    return (
      <button ref={ref} type={type} className={joinClassNames("btn", className)} {...props}>
        {children}
      </button>
    );
  },
);

ClassicButton.displayName = "ClassicButton";
