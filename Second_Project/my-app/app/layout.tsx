import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { getDocument } from "../lib/doc";
import Header from "../component/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DocuCraft - A documentation website by protocol",
  description: "A Documentation website by protocol",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  const allDocument = getDocument();

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <div className="h-full lg:ml-72 xl:ml-80">
          <Header docs={allDocument} />
          {children}
        </div>
      </body>
    </html>
  );
}
