import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Header from '../components/Header';
import Statecontext from '@/context/Statecontext';
import { Toaster } from 'react-hot-toast';
import Cart from '@/components/Cart';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Statecontext>
      <>
        <Header />
        <Toaster />
        <Component {...pageProps} />
        <Cart />
      </>
    </Statecontext>
  );
}
