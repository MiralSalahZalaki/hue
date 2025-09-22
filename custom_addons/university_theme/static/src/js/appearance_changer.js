/** @odoo-module **/

import { Dialog } from "@web/core/dialog/dialog";
import { Component, useState, useRef } from "@odoo/owl";
import { useService } from "@web/core/utils/hooks";
import {
  PALETTES,
  applyPalette,
  applyDrawerBg,
} from "@university_theme/js/theme_utils";

export class AppearanceDialog extends Component {
  static template = "university_theme.AppearanceDialog";
  static components = { Dialog };
  static props = { close: { type: Function } };

  setup() {
    this.orm = useService("orm");
    this.state = useState({
      currentTheme: document.body.classList.contains("knk_night_mode")
        ? "dark"
        : "light",
      activeTab: "general", // 👈 الافتراضي
      selectedPaletteIndex: 0,
      drawerPreviewLight: null,
      drawerPreviewDark: null,
    });
    this.drawerImageUploadRef = useRef("drawerImageUpload");
    this.palettes = PALETTES;
  }

  // 👈 اضافه setActiveTab
  setActiveTab(tabName) {
    this.state.activeTab = tabName;
  }

  onThemeChange(theme) {
    this.state.currentTheme = theme;
    this.state.selectedPaletteIndex = 0;
    applyPalette(this.palettes[theme][0], theme);
  }

  selectColorPalette(paletteIndex) {
    this.state.selectedPaletteIndex = paletteIndex;
    const palette = this.palettes[this.state.currentTheme][paletteIndex];
    if (palette) {
      applyPalette(palette, this.state.currentTheme);
    }
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
    };
    reader.readAsDataURL(file);
  }

  applySettings() {
    // هنا ممكن تحفظ palette أو drawer preview على backend إذا احتجنا
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
