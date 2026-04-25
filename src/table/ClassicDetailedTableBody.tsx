import { forwardRef, type HTMLAttributes } from "react";

import { joinClassNames } from "../utils/joinClassNames";

export type ClassicDetailedTableBodyProps = HTMLAttributes<HTMLTableSectionElement>;

export const ClassicDetailedTableBody = forwardRef<HTMLTableSectionElement, ClassicDetailedTableBodyProps>(
  ({ className, ...props }, ref) => {
    return <tbody ref={ref} className={joinClassNames("detailed-table-body", className)} {...props} />;
  },
);

ClassicDetailedTableBody.displayName = "ClassicDetailedTableBody";
