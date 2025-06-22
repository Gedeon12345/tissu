
import React from 'react';
import { Users, ShoppingBag, Heart, Award } from 'lucide-react';

const StatsSection = () => {
  const stats = [
    {
      icon: Users,
      number: "500+",
      label: "Clients Satisfaits",
      color: "text-afrochic-orange"
    },
    {
      icon: ShoppingBag,
      number: "50+",
      label: "Produits Disponibles",
      color: "text-afrochic-indigo"
    },
    {
      icon: Heart,
      number: "98%",
      label: "Taux de Satisfaction",
      color: "text-red-500"
    },
    {
      icon: Award,
      number: "5+",
      label: "Années d'Expérience",
      color: "text-afrochic-yellow"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-afrochic-indigo via-afrochic-indigo/90 to-afrochic-orange">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="text-center text-white animate-fade-in">
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-white/20 rounded-full">
                    <Icon className={`w-8 h-8 ${stat.color}`} />
                  </div>
                </div>
                <div className="text-3xl md:text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-sm md:text-base opacity-90">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
