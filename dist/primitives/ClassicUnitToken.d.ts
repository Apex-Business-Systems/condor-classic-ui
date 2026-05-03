import type { HTMLAttributes } from "react";
export type ClassicUnitTokenProps = {
    unitId: string;
    status: string;
    context?: string;
    statusTone?: "default" | "enroute" | "scene" | "standby" | string;
} & HTMLAttributes<HTMLElement>;
export declare function ClassicUnitToken({ unitId, status, context, statusTone, className, ...rest }: ClassicUnitTokenProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=ClassicUnitToken.d.ts.map