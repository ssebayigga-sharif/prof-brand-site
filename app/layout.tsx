import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SiteFooter from "./components/site-footer";
import SiteHeader from "./components/site-header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Judge Daniel David Ntanda Nsereko | Jurist, Professor & Author",
    template: "%s | Judge Daniel David Ntanda Nsereko",
  },
  description:
    "The public archive, judicial decisions, treatises, and scholarship of Judge Daniel David Ntanda Nsereko — former Judge of the International Criminal Court (ICC) and Special Tribunal for Lebanon (STL).",
  keywords: [
    "Judge Nsereko",
    "Daniel David Ntanda Nsereko",
    "International Criminal Court",
    "Special Tribunal for Lebanon",
    "University of Botswana Law",
    "Uganda Law Society",
    "Rome Statute Commentary",
    "Constitutional Law Botswana",
    "Criminal Law Uganda",
  ],
  authors: [{ name: "Judge Daniel David Ntanda Nsereko" }],
  icons: {
    icon: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-white text-[#17201f]">
        <div className="flex min-h-screen flex-col">
          <SiteHeader />
          <div className="flex-1">{children}</div>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
