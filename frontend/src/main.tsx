import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import { GuideProvider } from "./context/guideContext";
import { ThemeProvider } from "@context/ThemeContext";
import { initGA } from "@utils/analytics";

import { initTheme } from "@styles/theme";
import "./index.css";
import "antd/dist/reset.css";
import "@styles/bubble.css";

initTheme();
initGA();

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <BrowserRouter>
            <ThemeProvider>
                <GuideProvider>
                    <App />
                </GuideProvider>
            </ThemeProvider>
        </BrowserRouter>
    </StrictMode>
);
