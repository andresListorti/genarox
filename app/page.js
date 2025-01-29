import Footer from "./components/layout/footer/Footer";
import Landing from "./components/layout/landing/Landing";
import Navbar from "./components/layout/navbar/Navbar";
import Image from "next/image";
import { products } from "./productsMock";
import Men from "./components/layout/men/Men.jsx";
import NotFound from "./components/layout/notFound/NotFound.jsx";
import Hero from "./components/layout/hero/Hero";
// import stilos from "./main.module.scss";
// import Counter from "./components/common/Counter";

export const metadata = {
  title: "Genaro | Zapatos e Indumentaria de Cuero para Hombre y mujer",
  description:
    "Descubre la mejor colección de zapatos e indumentaria de cuero para hombre y mujer de Genaro. Últimas tendencias en calzado de calidad, estilo y confort.",
  keywords:
    "Zapatos de cuero, Indumentaria de cuero , Calzado de calidad, Moda de cuero, Calzado para hombre, Calzado para mujer, ultimas tendencias en calzado, Colección de zapatos, Estilo y confort, Accesorios de moda",
  openGraph: {
    title: "Genaro | Zapatos e Indumentaria de Cuero para Hombre y mujer",
    description:
      "Descubre la mejor colección de zapatos e indumentaria de cuero para hombre y mujer de Genaro. Últimas tendencias en calzado de calidad, estilo y confort.",
    url: "",
    siteName: "Genaro | Zapatos e Indumentaria de Cuero para Hombre y mujer",
    images: [
      {
        url: "https://res.cloudinary.com/dgiqb0ipg/image/upload/v1726159834/shoes-877939_1920_ghyeho.jpg",
      },
    ],
  },
};

export default function Home() {
  return (
    <>
      {/* <NotFound /> */}
      <Navbar />
      <Hero />
      <Men />
      <Landing />
      <Image
        src={"/business-2049312_1280.jpg"}
        alt="imagen1"
        width={500}
        height={300}
      />
      <Image
        src={
          "https://res.cloudinary.com/dgiqb0ipg/image/upload/v1726159833/hombremoca_ugonuw.jpg"
        }
        alt="imagen2"
        width={500}
        height={300}
        priority
      />
      <Image
        src={products[0].imageUrl}
        alt="imagen3"
        width={500}
        height={300}
      />
      <Footer />
    </>
  );
}
