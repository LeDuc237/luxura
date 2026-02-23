import { useState } from 'react';
import { ShoppingCart, Star, X, Eye, MessageCircle, ChevronRight, Clock } from 'lucide-react';

interface ProductCardProps {
  name: string;
  description: string;
  price: string;
  image: string;
  rating: number;
  category: string;
  isPreOrder?: boolean;
  origin?: string;
}

export default function ProductCard({ 
  name, 
  description, 
  price, 
  image, 
  rating, 
  category, 
  isPreOrder = false,
  origin = "Chine"
}: ProductCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const whatsappNumber = "680967860";

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleWhatsAppClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    const preOrderText = isPreOrder ? " (SUR COMMANDE)" : "";
    const message = encodeURIComponent(
      `Bonjour Mr Daniel, je suis intéressé par le produit : ${name}${preOrderText} (${price})`
    );
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
  };

  return (
    <>
      {/* Product Card */}
      <div 
        className={`${isPreOrder ? 'card-preorder' : 'card'} cursor-pointer group`}
        onClick={openModal}
      >
        {/* Image Container */}
        <div className="relative w-full pt-[100%] bg-gray-100 overflow-hidden">
          <img
            src={image}
            alt={name}
            className="absolute top-0 left-0 w-full h-full object-contain p-4 group-hover:scale-110 transition-transform duration-500"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = 'https://via.placeholder.com/400x400?text=Image';
            }}
          />
          
          {/* Badges */}
          <span className="absolute top-3 left-3 bg-black text-white text-xs font-bold px-3 py-1 rounded-full z-10">
            {category}
          </span>
          
          {isPreOrder && (
            <span className="badge-preorder">
              <Clock size={12} />
              <span>SUR COMMANDE</span>
            </span>
          )}

          {/* Quick View Overlay */}
          <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <div className="bg-[#8B7355] rounded-full p-3 transform group-hover:scale-110 transition-transform">
              <Eye size={24} className="text-white" />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-4">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-lg font-bold text-black group-hover:text-[#8B7355] transition-colors line-clamp-1 flex-1">
              {name}
            </h3>
            <div className="flex items-center ml-2 flex-shrink-0">
              <Star size={14} className="text-[#8B7355] fill-[#8B7355]" />
              <span className="text-gray-600 text-xs ml-1">{rating}</span>
            </div>
          </div>

          <p className="text-gray-600 text-xs mb-2 line-clamp-2">
            {description}
          </p>

          {origin && (
            <p className="text-[#8B7355] text-xs mb-3">
              📦 Origine: {origin}
            </p>
          )}

          <div className="flex items-center justify-between">
            <span className="text-xl font-bold text-black">{price}</span>
            
            <button 
              onClick={handleWhatsAppClick}
              className="bg-black hover:bg-[#8B7355] text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-all duration-200 shadow-lg text-sm"
            >
              <MessageCircle size={16} />
              <span className="hidden sm:inline">Commander</span>
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
          onClick={closeModal}
        >
          <div 
            className="relative w-full max-w-4xl bg-white rounded-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-20 bg-black/10 hover:bg-[#8B7355] text-black hover:text-white p-2 rounded-full transition-colors"
            >
              <X size={20} />
            </button>
            
            <div className="grid grid-cols-1 md:grid-cols-2">
              {/* Image */}
              <div className="bg-gray-100 p-8 flex items-center justify-center">
                <img
                  src={image}
                  alt={name}
                  className="w-full h-auto max-h-[400px] object-contain"
                />
              </div>
              
              {/* Details */}
              <div className="p-8">
                {isPreOrder && (
                  <div className="inline-flex items-center space-x-1 bg-[#8B7355] text-white px-3 py-1 rounded-full text-xs mb-4">
                    <Clock size={12} />
                    <span>Produit sur commande</span>
                  </div>
                )}
                
                <h2 className="text-3xl font-bold text-black mb-2">{name}</h2>
                
                <div className="flex items-center space-x-2 mb-4">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className={i < rating ? 'text-[#8B7355] fill-[#8B7355]' : 'text-gray-300'}
                      />
                    ))}
                  </div>
                  <span className="text-gray-500 text-sm">({rating}.0)</span>
                </div>

                <div className="space-y-4 mb-6">
                  <div>
                    <h3 className="text-sm font-semibold text-gray-500 mb-1">Description</h3>
                    <p className="text-gray-700">{description}</p>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <h3 className="text-sm font-semibold text-gray-500 mb-1">Catégorie</h3>
                      <p className="text-gray-900 font-medium">{category}</p>
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-gray-500 mb-1">Origine</h3>
                      <p className="text-gray-900 font-medium">{origin}</p>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-sm font-semibold text-gray-500 mb-1">Prix</h3>
                    <p className="text-3xl font-bold text-[#8B7355]">{price}</p>
                  </div>
                </div>

                <button
                  onClick={handleWhatsAppClick}
                  className="w-full btn-beige flex items-center justify-center space-x-2 py-4"
                >
                  <MessageCircle size={20} />
                  <span className="font-semibold">Commander via WhatsApp</span>
                  <ChevronRight size={18} />
                </button>

                <p className="text-xs text-gray-500 text-center mt-4">
                  ⏱ Délai de livraison : 2-3 semaines • Paiement sécurisé
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}