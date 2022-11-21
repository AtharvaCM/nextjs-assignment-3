import "@/styles/globals.css";
import "@/styles/header.css";

import type { AppProps } from "next/app";
import { useEffect } from "react";

import { ApolloProvider } from "@apollo/client";
import client from "apollo-client";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    async function loadData() {
      await require("tw-elements");
    }
    loadData();
  }, []);

  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp;
