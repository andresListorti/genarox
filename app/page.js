// import Image from "next/image";
// import Counter from "./components/common/Counter";

import stilos from "./main.module.scss";
import Footer from "./components/layout/footer/Footer";
import Landing from "./components/layout/landing/Landing";
import Navbar from "./components/layout/navbar/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <Landing />
      <Footer />
    </>
  );
}
