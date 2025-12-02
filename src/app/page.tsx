import Header from "./(root)/components/Header";
import OurExperience from "./(root)/components/ourExperience/OurExperience";
import ProductsSection from "./(root)/ProductsSection/ProductsSection";
import PaintFAQSection from "./(root)/components/FAQ/FaqSection";
import InfiniteCarrusel from "./(root)/components/InfiniteCarrusel/InfiniteCarrusel";
import HeaderMobile from "./(root)/components/HeaderMobile";
export default function Home() {
  return (
    <>
      <header role="main" className="overflow-hidden">
        <div className="hidden md:block">
          <Header />
        </div>
        <div className="md:hidden">
          <HeaderMobile />
        </div>
      </header>
      <section>
        <div>
          <OurExperience />
        </div>
      </section>
      <section>
        <div>
          <ProductsSection />
        </div>
      </section>
      <section>
        <PaintFAQSection />
      </section>
      <section className="py-24 flex justify-center flex-col items-center w-full ">
        <div className="mb-6">
          <div className="flex justify-center w-full">
            <p className="text-6xl text-center font-bold">
              Nuestras <span className="text-primary text-center">Marcas</span>
            </p>
          </div>
        </div>
        <InfiniteCarrusel />
      </section>
    </>
  );
}
