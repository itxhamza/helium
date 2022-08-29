import type { AppProps } from "next/app";
import DefaultLayout from "../Layouts/DefaultLayout";
import MainLayout from "../Layouts/MainLayout";
import "../styles/home.css";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  const CustomLayout = MainLayout || DefaultLayout;
  return (
    <CustomLayout>
      <Component {...pageProps} />
    </CustomLayout>
  );
}

export default MyApp;
