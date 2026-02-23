import { Menu, X, Phone, ShoppingBag } from 'lucide-react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { label: 'Accueil', path: '/' },
    { label: 'Produits', path: '/produits' },
    { label: 'Sur Commande', path: '/sur-commande' },
    { label: 'À Propos', path: '/a-propos' },
    { label: 'Contact', path: '/contact' }
  ];

  const isActive = (path: string) => location.pathname === path;
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="bg-white/95 backdrop-blur-sm fixed w-full top-0 z-50 border-b border-gray-200 shadow-sm">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo et nom de la marque */}
          <Link 
            to="/" 
            className="flex items-center space-x-3 hover:opacity-80 transition-opacity group"
            onClick={closeMenu}
          >
            <div className="relative">
              <img 
                src="/logo.png" 
                alt="Luxura Logo" 
                className="h-12 w-12 rounded-full object-cover ring-2 ring-emerald-500/50 group-hover:ring-emerald-400 transition-all"
              />
              <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-[#8B7355] rounded-full border-2 border-white"></div>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-black tracking-tight leading-tight">
                LUXURA<span className="text-[#8B7355] text-sm align-super">™</span>
              </h1>
              <p className="text-xs text-gray-600 font-light tracking-wider">
                ÉLECTRONIQUE & IMPORT
              </p>
            </div>
          </Link>

          {/* Numéro de téléphone (visible sur desktop) */}
          <div className="hidden md:block">
            <a 
              href="tel:+237680967860" 
              className="text-[#8B7355] hover:text-black transition-colors font-medium flex items-center space-x-2"
            >
              <span className="text-sm bg-[#8B7355]/10 px-3 py-1.5 rounded-full border border-[#8B7355]/30">
                +237 680 967 860
              </span>
            </a>
          </div>

          {/* Navigation desktop */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative px-2 py-1 transition-colors duration-200 font-medium group ${
                  isActive(link.path)
                    ? 'text-[#8B7355]'
                    : 'text-gray-600 hover:text-black'
                }`}
              >
                {link.label}
                <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-[#8B7355] transform scale-x-0 transition-transform duration-200 group-hover:scale-x-100 ${
                  isActive(link.path) ? 'scale-x-100' : ''
                }`}></span>
              </Link>
            ))}
          </div>

          {/* Bouton menu mobile */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-black p-2 hover:bg-[#8B7355]/10 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#8B7355]/50"
            aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Menu mobile */}
        {isMenuOpen && (
          <div className="md:hidden py-6 space-y-4 border-t border-gray-200 animate-slideDown">
            {/* Numéro de téléphone (mobile) */}
            <div className="px-4 pb-4 border-b border-gray-200">
              <a 
                href="tel:+237680967860" 
                className="text-[#8B7355] hover:text-black transition-colors font-medium inline-flex items-center space-x-2 w-full"
              >
                <span className="text-sm bg-[#8B7355]/10 px-4 py-2 rounded-full border border-[#8B7355]/30 w-full text-center">
                  📞 +237 680 967 860
                </span>
              </a>
            </div>

            {/* Liens de navigation mobile */}
            <div className="space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={closeMenu}
                  className={`block px-4 py-3 rounded-lg transition-all duration-200 ${
                    isActive(link.path)
                      ? 'bg-[#8B7355] text-white'
                      : 'text-gray-600 hover:bg-[#8B7355]/10 hover:text-black'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}