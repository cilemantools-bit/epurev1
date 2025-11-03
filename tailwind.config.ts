import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ipure: {
          white: '#FFFFFF',
          cream: '#F8F7F4',
          wood: '#D4C5B0',
          'wood-dark': '#9B8B76',
          blue: '#8BA8B7',
          'blue-light': '#B8CDD9',
          'blue-dark': '#567281',
          green: '#8B9B8E',
          'green-light': '#B5C4B8',
          'green-dark': '#5F6E62',
          grey: '#6B7280',
          'grey-light': '#E5E7EB',
          'grey-dark': '#374151',
        },
      },
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
        serif: ['Georgia', 'Cambria', 'Times New Roman', 'Times', 'serif'],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '112': '28rem',
        '128': '32rem',
      },
    },
  },
  plugins: [],
};
export default config;
