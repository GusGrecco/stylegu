import type { Config } from "tailwindcss";
import { stylegPreset } from "./packages/tokens/src/tailwind-preset";

export default {
  presets: [stylegPreset],
  content: [
    "./packages/react/src/**/*.{ts,tsx}",
    "./.storybook/**/*.{ts,tsx}",
  ],
} satisfies Config;
