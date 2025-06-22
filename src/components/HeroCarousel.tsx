
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import image1 from "../assets/images/1617021338538-eva-blue-sfpokp6-2ea-unsplash-scaled.jpeg"
import image2 from "../assets/images/istockphoto-483232645-612x612.jpg"
import image3 from "../assets/images/tissu-africain-traditionnel-dans-beaucoup-de-modèles-119112138.jpg"

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: image1,
      title: 'Tissus Wax Authentiques',
      subtitle: 'Découvrez notre collection exclusive',
      cta: 'Voir la Collection'
    },
    {
      image: image2,
      title: 'Kente de Qualité Premium',
      subtitle: 'Tradition et élégance réunies',
      cta: 'Explorer Maintenant'
    },
    {
      image: image3,
      title: 'Bogolan Artisanal',
      subtitle: 'Fait main par nos artisans',
      cta: 'Découvrir'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative h-96 md:h-[500px] overflow-hidden rounded-xl">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-transform duration-500 ease-in-out ${
            index === currentSlide ? 'translate-x-0' : 
            index < currentSlide ? '-translate-x-full' : 'translate-x-full'
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent flex items-center">
            <div className="text-white p-8 max-w-lg">
              <h3 className="text-3xl md:text-4xl font-playfair font-bold mb-4">
                {slide.title}
              </h3>
              <p className="text-lg md:text-xl mb-6 text-gray-100">
                {slide.subtitle}
              </p>
              <button className="bg-afrochic-orange hover:bg-afrochic-orange/90 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                {slide.cta}
              </button>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation buttons */}
      {/* <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors"
      >
        <ChevronRight className="w-6 h-6" />
      </button> */}

      {/* Dots indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentSlide ? 'bg-white' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;
