import { ArrowRight, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import ProductCard from './ProductCard';

const products = [
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

export default function Products() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="title-gradient mb-4">
            Nos Produits <span className="title-highlight">Premium</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Une sélection rigoureuse des meilleurs appareils électroniques, importés directement des plus grandes marques
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/produits"
            className="btn-primary inline-flex items-center space-x-2"
          >
            <span>Voir tous les produits</span>
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}