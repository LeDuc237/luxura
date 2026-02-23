import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Contactez <span className="text-[#8B7355]">Nous</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Notre équipe est à votre disposition pour répondre à toutes vos questions
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Formulaire de contact */}
          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-black mb-6">Envoyez-nous un message</h3>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 mb-2 font-medium">
                  Nom Complet
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-black placeholder-gray-400 focus:outline-none focus:border-[#8B7355] transition-colors"
                  placeholder="Votre nom"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700 mb-2 font-medium">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-black placeholder-gray-400 focus:outline-none focus:border-[#8B7355] transition-colors"
                  placeholder="votre@email.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-700 mb-2 font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-black placeholder-gray-400 focus:outline-none focus:border-[#8B7355] transition-colors resize-none"
                  placeholder="Votre message..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-black text-white px-6 py-3 rounded-lg hover:bg-[#8B7355] transition-all duration-200 font-semibold shadow-lg"
              >
                Envoyer le Message
              </button>
            </form>
          </div>

          {/* Informations de contact */}
          <div className="space-y-6">
            <div className="bg-black text-white rounded-2xl p-8 shadow-xl">
              <div className="flex items-center space-x-4 mb-4">
                <div className="bg-[#8B7355] p-3 rounded-full">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Appelez Mr Daniel</h3>
                  <p className="text-gray-300 text-sm">Disponible 7j/7</p>
                </div>
              </div>
              <a
                href="tel:680967860"
                className="block text-center bg-[#8B7355] text-white text-2xl font-bold py-3 rounded-lg hover:bg-[#6B5A44] transition-colors mb-4"
              >
                +237 680 967 860
              </a>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-6 hover:border-[#8B7355] transition-all">
              <div className="flex items-start space-x-4">
                <div className="bg-[#8B7355] p-3 rounded-lg">
                  <MessageCircle size={20} className="text-white" />
                </div>
                <div>
                  <h4 className="text-black font-bold text-lg mb-2">WhatsApp</h4>
                  <p className="text-gray-600 mb-3">Contactez-nous directement</p>
                  <a
                    href="https://wa.me/237680967860"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-black text-white px-4 py-2 rounded-lg hover:bg-[#8B7355] transition-colors font-medium"
                  >
                    Démarrer la conversation
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-6 hover:border-[#8B7355] transition-all">
              <div className="flex items-start space-x-4">
                <div className="bg-[#8B7355] p-3 rounded-lg">
                  <Mail size={20} className="text-white" />
                </div>
                <div>
                  <h4 className="text-black font-bold text-lg mb-2">Email</h4>
                  <p className="text-[#8B7355]">contact@luxura.com</p>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-6 hover:border-[#8B7355] transition-all">
              <div className="flex items-start space-x-4">
                <div className="bg-[#8B7355] p-3 rounded-lg">
                  <Clock size={20} className="text-white" />
                </div>
                <div>
                  <h4 className="text-black font-bold text-lg mb-2">Horaires</h4>
                  <p className="text-gray-600">Lundi - Dimanche</p>
                  <p className="text-[#8B7355] font-semibold">8h - 20h</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}