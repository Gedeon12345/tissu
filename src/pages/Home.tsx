import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star } from 'lucide-react';
import HeroCarousel from '../components/HeroCarousel';
import ProductCard from '../components/ProductCard';
import StatsSection from '../components/StatsSection';
import { products } from '../data/products';

const Home = () => {
  const featuredProducts = products.slice(0, 4);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-afrochic-indigo via-afrochic-indigo/90 to-afrochic-orange text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-4xl md:text-6xl font-playfair font-bold mb-6">
                AfroChic
                <span className="block text-afrochic-yellow">Tissus de Douala</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-100">
                Découvrez l'authenticité des tissus africains dans notre boutique de référence à Douala
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/produits"
                  className="bg-afrochic-orange hover:bg-afrochic-orange/90 text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center gap-2 transition-colors"
                >
                  Voir la Collection
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  to="/contact"
                  className="border-2 border-white text-white hover:bg-white hover:text-afrochic-indigo px-8 py-4 rounded-lg font-semibold transition-colors"
                >
                  Nous Contacter
                </Link>
              </div>
            </div>
            <div className="animate-fade-in">
              <HeroCarousel />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <StatsSection />

      {/* Featured Products Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-playfair font-bold text-afrochic-indigo text-center mb-8">
            Nos Produits Vedettes
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              to="/produits"
              className="bg-afrochic-indigo hover:bg-afrochic-indigo/90 text-white px-8 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition-colors"
            >
              Voir Tous les Produits
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <Star className="w-10 h-10 text-afrochic-orange mx-auto mb-4" />
            <h2 className="text-2xl font-playfair font-bold text-afrochic-indigo mb-4">
              Ce que nos clients disent
            </h2>
            <p className="text-gray-600 mb-6">
              Nous sommes fiers de la satisfaction de nos clients et de la qualité de nos tissus.
              Découvrez quelques témoignages de personnes qui ont choisi AfroChic.
            </p>
            <div className="bg-white rounded-lg shadow-md p-6">
              <p className="text-gray-700 italic">
                "AfroChic a transformé ma garde-robe avec des tissus magnifiques et authentiques.
                La qualité est exceptionnelle et le service client est impeccable."
              </p>
              <p className="mt-4 font-semibold text-afrochic-indigo">- Marie K., Douala</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
