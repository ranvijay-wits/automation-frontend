import { semanticTheme, toCssVariables } from "./tokens/colors";

export const THEME_STORAGE_KEY = "ondc-ui-theme";

export type ThemeMode = "light" | "dark" | "system";
export type ResolvedTheme = "light" | "dark";

const DEFAULT_THEME: ThemeMode = "light";

function prefersDark(): boolean {
    return (
        typeof window !== "undefined" && window.matchMedia("(prefers-color-scheme: dark)").matches
    );
}

export function resolveTheme(mode: ThemeMode): ResolvedTheme {
    if (mode === "system") {
        return prefersDark() ? "dark" : "light";
    }
    return mode;
}

export function getStoredTheme(): ThemeMode {
    if (typeof window === "undefined") {
        return DEFAULT_THEME;
    }
    const stored = localStorage.getItem(THEME_STORAGE_KEY);
    if (stored === "light" || stored === "dark" || stored === "system") {
        return stored;
    }
    return DEFAULT_THEME;
}

export function persistTheme(mode: ThemeMode): void {
    localStorage.setItem(THEME_STORAGE_KEY, mode);
}

/** Apply semantic CSS variables for the resolved theme onto documentElement */
export function applySemanticColors(resolved: ResolvedTheme): void {
    const variables = toCssVariables(resolved);
    const root = document.documentElement;
    for (const [name, value] of Object.entries(variables)) {
        root.style.setProperty(name, String(value));
    }
}

export function applyThemeClass(resolved: ResolvedTheme): void {
    document.documentElement.classList.toggle("dark", resolved === "dark");
}

/** Apply `dark` class and semantic CSS variables for the resolved theme */
export function applyResolvedTheme(resolved: ResolvedTheme): void {
    applyThemeClass(resolved);
    applySemanticColors(resolved);
}

/**
 * Imperative theme change (DevTools / non-React). Prefer useTheme().setTheme in components.
 * Legacy Tailwind utilities (gray-*, sky-*) are unchanged until components adopt ds.* or dark:.
 */
export function setTheme(mode: ThemeMode): void {
    persistTheme(mode);
    applyResolvedTheme(resolveTheme(mode));
}

export function getTheme(): ThemeMode {
    return getStoredTheme();
}

export function getResolvedTheme(): ResolvedTheme {
    return resolveTheme(getStoredTheme());
}

/** Call once at app startup (before render). Defaults to light. */
export function initTheme(): void {
    applyResolvedTheme(resolveTheme(getStoredTheme()));
}

/** For Phase 2: replace semanticTheme.dark values without changing this API */
export { semanticTheme, toCssVariables };
