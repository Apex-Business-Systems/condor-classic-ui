import { forwardRef, type LiHTMLAttributes } from "react";

import { joinClassNames } from "../utils/joinClassNames";

export type ClassicMenuItemProps = LiHTMLAttributes<HTMLLIElement>;

export const ClassicMenuItem = forwardRef<HTMLLIElement, ClassicMenuItemProps>(
  ({ className, ...props }, ref) => {
    return <li ref={ref} className={joinClassNames("menu-item", className)} {...props} />;
  },
);

ClassicMenuItem.displayName = "ClassicMenuItem";
