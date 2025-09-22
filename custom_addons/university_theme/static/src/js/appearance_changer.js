/** @odoo-module **/

import { Dialog } from "@web/core/dialog/dialog";
import { Component, useState, useRef } from "@odoo/owl";
import { useService } from "@web/core/utils/hooks";
import { cookie } from "@web/core/browser/cookie";
import {
  PALETTES,
  applyPalette,
  applyDrawerBg,
} from "@university_theme/js/theme_utils";

const THEME_COOKIE_KEY = "knk_theme_settings";

export class AppearanceDialog extends Component {
  static template = "university_theme.AppearanceDialog";
  static components = { Dialog };
  static props = { close: { type: Function } };

  setup() {
    this.orm = useService("orm");

    // 👈 الخطوة 1: تحميل الإعدادات من الكوكي عند تهيئة المكون
    const savedSettings = this._loadSettingsFromCookie();
    console.log("Loading settings on setup:", savedSettings); // 👈 طباعة القيم المحملة

    this.state = useState({
      currentTheme: savedSettings.currentTheme,
      activeTab: "general",
      selectedPaletteIndex: savedSettings.selectedPaletteIndex,
      drawerPreviewLight: savedSettings.drawerPreviewLight,
      drawerPreviewDark: savedSettings.drawerPreviewDark,
    });
    this.drawerImageUploadRef = useRef("drawerImageUpload");
    this.palettes = PALETTES;

    // 👈 الخطوة 2: تطبيق الإعدادات المحفوظة
    this._applySavedSettings();
    console.log("Applied settings to UI:", this.state); // 👈 طباعة الحالة بعد التطبيق
  }

  _saveSettingsToCookie() {
    const settings = {
      currentTheme: this.state.currentTheme,
      selectedPaletteIndex: this.state.selectedPaletteIndex,
      drawerPreviewLight: this.state.drawerPreviewLight,
      drawerPreviewDark: this.state.drawerPreviewDark,
    };
    const settingsString = JSON.stringify(settings);
    cookie.set(THEME_COOKIE_KEY, settingsString);
    console.log("Saving to cookie:", settingsString); // 👈 طباعة القيم التي يتم حفظها
  }

  _loadSettingsFromCookie() {
    const savedCookie = cookie.get(THEME_COOKIE_KEY);
    console.log("Cookie value read:", savedCookie); // 👈 طباعة قيمة الكوكي الخام
    if (savedCookie) {
      try {
        const parsedSettings = JSON.parse(savedCookie);
        console.log("Parsed settings from cookie:", parsedSettings); // 👈 طباعة الكائن بعد التحليل
        return parsedSettings;
      } catch (e) {
        console.error("Failed to parse cookie data:", e);
        return {
          currentTheme: document.body.classList.contains("knk_night_mode")
            ? "dark"
            : "light",
          selectedPaletteIndex: 0,
          drawerPreviewLight: null,
          drawerPreviewDark: null,
        };
      }
    }
    console.log("No cookie found, using default settings.");
    return {
      currentTheme: document.body.classList.contains("knk_night_mode")
        ? "dark"
        : "light",
      selectedPaletteIndex: 0,
      drawerPreviewLight: null,
      drawerPreviewDark: null,
    };
  }

  _applySavedSettings() {
    const {
      currentTheme,
      selectedPaletteIndex,
      drawerPreviewLight,
      drawerPreviewDark,
    } = this.state;
    const palette = this.palettes[currentTheme][selectedPaletteIndex];
    applyPalette(palette, currentTheme);

    if (drawerPreviewLight) {
      applyDrawerBg("light", drawerPreviewLight);
    }
    if (drawerPreviewDark) {
      applyDrawerBg("dark", drawerPreviewDark);
    }
  }

  setActiveTab(tabName) {
    this.state.activeTab = tabName;
  }

  onThemeChange(theme) {
    this.state.currentTheme = theme;
    this.state.selectedPaletteIndex = 0;
    applyPalette(this.palettes[theme][0], theme);
    this._saveSettingsToCookie();
    console.log("Theme changed. Current state:", this.state); // 👈 طباعة الحالة بعد التغيير
  }

  selectColorPalette(paletteIndex) {
    this.state.selectedPaletteIndex = paletteIndex;
    const palette = this.palettes[this.state.currentTheme][paletteIndex];
    if (palette) {
      applyPalette(palette, this.state.currentTheme);
    }
    this._saveSettingsToCookie();
    console.log("Palette changed. Current state:", this.state); // 👈 طباعة الحالة بعد التغيير
  }

  chooseFile() {
    const input = this.drawerImageUploadRef.el;
    if (input) input.click();
  }

  async handleImageUpload(ev, target, mode) {
    const file = ev.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = async (e) => {
      const base64Data = e.target.result;

      if (mode === "light") {
        this.state.drawerPreviewLight = base64Data;
        applyDrawerBg("light", base64Data, file.name);
      } else {
        this.state.drawerPreviewDark = base64Data;
        applyDrawerBg("dark", base64Data, file.name);
      }
      this._saveSettingsToCookie();
      console.log("Image uploaded. Current state:", this.state); // 👈 طباعة الحالة بعد الرفع
    };
    reader.readAsDataURL(file);
  }

  applySettings() {
    this.props.close();
  }

  getPalettesForCurrentTheme() {
    return this.palettes[this.state.currentTheme];
  }
}

export function openAppearanceDialog(env) {
  const dialogService = env.services.dialog;
  dialogService.add(AppearanceDialog, {});
}
