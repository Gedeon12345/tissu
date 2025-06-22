import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Product } from '../data/products';
import Toast from '../components/Toast';

interface CartItem extends Product {
  quantity: number;
}

interface Filters {
  category: string;
  size: string;
  color: string;
  priceRange: [number, number];
}

interface AppContextType {
  filters: Filters;
  setFilters: React.Dispatch<React.SetStateAction<Filters>>;
  searchQuery: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
  selectedProduct: Product | null;
  setSelectedProduct: React.Dispatch<React.SetStateAction<Product | null>>;
  cart: CartItem[];
  addToCart: (product: Product) => void;
  updateCartQuantity: (id: number, quantity: number) => void;
  removeFromCart: (id: number) => void;
  clearCart: () => void;
  getCartTotal: () => number;
  getCartItemsCount: () => number;
  showToast: (message: string, type: 'success' | 'info') => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};

interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [filters, setFilters] = useState<Filters>({
    category: 'Tous',
    size: 'Tous',
    color: 'Tous',
    priceRange: [0, 50000]
  });
  
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [cart, setCart] = useState<CartItem[]>([]);
  
  const [toastConfig, setToastConfig] = useState({
    message: '',
    type: 'success' as 'success' | 'info',
    isVisible: false
  });

  const addToCart = (product: Product) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === product.id);
      if (existingItem) {
        showToast(`Quantité mise à jour pour ${product.name}`, 'info');
        return prevCart.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      showToast(`${product.name} ajouté au panier`, 'success');
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const updateCartQuantity = (id: number, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(id);
      return;
    }
    setCart(prevCart =>
      prevCart.map(item =>
        item.id === id ? { ...item, quantity } : item
      )
    );
  };

  const removeFromCart = (id: number) => {
    setCart(prevCart => prevCart.filter(item => item.id !== id));
  };

  const clearCart = () => {
    setCart([]);
  };

  const getCartTotal = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const getCartItemsCount = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  const showToast = (message: string, type: 'success' | 'info') => {
    setToastConfig({ message, type, isVisible: true });
  };

  const hideToast = () => {
    setToastConfig(prev => ({ ...prev, isVisible: false }));
  };

  const value = {
    filters,
    setFilters,
    searchQuery,
    setSearchQuery,
    selectedProduct,
    setSelectedProduct,
    cart,
    addToCart,
    updateCartQuantity,
    removeFromCart,
    clearCart,
    getCartTotal,
    getCartItemsCount,
    showToast
  };

  return (
    <AppContext.Provider value={value}>
      {children}
      <Toast
        message={toastConfig.message}
        type={toastConfig.type}
        isVisible={toastConfig.isVisible}
        onClose={hideToast}
      />
    </AppContext.Provider>
  );
};
