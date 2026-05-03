import type { HTMLAttributes } from "react";
import { joinClassNames } from "../utils/joinClassNames";

export function ClassicFormGrid({ className, ...rest }: HTMLAttributes<HTMLDivElement>) {
  return <div className={joinClassNames("classic-form-grid", className)} {...rest} />;
}
