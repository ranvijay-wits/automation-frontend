/**
 * Figma typography scale — font-size + line-height pairs.
 * @see frontend/src/styles/design-system.md
 */

export const fontFamily = {
    sans: ['"Inter"', "system-ui", "sans-serif"],
    mono: ['"Fira Code"', "monospace"],
};

export const fontWeight = {
    regular: "400",
    medium: "500",
    semibold: "600",
    bold: "700",
};

/** Semantic scale: [fontSize, { lineHeight }] for Tailwind theme.extend.fontSize */
export const typeScale = {
    h1: ["3rem", { lineHeight: "3.5rem" }],
    h2: ["2.5rem", { lineHeight: "3rem" }],
    h3: ["2rem", { lineHeight: "2.5rem" }],
    h4: ["1.5rem", { lineHeight: "2rem" }],
    h5: ["1.25rem", { lineHeight: "1.75rem" }],
    h6: ["1.125rem", { lineHeight: "1.625rem" }],
    "body-1": ["1rem", { lineHeight: "1.5rem" }],
    "body-2": ["0.875rem", { lineHeight: "1.25rem" }],
    "caption-1": ["0.75rem", { lineHeight: "1rem" }],
    "caption-2": ["0.625rem", { lineHeight: "0.75rem" }],
};

/**
 * Remap default Tailwind text-* steps to Figma scale (no page class renames).
 */
export const tailwindFontSize = {
    xs: typeScale["caption-1"],
    sm: typeScale["body-2"],
    base: typeScale["body-1"],
    lg: typeScale.h6,
    xl: typeScale.h5,
    "2xl": typeScale.h4,
    "3xl": typeScale.h3,
    "4xl": typeScale.h2,
    "5xl": typeScale.h1,
    "6xl": typeScale.h1,
    "7xl": typeScale.h1,
    "8xl": typeScale.h1,
    "9xl": typeScale.h1,
    ...typeScale,
};
