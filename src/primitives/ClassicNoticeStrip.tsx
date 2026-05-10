import type { HTMLAttributes } from "react";
import { joinClassNames } from "../utils/joinClassNames";

export function ClassicNoticeStrip({ className, ...rest }: HTMLAttributes<HTMLElement>) {
  return <section className={joinClassNames("classic-notice-strip", className)} {...rest} />;
}
