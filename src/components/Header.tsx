import { ShoppingCart, Search, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { useCart } from '../contexts/CartContext';

interface HeaderProps {
  onCartClick: () => void;
  onSearch: (query: string) => void;
}

export default function Header({ onCartClick, onSearch }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const { cartCount } = useCart();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchQuery);
  };

  return (
    <header className="sticky top-0 z-50 bg-black/95 backdrop-blur-sm border-b border-amber-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-8">
            <div className="flex-shrink-0">
              <h1 className="text-3xl font-bold bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-600 bg-clip-text text-transparent">
                LUXURA237
              </h1>
              <p className="text-xs text-amber-500/70 tracking-widest">PREMIUM COLLECTION</p>
            </div>

            <nav className="hidden md:flex space-x-6">
              <a href="#" className="text-gray-300 hover:text-amber-500 transition-colors font-medium">
                Accueil
              </a>
              <a href="#products" className="text-gray-300 hover:text-amber-500 transition-colors font-medium">
                Produits
              </a>
              <a href="#categories" className="text-gray-300 hover:text-amber-500 transition-colors font-medium">
                Catégories
              </a>
              <a href="#contact" className="text-gray-300 hover:text-amber-500 transition-colors font-medium">
                Contact
              </a>
            </nav>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <form onSubmit={handleSearch} className="relative">
              <input
                type="text"
                placeholder="Rechercher..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-gray-900/50 border border-amber-500/30 rounded-lg px-4 py-2 pl-10 text-white placeholder-gray-500 focus:outline-none focus:border-amber-500 w-64 transition-colors"
              />
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
            </form>

            <button
              onClick={onCartClick}
              className="relative p-2 text-gray-300 hover:text-amber-500 transition-colors"
            >
              <ShoppingCart className="w-6 h-6" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-gradient-to-r from-amber-500 to-yellow-600 text-black text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-gray-300 hover:text-amber-500"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-gray-900 border-t border-amber-500/20">
          <nav className="px-4 py-4 space-y-3">
            <a href="#" className="block text-gray-300 hover:text-amber-500 transition-colors font-medium">
              Accueil
            </a>
            <a href="#products" className="block text-gray-300 hover:text-amber-500 transition-colors font-medium">
              Produits
            </a>
            <a href="#categories" className="block text-gray-300 hover:text-amber-500 transition-colors font-medium">
              Catégories
            </a>
            <a href="#contact" className="block text-gray-300 hover:text-amber-500 transition-colors font-medium">
              Contact
            </a>
            <button
              onClick={onCartClick}
              className="flex items-center space-x-2 text-gray-300 hover:text-amber-500 transition-colors font-medium"
            >
              <ShoppingCart className="w-5 h-5" />
              <span>Panier ({cartCount})</span>
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
