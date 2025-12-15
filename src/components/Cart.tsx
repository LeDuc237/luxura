import { X, Minus, Plus, ShoppingBag, Trash2 } from 'lucide-react';
import { useCart } from '../contexts/CartContext';

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Cart({ isOpen, onClose }: CartProps) {
  const { cartItems, removeFromCart, updateQuantity, clearCart, cartTotal, cartCount } = useCart();

  if (!isOpen) return null;

  return (
    <>
      <div
        className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 transition-opacity"
        onClick={onClose}
      />

      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-gray-900 shadow-2xl z-50 transform transition-transform">
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-6 border-b border-amber-500/20">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-amber-500 to-yellow-600 rounded-lg flex items-center justify-center">
                <ShoppingBag className="w-5 h-5 text-black" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-white">Votre Panier</h2>
                <p className="text-sm text-gray-400">{cartCount} article{cartCount > 1 ? 's' : ''}</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 text-gray-400 hover:text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-6">
            {cartItems.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center space-y-4">
                <div className="w-24 h-24 bg-gray-800 rounded-full flex items-center justify-center">
                  <ShoppingBag className="w-12 h-12 text-gray-600" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg mb-2">Votre panier est vide</h3>
                  <p className="text-gray-400">Ajoutez des produits pour commencer vos achats</p>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex space-x-4 p-4 bg-gray-800/50 rounded-lg border border-amber-500/20"
                  >
                    <img
                      src={item.product.image_url}
                      alt={item.product.name}
                      className="w-20 h-20 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <h3 className="text-white font-semibold text-sm mb-1 line-clamp-2">
                        {item.product.name}
                      </h3>
                      <p className="text-amber-500 font-bold">
                        {item.product.price.toLocaleString()} FCFA
                      </p>
                      <div className="flex items-center space-x-2 mt-2">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="w-7 h-7 bg-gray-700 hover:bg-gray-600 rounded flex items-center justify-center transition-colors"
                        >
                          <Minus className="w-4 h-4 text-white" />
                        </button>
                        <span className="text-white font-semibold w-8 text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-7 h-7 bg-gray-700 hover:bg-gray-600 rounded flex items-center justify-center transition-colors"
                        >
                          <Plus className="w-4 h-4 text-white" />
                        </button>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="ml-auto p-2 text-red-400 hover:text-red-300 transition-colors"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}

                {cartItems.length > 1 && (
                  <button
                    onClick={clearCart}
                    className="w-full py-2 text-red-400 hover:text-red-300 text-sm font-medium transition-colors"
                  >
                    Vider le panier
                  </button>
                )}
              </div>
            )}
          </div>

          {cartItems.length > 0 && (
            <div className="border-t border-amber-500/20 p-6 space-y-4 bg-gray-900">
              <div className="space-y-2">
                <div className="flex justify-between text-gray-400">
                  <span>Sous-total</span>
                  <span>{cartTotal.toLocaleString()} FCFA</span>
                </div>
                <div className="flex justify-between text-gray-400">
                  <span>Livraison</span>
                  <span>À calculer</span>
                </div>
                <div className="flex justify-between text-xl font-bold text-white pt-2 border-t border-amber-500/20">
                  <span>Total</span>
                  <span className="bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent">
                    {cartTotal.toLocaleString()} FCFA
                  </span>
                </div>
              </div>

              <button className="w-full py-4 bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-yellow-500 hover:to-amber-600 text-black font-bold rounded-lg transition-all hover:scale-105 hover:shadow-lg hover:shadow-amber-500/50">
                Procéder au Paiement
              </button>

              <p className="text-center text-xs text-gray-500">
                Paiement sécurisé avec WhatsApp ou Mobile Money
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
