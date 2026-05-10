import type { HTMLAttributes } from "react";
import { joinClassNames } from "../utils/joinClassNames";

export function ClassicScrollRegion({ className, ...rest }: HTMLAttributes<HTMLDivElement>) {
  return <div className={joinClassNames("classic-scroll-region", className)} {...rest} />;
}
