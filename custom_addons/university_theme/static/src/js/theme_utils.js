/** @odoo-module **/

// 🎨 Palettes
export const PALETTES = {
  light: [
    {
      name: "Default",
      brandColor: "#00294C",
      secondBrandColor: "#e8a807",
      white: "#ffffff",
      blueBlack: "#12151B",
      lightBrandColor: "#989CA0",
      sidebarBg: "#f8f9fa",
    },
    {
      name: "Vibrant",
      brandColor: "#0c3741",
      secondBrandColor: "#F4B400",
      white: "#ffffff",
      blueBlack: "#212121",
      lightBrandColor: "#BDBDBD",
      sidebarBg: "#0b3f4b",
    },
  ],
  dark: [
    {
      name: "Default",
      brandColor: "#00294C",
      secondBrandColor: "#e8a807",
      white: "#fff",
      blueBlack: "#1D2025",
      lightBrandColor: "#989CA0",
      sidebarBg: "#12151B",
    },
    {
      name: "Night Sky",
      brandColor: "#28726a",
      secondBrandColor: "#44ffeb",
      white: "#fff",
      blueBlack: "#0d0f17",
      lightBrandColor: "#262626",
      sidebarBg: "#161c22",
    },
  ],
};

// 🎨 Convert hex -> rgb
export function hexToRgb(hex) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? `${parseInt(result[1], 16)},${parseInt(result[2], 16)},${parseInt(
        result[3],
        16
      )}`
    : null;
}

// 🎨 Apply palette
export function applyPalette(palette, theme) {
  if (theme === "dark") {
    document.body.classList.add("knk_night_mode");
  } else {
    document.body.classList.remove("knk_night_mode");
  }

  document.documentElement.style.setProperty(
    "--brand-color",
    palette.brandColor,
    "important"
  );
  document.documentElement.style.setProperty(
    "--second-brand-color",
    palette.secondBrandColor,
    "important"
  );
  document.documentElement.style.setProperty(
    "--light-brand-color",
    palette.lightBrandColor,
    "important"
  );
  document.documentElement.style.setProperty(
    "--blue-black",
    palette.blueBlack,
    "important"
  );
  document.documentElement.style.setProperty(
    "--white",
    palette.white,
    "important"
  );
  document.documentElement.style.setProperty(
    "--sidebar_bg",
    palette.sidebarBg,
    "important"
  );
}

export function applyDrawerBg(mode, url, fileName = "") {
  const varName =
    mode === "dark"
      ? "--app-drawer-bg-image-dark"
      : "--app-drawer-bg-image-light";

  document.documentElement.style.setProperty(
    varName,
    `url("${url}")`,
    "important"
  );
}
