import type { Config } from "tailwindcss";
import { colors } from "./colors";
import { spacing, typography, radius } from "./spacing";

export const stylegPreset: Partial<Config> = {
  theme: {
    extend: {
      colors,
      spacing,
      fontFamily: typography.fontFamily,
      fontSize: typography.fontSize,
      fontWeight: typography.fontWeight,
      borderRadius: radius,
    },
  },
};
