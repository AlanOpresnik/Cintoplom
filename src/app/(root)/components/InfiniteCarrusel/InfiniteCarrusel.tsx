'use client'
import { useEffect, useRef } from "react";


interface Card {
  id: number;
  title: string;
}

const cards: Card[] = [
  {
    id: 1,
    title: "Cintoplom",
  },
  {
    id: 2,
    title: "CintoTex",
  },
  {
    id: 3,
    title: "CintoLux",
  },
  {
    id: 4,
    title: "CintoFlex",
  },
  {
    id: 5,
    title: "CintoPro",
  },

];

const InfiniteCarrusel = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationId: number;
    let scrollPosition = 0;
    const scrollSpeed = 1;

    const animate = () => {
      scrollPosition += scrollSpeed;
      
      if (scrollContainer) {
        const maxScroll = scrollContainer.scrollWidth / 2;
        
        if (scrollPosition >= maxScroll) {
          scrollPosition = 0;
        }
        
        scrollContainer.style.transform = `translateX(-${scrollPosition}px)`;
      }
      
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, []);

  const duplicatedCards = [...cards, ...cards];

  return (
    <div className="relative w-full overflow-hidden py-6">
      <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background z-10 pointer-events-none" />
      
      <div
        ref={scrollRef}
        className="flex gap-6 will-change-transform"
        style={{ width: "max-content" }}
      >
        {duplicatedCards.map((card, index) => (
          <div
            key={`${card.id}-${index}`}
            className="group relative  rounded-xl overflow-hidden  shadow-card hover:shadow-card-hover transition-all duration-500 hover:scale-105"
          >

            
            <div className="relative h-full flex flex-col justify-end p-6 z-10">
              <h3 className="text-5xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
                {card.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfiniteCarrusel;