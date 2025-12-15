import { X, ShoppingCart, Check, Star } from 'lucide-react';
import { useState } from 'react';
import type { Product } from '../lib/database.types';
import { useCart } from '../contexts/CartContext';

interface ProductModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProductModal({ product, isOpen, onClose }: ProductModalProps) {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  if (!isOpen || !product) return null;

  const allImages = [product.image_url, ...(product.images || [])];
  const discount = product.compare_at_price
    ? Math.round(((product.compare_at_price - product.price) / product.compare_at_price) * 100)
    : 0;

  const handleAddToCart = async () => {
    await addToCart(product, quantity);
    onClose();
  };

  return (
    <>
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 transition-opacity"
        onClick={onClose}
      />

      <div className="fixed inset-0 z-50 overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4">
          <div
            className="relative bg-gray-900 rounded-2xl max-w-5xl w-full border border-amber-500/20 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-black/70 rounded-full transition-colors"
            >
              <X className="w-6 h-6 text-white" />
            </button>

            <div className="grid md:grid-cols-2 gap-8 p-8">
              <div className="space-y-4">
                <div className="relative aspect-square rounded-xl overflow-hidden bg-gray-800">
                  <img
                    src={allImages[selectedImage]}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                  {product.featured && (
                    <div className="absolute top-4 left-4 bg-gradient-to-r from-amber-500 to-yellow-600 text-black text-xs font-bold px-3 py-1 rounded-full flex items-center space-x-1">
                      <Star className="w-3 h-3 fill-current" />
                      <span>POPULAIRE</span>
                    </div>
                  )}
                  {discount > 0 && (
                    <div className="absolute top-4 right-4 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                      -{discount}%
                    </div>
                  )}
                </div>

                {allImages.length > 1 && (
                  <div className="grid grid-cols-4 gap-2">
                    {allImages.map((image, index) => (
                      <button
                        key={index}
                        onClick={() => setSelectedImage(index)}
                        className={`aspect-square rounded-lg overflow-hidden border-2 transition-all ${
                          selectedImage === index
                            ? 'border-amber-500'
                            : 'border-gray-700 hover:border-gray-600'
                        }`}
                      >
                        <img
                          src={image}
                          alt={`${product.name} ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <div className="space-y-6">
                <div>
                  <h2 className="text-3xl font-bold text-white mb-2">{product.name}</h2>
                  <p className="text-gray-400 leading-relaxed">{product.description}</p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center space-x-3">
                    <span className="text-4xl font-bold bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent">
                      {product.price.toLocaleString()} FCFA
                    </span>
                  </div>
                  {product.compare_at_price && (
                    <div className="flex items-center space-x-2">
                      <span className="text-gray-500 text-lg line-through">
                        {product.compare_at_price.toLocaleString()} FCFA
                      </span>
                      <span className="text-green-400 text-sm font-semibold">
                        Économisez {(product.compare_at_price - product.price).toLocaleString()} FCFA
                      </span>
                    </div>
                  )}
                </div>

                {Object.keys(product.specs || {}).length > 0 && (
                  <div className="bg-gray-800/50 rounded-lg p-4 border border-amber-500/20">
                    <h3 className="text-white font-bold mb-3">Caractéristiques</h3>
                    <div className="space-y-2">
                      {Object.entries(product.specs || {}).map(([key, value]) => (
                        <div key={key} className="flex items-center space-x-2 text-sm">
                          <Check className="w-4 h-4 text-amber-500 flex-shrink-0" />
                          <span className="text-gray-400">
                            <span className="text-white font-semibold capitalize">{key}:</span> {value}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div className="space-y-3">
                  <div className="flex items-center space-x-4">
                    <span className="text-white font-semibold">Quantité:</span>
                    <div className="flex items-center space-x-3">
                      <button
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        className="w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-lg flex items-center justify-center transition-colors"
                      >
                        <span className="text-white text-xl">−</span>
                      </button>
                      <span className="text-white font-bold text-xl w-12 text-center">
                        {quantity}
                      </span>
                      <button
                        onClick={() => setQuantity(Math.min(product.stock_quantity, quantity + 1))}
                        disabled={quantity >= product.stock_quantity}
                        className="w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-lg flex items-center justify-center transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        <span className="text-white text-xl">+</span>
                      </button>
                    </div>
                  </div>

                  {product.in_stock ? (
                    <>
                      <button
                        onClick={handleAddToCart}
                        className="w-full py-4 bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-yellow-500 hover:to-amber-600 text-black font-bold rounded-lg transition-all hover:scale-105 hover:shadow-lg hover:shadow-amber-500/50 flex items-center justify-center space-x-2"
                      >
                        <ShoppingCart className="w-5 h-5" />
                        <span>Ajouter au Panier</span>
                      </button>
                      {product.stock_quantity < 5 && (
                        <p className="text-amber-500 text-sm text-center">
                          Attention: Plus que {product.stock_quantity} en stock!
                        </p>
                      )}
                    </>
                  ) : (
                    <div className="w-full py-4 bg-red-500/20 border-2 border-red-500 text-red-400 font-bold rounded-lg text-center">
                      Rupture de Stock
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
