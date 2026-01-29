import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ['IBM Plex Sans', 'system-ui', 'sans-serif'],
        mono: ['IBM Plex Mono', 'monospace'],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
        industrial: {
          dark: "hsl(var(--industrial-dark))",
          surface: "hsl(var(--industrial-surface))",
          border: "hsl(var(--industrial-border))",
          glow: "hsl(var(--industrial-glow))",
        },
        compliance: {
          red: "hsl(var(--compliance-red))",
          green: "hsl(var(--compliance-green))",
        },
        steel: {
          blue: "hsl(var(--steel-blue))",
        },
        amber: {
          glow: "hsl(var(--amber-glow))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "pulse-glow": {
          "0%, 100%": { 
            boxShadow: "0 0 20px -5px hsl(38 95% 52% / 0.4)" 
          },
          "50%": { 
            boxShadow: "0 0 30px -5px hsl(38 95% 52% / 0.6)" 
          },
        },
        "fade-in-up": {
          from: {
            opacity: "0",
            transform: "translateY(20px)",
          },
          to: {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "scan": {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100%)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "pulse-glow": "pulse-glow 3s ease-in-out infinite",
        "fade-in-up": "fade-in-up 0.6s ease-out forwards",
        "scan": "scan 8s linear infinite",
      },
      backgroundImage: {
        "gradient-industrial": "linear-gradient(180deg, hsl(220 20% 6%) 0%, hsl(220 20% 3%) 100%)",
        "gradient-accent": "linear-gradient(135deg, hsl(38 95% 52%) 0%, hsl(28 90% 45%) 100%)",
        "gradient-surface": "linear-gradient(180deg, hsl(220 18% 10%) 0%, hsl(220 18% 7%) 100%)",
        "gradient-hero": "linear-gradient(180deg, hsl(220 20% 8%) 0%, hsl(220 20% 4%) 50%, hsl(220 20% 6%) 100%)",
      },
      boxShadow: {
        "industrial": "0 4px 24px -4px hsla(0, 0%, 0%, 0.5)",
        "glow": "0 0 32px -8px hsl(38 95% 52% / 0.3)",
        "card": "0 1px 3px hsla(0, 0%, 0%, 0.3), 0 4px 12px hsla(0, 0%, 0%, 0.2)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
