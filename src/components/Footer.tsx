
import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Phone, MapPin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-afrochic-indigo text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-afrochic-orange to-afrochic-yellow rounded-full flex items-center justify-center">
                <ShoppingBag className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-xl font-playfair font-bold">AfroChic</h3>
            </div>
            <p className="text-gray-300 text-sm">
              Votre destination privilégiée pour les plus beaux tissus africains à Douala.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-afrochic-orange transition-colors">Accueil</Link></li>
              <li><Link to="/produits" className="text-gray-300 hover:text-afrochic-orange transition-colors">Produits</Link></li>
              <li><Link to="/a-propos" className="text-gray-300 hover:text-afrochic-orange transition-colors">À Propos</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-afrochic-orange transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Catégories</h4>
            <ul className="space-y-2">
              <li><span className="text-gray-300">Tissu Wax</span></li>
              <li><span className="text-gray-300">Kente</span></li>
              <li><span className="text-gray-300">Bogolan</span></li>
              <li><span className="text-gray-300">Ankara</span></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-afrochic-orange" />
                <span className="text-gray-300 text-sm">+237 693 427 529</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-afrochic-orange" />
                <span className="text-gray-300 text-sm">fobadeffo@gmail.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-afrochic-orange" />
                <span className="text-gray-300 text-sm">Douala, Cameroun</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-300 text-sm">
            ©{new Date().getFullYear()} AfroChic Tissus. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
