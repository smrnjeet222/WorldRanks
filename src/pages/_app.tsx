import { QueryClient, QueryClientProvider } from "react-query";
import Layout from "../components/Layout/Layout";
import "../styles/globals.scss";

const client = new QueryClient();

function MyApp({ Component, pageProps }) {
  return (
    <>
      <QueryClientProvider client={client}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </QueryClientProvider>
    </>
  );
}

export default MyApp;
