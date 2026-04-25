import { FieldsetHTMLAttributes, ReactNode } from 'react';
export type ClassicFieldsetProps = FieldsetHTMLAttributes<HTMLFieldSetElement> & {
    legend?: ReactNode;
    children: ReactNode;
};
export declare function ClassicFieldset({ legend, children, className, ...props }: ClassicFieldsetProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=ClassicFieldset.d.ts.map