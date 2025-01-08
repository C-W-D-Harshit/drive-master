import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import TopLoader from "@/components/loaders/TopLoader";
import { Suspense } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Drive Master",
  description:
    "Cloud storage management interface for S3 buckets with intuitive file operations",
  keywords: [
    "cloud storage",
    "S3",
    "file management",
    "AWS",
    "storage interface",
  ],
  authors: [{ name: "Harshit Sharma" }],
  icons: {
    icon: "/logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-background antialiased selection:bg-primary/10 selection:text-primary`}
      >
        <Suspense>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <main className="relative flex min-h-screen flex-col">
              {children}
            </main>
            <TopLoader />
          </ThemeProvider>
        </Suspense>
      </body>
    </html>
  );
}
