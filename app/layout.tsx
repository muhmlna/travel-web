import Image from "next/image";
import { Plus_Jakarta_Sans } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
});

export const metadata: Metadata = {
  title: "RH TRANS - Travel Pringsewu Jabodetabek",
  description:
    "Travel antar jemput Pringsewu Jabodetabek dua arah. Armada HiAce, Innova, Avanza, Calya. Booking langsung lewat WhatsApp 081367415360.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="id" className={jakarta.variable}>
      <body className="min-h-full font-[family-name:var(--font-jakarta)] antialiased">
        {children}
      </body>
    </html>
  );
}
