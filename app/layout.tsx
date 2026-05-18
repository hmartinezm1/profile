import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Howard Martínez · Senior Data Engineer",
  description:
    "Senior Data Engineer with 7+ years building healthcare data infrastructure. Specializing in Apache Airflow, dbt, Snowflake, and Kubernetes.",
  keywords: ["Data Engineer", "Snowflake", "Apache Airflow", "dbt", "Kubernetes", "Python", "Healthcare Data"],
  authors: [{ name: "Howard Andrés Martínez Meza" }],
  openGraph: {
    title: "Howard Martínez · Senior Data Engineer",
    description:
      "Senior Data Engineer specializing in DataOps & Healthcare Data Platforms.",
    url: "https://howardmartinez.xyz",
    siteName: "Howard Martínez",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Howard Martínez · Senior Data Engineer",
    description: "Senior Data Engineer — DataOps & Healthcare Data Platforms",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
