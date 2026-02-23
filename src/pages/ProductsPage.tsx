// pages/ProductsPage.tsx (updated with pre-order category)
import { useState } from 'react';
import { Filter, Search, ArrowRight } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { Link } from 'react-router-dom';

const allProducts = [
  // Regular products
  {
    id: 1,
    name: 'Smart TV 4K Ultra HD',
    description: 'Téléviseur intelligent 55" avec résolution 4K, HDR10+, processeur puissant et interface intuitive.',
    price: '450 000 FCFA',
    image: '/tv.jpg',
    rating: 5,
    category: 'TV & Audio',
    origin: 'Corée du Sud'
  },
  {
    id: 2,
    name: 'Smartphone Pro Max',
    description: 'Dernier modèle avec écran OLED 6.7", triple appareil photo 48MP, batterie longue durée.',
    price: '650 000 FCFA',
    image: '/phone.jpg',
    rating: 5,
    category: 'Téléphones',
    origin: 'Chine'
  },
  {
    id: 3,
    name: 'Laptop Gaming Elite',
    description: 'PC portable avec processeur i9, RTX 4080, 32GB RAM, écran 240Hz pour gaming extrême.',
    price: '1 200 000 FCFA',
    image: '/laptop.jpg',
    rating: 4,
    category: 'Ordinateurs',
    origin: 'Taïwan'
  },
  {
    id: 4,
    name: 'Tablette Premium',
    description: 'Tablette 12.9" avec stylet inclus, idéale pour productivité et créativité.',
    price: '350 000 FCFA',
    image: '/tablet.jpg',
    rating: 4,
    category: 'Tablettes',
    origin: 'Chine'
  },
  {
    id: 5,
    name: 'Casque Audio Pro',
    description: 'Casque sans fil avec réduction de bruit active, son haute résolution, autonomie 40h.',
    price: '85 000 FCFA',
    image: '/headphones.jpg',
    rating: 5,
    category: 'Audio',
    origin: 'Japon'
  },
  {
    id: 6,
    name: 'Montre Connectée',
    description: 'Montre intelligente avec suivi santé, GPS, écran AMOLED, notifications.',
    price: '95 000 FCFA',
    image: '/watch.jpg',
    rating: 4,
    category: 'Wearables',
    origin: 'Chine'
  }
];

const categories = ['Tous', 'TV & Audio', 'Téléphones', 'Ordinateurs', 'Tablettes', 'Audio', 'Wearables'];

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState('Tous');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProducts = allProducts.filter(product => {
    const categoryMatch = selectedCategory === 'Tous' || product.category === selectedCategory;
    const searchMatch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                       product.description.toLowerCase().includes(searchTerm.toLowerCase());
    return categoryMatch && searchMatch;
  });

  return (
    <div className="min-h-screen bg-white pt-24">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-black to-gray-900 text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Nos <span className="text-[#8B7355]">Produits</span>
          </h1>
          <p className="text-gray-300 text-lg">
            Découvrez notre sélection d'appareils électroniques haut de gamme
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Pre-order CTA */}
        <div className="mb-8 bg-gradient-to-r from-[#8B7355]/10 to-transparent border border-[#8B7355]/20 rounded-lg p-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div>
              <h3 className="text-xl font-bold text-black mb-2">Produits sur commande</h3>
              <p className="text-gray-600">
                Vous cherchez un produit spécifique ? Consultez notre sélection de produits importés sur demande.
              </p>
            </div>
            <Link
              to="/sur-commande"
              className="mt-4 md:mt-0 btn-primary flex items-center space-x-2"
            >
              <span>Voir les produits sur commande</span>
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
                <h3 className="text-black font-bold text-lg mb-4 flex items-center space-x-2">
                  <Filter size={20} className="text-[#8B7355]" />
                  <span>Filtres</span>
                </h3>

                <div className="space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`w-full text-left px-4 py-2 rounded-lg transition-all duration-200 ${
                        selectedCategory === category
                          ? 'bg-[#8B7355] text-white'
                          : 'text-gray-600 hover:bg-[#8B7355]/10'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="lg:col-span-3">
            <div className="mb-8">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Rechercher un produit..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full bg-white border border-gray-200 rounded-lg pl-12 pr-4 py-3 text-black placeholder-gray-400 focus:outline-none focus:border-[#8B7355] transition-colors"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.length > 0 ? (
                filteredProducts.map((product) => (
                  <ProductCard key={product.id} {...product} />
                ))
              ) : (
                <div className="col-span-3 text-center py-12">
                  <p className="text-gray-500 text-lg">
                    Aucun produit trouvé. Essayez une autre recherche.
                  </p>
                </div>
              )}
            </div>

            <div className="mt-8 text-center text-gray-500">
              <p>Affichage de {filteredProducts.length} produit(s)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}