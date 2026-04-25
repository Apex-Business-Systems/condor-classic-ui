import { forwardRef, type TdHTMLAttributes } from "react";

import { joinClassNames } from "../utils/joinClassNames";

export type ClassicDetailedTableCellProps = TdHTMLAttributes<HTMLTableCellElement>;

export const ClassicDetailedTableCell = forwardRef<HTMLTableCellElement, ClassicDetailedTableCellProps>(
  ({ className, ...props }, ref) => {
    return <td ref={ref} className={joinClassNames("detailed-table-cell", className)} {...props} />;
  },
);

ClassicDetailedTableCell.displayName = "ClassicDetailedTableCell";
