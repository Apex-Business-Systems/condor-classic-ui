import type { HTMLAttributes } from "react";
import { joinClassNames } from "../utils/joinClassNames";

export function ClassicOperatorDialogLayout({ className, ...rest }: HTMLAttributes<HTMLElement>) {
  return <main className={joinClassNames("classic-operator-dialog-layout", className)} {...rest} />;
}
