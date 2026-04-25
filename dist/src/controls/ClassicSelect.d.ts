import { ReactNode, SelectHTMLAttributes } from 'react';
export type ClassicSelectProps = SelectHTMLAttributes<HTMLSelectElement> & {
    children: ReactNode;
    wrapperClassName?: string;
};
export declare function ClassicSelect({ children, size, wrapperClassName, ...props }: ClassicSelectProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=ClassicSelect.d.ts.map