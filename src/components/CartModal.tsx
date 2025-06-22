
import React from 'react';
import { X, Plus, Minus, Trash2, MessageCircle } from 'lucide-react';
import { useAppContext } from '../context/AppContext';

interface CartModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CartModal: React.FC<CartModalProps> = ({ isOpen, onClose }) => {
  const { cart, updateCartQuantity, removeFromCart, getCartTotal, clearCart } = useAppContext();

  if (!isOpen) return null;

  const handleWhatsAppOrder = () => {
    if (cart.length === 0) return;
    
    const orderDetails = cart.map(item => 
      `• ${item.name} (${item.quantity}x) - ${(item.price * item.quantity).toLocaleString()} FCFA`
    ).join('\n');
    
    const total = getCartTotal();
    const message = `Bonjour, je souhaite commander:\n\n${orderDetails}\n\nTotal: ${total.toLocaleString()} FCFA`;
    
    const whatsappUrl = `https://wa.me/237693427529?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-md w-full max-h-[90vh] overflow-hidden animate-scale-in">
        <div className="bg-afrochic-indigo text-white p-4 flex justify-between items-center">
          <h2 className="text-xl font-playfair font-bold">Mon Panier</h2>
          <button
            onClick={onClose}
            className="p-1 hover:bg-white/20 rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto max-h-96">
          {cart.length === 0 ? (
            <div className="p-6 text-center text-gray-500">
              <p>Votre panier est vide</p>
            </div>
          ) : (
            <div className="p-4 space-y-4">
              {cart.map((item) => (
                <div key={item.id} className="flex items-center gap-3 border-b pb-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <h4 className="font-semibold text-sm">{item.name}</h4>
                    <p className="text-afrochic-orange font-semibold">
                      {item.price.toLocaleString()} FCFA
                    </p>
                    <div className="flex items-center gap-2 mt-2">
                      <button
                        onClick={() => updateCartQuantity(item.id, item.quantity - 1)}
                        className="p-1 hover:bg-gray-200 rounded"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="px-3 py-1 bg-gray-100 rounded text-sm">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateCartQuantity(item.id, item.quantity + 1)}
                        className="p-1 hover:bg-gray-200 rounded"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="p-1 hover:bg-red-100 text-red-600 rounded ml-2"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {cart.length > 0 && (
          <div className="border-t p-4">
            <div className="flex justify-between items-center mb-4">
              <span className="text-lg font-semibold">Total:</span>
              <span className="text-xl font-bold text-afrochic-indigo">
                {getCartTotal().toLocaleString()} FCFA
              </span>
            </div>
            <div className="flex gap-2">
              <button
                onClick={clearCart}
                className="flex-1 border border-gray-300 text-gray-700 px-4 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
              >
                Vider
              </button>
              <button
                onClick={handleWhatsAppOrder}
                className="flex-2 bg-green-500 text-white px-4 py-3 rounded-lg font-semibold hover:bg-green-600 flex items-center justify-center gap-2 transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                Commander
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartModal;
