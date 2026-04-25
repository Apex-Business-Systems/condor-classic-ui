import { forwardRef, type HTMLAttributes } from "react";

import { joinClassNames } from "../utils/joinClassNames";

export type ClassicMenuProps = HTMLAttributes<HTMLUListElement>;

export const ClassicMenu = forwardRef<HTMLUListElement, ClassicMenuProps>(({ className, ...props }, ref) => {
  return <ul ref={ref} className={joinClassNames("menu", className)} {...props} />;
});

ClassicMenu.displayName = "ClassicMenu";
