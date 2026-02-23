import { Award, Globe, Ship, Shield, Users, Package } from 'lucide-react';

export default function About() {
  const features = [
    {
      icon: Globe,
      title: 'Importation Directe',
      description: 'Nous importons directement depuis la Chine, la Corée, le Japon et Dubaï pour des prix compétitifs.'
    },
    {
      icon: Award,
      title: 'Qualité Premium',
      description: 'Sélection rigoureuse des produits auprès des meilleures manufactures mondiales.'
    },
    {
      icon: Ship,
      title: 'Livraison Express',
      description: 'Suivi en temps réel de vos commandes avec des délais optimisés.'
    },
    {
      icon: Shield,
      title: 'Garantie 1 An',
      description: 'Tous nos produits sont couverts par une garantie d\'un an.'
    }
  ];

  return (
    <section id="a-propos" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
              À Propos de <span className="text-[#8B7355]">LUXURA</span>
              <span className="text-sm align-super ml-1">™</span>
            </h2>
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              LUXURA™ Wears est votre partenaire de confiance pour l'importation 
              d'équipements électroniques haut de gamme. Nous connectons le Cameroun 
              et l'Afrique centrale aux meilleures technologies mondiales.
            </p>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Fondée par <span className="font-bold text-black">Mr Daniel</span>, 
              notre mission est de rendre accessible la technologie de pointe à des 
              prix compétitifs, avec un service client irréprochable.
            </p>
            <div className="bg-[#8B7355]/5 border border-[#8B7355]/20 rounded-xl p-6">
              <p className="text-black text-lg font-semibold mb-2">Notre Engagement</p>
              <p className="text-gray-600">
                Qualité premium, prix justes, livraison rapide et service après-vente 
                disponible 24/7. Votre satisfaction est notre priorité absolue.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="bg-gray-50 border border-gray-200 rounded-xl p-6 hover:border-[#8B7355] transition-all duration-300 hover:scale-105 transform"
                >
                  <div className="bg-[#8B7355] w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="text-white" size={24} />
                  </div>
                  <h3 className="text-black font-bold text-lg mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Stats additionnelles */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div className="bg-black text-white rounded-lg p-6">
            <div className="text-3xl font-bold text-[#8B7355]">500+</div>
            <div className="text-sm text-gray-300">Produits importés</div>
          </div>
          <div className="bg-black text-white rounded-lg p-6">
            <div className="text-3xl font-bold text-[#8B7355]">50+</div>
            <div className="text-sm text-gray-300">Partenaires</div>
          </div>
          <div className="bg-black text-white rounded-lg p-6">
            <div className="text-3xl font-bold text-[#8B7355]">4</div>
            <div className="text-sm text-gray-300">Pays d'import</div>
          </div>
          <div className="bg-black text-white rounded-lg p-6">
            <div className="text-3xl font-bold text-[#8B7355]">24/7</div>
            <div className="text-sm text-gray-300">Support client</div>
          </div>
        </div>
      </div>
    </section>
  );
}