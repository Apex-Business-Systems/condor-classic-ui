import { forwardRef, type TableHTMLAttributes } from "react";

import { joinClassNames } from "../utils/joinClassNames";

export type ClassicDetailedTableProps = TableHTMLAttributes<HTMLTableElement>;

export const ClassicDetailedTable = forwardRef<HTMLTableElement, ClassicDetailedTableProps>(
  ({ className, ...props }, ref) => {
    return <table ref={ref} className={joinClassNames("detailed-table", className)} {...props} />;
  },
);

ClassicDetailedTable.displayName = "ClassicDetailedTable";
