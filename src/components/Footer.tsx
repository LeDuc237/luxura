import { Facebook, Instagram, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="bg-black border-t border-amber-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent">
              LUXURA237
            </h3>
            <p className="text-gray-400 text-sm">
              Votre destination premium pour les produits électroniques et décoratifs de qualité au Cameroun.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-amber-500 transition-colors">Accueil</a></li>
              <li><a href="#products" className="text-gray-400 hover:text-amber-500 transition-colors">Produits</a></li>
              <li><a href="#categories" className="text-gray-400 hover:text-amber-500 transition-colors">Catégories</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-amber-500 transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Informations</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-amber-500 transition-colors">À propos</a></li>
              <li><a href="#" className="text-gray-400 hover:text-amber-500 transition-colors">Livraison</a></li>
              <li><a href="#" className="text-gray-400 hover:text-amber-500 transition-colors">Retours</a></li>
              <li><a href="#" className="text-gray-400 hover:text-amber-500 transition-colors">Garantie</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2 text-gray-400">
                <Phone className="w-4 h-4 text-amber-500" />
                <span>+237 XXX XXX XXX</span>
              </li>
              <li className="flex items-center space-x-2 text-gray-400">
                <Mail className="w-4 h-4 text-amber-500" />
                <span>contact@luxura237.com</span>
              </li>
              <li className="flex items-center space-x-2 text-gray-400">
                <MapPin className="w-4 h-4 text-amber-500" />
                <span>Douala, Cameroun</span>
              </li>
            </ul>
            <div className="flex space-x-4 mt-4">
              <a href="https://www.tiktok.com/@luxura237" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 hover:bg-amber-500 rounded-lg flex items-center justify-center transition-colors">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-amber-500 rounded-lg flex items-center justify-center transition-colors">
                <Instagram className="w-5 h-5 text-white" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-amber-500 rounded-lg flex items-center justify-center transition-colors">
                <Facebook className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-amber-500/20 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 LUXURA237. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}
