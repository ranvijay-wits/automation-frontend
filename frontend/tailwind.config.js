import {
    tailwindPalettes,
    neutral,
    primary,
    success,
    alert,
    error,
} from "./src/styles/tokens/colors.js";
import { fontFamily, tailwindFontSize } from "./src/styles/tokens/typography.js";

/** @type {import('tailwindcss').Config} */
export default {
    darkMode: "class",
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                ...tailwindPalettes,
                neutral,
                primary,
                success,
                alert,
                error,
                ds: {
                    background: "var(--color-background)",
                    surface: "var(--color-surface)",
                    surfaceMuted: "var(--color-surface-muted)",
                    text: "var(--color-text)",
                    textMuted: "var(--color-text-muted)",
                    border: "var(--color-border)",
                    primary: "var(--color-primary)",
                    primaryHover: "var(--color-primary-hover)",
                    primaryMuted: "var(--color-primary-light)",
                    focus: "var(--color-focus-ring)",
                    success: "var(--color-success)",
                    alert: "var(--color-alert)",
                    error: "var(--color-error)",
                },
            },
            fontFamily,
            fontSize: tailwindFontSize,
        },
        keyframes: {
            pulse: {
                "0%, 100%": { transform: "scale(1)" },
                "50%": { transform: "scale(1.05)" },
            },
            spin: {
                "0%": { transform: "rotate(0deg)" },
                "100%": { transform: "rotate(360deg)" },
            },
            "spin-progress": {
                "0%": { transform: "rotate(0deg)" },
                "100%": { transform: "rotate(360deg)" },
            },
        },
        animation: {
            "slow-pulse": "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
            "spin-slow": "spin 1.5s linear infinite",
            "spin-progress": "spin-progress linear forwards",
        },
    },
    plugins: [
        function ({ addUtilities }) {
            addUtilities({
                "input:-webkit-autofill": {
                    transition: "background-color 5000s ease-in-out 0s",
                    "-webkit-text-fill-color": "var(--color-text) !important",
                },
            });
        },
    ],
};
