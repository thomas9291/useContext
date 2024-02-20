import "@/styles/globals.css";
import type { AppProps } from "next/app";
import CartContextProvider from "../store/shopping-cart-context";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CartContextProvider>
      <Component {...pageProps} />
    </CartContextProvider>
  );
}
