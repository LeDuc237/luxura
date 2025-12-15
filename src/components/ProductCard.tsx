import { ShoppingCart, Star, TrendingUp } from 'lucide-react';
import type { Product } from '../lib/database.types';
import { useCart } from '../contexts/CartContext';

interface ProductCardProps {
  product: Product;
  onProductClick: (product: Product) => void;
}

export default function ProductCard({ product, onProductClick }: ProductCardProps) {
  const { addToCart } = useCart();
  const discount = product.compare_at_price
    ? Math.round(((product.compare_at_price - product.price) / product.compare_at_price) * 100)
    : 0;

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart(product);
  };

  return (
    <div
      onClick={() => onProductClick(product)}
      className="group relative bg-gray-900/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-amber-500/20 hover:border-amber-500/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-amber-500/20 cursor-pointer"
    >
      {product.featured && (
        <div className="absolute top-4 left-4 z-10 bg-gradient-to-r from-amber-500 to-yellow-600 text-black text-xs font-bold px-3 py-1 rounded-full flex items-center space-x-1">
          <Star className="w-3 h-3 fill-current" />
          <span>POPULAIRE</span>
        </div>
      )}

      {discount > 0 && (
        <div className="absolute top-4 right-4 z-10 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full">
          -{discount}%
        </div>
      )}

      <div className="relative aspect-square overflow-hidden bg-gray-800">
        <img
          src={product.image_url}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
      </div>

      <div className="p-6 space-y-4">
        <div>
          <h3 className="text-white font-bold text-lg mb-2 line-clamp-2 group-hover:text-amber-500 transition-colors">
            {product.name}
          </h3>
          <p className="text-gray-400 text-sm line-clamp-2">
            {product.description}
          </p>
        </div>

        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center space-x-2">
              <span className="text-2xl font-bold bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent">
                {product.price.toLocaleString()} FCFA
              </span>
            </div>
            {product.compare_at_price && (
              <span className="text-gray-500 text-sm line-through">
                {product.compare_at_price.toLocaleString()} FCFA
              </span>
            )}
          </div>

          <button
            onClick={handleAddToCart}
            disabled={!product.in_stock}
            className={`p-3 rounded-lg transition-all ${
              product.in_stock
                ? 'bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-yellow-500 hover:to-amber-600 text-black hover:scale-110 hover:shadow-lg hover:shadow-amber-500/50'
                : 'bg-gray-700 text-gray-500 cursor-not-allowed'
            }`}
          >
            <ShoppingCart className="w-5 h-5" />
          </button>
        </div>

        {!product.in_stock && (
          <div className="text-center py-2 bg-red-500/20 border border-red-500/50 rounded-lg">
            <span className="text-red-400 text-sm font-medium">Rupture de stock</span>
          </div>
        )}

        {product.in_stock && product.stock_quantity < 5 && (
          <div className="flex items-center justify-center space-x-2 text-amber-500 text-sm">
            <TrendingUp className="w-4 h-4" />
            <span>Plus que {product.stock_quantity} en stock!</span>
          </div>
        )}
      </div>
    </div>
  );
}
