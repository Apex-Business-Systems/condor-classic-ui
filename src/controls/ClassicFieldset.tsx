import type { FieldsetHTMLAttributes, ReactNode } from "react";

export type ClassicFieldsetProps = FieldsetHTMLAttributes<HTMLFieldSetElement> & {
  legend?: ReactNode;
  children: ReactNode;
};

export function ClassicFieldset({ legend, children, className, ...props }: ClassicFieldsetProps) {
  const classes = ["padding", className].filter(Boolean).join(" ");

  return (
    <fieldset className={classes} {...props}>
      {legend ? <legend>{legend}</legend> : null}
      {children}
    </fieldset>
  );
}