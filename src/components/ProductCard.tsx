
import React, { useState } from 'react';
import { ShoppingCart, Eye, MessageCircle } from 'lucide-react';
import { Product } from '../data/products';
import { useAppContext } from '../context/AppContext';
import ProductDetailModal from './ProductDetailModal';
import NewBadge from './NewBadge';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
  const { addToCart } = useAppContext();

  const handleWhatsAppOrder = (e: React.MouseEvent) => {
    e.stopPropagation();
    const message = `Bonjour, je suis intéressé(e) par le produit: ${product.name} - ${product.price.toLocaleString()} FCFA`;
    const whatsappUrl = `https://wa.me/237693427529?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart(product);
  };

  return (
    <>
      <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in group">
        <div className="relative overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="absolute bottom-4 left-4 right-4 flex gap-2">
              <button
                onClick={() => setIsDetailModalOpen(true)}
                className="flex-1 bg-white/90 text-afrochic-indigo px-3 py-2 rounded-lg font-semibold hover:bg-white transition-colors flex items-center justify-center gap-1 text-sm"
              >
                <Eye className="w-4 h-4" />
                Voir
              </button>
              <button
                onClick={handleAddToCart}
                disabled={!product.inStock}
                className="flex-1 bg-afrochic-orange text-white px-3 py-2 rounded-lg font-semibold hover:bg-afrochic-orange/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center justify-center gap-1 text-sm"
              >
                <ShoppingCart className="w-4 h-4" />
                Panier
              </button>
            </div>
          </div>
          {product.isNew && <NewBadge />}
          {!product.inStock && (
            <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-lg text-xs font-semibold">
              Épuisé
            </div>
          )}
        </div>

        <div className="p-4">
          <h3 className="text-lg font-semibold text-afrochic-indigo mb-2 group-hover:text-afrochic-orange transition-colors">
            {product.name}
          </h3>
          <p className="text-gray-600 text-sm mb-3 line-clamp-2">{product.description}</p>
          
          <div className="flex justify-between items-center mb-3">
            <span className="text-xs text-gray-500">{product.category}</span>
            <span className="text-xs text-gray-500">{product.size}</span>
          </div>

          <div className="flex justify-between items-center">
            <div className="text-xl font-bold text-afrochic-indigo">
              {product.price.toLocaleString()} FCFA
            </div>
            <button
              onClick={handleWhatsAppOrder}
              className="bg-green-500 hover:bg-green-600 text-white p-2 rounded-lg transition-colors"
              title="Commander sur WhatsApp"
            >
              <MessageCircle className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      <ProductDetailModal
        product={product}
        isOpen={isDetailModalOpen}
        onClose={() => setIsDetailModalOpen(false)}
      />
    </>
  );
};

export default ProductCard;
