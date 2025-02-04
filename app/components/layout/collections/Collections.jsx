import Link from "next/link";

const Collections = () => {
  return (
    <>
      <main className="w-full h-full bg-white bg-opacity-90 flex flex-wrap justify-center items-center pt-15 mt-15">
        {/* Sección Mujer */}
        <h2 className="w-full h-full flex justify-center items-center text-4xl underline text-gray-800 pt-30 translate-y-2">
          Colecciones
        </h2>

        <section className="border-2 border-black m-8 w-[600px] h-[900px] relative bg-[url('https://res.cloudinary.com/dgiqb0ipg/image/upload/v1726159833/woman-2179062_1920_pgvq1q.jpg')] bg-cover bg-no-repeat">
          <Link href="/women" className="block w-full h-full">
            <article className="text-white text-6xl m-12 w-full h-full flex items-center justify-center">
              <h3>Mujer</h3>
            </article>
          </Link>
        </section>
        {/* Sección Hombre */}
        <section className="border-2 border-black m-8 w-[600px] h-[900px] relative bg-[url('https://res.cloudinary.com/dgiqb0ipg/image/upload/v1726159834/shoes-877939_1920_ghyeho.jpg')] bg-cover bg-no-repeat">
          <Link href="/men" className="block w-full h-full">
            <article className="text-white text-6xl m-12 w-full h-full flex items-center justify-center">
              <h3>Hombre</h3>
            </article>
          </Link>
        </section>
      </main>
    </>
  );
};

export default Collections;
