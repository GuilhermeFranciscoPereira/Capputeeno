import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Capputeeno",
    template: "%s | Capputeeno"
  },
  description: "Capputeeno: A sua parada obrigatória para encontrar produtos exclusivos que refletem a sua personalidade e criatividade, onde estilo e inovação se encontram para transformar o seu cotidiano em uma experiência única.",
};

export default function RootLayout({ children }: Readonly<{children: React.ReactNode}>) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>{children}</body>
    </html>
  );
}