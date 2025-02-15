import "./globals.css";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { Layout, FixedPlugin } from "@/components";
import Script from "next/script";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Hands-On Computer Vision",
  description:
    "Únete a nosotros en el Semillero Hands-on Computer Vision y sumérgete en una experiencia única que fusiona la teoría con la práctica en el fascinante mundo de la visión por computadora. Nos enfocaremos en temas avanzados como Fotografía computacional, Aprendizaje profundo, Imágenes térmicas, Imágenes espectrales, Estimación de la profundidad y más",
    icons: {
      icon: '/logos/logo.png',
    }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <Script
          src="https://tally.so/widgets/embed.js"
          strategy="afterInteractive"
          async
        />
        <Script id="tally-config" strategy="afterInteractive">
          {`
            window.TallyConfig = {
              "formId": "mObO7p",
              "popup": {
                "emoji": {
                  "text": "👋",
                  "animation": "wave"
                },
                "autoClose": 5000
              }
            };
          `}
        </Script>
        <link rel="shortcut icon" href="/favicon.png" type="image/png" />
      </head>
      <body className={roboto.className}>
        <Layout>
          {children}
        </Layout>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css"
          integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </body>
    </html>
  );
}
