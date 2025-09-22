/** @odoo-module **/

import { cookie } from "@web/core/browser/cookie";
import { applyPalette, applyDrawerBg, PALETTES } from "./theme_utils";

const THEME_COOKIE_KEY = "knk_theme_settings";

/**
 * Reads theme settings from cookie and applies them safely.
 */
function initializeTheme() {
  const savedCookie = cookie.get(THEME_COOKIE_KEY);
  if (!savedCookie) return;

  try {
    const settings = JSON.parse(savedCookie);
    const {
      currentTheme,
      selectedPaletteIndex,
      drawerPreviewLight,
      drawerPreviewDark,
    } = settings;

    // Apply palette safely
    const palette = PALETTES[currentTheme]?.[selectedPaletteIndex];
    if (palette) applyPalette(palette, currentTheme);

    // Apply drawer backgrounds only if elements exist
    if (drawerPreviewLight && document.querySelector(".o_drawer.o_light")) {
      applyDrawerBg("light", drawerPreviewLight);
    }
    if (drawerPreviewDark && document.querySelector(".o_drawer.o_dark")) {
      applyDrawerBg("dark", drawerPreviewDark);
    }
  } catch (e) {
    console.error("Failed to parse theme settings from cookie:", e);
  }
}

// Wait for full page load (DOM + lazy widgets)
window.addEventListener("load", () => {
  // Small delay ensures all deferred nodes are ready
  setTimeout(() => {
    initializeTheme();
  }, 50);
});
