import type { Metadata } from "next";
import { Saira } from "next/font/google";
import { NextFont } from "next/dist/compiled/@next/font";
import ToQueryClientProvider from "@/services/queryClient";
import Header from '../components/Header';
import AppProvider from "@/contexts/AppProvider";
import '../styles/GlobalStyles.css';

const saira: NextFont = Saira({ subsets: ["latin"], weight: ['400']});

export const metadata: Metadata = {
  title: {
    default: 'Capputeeno',
    template: '%s | Capputeeno'
  },
  description: 'Capputeeno oferece uma seleção exclusiva de camisetas e canecas personalizadas com designs únicos e criativos. Encontre o presente perfeito ou adicione um toque especial ao seu estilo diário com nossos produtos de alta qualidade. Explore nossas coleções e descubra como podemos transformar o seu cotidiano com um toque de originalidade.'
}

export default function RootLayout({ children }: Readonly<{children: React.ReactNode}>): JSX.Element {
  return (
    <>
    <AppProvider>
      <ToQueryClientProvider>
        <html lang="pt-br">
            <body className={saira.className}>
              <Header/>
              {children}
            </body>
          </html>
      </ToQueryClientProvider>
    </AppProvider>
    </>
  );
}