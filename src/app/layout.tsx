import { UserInfoSide } from "@/components/UserInfoSide";
import "@/globals.css";
import type { Metadata } from "next";
import { K2D, Lalezar } from "next/font/google";

const k2d = K2D({
  subsets: ["latin-ext"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-k2d",
});
const lalezar = Lalezar({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-lalezar",
});

export const metadata: Metadata = {
  title: "Take A Flash",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body
        className={`${k2d.variable} ${lalezar.variable} grid min-h-screen  w-screen grid-flow-col grid-cols-2 font-sans`}
      >
        <UserInfoSide />
      </body>
    </html>
  );
}
