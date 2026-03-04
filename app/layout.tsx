// app/layout.tsx
import "./globals.css";
import BackgroundFX from "@/components/effects/BackgroundFX";
import CursorGlow from "@/components/effects/CursorGlow";

// kalau ada Providers/ThemeProvider, taruh di sini
// import Providers from "./providers";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="overflow-x-hidden">
      <body className="overflow-x-hidden">
        {/* Providers kalau ada */}
        {/* <Providers> */}
          <BackgroundFX />
          <CursorGlow />
          {children}
        {/* </Providers> */}
      </body>
    </html>
  );
}
