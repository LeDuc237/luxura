import { Award, Globe, Ship, Shield, Users, Package, Linkedin, Twitter, Instagram } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white pt-24">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-black to-gray-900 text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            À Propos de <span className="text-[#8B7355]">LUXURA</span>
            <span className="text-sm align-super ml-1">™</span>
          </h1>
          <p className="text-gray-300 text-lg">
            Excellence dans l'importation et la distribution d'équipements électroniques
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Mission Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
              Notre <span className="text-[#8B7355]">Mission</span>
            </h2>
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              LUXURA™ Wears est née d'une vision claire : rendre accessible la technologie 
              de pointe au Cameroun et en Afrique centrale. Nous importons les meilleurs 
              appareils électroniques des plus grandes places commerciales mondiales.
            </p>
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              Notre fondateur, <span className="font-bold text-black">Mr Daniel</span>, 
              a créé LUXURA™ avec l'ambition de combler le fossé technologique et 
              d'offrir des produits de qualité à des prix compétitifs.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              De l'importation directe depuis la Chine, la Corée, le Japon et Dubaï, 
              nous assurons une chaîne d'approvisionnement fiable et transparente.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-8 hover:border-[#8B7355] transition-all">
              <Globe className="text-[#8B7355] mb-4" size={32} />
              <h3 className="text-black font-bold text-lg mb-2">Importation</h3>
              <p className="text-gray-600 text-sm">Asie, Moyen-Orient, Europe</p>
            </div>
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-8 hover:border-[#8B7355] transition-all">
              <Shield className="text-[#8B7355] mb-4" size={32} />
              <h3 className="text-black font-bold text-lg mb-2">Garantie</h3>
              <p className="text-gray-600 text-sm">1 an sur tous nos produits</p>
            </div>
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-8 hover:border-[#8B7355] transition-all">
              <Ship className="text-[#8B7355] mb-4" size={32} />
              <h3 className="text-black font-bold text-lg mb-2">Livraison</h3>
              <p className="text-gray-600 text-sm">Rapide et sécurisée</p>
            </div>
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-8 hover:border-[#8B7355] transition-all">
              <Users className="text-[#8B7355] mb-4" size={32} />
              <h3 className="text-black font-bold text-lg mb-2">Service Client</h3>
              <p className="text-gray-600 text-sm">Disponible 24/7</p>
            </div>
          </div>
        </div>

        {/* Founder Section */}
        <div className="border-t border-gray-200 pt-16 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-12 text-center">
            Notre <span className="text-[#8B7355]">Fondateur</span>
          </h2>

          <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-[#8B7355] to-black rounded-full flex items-center justify-center ring-4 ring-[#8B7355]/30">
                <Award className="text-white" size={48} />
              </div>
              <h3 className="text-3xl font-bold text-black mb-2">Mr Daniel</h3>
              <p className="text-[#8B7355] text-lg font-semibold mb-4">Fondateur & CEO</p>
              <div className="inline-flex items-center space-x-2 bg-white border border-gray-200 rounded-full px-4 py-2">
                <span className="text-gray-600">Expert en import-export</span>
                <span className="text-[#8B7355]">•</span>
                <span className="text-gray-600">Douala, Cameroun</span>
              </div>
            </div>

            <p className="text-gray-600 text-center text-lg leading-relaxed mb-6">
              Mr Daniel est un entrepreneur visionnaire spécialisé dans l'importation 
              d'équipements électroniques. Avec plus de 10 ans d'expérience dans le 
              commerce international, il a développé un réseau solide de partenaires 
              en Chine, en Corée, au Japon et à Dubaï.
            </p>

            <div className="bg-white border border-gray-200 rounded-xl p-6 mb-8">
              <p className="text-gray-700 italic text-center">
                "LUXURA™ n'est pas qu'une entreprise d'importation, c'est une promesse 
                de qualité et de fiabilité. Chaque produit que nous importons est 
                rigoureusement sélectionné pour offrir le meilleur rapport qualité-prix 
                à nos clients."
              </p>
              <p className="text-[#8B7355] font-semibold text-center mt-4">- Mr Daniel</p>
            </div>

            <div className="space-y-4">
              <h4 className="text-black font-bold text-center mb-4">Suivez Mr Daniel</h4>
              <div className="flex justify-center space-x-4">
                <a
                  href="#"
                  className="bg-black hover:bg-[#8B7355] text-white p-3 rounded-lg transition-colors"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="#"
                  className="bg-black hover:bg-[#8B7355] text-white p-3 rounded-lg transition-colors"
                >
                  <Twitter size={20} />
                </a>
                <a
                  href="#"
                  className="bg-black hover:bg-[#8B7355] text-white p-3 rounded-lg transition-colors"
                >
                  <Instagram size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="border-t border-gray-200 pt-16">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-12 text-center">
            Nos <span className="text-[#8B7355]">Valeurs</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-8 hover:border-[#8B7355] transition-all">
              <h3 className="text-black font-bold text-xl mb-3 text-[#8B7355]">Intégrité</h3>
              <p className="text-gray-600">
                Transparence totale sur l'origine des produits, les délais et les prix. 
                Nous tenons toujours nos promesses.
              </p>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-xl p-8 hover:border-[#8B7355] transition-all">
              <h3 className="text-black font-bold text-xl mb-3 text-[#8B7355]">Excellence</h3>
              <p className="text-gray-600">
                Sélection rigoureuse des produits et des partenaires pour garantir 
                une qualité irréprochable.
              </p>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-xl p-8 hover:border-[#8B7355] transition-all">
              <h3 className="text-black font-bold text-xl mb-3 text-[#8B7355]">Accessibilité</h3>
              <p className="text-gray-600">
                Rendre la technologie de pointe accessible à tous grâce à des prix 
                compétitifs et une logistique optimisée.
              </p>
            </div>
          </div>
        </div>

        {/* Import Stats */}
        <div className="mt-16 bg-black text-white rounded-2xl p-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <Package size={32} className="mx-auto mb-3 text-[#8B7355]" />
              <div className="text-3xl font-bold">500+</div>
              <div className="text-gray-400 text-sm">Produits importés</div>
            </div>
            <div>
              <Globe size={32} className="mx-auto mb-3 text-[#8B7355]" />
              <div className="text-3xl font-bold">4</div>
              <div className="text-gray-400 text-sm">Pays partenaires</div>
            </div>
            <div>
              <Users size={32} className="mx-auto mb-3 text-[#8B7355]" />
              <div className="text-3xl font-bold">300+</div>
              <div className="text-gray-400 text-sm">Clients satisfaits</div>
            </div>
            <div>
              <Ship size={32} className="mx-auto mb-3 text-[#8B7355]" />
              <div className="text-3xl font-bold">24/7</div>
              <div className="text-gray-400 text-sm">Suivi des expéditions</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}