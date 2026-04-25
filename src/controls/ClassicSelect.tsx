import { forwardRef, type ReactNode, type SelectHTMLAttributes } from "react";

import { joinClassNames } from "../utils/joinClassNames";

export type ClassicSelectProps = SelectHTMLAttributes<HTMLSelectElement> & {
  children: ReactNode;
  wrapperClassName?: string;
};

export const ClassicSelect = forwardRef<HTMLSelectElement, ClassicSelectProps>(
  ({ children, className, size = 1, wrapperClassName, ...props }, ref) => {
    return (
      <div className={joinClassNames("dropdown", wrapperClassName)}>
        <select
          ref={ref}
          size={size}
          className={joinClassNames("dropdown-select", className)}
          {...props}
        >
          {children}
        </select>
        <span className="dropdown-button" aria-hidden="true" />
      </div>
    );
  },
);

ClassicSelect.displayName = "ClassicSelect";
