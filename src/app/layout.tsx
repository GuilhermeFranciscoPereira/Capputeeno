import type { Metadata } from "next";
import { Saira, Saira_Stencil_One } from "next/font/google";
import Header from '../components/Header';
import '../styles/GlobalStyles.css'

const saira = Saira({ subsets: ["latin"], weight: ['400']});
export const SairaStencilOne = Saira_Stencil_One({ subsets: ["latin"], weight: ['400']})

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
      <body className={saira.className}>
        <Header/>
        {children}
      </body>
    </html>
  );
}