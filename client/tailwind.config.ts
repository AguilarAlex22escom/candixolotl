import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    colors: {
      'blue': '#00C8FA',
      'pink': '#FA1968',
      'purple': '#118EAD',
      'yellow': '#FAE719',
      'orange': '#AD9F09',
      'black': '#170000',
      'white': '#FFFFFF'
    },
    extend: {},
  },
  plugins: [],
} satisfies Config;
