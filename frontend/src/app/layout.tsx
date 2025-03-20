"use client";

import { ThemeProvider, CssBaseline } from "@mui/material";
import theme from "./theme"; 
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <ThemeProvider theme={theme}>
        <CssBaseline /> 
        <body>{children}</body>
      </ThemeProvider>
    </html>
  );
}
