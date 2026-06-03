import {
    createContext,
    ReactNode,
    useCallback,
    useContext,
    useEffect,
    useLayoutEffect,
    useMemo,
    useState,
} from "react";
import {
    applyResolvedTheme,
    getStoredTheme,
    persistTheme,
    resolveTheme,
    type ResolvedTheme,
    type ThemeMode,
} from "@styles/theme";

export type { ThemeMode, ResolvedTheme };

interface ThemeContextValue {
    mode: ThemeMode;
    resolved: ResolvedTheme;
    setTheme: (mode: ThemeMode) => void;
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

function getSystemPrefersDark(): boolean {
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
}

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
    const [mode, setMode] = useState<ThemeMode>(() => getStoredTheme());
    const [systemSnapshot, setSystemSnapshot] = useState(() =>
        typeof window !== "undefined" ? getSystemPrefersDark() : false
    );

    const resolved = useMemo(
        () => resolveTheme(mode),
        // systemSnapshot forces re-resolve when OS preference changes in system mode
        [mode, systemSnapshot]
    );

    useLayoutEffect(() => {
        applyResolvedTheme(resolved);
    }, [resolved]);

    useEffect(() => {
        if (mode !== "system") {
            return;
        }
        const mq = window.matchMedia("(prefers-color-scheme: dark)");
        const onChange = () => setSystemSnapshot(mq.matches);
        setSystemSnapshot(mq.matches);
        mq.addEventListener("change", onChange);
        return () => mq.removeEventListener("change", onChange);
    }, [mode]);

    const setTheme = useCallback((next: ThemeMode) => {
        persistTheme(next);
        setMode(next);
    }, []);

    const value = useMemo(() => ({ mode, resolved, setTheme }), [mode, resolved, setTheme]);

    return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

export const useTheme = (): ThemeContextValue => {
    const ctx = useContext(ThemeContext);
    if (!ctx) {
        throw new Error("useTheme must be used inside ThemeProvider");
    }
    return ctx;
};
