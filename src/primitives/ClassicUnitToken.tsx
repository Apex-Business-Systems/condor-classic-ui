import type { HTMLAttributes } from "react";
import { joinClassNames } from "../utils/joinClassNames";

export type ClassicUnitTokenProps = {
  unitId: string;
  status: string;
  context?: string;
  statusTone?: "default" | "enroute" | "scene" | "standby" | string;
} & HTMLAttributes<HTMLElement>;

export function ClassicUnitToken({
  unitId,
  status,
  context,
  statusTone = "default",
  className,
  ...rest
}: ClassicUnitTokenProps) {
  return (
    <article
      className={joinClassNames("classic-unit-token", `classic-unit-token--${statusTone}`, className)}
      data-status-tone={statusTone}
      {...rest}
    >
      <span className="classic-unit-token__id">{unitId}</span>
      <span className="classic-unit-token__status">{status}</span>
      {context ? <span className="classic-unit-token__context">{context}</span> : null}
    </article>
  );
}
