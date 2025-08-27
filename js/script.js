document.addEventListener("DOMContentLoaded", () => {
  initializeTheme();
  initializeThemeToggle();
});

// #region Theme
const THEME_KEY = "theme";
const DARK_THEME = "dark";
const LIGHT_THEME = "light";

const initializeTheme = () => {
  const prefersDarkTheme = window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches;

  const defaultTheme = prefersDarkTheme ? DARK_THEME : LIGHT_THEME;

  const savedTheme = localStorage.getItem(THEME_KEY);

  const theme = savedTheme !== null ? savedTheme : defaultTheme;

  document.body.classList.add(theme);
  notifyThemeChanged(theme);
};

const initializeThemeToggle = () => {
  const themeToggle = document.getElementById("theme-toggle");

  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle(DARK_THEME);
    document.body.classList.toggle(LIGHT_THEME);

    const theme = document.body.classList.contains(DARK_THEME)
      ? DARK_THEME
      : LIGHT_THEME;

    localStorage.setItem(THEME_KEY, theme);

    notifyThemeChanged(theme);
  });
};

const notifyThemeChanged = (theme) => {
  const event = new CustomEvent("themechanged", { detail: { theme } });
  document.dispatchEvent(event);
};
// #endregion
