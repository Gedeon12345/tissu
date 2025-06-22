
import React from 'react';
import { Users, Award, Heart, Truck } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Heart,
      title: 'Passion',
      description: 'Nous sommes passionnés par la beauté et l\'authenticité des tissus africains.'
    },
    {
      icon: Award,
      title: 'Qualité',
      description: 'Nous sélectionnons uniquement les tissus de la plus haute qualité pour nos clients.'
    },
    {
      icon: Users,
      title: 'Service',
      description: 'Notre équipe est dédiée à vous offrir la meilleure expérience d\'achat possible.'
    },
    {
      icon: Truck,
      title: 'Livraison',
      description: 'Livraison rapide et sécurisée dans tout Douala et ses environs.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <h1 className="text-3xl md:text-4xl font-playfair font-bold text-afrochic-indigo mb-6">
                À Propos d'AfroChic
              </h1>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                Depuis plus de 15 ans, AfroChic Tissus est votre partenaire de confiance 
                pour découvrir et acquérir les plus beaux tissus africains à Douala.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Notre boutique familiale s'est spécialisée dans l'importation et la vente 
                de tissus authentiques venus de toute l'Afrique : Wax du Bénin, Kente du Ghana, 
                Bogolan du Mali, et bien d'autres trésors textiles.
              </p>
              <div className="flex items-center space-x-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-afrochic-orange">500+</div>
                  <div className="text-sm text-gray-500">Clients satisfaits</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-afrochic-orange">15+</div>
                  <div className="text-sm text-gray-500">Années d'expérience</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-afrochic-orange">100%</div>
                  <div className="text-sm text-gray-500">Tissus authentiques</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=600"
                alt="Notre boutique"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-afrochic-indigo/20 to-transparent"></div>
            </div>
          </div>
        </div>

        {/* Notre Histoire */}
        <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-12 mb-12">
          <h2 className="text-2xl md:text-3xl font-playfair font-bold text-afrochic-indigo mb-8 text-center">
            Notre Histoire
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6 text-gray-600 leading-relaxed">
              <p>
                Tout a commencé en 2009 quand Mama Ngozi, passionnée par les textiles traditionnels, 
                a décidé d'ouvrir sa première boutique au marché central de Douala. Son rêve était 
                simple : permettre à chacun d'accéder aux plus beaux tissus africains, symboles 
                de notre riche héritage culturel.
              </p>
              <p>
                Au fil des années, AfroChic s'est développée grâce à la confiance de nos clients 
                et à notre engagement constant pour la qualité. Nous avons tissé des liens solides 
                avec des artisans et des coopératives dans toute l'Afrique de l'Ouest, nous permettant 
                de vous proposer des produits authentiques et de première qualité.
              </p>
              <p>
                Aujourd'hui, AfroChic c'est une équipe de 8 personnes passionnées, un catalogue 
                de plus de 200 références, et surtout, l'ambition de faire rayonner la beauté 
                des tissus africains au-delà des frontières du Cameroun.
              </p>
            </div>
          </div>
        </div>

        {/* Nos Valeurs */}
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-playfair font-bold text-afrochic-indigo mb-8 text-center">
            Nos Valeurs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-afrochic-orange to-afrochic-yellow rounded-full mb-4">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-afrochic-indigo mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-afrochic-indigo to-afrochic-orange rounded-2xl shadow-lg p-8 lg:p-12 text-center text-white">
          <h2 className="text-2xl md:text-3xl font-playfair font-bold mb-4">
            Rejoignez la Famille AfroChic
          </h2>
          <p className="text-lg mb-8 text-white/90 max-w-2xl mx-auto">
            Découvrez notre collection complète et laissez-vous séduire par la beauté 
            intemporelle des tissus africains authentiques.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/produits"
              className="bg-white text-afrochic-indigo px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Voir nos Produits
            </a>
            <a
              href="/contact"
              className="border-2 border-white text-white hover:bg-white hover:text-afrochic-indigo px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Nous Contacter
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
