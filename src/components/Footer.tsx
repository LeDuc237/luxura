// components/Footer.tsx
import { Facebook, Instagram, Twitter, Phone, Mail, MapPin, Globe } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center">
                <span className="text-white text-2xl font-bold">L</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-black">LUXURA</h3>
                <p className="text-xs text-[#8B7355] font-light">ÉLECTRONIQUE & IMPORT</p>
              </div>
            </div>
            <p className="text-gray-600 text-sm mb-4">
              Importateur et distributeur d'équipements électroniques haut de gamme. 
              Qualité premium, prix compétitifs.
            </p>
            <div className="flex space-x-3">
              <a
                href="#"
                className="bg-gray-100 hover:bg-[#8B7355] text-gray-600 hover:text-white p-2 rounded-lg transition-colors"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                className="bg-gray-100 hover:bg-[#8B7355] text-gray-600 hover:text-white p-2 rounded-lg transition-colors"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                className="bg-gray-100 hover:bg-[#8B7355] text-gray-600 hover:text-white p-2 rounded-lg transition-colors"
              >
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-black font-bold text-lg mb-4">Liens Rapides</h4>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-gray-600 hover:text-[#8B7355] transition-colors">
                  Accueil
                </a>
              </li>
              <li>
                <a href="/produits" className="text-gray-600 hover:text-[#8B7355] transition-colors">
                  Produits
                </a>
              </li>
              <li>
                <a href="/sur-commande" className="text-gray-600 hover:text-[#8B7355] transition-colors">
                  Sur Commande
                </a>
              </li>
              <li>
                <a href="/a-propos" className="text-gray-600 hover:text-[#8B7355] transition-colors">
                  À Propos
                </a>
              </li>
              <li>
                <a href="/contact" className="text-gray-600 hover:text-[#8B7355] transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-black font-bold text-lg mb-4">Catégories</h4>
            <ul className="space-y-2">
              <li className="text-gray-600 hover:text-[#8B7355] transition-colors cursor-pointer">Smartphones & Tablettes</li>
              <li className="text-gray-600 hover:text-[#8B7355] transition-colors cursor-pointer">TV & Audio</li>
              <li className="text-gray-600 hover:text-[#8B7355] transition-colors cursor-pointer">Ordinateurs & Gaming</li>
              <li className="text-gray-600 hover:text-[#8B7355] transition-colors cursor-pointer">Électroménager</li>
              <li className="text-gray-600 hover:text-[#8B7355] transition-colors cursor-pointer">Accessoires</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-black font-bold text-lg mb-4">Contact</h4>
            <div className="space-y-3">
              <a
                href="tel:680967860"
                className="flex items-center space-x-3 text-gray-600 hover:text-[#8B7355] transition-colors group"
              >
                <div className="bg-gray-100 group-hover:bg-[#8B7355] p-2 rounded-lg transition-colors">
                  <Phone size={16} className="group-hover:text-white" />
                </div>
                <span>680 967 860</span>
              </a>
              <a
                href="mailto:contact@luxura.com"
                className="flex items-center space-x-3 text-gray-600 hover:text-[#8B7355] transition-colors group"
              >
                <div className="bg-gray-100 group-hover:bg-[#8B7355] p-2 rounded-lg transition-colors">
                  <Mail size={16} className="group-hover:text-white" />
                </div>
                <span>contact@luxura.com</span>
              </a>
              <div className="flex items-center space-x-3 text-gray-600">
                <div className="bg-gray-100 p-2 rounded-lg">
                  <MapPin size={16} />
                </div>
                <span>Douala, Cameroun</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-600">
                <div className="bg-gray-100 p-2 rounded-lg">
                  <Globe size={16} />
                </div>
                <span>Import: Chine, Corée, Japon, Dubaï</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">
              &copy; {new Date().getFullYear()} LUXURA™ Wears. Tous droits réservés.
            </p>
            <p className="text-[#8B7355] text-sm mt-2 md:mt-0">
              Importateur officiel - Produits sous garantie
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}