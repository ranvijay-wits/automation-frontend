export type SemanticRoles = Record<string, string>;

export const neutral: Record<string | number, string>;
export const primary: Record<string, string>;
export const success: Record<string | number, string>;
export const alert: Record<string | number, string>;
export const error: Record<string | number, string>;
export const tailwindPalettes: Record<string, Record<string | number, string>>;
export const paletteReference: {
    neutral: Record<string | number, string>;
    primaryBrand: Record<string, string>;
    success: Record<string | number, string>;
    alert: Record<string | number, string>;
    error: Record<string | number, string>;
};
export const semanticTheme: {
    light: SemanticRoles;
    dark: SemanticRoles;
};
export function toCssVariables(mode: "light" | "dark"): Record<string, string>;
export const cssVariables: Record<string, string>;
