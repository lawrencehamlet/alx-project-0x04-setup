import { ReactNode } from "react";

// Button component interface
export interface ButtonProps {
  buttonLabel: string
  buttonSize?: string
  buttonBackgroundColor?: 'red' | 'blue' | 'orange' | 'green'
  action?: () => void
}

// Layout component interface
export interface LayoutProps {
  children: ReactNode;
}

// Page routing interface
export interface PageRouteProps {
  pageRoute: string
}

// Pill component interface (keeping existing)
export interface PillProps {
    title: string;
}
