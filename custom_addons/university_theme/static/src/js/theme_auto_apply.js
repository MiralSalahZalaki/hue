/** @odoo-module **/

import { registry } from "@web/core/registry";
import {
  PALETTES,
  applyPalette,
  applyDrawerBg,
} from "@university_theme/js/theme_utils";

// تطبيق الثيم تلقائياً عند تحميل التطبيق
async function autoApplyTheme() {
  try {
    // انتظار تحميل الـ session
    if (!odoo?.session_info?.uid) {
      setTimeout(autoApplyTheme, 100);
      return;
    }

    const userId = odoo.session_info.uid;

    // استخدام الـ RPC مباشرة لجلب الإعدادات
    const result = await odoo.rpc("/theme/get_settings", {});

    if (result && !result.error) {
      const themeMode = result.theme_mode || "light";
      const paletteIndex = result.palette_index || 0;

      // تطبيق الثيم والألوان
      const palette = PALETTES[themeMode]?.[paletteIndex];
      if (palette) {
        applyPalette(palette, themeMode);
      }

      // تطبيق خلفيات الـ drawer
      if (result.drawer_bg_light) {
        applyDrawerBg("light", result.drawer_bg_light);
      }

      if (result.drawer_bg_dark) {
        applyDrawerBg("dark", result.drawer_bg_dark);
      }
    }
  } catch (error) {
    console.warn("Could not load user theme settings:", error);
    // تطبيق الثيم الافتراضي في حالة الخطأ
    applyPalette(PALETTES.light[0], "light");
  }
}

// تشغيل تلقائي عند تحميل الصفحة
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", autoApplyTheme);
} else {
  autoApplyTheme();
}

// تطبيق الثيم عند تغيير الصفحة في SPA
const originalPushState = history.pushState;
history.pushState = function () {
  originalPushState.apply(history, arguments);
  setTimeout(autoApplyTheme, 50);
};

const originalReplaceState = history.replaceState;
history.replaceState = function () {
  originalReplaceState.apply(history, arguments);
  setTimeout(autoApplyTheme, 50);
};
