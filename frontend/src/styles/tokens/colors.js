/**
 * Figma design system colors — single source of truth.
 * @see frontend/src/styles/design-system.md
 */

/** @type {Record<string, string>} */
export const neutral = {
    0: "#FFFFFF",
    10: "#FAFAFB",
    20: "#F3F4F7",
    30: "#E4E7EB",
    40: "#CBD2D9",
    50: "#9AA5B1",
    60: "#7B8794",
    70: "#616E7C",
    80: "#52606D",
    90: "#3E4C59",
    100: "#323F4B",
    200: "#1F2933",
    300: "#101820",
    400: "#0D131A",
    500: "#0A0F14",
    600: "#070A0E",
    700: "#040609",
    800: "#020304",
    900: "#010101",
};

/** @type {Record<string, string>} */
export const primary = {
    light: "#E6F2FF",
    "light-hover": "#D9E9F7",
    "light-active": "#B8D6F2",
    DEFAULT: "#0084C7",
    hover: "#0076B3",
    active: "#00679C",
    dark: "#005885",
    "dark-hover": "#004A70",
    "dark-active": "#003B5A",
    darker: "#002D45",
};

/** @type {Record<string, string>} */
export const success = {
    50: "#F6FFF6",
    200: "#A3F3A3",
    500: "#27A627",
    800: "#0B510B",
};

/** @type {Record<string, string>} */
export const alert = {
    50: "#FFF9E6",
    200: "#FDE293",
    500: "#F7C01A",
    800: "#A37E11",
};

/** Figma labels these secondary-* under Error */
/** @type {Record<string, string>} */
export const error = {
    50: "#FFF2F2",
    500: "#D9534F",
    800: "#A93226",
};

/**
 * Tailwind palette overrides — existing utilities (sky-500, gray-200, etc.) map here.
 */
export const tailwindPalettes = {
    sky: {
        50: primary.light,
        100: primary["light-hover"],
        200: primary["light-active"],
        300: "#7eb8e0",
        400: "#3399c7",
        500: primary.DEFAULT,
        600: primary.hover,
        700: primary.dark,
        800: primary["dark-hover"],
        900: primary.darker,
        950: primary["dark-active"],
    },
    blue: {
        50: primary.light,
        100: primary["light-hover"],
        200: primary["light-active"],
        300: "#7eb8e0",
        400: "#3399c7",
        500: primary.DEFAULT,
        600: primary.hover,
        700: primary.dark,
        800: primary["dark-hover"],
        900: primary.darker,
        950: primary["dark-active"],
    },
    gray: {
        50: neutral[10],
        100: neutral[20],
        200: neutral[30],
        300: neutral[40],
        400: neutral[50],
        500: neutral[60],
        600: neutral[70],
        700: neutral[80],
        800: neutral[90],
        900: neutral[100],
        950: neutral[200],
    },
    slate: {
        50: neutral[10],
        100: neutral[20],
        200: neutral[30],
        300: neutral[40],
        400: neutral[50],
        500: neutral[60],
        600: neutral[70],
        700: neutral[80],
        800: neutral[90],
        900: neutral[100],
        950: neutral[200],
    },
    red: {
        50: error[50],
        100: "#fad4d3",
        200: "#f0a9a7",
        300: "#e67e7b",
        400: "#e06b67",
        500: error[500],
        600: "#c9302c",
        700: "#b02a26",
        800: error[800],
        900: "#8b211d",
        950: "#6b1916",
    },
    green: {
        50: success[50],
        100: "#d4f7d4",
        200: success[200],
        300: "#6fdc6f",
        400: "#4bc94b",
        500: success[500],
        600: "#228b22",
        700: "#1a6b1a",
        800: success[800],
        900: "#083d08",
        950: "#052805",
    },
    emerald: {
        50: success[50],
        100: "#d4f7d4",
        200: success[200],
        300: "#6fdc6f",
        400: "#4bc94b",
        500: success[500],
        600: "#228b22",
        700: "#1a6b1a",
        800: success[800],
        900: "#083d08",
        950: "#052805",
    },
    yellow: {
        50: alert[50],
        100: "#fef3c7",
        200: alert[200],
        300: "#fbd56a",
        400: "#f9c93d",
        500: alert[500],
        600: "#d4a017",
        700: alert[800],
        800: "#8a6910",
        900: "#6b520c",
        950: "#4d3b09",
    },
    amber: {
        50: alert[50],
        100: "#fef3c7",
        200: alert[200],
        300: "#fbd56a",
        400: "#f9c93d",
        500: alert[500],
        600: "#d4a017",
        700: alert[800],
        800: "#8a6910",
        900: "#6b520c",
        950: "#4d3b09",
    },
};

