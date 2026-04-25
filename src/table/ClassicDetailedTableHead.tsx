import { forwardRef, type HTMLAttributes } from "react";

import { joinClassNames } from "../utils/joinClassNames";

export type ClassicDetailedTableHeadProps = HTMLAttributes<HTMLTableSectionElement>;

export const ClassicDetailedTableHead = forwardRef<HTMLTableSectionElement, ClassicDetailedTableHeadProps>(
  ({ className, ...props }, ref) => {
    return <thead ref={ref} className={joinClassNames("detailed-table-head", className)} {...props} />;
  },
);

ClassicDetailedTableHead.displayName = "ClassicDetailedTableHead";
