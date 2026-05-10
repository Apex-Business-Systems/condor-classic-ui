import type { HTMLAttributes } from "react";
import { joinClassNames } from "../utils/joinClassNames";

export function ClassicSummaryStrip({ className, ...rest }: HTMLAttributes<HTMLElement>) {
  return <section className={joinClassNames("classic-summary-strip", className)} {...rest} />;
}
