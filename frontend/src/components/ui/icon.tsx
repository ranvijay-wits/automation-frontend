import type { SVGProps } from "react";

/** Default Heroicon dimensions — use with @heroicons/react components */
export const iconSize = {
    sm: "h-4 w-4",
    md: "h-5 w-5",
    lg: "h-6 w-6",
    xl: "h-8 w-8",
} as const;

export type IconSize = keyof typeof iconSize;

export type HeroiconProps = SVGProps<SVGSVGElement> & {
    title?: string;
    titleId?: string;
};

/** Merge size preset with optional extra classes for Heroicons */
export function iconClassName(size: IconSize = "md", className?: string): string {
    return className ? `${iconSize[size]} ${className}` : iconSize[size];
}
