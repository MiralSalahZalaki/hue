/** @odoo-module **/

import { registry } from "@web/core/registry";
import { Component, useState, onWillUpdateProps } from "@odoo/owl";
import { cookie } from "@web/core/browser/cookie";
import { PALETTES, applyPalette } from "@university_theme/js/theme_utils";

class DarkModeSystrayExtended extends Component {
  static props = {};

  _applyTheme() {
    const theme = this.state.color_scheme;
    const defaultPalette = PALETTES[theme][0];

    if (theme === "dark") {
      document.body.classList.add("knk_night_mode");
    } else {
      document.body.classList.remove("knk_night_mode");
    }

    applyPalette(defaultPalette, theme);
  }

  _onClick() {
    this.state.color_scheme =
      this.state.color_scheme === "light" ? "dark" : "light";
    cookie.set("color_scheme", this.state.color_scheme);
    this._applyTheme();
  }

  setup() {
    this.state = useState({
      color_scheme: "light",
    });
    super.setup();

    const storedTheme = cookie.get("color_scheme");
    if (storedTheme) {
      this.state.color_scheme = storedTheme;
    } else {
      cookie.set("color_scheme", this.state.color_scheme);
    }
    this._applyTheme();

    onWillUpdateProps(() => {
      this._applyTheme();
    });
  }
}
DarkModeSystrayExtended.template = "dark_mode_knk.SystrayItem";

registry.category("systray").remove("DarkModeSystrayItem");
registry.category("systray").add(
  "DarkModeSystrayItem",
  {
    Component: DarkModeSystrayExtended,
    isDisplayed: () => true,
  },
  { sequence: 1 }
);
