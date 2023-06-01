import { Inter } from "next/font/google";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Main from "../components/Main";
import About from "@/components/About";
import Skills1 from "@/components/Skills1";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="MyPortfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar></Navbar>
      <Main></Main>
      <About></About>
      <Skills1></Skills1>
      <Projects></Projects>
      <Footer/>
    </div>
  );
}
