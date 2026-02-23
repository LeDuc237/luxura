// pages/PreOrderPage.tsx
import { useState } from 'react';
import { Clock, Search, Filter, Package, MessageCircle } from 'lucide-react';
import ProductCard from '../components/ProductCard';

const preOrderProducts = [
  {
    id: 101,
    name: 'Drone Professionnel 4K',
    description: 'Drone avec caméra 4K stabilisée, portée 10km, autonomie 45min, retour automatique.',
    price: '550 000 FCFA',
    image: '/drone.jpg',
    rating: 5,
    category: 'Drones',
    isPreOrder: true,
    origin: 'Chine'
  },
  {
    id: 102,
    name: 'Projecteur Home Cinema',
    description: 'Projecteur 4K HDR, 3000 lumens, écran 150", idéal pour cinéma maison.',
    price: '750 000 FCFA',
    image: '/projector.jpg',
    rating: 4,
    category: 'Video',
    isPreOrder: true,
    origin: 'Japon'
  },
  {
    id: 103,
    name: 'Robot Aspirateur Intelligent',
    description: 'Aspirateur robot avec cartographie laser, aspiration puissante, navigation intelligente.',
    price: '280 000 FCFA',
    image: '/robot.jpg',
    rating: 5,
    category: 'Electroménager',
    isPreOrder: true,
    origin: 'Chine'
  },
  {
    id: 104,
    name: 'Console de Jeux Nouvelle Génération',
    description: 'Console dernière génération, ray tracing, SSD ultra-rapide, manette haptique.',
    price: '450 000 FCFA',
    image: '/console.jpg',
    rating: 5,
    category: 'Gaming',
    isPreOrder: true,
    origin: 'Japon'
  },
  {
    id: 105,
    name: 'Enceinte Bluetooth Premium',
    description: 'Enceinte portable waterproof, son 360°, autonomie 20h, design élégant.',
    price: '120 000 FCFA',
    image: '/speaker.jpg',
    rating: 4,
    category: 'Audio',
    isPreOrder: true,
    origin: 'Chine'
  },
  {
    id: 106,
    name: 'Caméra de Surveillance',
    description: 'Caméra 4G avec vision nocturne, détection mouvement, alarme, stockage cloud.',
    price: '95 000 FCFA',
    image: '/camera.jpg',
    rating: 4,
    category: 'Sécurité',
    isPreOrder: true,
    origin: 'Chine'
  }
];

export default function PreOrderPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Tous');

  const categories = ['Tous', 'Drones', 'Video', 'Electroménager', 'Gaming', 'Audio', 'Sécurité'];

  const filteredProducts = preOrderProducts.filter(product => {
    const categoryMatch = selectedCategory === 'Tous' || product.category === selectedCategory;
    const searchMatch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                       product.description.toLowerCase().includes(searchTerm.toLowerCase());
    return categoryMatch && searchMatch;
  });

  return (
    <div className="min-h-screen bg-white pt-24">
      {/* Hero section */}
      <div className="bg-gradient-to-br from-black to-gray-900 text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-4 mb-4">
            <Package size={40} className="text-[#8B7355]" />
            <h1 className="text-4xl md:text-5xl font-bold">
              Sur <span className="text-[#8B7355]">Commande</span>
            </h1>
          </div>
          <p className="text-gray-300 text-lg max-w-2xl">
            Des produits exclusifs importés sur demande. Laissez-nous vous procurer 
            l'appareil électronique de vos rêves, même s'il n'est pas en stock.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Search and Filter */}
        <div className="mb-8 flex flex-col md:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Rechercher un produit sur commande..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-white border border-gray-200 rounded-lg pl-12 pr-4 py-3 text-black placeholder-gray-400 focus:outline-none focus:border-[#8B7355] transition-colors"
            />
          </div>
          
          <div className="relative">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="appearance-none bg-white border border-gray-200 rounded-lg px-4 py-3 pr-10 text-black focus:outline-none focus:border-[#8B7355] transition-colors cursor-pointer"
            >
              {categories.map(cat => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
            <Filter className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" size={18} />
          </div>
        </div>

        {/* Info banner */}
        <div className="bg-[#8B7355]/10 border border-[#8B7355]/20 rounded-lg p-4 mb-8 flex items-center space-x-3">
          <Clock size={20} className="text-[#8B7355]" />
          <p className="text-gray-700 text-sm">
            <span className="font-semibold">Délai de livraison :</span> 2-3 semaines • 
            Paiement à la commande • Produits importés directement
          </p>
        </div>

        {/* Products grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))
          ) : (
            <div className="col-span-3 text-center py-12">
              <Package size={48} className="text-gray-300 mx-auto mb-4" />
              <p className="text-gray-500 text-lg">
                Aucun produit trouvé. Essayez une autre recherche.
              </p>
            </div>
          )}
        </div>

        {/* Contact CTA */}
        <div className="mt-16 bg-gray-50 rounded-2xl p-8 text-center border border-gray-200">
          <h3 className="text-2xl font-bold text-black mb-3">
            Vous ne trouvez pas ce que vous cherchez ?
          </h3>
          <p className="text-gray-600 mb-6">
            Contactez Mr Daniel directement. Nous pouvons importer n'importe quel produit électronique 
            depuis la Chine, la Corée, le Japon ou Dubaï.
          </p>
          <a
            href="https://wa.me/237680967860"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-beige inline-flex items-center space-x-2"
          >
            <MessageCircle size={18} />
            <span>Parler à Mr Daniel</span>
          </a>
        </div>
      </div>
    </div>
  );
}