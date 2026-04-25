import { type FieldsetHTMLAttributes, type ReactNode } from "react";

import { joinClassNames } from "../utils/joinClassNames";

export type ClassicFieldsetProps = FieldsetHTMLAttributes<HTMLFieldSetElement> & {
  legend?: ReactNode;
  children: ReactNode;
};

export function ClassicFieldset({ legend, children, className, ...props }: ClassicFieldsetProps) {
  return (
    <fieldset className={joinClassNames("classic-fieldset", className)} {...props}>
      {legend ? <legend>{legend}</legend> : null}
      {children}
    </fieldset>
  );
}
