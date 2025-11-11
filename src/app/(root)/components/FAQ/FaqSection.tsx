'use client'
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Image from "next/image";

export default function PaintFAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "¿Cuantos Metros cuadrados cubre un balde de 20 litros?",
      answer:
        "Un balde de 20 litros de pintura profesional cubre aproximadamente entre 160 y 200 metros cuadrados, dependiendo del tipo de superficie, su porosidad y la técnica de aplicación utilizada.",
    },
    {
      question: "¿Cual es la diferencia entre CintoLux, CintoTox y CintoFlex?",
      answer:
        "CintoLux es una pintura de acabado brillante ideal para interiores, CintoTox ofrece protección antimicrobiana para ambientes que requieren higiene especial, y CintoFlex proporciona elasticidad y resistencia a la intemperie, perfecta para exteriores.",
    },
    {
      question: "¿Cuanto tengo que esperar entre cada mano de pintura?",
      answer:
        "El tiempo de secado recomendado entre manos es de 2 a 4 horas en condiciones normales de temperatura y humedad. Para mejores resultados, espere 4 horas en ambientes húmedos o con poca ventilación.",
    },
    {
      question: "¿Las pinturas Cintoplom son resistentes a humedad?",
      answer:
        "Sí, nuestras pinturas Cintoplom están formuladas con tecnología de última generación que proporciona excelente resistencia a la humedad, siendo ideales para cocinas, baños y áreas expuestas a condiciones de alta humedad.",
    },
  ];

  const toggleAccordion = (index: any) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-600 via-red-500 to-red-600 flex items-center justify-center p-4 py-12 sm:p-8">
      <div className=" w-full grid lg:grid-cols-3 gap-8 lg:gap-12 items-center">
        {/* Left Side - Image */}
        <div className="flex  justify-center lg:justify-start order-2 lg:order-1">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-red-600 opacity-40 rounded-full blur-3xl"></div>
            <Image
              src="https://res.cloudinary.com/dbgt948uj/image/upload/v1760985046/Hombre-Pensando-06-1_mnxwvm.png"
              alt="Professional painter"
              width={400}
              height={400}
              className="relative hidden md:block w-64 h-80 sm:w-80 sm:h-96 lg:w-[600px] lg:h-[500px] object-cover rounded-tl-[100px] rounded-br-[100px] shadow-2xl"
            />
          </div>
        </div>

        {/* Right Side - FAQ Content */}
        <div className="col-span-2 flex max-w-5xl flex-col items-center justify-cente order-1 lg:order-2 space-y-6">
          <div className="space-y-3">
            <h1 className="text-4xl text-center sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Preguntas{" "}
              <span className="text-yellow-300 text-center">que siempre se hacen</span>
            </h1>
            <p className="text-red-100 text-center text-base sm:text-lg ">
              Resolvemos las dudas más comunes sobre nuestras pinturas
              profesionales y su aplicación correcta.
            </p>
          </div>

          {/* FAQ Accordion */}
          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-lg overflow-hidden transition-all duration-300 hover:bg-white/15"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full px-5 py-4 flex items-center justify-between text-left group"
                >
                  <span className="text-white font-medium text-sm sm:text-base pr-4">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-white flex-shrink-0 transition-transform duration-300 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index
                      ? "max-h-96 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-5 pb-4 text-red-50 text-sm sm:text-base">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Contact Section */}
          <div className="pt-6  text-center">
            <p className="text-white text-lg mb-4">
              ¿No encontraste lo que buscabas?
            </p>
            <button className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg">
              Contactar al soporte
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
