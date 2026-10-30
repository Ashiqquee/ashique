import type { Metadata } from "next";
import "./globals.css";

const description = "Software engineer from Kerala, India. Built Convyflow at Codely; building Nivlet and Forma.";

export const metadata: Metadata = {
  metadataBase: new URL("https://ashique.work"),
  title: "Muhammed Ashique",
  description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "Muhammed Ashique",
    title: "Muhammed Ashique",
    description,
  },
  twitter: { card: "summary_large_image", title: "Muhammed Ashique", description },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="antialiased">
      <body>{children}</body>
    </html>
  );
}