/**
 * Reference palette from Figma sheet (not wired to live theme until Phase 2 mapping).
 * @see design-system.md — Theming
 */
export const paletteReference = {
    neutral: {
        0: "#FFFFFF",
        10: "#FAFAFA",
        20: "#F4F4F5",
        30: "#E4E4E7",
        40: "#D4D4D8",
        50: "#A1A1AA",
        60: "#71717A",
        70: "#52525B",
        80: "#3F3F46",
        90: "#27272A",
        100: "#18181B",
        200: "#475569",
        300: "#334155",
        400: "#1E293B",
        500: "#0F172A",
        600: "#111827",
        700: "#030712",
        800: "#020617",
        900: "#020617",
    },
    primaryBrand: {
        light: "#E0F2FE",
        "light-hover": "#BAE6FD",
        "light-active": "#7DD3FC",
        normal: "#0EA5E9",
        "normal-hover": "#0284C7",
        "normal-active": "#0369A1",
        dark: "#075985",
        "dark-hover": "#0C4A6E",
        "dark-active": "#082F49",
        darker: "#020617",
    },
    success: {
        50: "#F0FDF4",
        200: "#BBF7D0",
        500: "#22C55E",
        800: "#166534",
    },
    alert: {
        50: "#FFFBEB",
        200: "#FEF3C7",
        500: "#F59E0B",
        800: "#92400E",
    },
    error: {
        50: "#FEF2F2",
        500: "#EF4444",
        800: "#991B1B",
    },
};

/** @typedef {Record<string, string>} SemanticRoles */

/** @type {SemanticRoles} */
const semanticThemeLight = {
    background: neutral[20],
    surface: neutral[0],
    surfaceMuted: neutral[10],
    text: neutral[300],
    textMuted: neutral[70],
    border: neutral[40],
    primary: primary.DEFAULT,
    primaryHover: primary.hover,
    primaryMuted: primary.light,
    primaryLightActive: primary["light-active"],
    primaryDark: primary.dark,
    primaryDarker: primary.darker,
    focusRing: "rgba(0, 132, 199, 0.5)",
    success: success[500],
    alert: alert[500],
    error: error[500],
};

/**
 * Phase 1: mirrors light until Figma dark screens define per-role values (Phase 2).
 * @type {{ light: SemanticRoles; dark: SemanticRoles }}
 */
export const semanticTheme = {
    light: semanticThemeLight,
    dark: { ...semanticThemeLight },
};

/**
 * @param {"light" | "dark"} mode
 * @returns {Record<string, string>}
 */
export function toCssVariables(mode) {
    const roles = semanticTheme[mode];
    return {
        "--color-neutral-0": neutral[0],
        "--color-neutral-10": neutral[10],
        "--color-neutral-20": neutral[20],
        "--color-neutral-30": neutral[30],
        "--color-neutral-40": neutral[40],
        "--color-neutral-50": neutral[50],
        "--color-neutral-60": neutral[60],
        "--color-neutral-70": neutral[70],
        "--color-neutral-80": neutral[80],
        "--color-neutral-90": neutral[90],
        "--color-neutral-100": neutral[100],
        "--color-neutral-300": neutral[300],
        "--color-background": roles.background,
        "--color-surface": roles.surface,
        "--color-surface-muted": roles.surfaceMuted,
        "--color-text": roles.text,
        "--color-text-muted": roles.textMuted,
        "--color-border": roles.border,
        "--color-primary": roles.primary,
        "--color-primary-hover": roles.primaryHover,
        "--color-primary-light": roles.primaryMuted,
        "--color-primary-light-active": roles.primaryLightActive,
        "--color-primary-dark": roles.primaryDark,
        "--color-primary-darker": roles.primaryDarker,
        "--color-focus-ring": roles.focusRing,
        "--color-success": roles.success,
        "--color-alert": roles.alert,
        "--color-error": roles.error,
        "--color-success-500": roles.success,
        "--color-error-500": roles.error,
    };
}

/** CSS custom properties for global styles — light theme (default) */
export const cssVariables = toCssVariables("light");
