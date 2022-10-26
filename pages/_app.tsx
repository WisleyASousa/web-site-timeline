import { AppProps } from "next/app";
import GlobalStyle from "@src/theme/GlobalStyle";
import ThemeProvider from "@src/theme/ThemeProvider";
// Estrutura Base de Estilo Global 
export default function App({ Component, pageProps }: AppProps) {
  return (
      <>
        <ThemeProvider>
          <GlobalStyle />
          <Component {...pageProps} />
        </ThemeProvider>
      </>
    )
}