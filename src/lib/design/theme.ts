import { tokens } from "./tokens";

export const theme = {
  semantic: {
    pageBg: tokens.color.bg,
    panelBg: tokens.color.surface,
    panelElevatedBg: tokens.color.surfaceElevated,
    panelBorder: tokens.color.border,
    primaryText: tokens.color.text,
    secondaryText: tokens.color.textMuted,
    accent: tokens.color.gold,
  },
} as const;
