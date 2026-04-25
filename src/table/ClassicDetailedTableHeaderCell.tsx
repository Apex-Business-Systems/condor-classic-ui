import { forwardRef, type ThHTMLAttributes } from "react";

import { joinClassNames } from "../utils/joinClassNames";

export type ClassicDetailedTableHeaderCellProps = ThHTMLAttributes<HTMLTableCellElement>;

export const ClassicDetailedTableHeaderCell = forwardRef<
  HTMLTableCellElement,
  ClassicDetailedTableHeaderCellProps
>(({ className, ...props }, ref) => {
  return <th ref={ref} className={joinClassNames("detailed-table-header-cell", className)} {...props} />;
});

ClassicDetailedTableHeaderCell.displayName = "ClassicDetailedTableHeaderCell";
