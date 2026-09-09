import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Caveat, Plus_Jakarta_Sans, Rubik_Dirt } from "next/font/google";
import content from "@/data/site-content.json";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
});
const caveat = Caveat({ subsets: ["latin"], variable: "--font-caveat" });
const rubik = Rubik_Dirt({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-rubik",
});

export const metadata: Metadata = {
  title: content.meta.pageTitle,
  description: content.meta.pageDescription,
};
export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${jakarta.variable} ${caveat.variable} ${rubik.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
