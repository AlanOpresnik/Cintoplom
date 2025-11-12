import Header from "./(root)/components/Header";
import OurExperience from "./(root)/components/ourExperience/OurExperience";
import ProductsSection from "./(root)/ProductsSection/ProductsSection";
import PaintFAQSection from "./(root)/components/FAQ/FaqSection";
import InfiniteCarrusel from "./(root)/components/InfiniteCarrusel/InfiniteCarrusel";
export default function Home() {
  return (
    <>
      <header className="overflow-hidden">
        <Header />
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
      <section className="py-24 ">
        <div className="mb-6">
          <div className="flex justify-center w-full">
            <p className="text-6xl font-bold">Nuestras <span className="text-primary">Marcas</span></p>
          </div>
        </div>
        <InfiniteCarrusel />
      </section>
 
    </>
  );
}
