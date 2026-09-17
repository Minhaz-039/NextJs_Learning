import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import CustomLink from "./components/CustomLayout";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Home Page",
  description: "This is a simple Home page for the Next.js application.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <nav className="m-4 flex gap-4 ">
          <CustomLink path="/">Home</CustomLink>
          <CustomLink path="/dashboard/Analytics">Analytics</CustomLink>
          <CustomLink prefetch={false} path="/dashboard/settings">
            Settings
          </CustomLink>
          <CustomLink path="/Heavy">Heavy</CustomLink>
        </nav>
        {children}
      </body>
    </html>
  );
}
