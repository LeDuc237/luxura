import { ArrowRight, Package, Truck, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Fond avec dégradé dynamique */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-[#8B7355]/20 to-white"></div>
      
      {/* Overlay de texture */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#8B7355]/10 via-transparent to-transparent"></div>
      
      {/* Cercles décoratifs améliorés */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-20 -left-20 w-96 h-96 bg-[#8B7355]/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 -right-20 w-[500px] h-[500px] bg-black/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#8B7355]/5 rounded-full blur-3xl"></div>
      </div>

      {/* Vagues décoratives */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-auto opacity-30">
          <path fill="#8B7355" fillOpacity="0.3" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,154.7C960,171,1056,181,1152,170.7C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>

      {/* Contenu principal */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Partie gauche - Texte (toujours visible) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-1"
          >
            {/* Badge avec effet de verre */}
            <div className="inline-flex items-center bg-black/80 backdrop-blur-sm text-white px-4 py-2 rounded-full mb-6 border border-[#8B7355]/30 shadow-lg">
              <span className="text-xs tracking-wider">✨ IMPORT / EXPORT DEPUIS 2024</span>
            </div>

            {/* Titre principal avec dégradé */}
            <h1 className="mb-6">
              <span className="text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-black via-[#8B7355] to-black bg-clip-text text-transparent">
                LUXURA
              </span>
              <span className="text-[#000000] text-4xl align-super ml-1">™</span>
              <br />
              <span className="text-3xl md:text-4xl bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 bg-clip-text text-transparent font-light">
                L'ÉLÉGANCE TECHNOLOGIQUE
              </span>
            </h1>

            {/* Description avec fond subtil */}
            <p className="text-lg text-gray-700 mb-8 max-w-lg leading-relaxed bg-white/30 backdrop-blur-sm p-4 rounded-xl border border-white/20">
              Découvrez une sélection exclusive d'appareils électroniques haut de gamme, 
              importés des meilleures manufactures mondiales. Qualité premium, design exceptionnel.
            </p>

            {/* Statistiques avec cartes élégantes */}
            <div className="flex space-x-4 mb-8">
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="bg-white/80 backdrop-blur-sm border border-[#8B7355]/20 rounded-xl p-4 shadow-lg flex-1 text-center"
              >
                <div className="text-3xl font-bold bg-gradient-to-b from-black to-[#8B7355] bg-clip-text text-transparent">500+</div>
                <div className="text-xs text-gray-600">Produits livrés</div>
              </motion.div>
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="bg-white/80 backdrop-blur-sm border border-[#8B7355]/20 rounded-xl p-4 shadow-lg flex-1 text-center"
              >
                <div className="text-3xl font-bold bg-gradient-to-b from-black to-[#8B7355] bg-clip-text text-transparent">50+</div>
                <div className="text-xs text-gray-600">Partenaires</div>
              </motion.div>
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="bg-white/80 backdrop-blur-sm border border-[#8B7355]/20 rounded-xl p-4 shadow-lg flex-1 text-center"
              >
                <div className="text-3xl font-bold bg-gradient-to-b from-black to-[#8B7355] bg-clip-text text-transparent">24/7</div>
                <div className="text-xs text-gray-600">Support client</div>
              </motion.div>
            </div>

            {/* Boutons CTA avec effets */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/produits"
                className="group relative bg-gradient-to-r from-black to-[#8B7355] text-white px-8 py-4 rounded-xl hover:from-[#8B7355] hover:to-black transition-all duration-300 font-semibold text-lg shadow-xl hover:shadow-2xl flex items-center justify-center space-x-2 overflow-hidden"
              >
                <span className="relative z-10">Explorer nos produits</span>
                <ArrowRight size={18} className="relative z-10 group-hover:translate-x-1 transition-transform" />
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              </Link>
              
              <a
                href="https://wa.me/237680967860"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white/90 backdrop-blur-sm border-2 border-[#8B7355] text-[#8B7355] px-8 py-4 rounded-xl hover:bg-[#8B7355] hover:text-white transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
              >
                <span>Contacter LUXURA</span>
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              </a>
            </div>

            {/* Note de confiance */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="mt-6 flex items-center space-x-2 text-sm text-gray-600"
            >
              <Shield size={16} className="text-[#8B7355]" />
              <span>Paiement sécurisé • Livraison garantie • Satisfaction client</span>
            </motion.div>
          </motion.div>

          {/* Partie droite - Image/Carte (cachée sur mobile, visible sur desktop) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block lg:col-span-1"
          >
            {/* Carte principale avec effets de verre */}
            <div className="relative bg-gradient-to-br from-white/90 via-white/80 to-[#8B7355]/10 backdrop-blur-sm p-8 rounded-3xl border border-white/30 shadow-2xl">
              {/* Dégradé d'ambiance */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#8B7355]/10 via-transparent to-black/5 rounded-3xl"></div>
              
              {/* Image placeholder avec animation */}
              <motion.div 
                animate={{ 
                  y: [0, -10, 0],
                  scale: [1, 1.02, 1]
                }}
                transition={{ duration: 5, repeat: Infinity }}
                className="aspect-video bg-gradient-to-br from-black via-[#8B7355] to-gray-900 rounded-xl mb-6 flex items-center justify-center relative overflow-hidden group"
              >
                <span className="text-7xl relative z-10">📱</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </motion.div>
              
              {/* Features avec animations */}
              <div className="grid grid-cols-3 gap-4">
                <motion.div 
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="text-center group"
                >
                  <div className="bg-gradient-to-br from-black to-gray-800 w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-2 shadow-lg group-hover:shadow-xl transition-all">
                    <Package className="text-white" size={24} />
                  </div>
                  <p className="text-xs font-medium text-gray-700">Import direct</p>
                </motion.div>
                <motion.div 
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="text-center group"
                >
                  <div className="bg-gradient-to-br from-[#8B7355] to-[#6B5A44] w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-2 shadow-lg group-hover:shadow-xl transition-all">
                    <Truck className="text-white" size={24} />
                  </div>
                  <p className="text-xs font-medium text-gray-700">Livraison rapide</p>
                </motion.div>
                <motion.div 
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="text-center group"
                >
                  <div className="bg-gradient-to-br from-black to-gray-800 w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-2 shadow-lg group-hover:shadow-xl transition-all">
                    <Shield className="text-white" size={24} />
                  </div>
                  <p className="text-xs font-medium text-gray-700">Garantie 1 an</p>
                </motion.div>
              </div>

              {/* Ligne décorative */}
              <div className="mt-6 h-px bg-gradient-to-r from-transparent via-[#8B7355]/30 to-transparent"></div>

              {/* Pays d'importation */}
              <div className="mt-4 flex justify-center space-x-3">
                <span className="text-xs px-3 py-1 bg-white/50 rounded-full text-gray-600">Chine</span>
                <span className="text-xs px-3 py-1 bg-white/50 rounded-full text-gray-600">Corée</span>
                <span className="text-xs px-3 py-1 bg-white/50 rounded-full text-gray-600">Japon</span>
                <span className="text-xs px-3 py-1 bg-white/50 rounded-full text-gray-600">Dubaï</span>
              </div>
            </div>

            {/* Badge flottant amélioré */}
            <motion.div
              animate={{ 
                y: [0, -15, 0],
                rotate: [0, 2, -2, 0]
              }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -bottom-6 -right-6 bg-gradient-to-br from-[#8B7355] to-black text-white p-5 rounded-2xl shadow-2xl border border-white/20"
            >
              <p className="font-bold text-base">MR DANIEL</p>
              <p className="text-xs opacity-90 flex items-center space-x-1">
                <span>Fondateur</span>
                <span className="w-1 h-1 bg-green-400 rounded-full"></span>
                <span>En ligne</span>
              </p>
            </motion.div>

            {/* Éléments décoratifs flottants */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -top-10 -left-10 w-20 h-20 border-2 border-[#8B7355]/20 rounded-full"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="absolute -bottom-10 -left-10 w-32 h-32 border-2 border-black/10 rounded-full"
            />
          </motion.div>
        </div>
      </div>

      {/* Indicateur de scroll */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-[#8B7355] rounded-full flex justify-center">
          <div className="w-1 h-3 bg-[#8B7355] rounded-full mt-2"></div>
        </div>
      </motion.div>
    </section>
  );
}