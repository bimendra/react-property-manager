/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      textColor: {
        base: "var(--color-text)",
        accent: "var(--color-text-accent)",
        invert: "var(--color-text-invert)",
        button: {
          default: "var(--color-accent)",
          accent: "var(--color-text-invert)",
          neutral: "var(--color-text)",
        },
      },
      backgroundColor: {
        button: {
          default: "var(--color-accent-muted)",
          ["default-hover"]: "var(--color-accent-muted-hover)",
          ["default-active"]: "var(--color-accent-muted-active)",
          filled: "var(--color-accent)",
          ["filled-hover"]: "var(--color-accent-hover)",
          ["filled-active"]: "var(--color-accent-active)",
          ghost: "var(--color-neutral-muted)",
          ["ghost-hover"]: "var(--color-neutral-muted-hover)",
          ["ghost-active"]: "var(--color-neutral-muted-active)",
        },
      },
      borderColor: {
        accent: "var(--color-accent)",
        button: {
          default: "var(--color-accent-muted)",
          ["default-hover"]: "var(--color-accent-muted-hover)",
          ["default-active"]: "var(--color-accent-muted-active)",
          filled: "var(--color-accent)",
          ghost: "var(--color-background)",
          ["ghost-hover"]: "var(--color-neutral-muted-hover)",
          ["ghost-active"]: "var(--color-neutral-muted-active)",
        },
      },
      ringColor: {
        ["default-focus"]: "var(--color-accent-muted-focus)",
        ["filled-focus"]: "var(--color-accent-focus)",
        ["ghost-focus"]: "var(--color-neutral-muted-focus)",
      },
    },
    fontFamily: {
      sans: ["Heebo", "sans-serif"],
    },
  },
  plugins: [],
};

