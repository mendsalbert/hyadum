import Head from "next/head";
import About from "../components/MainSite/About/About";
import Community from "../components/MainSite/Community/Community";
import Footer from "../components/MainSite/Footer/Footer";
import Header from "../components/MainSite/Header/Header";
import News from "../components/MainSite/News/News";
import Services from "../components/MainSite/Services/Services";

export default function Home(props) {
  return (
    <html className="">
      <body className="dark:bg-gray-900 transition-all ">
        <Head>
          <title>Hyadum</title>
          <link rel="icon" href="/favicon.ico" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link
            href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500&display=swap"
            rel="stylesheet"
          ></link>
          <link
            href="https://fonts.googleapis.com/css2?family=Abril+Fatface&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Sarabun:wght@100;300;400;500&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Secular+One&display=swap"
            rel="stylesheet"
          />
        </Head>
        <Header />
        <About />
        <Services />
        <News />
        <Community />
        <Footer />
      </body>
    </html>
  );
}
