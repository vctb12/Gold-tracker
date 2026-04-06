export const tokens = {
  color: {
    bg: "#0A0A0B",
    surface: "#111214",
    surfaceElevated: "#17191D",
    border: "#2B2F36",
    text: "#F5F7FA",
    textMuted: "#A5ADBA",
    gold: "#D4AF37",
    goldSoft: "#E5C76B",
    success: "#19C37D",
    danger: "#FF5A67",
    warning: "#F6C453",
    info: "#5FA8FF",
  },
  radius: { sm: "8px", md: "12px", lg: "16px", xl: "20px" },
  shadow: {
    soft: "0 8px 24px rgba(0,0,0,0.25)",
    card: "0 6px 20px rgba(0,0,0,0.2)",
  },
  spacing: { sectionY: "40px", containerX: "24px" },
  typography: {
    hero: "clamp(2rem, 4vw, 3.25rem)",
    h1: "clamp(1.5rem, 2.4vw, 2.25rem)",
    h2: "clamp(1.25rem, 1.8vw, 1.625rem)",
    body: "1rem",
    small: "0.875rem",
  },
} as const;
