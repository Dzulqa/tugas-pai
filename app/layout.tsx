import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tunas Peradaban Islam | Ensiklopedia & Media Pembelajaran PAI Interaktif",
  description:
    "Eksplorasi sejarah masuknya Islam ke berbagai negara, peninggalan peradaban, perkembangan kontemporer, peta interaktif, kuis edukatif, dan dokumentasi kelompok.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className="min-h-screen flex flex-col bg-slate-950 text-slate-100 antialiased selection:bg-emerald-500 selection:text-slate-950">
        {children}
      </body>
    </html>
  );
}
