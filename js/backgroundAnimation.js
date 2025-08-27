const COLORS = {
  light: {
    background: "#fefdfb",
    foreground: "#dddad4",
  },
  dark: {
    background: "#151511",
    foreground: "#40403b",
  },
};

const options = {
  fullScreen: {
    zIndex: -100,
  },
  particles: {
    move: {
      enable: true,
      speed: 0.25,
    },
    size: {
      value: 1,
    },
    shape: {
      type: "circle",
    },
  },
  themes: [
    {
      name: "light",
      default: {
        value: true,
        mode: "light",
      },
      options: {
        particles: {
          color: {
            value: COLORS.light.foreground,
          },
          links: {
            color: {
              value: COLORS.light.foreground,
            },
          },
        },
      },
    },
    {
      name: "dark",
      default: {
        value: true,
        mode: "dark",
      },
      options: {
        particles: {
          color: {
            value: COLORS.dark.foreground,
          },
          links: {
            color: {
              value: COLORS.dark.foreground,
            },
          },
        },
      },
    },
  ],
  responsive: [
    {
      // Mobile
      maxWidth: 767,
      options: {
        particles: {
          number: {
            value: 100,
          },
          links: {
            distance: 125,
            enable: true,
          },
        },
      },
    },
    {
      // Tablet
      maxWidth: 1023,
      options: {
        particles: {
          number: {
            value: 125,
          },
          links: {
            distance: 150,
            enable: true,
          },
        },
      },
    },
    {
      // Laptop
      maxWidth: 1279,
      options: {
        particles: {
          number: {
            value: 150,
          },
          links: {
            distance: 200,
            enable: true,
          },
        },
      },
    },
    {
      // Desktop
      maxWidth: 1999,
      options: {
        particles: {
          number: {
            value: 200,
          },
          links: {
            distance: 250,
            enable: true,
          },
        },
      },
    },
    {
      // Widescreen
      options: {
        particles: {
          number: {
            value: 250,
          },
          links: {
            distance: 300,
            enable: true,
          },
        },
      },
    },
  ],
};

let themeableContainer = null;

document.addEventListener("DOMContentLoaded", () => {
  (async () => {
    await loadAll(tsParticles);

    await tsParticles
      .load({
        id: "tsparticles",
        options: options,
      })
      .then((container) => {
        themeableContainer = container;
        const savedTheme = localStorage.getItem(THEME_KEY);
        if (savedTheme !== null) {
          themeableContainer.loadTheme(savedTheme);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  })();
});

document.addEventListener("themechanged", (event) => {
  if (themeableContainer !== null) {
    themeableContainer.loadTheme(event.detail.theme);
  }
  console.log("Theme changed to ", event.detail.theme);
});
