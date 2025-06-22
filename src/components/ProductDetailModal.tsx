
import React from 'react';
import { X, ShoppingCart, MessageCircle } from 'lucide-react';
import { Product } from '../data/products';
import { useAppContext } from '../context/AppContext';

interface ProductDetailModalProps {
  product: Product;
  isOpen: boolean;
  onClose: () => void;
}

const ProductDetailModal: React.FC<ProductDetailModalProps> = ({ product, isOpen, onClose }) => {
  const { addToCart } = useAppContext();

  if (!isOpen) return null;

  const handleWhatsAppOrder = () => {
    const message = `Bonjour, je suis intéressé(e) par le produit: ${product.name} - ${product.price.toLocaleString()} FCFA`;
    const whatsappUrl = `https://wa.me/237693427529?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleAddToCart = () => {
    addToCart(product);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto animate-scale-in">
        <div className="sticky top-0 bg-white border-b border-gray-200 p-4 flex justify-between items-center">
          <h2 className="text-xl font-playfair font-bold text-afrochic-indigo">Détails du produit</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-64 md:h-80 object-cover rounded-lg"
              />
            </div>

            <div className="space-y-4">
              <div>
                <h3 className="text-2xl font-playfair font-bold text-afrochic-indigo mb-2">
                  {product.name}
                </h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
              </div>

              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="font-semibold text-gray-700">Catégorie:</span>
                  <span className="ml-2 text-afrochic-orange">{product.category}</span>
                </div>
                <div>
                  <span className="font-semibold text-gray-700">Taille:</span>
                  <span className="ml-2 text-afrochic-orange">{product.size}</span>
                </div>
                <div>
                  <span className="font-semibold text-gray-700">Couleur:</span>
                  <span className="ml-2 text-afrochic-orange">{product.color}</span>
                </div>
                <div>
                  <span className="font-semibold text-gray-700">Stock:</span>
                  <span className={`ml-2 ${product.inStock ? 'text-green-600' : 'text-red-600'}`}>
                    {product.inStock ? 'Disponible' : 'En rupture'}
                  </span>
                </div>
              </div>

              <div className="border-t pt-4">
                <div className="text-3xl font-bold text-afrochic-indigo mb-4">
                  {product.price.toLocaleString()} FCFA
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={handleAddToCart}
                    disabled={!product.inStock}
                    className="flex-1 bg-afrochic-orange text-white px-6 py-3 rounded-lg font-semibold hover:bg-afrochic-orange/90 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 transition-colors"
                  >
                    <ShoppingCart className="w-5 h-5" />
                    Ajouter au panier
                  </button>
                  <button
                    onClick={handleWhatsAppOrder}
                    className="flex-1 bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 flex items-center justify-center gap-2 transition-colors"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Commander
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailModal;
