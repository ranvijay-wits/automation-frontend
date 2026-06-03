# Design system (Figma → code)

Tokens live under `src/styles/tokens/`. Tailwind picks them up via `tailwind.config.js` so existing utilities (`sky-500`, `text-sm`, `gray-200`) map to Figma without renaming classes in pages.

## Colors

| Figma                       | Token module | Tailwind (legacy remap) |
| --------------------------- | ------------ | ----------------------- |
| Neutral N0–N900             | `neutral`    | `gray-*`, `slate-*`     |
| Brand primary               | `primary`    | `sky-*`, `blue-*`       |
| Success                     | `success`    | `green-*`, `emerald-*`  |
| Alert                       | `alert`      | `yellow-*`, `amber-*`   |
| Error (Figma: secondary-\*) | `error`      | `red-*`                 |

Semantic utilities for new code: `bg-primary`, `text-neutral-300`, `text-success-500`, `text-error-500`, etc.

Global CSS variables: `index.css` `:root` fallbacks; runtime updates via [`theme.ts`](theme.ts) from `semanticTheme` in `colors.js`.

## Theming (light / dark capability)

**Phase 1 (current):** Infrastructure only. `semanticTheme.dark` mirrors `semanticTheme.light`, so toggling theme does not change the live app look until Phase 2 values and UI adoption.

| Piece                       | Location                                                                                       |
| --------------------------- | ---------------------------------------------------------------------------------------------- |
| Semantic roles              | `semanticTheme.light` / `.dark` in [`tokens/colors.js`](tokens/colors.js)                      |
| Reference ramps (not wired) | `paletteReference` — Figma sheet inventory for Phase 2                                         |
| React API (preferred)       | [`ThemeContext.tsx`](../context/ThemeContext.tsx): `ThemeProvider`, `useTheme()`               |
| Imperative / boot           | [`theme.ts`](theme.ts): `initTheme()` (boot only), `applyResolvedTheme`, `setTheme` (DevTools) |
| Storage key                 | `ondc-ui-theme` in `localStorage`                                                              |
| Tailwind hook               | `darkMode: 'class'` on `<html>`                                                                |
| Theme-ready utilities       | `bg-ds-background`, `text-ds-text`, `border-ds-border`, etc.                                   |

`ThemeProvider` wraps the app in [`main.tsx`](../main.tsx) (outside `GuideProvider`). `initTheme()` runs before `createRoot` to avoid a flash of the wrong theme.

```tsx
import { useTheme } from "@/context/ThemeContext";

function MyComponent() {
    const { mode, resolved, setTheme } = useTheme();
    // mode: user preference ('light' | 'dark' | 'system')
    // resolved: applied on <html> ('light' | 'dark')
    return <button onClick={() => setTheme("dark")}>Dark</button>;
}
```

```ts
// DevTools / scripts only — bypasses React state until reload
import { setTheme } from "@/styles/theme";
setTheme("dark");
```

**Unchanged in Phase 1:** `gray-*`, `sky-*`, `slate-*` remaps (`tailwindPalettes`) — still light ramps even when `html.dark` is set.

**Phase 2 (later):** Figma dark screens → fill `semanticTheme.dark` roles; optional toggle UI; adopt `ds.*` / `dark:` on pages.

## Typography

| Figma     | Size / line-height | Tailwind semantic | Default remap          |
| --------- | ------------------ | ----------------- | ---------------------- |
| H1        | 48 / 56            | `text-h1`         | `text-5xl`, `text-6xl` |
| H2        | 40 / 48            | `text-h2`         | `text-4xl`             |
| H3        | 32 / 40            | `text-h3`         | `text-3xl`             |
| H4        | 24 / 32            | `text-h4`         | `text-2xl`             |
| H5        | 20 / 28            | `text-h5`         | `text-xl`              |
| H6        | 18 / 26            | `text-h6`         | `text-lg`              |
| Body 1    | 16 / 24            | `text-body-1`     | `text-base`            |
| Body 2    | 14 / 20            | `text-body-2`     | `text-sm`              |
| Caption 1 | 12 / 16            | `text-caption-1`  | `text-xs`              |
| Caption 2 | 10 / 12            | `text-caption-2`  | —                      |

Weights: `font-normal` (400), `font-medium` (500), `font-semibold` (600), `font-bold` (700). Combine with type classes, e.g. `text-h4 font-semibold`.

Font family: **Inter** (sans), **Fira Code** (mono).

## Icons (Heroicons only)

- **New UI:** use [`@heroicons/react`](https://heroicons.com). Do not add new `react-icons` imports.
- **Outline (default):** `@heroicons/react/24/outline` — navigation, actions, inline UI.
- **Solid:** `@heroicons/react/20/solid` or `24/solid` — status, emphasis, small badges.
- **Sizing:** default `h-5 w-5`; use `iconSize` from `@/components/ui/icon` or `h-4 w-4` / `h-6 w-6` as needed.

```tsx
import { PlusIcon } from "@heroicons/react/24/outline";
import { iconSize } from "@/components/ui/icon";

<PlusIcon className={iconSize.md} aria-hidden />;
```

Legacy `react-icons` remains in older files until a dedicated migration.
