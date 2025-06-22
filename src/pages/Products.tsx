import React, { useState, useMemo } from 'react';
import { Search, Filter, X } from 'lucide-react';
import { products, categories, sizes, colors, Product } from '../data/products';
import ProductCard from '../components/ProductCard';
import { useAppContext } from '../context/AppContext';

const Products = () => {
  const { filters, setFilters, searchQuery, setSearchQuery } = useAppContext();
  const [showFilters, setShowFilters] = useState(false);

  // Filtrage des produits
  const filteredProducts = useMemo(() => {
    return products.filter((product: Product) => {
      const matchesSearch = searchQuery === '' || 
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesCategory = filters.category === 'Tous' || product.category === filters.category;
      const matchesSize = filters.size === 'Tous' || product.size === filters.size;
      const matchesColor = filters.color === 'Tous' || product.color === filters.color;
      const matchesPrice = product.price >= filters.priceRange[0] && product.price <= filters.priceRange[1];

      return matchesSearch && matchesCategory && matchesSize && matchesColor && matchesPrice;
    });
  }, [products, filters, searchQuery]);

  const handleFilterChange = (key: keyof typeof filters, value: any) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  const clearFilters = () => {
    setFilters({
      category: 'Tous',
      size: 'Tous',
      color: 'Tous',
      priceRange: [0, 50000]
    });
    setSearchQuery('');
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-playfair font-bold text-afrochic-indigo mb-4">
            Nos Produits
          </h1>
          <p className="text-gray-600 max-w-2xl">
            Découvrez notre collection complète de tissus africains authentiques.
          </p>
        </div>

        {/* Search and Filter Bar */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Rechercher un produit..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-afrochic-orange focus:border-transparent"
              />
            </div>

            {/* Filter Toggle */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="lg:hidden bg-afrochic-indigo text-white px-6 py-3 rounded-lg font-semibold flex items-center gap-2 hover:bg-afrochic-indigo/90 transition-colors"
            >
              <Filter className="w-5 h-5" />
              Filtres
            </button>
          </div>

          {/* Filters */}
          <div className={`mt-6 pt-6 border-t border-gray-200 ${showFilters ? 'block' : 'hidden lg:block'}`}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* Category Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Catégorie
                </label>
                <select
                  value={filters.category}
                  onChange={(e) => handleFilterChange('category', e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-afrochic-orange focus:border-transparent"
                >
                  {categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>

              {/* Size Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Taille
                </label>
                <select
                  value={filters.size}
                  onChange={(e) => handleFilterChange('size', e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-afrochic-orange focus:border-transparent"
                >
                  {sizes.map(size => (
                    <option key={size} value={size}>{size}</option>
                  ))}
                </select>
              </div>

              {/* Color Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Couleur
                </label>
                <select
                  value={filters.color}
                  onChange={(e) => handleFilterChange('color', e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-afrochic-orange focus:border-transparent"
                >
                  {colors.map(color => (
                    <option key={color} value={color}>{color}</option>
                  ))}
                </select>
              </div>

              {/* Clear Filters */}
              <div className="flex items-end">
                <button
                  onClick={clearFilters}
                  className="w-full bg-gray-200 hover:bg-gray-300 text-gray-700 px-4 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition-colors"
                >
                  <X className="w-4 h-4" />
                  Effacer
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="mb-6">
          <p className="text-gray-600">
            {filteredProducts.length} produit(s) trouvé(s)
          </p>
        </div>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard 
                key={product.id} 
                product={product}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <h3 className="text-xl font-semibold text-gray-600 mb-4">
              Aucun produit trouvé
            </h3>
            <p className="text-gray-500 mb-6">
              Essayez de modifier vos critères de recherche ou vos filtres.
            </p>
            <button
              onClick={clearFilters}
              className="bg-afrochic-orange hover:bg-afrochic-orange/90 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              Effacer tous les filtres
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
