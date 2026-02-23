// pages/ContactPage.tsx
import { Phone, Mail, MapPin, Clock, MessageCircle, Send, Globe } from 'lucide-react';
import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    product: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = encodeURIComponent(
      `Bonjour Mr Daniel, je suis ${formData.name}.\n\n` +
      `Téléphone: ${formData.phone}\n` +
      `Email: ${formData.email}\n\n` +
      `Produit souhaité: ${formData.product}\n\n` +
      `Message: ${formData.message}`
    );
    window.open(`https://wa.me/237680967860?text=${message}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-white pt-24">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-black to-gray-900 text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Contactez <span className="text-[#8B7355]">Nous</span>
          </h1>
          <p className="text-gray-300 text-lg">
            Notre équipe est à votre disposition pour tous vos besoins d'importation
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Contact Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-black text-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all">
            <div className="flex items-center space-x-4 mb-6">
              <div className="bg-[#8B7355] p-4 rounded-full">
                <Phone size={28} />
              </div>
              <div>
                <h3 className="font-bold text-lg">Téléphone</h3>
                <p className="text-gray-300 text-sm">Appelez Mr Daniel</p>
              </div>
            </div>
            <a
              href="tel:680967860"
              className="block text-center bg-[#8B7355] text-white text-2xl font-bold py-3 rounded-lg hover:bg-[#6B5A44] transition-colors mb-4"
            >
              +237 680 967 860
            </a>
            <p className="text-gray-300 text-center text-sm">
              Disponible 7j/7 de 8h à 20h
            </p>
          </div>

          <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8 hover:border-[#8B7355] transition-all">
            <div className="flex items-center space-x-4 mb-6">
              <div className="bg-[#8B7355] p-4 rounded-full">
                <Mail size={28} className="text-white" />
              </div>
              <div>
                <h3 className="text-black font-bold text-lg">Email</h3>
                <p className="text-gray-500 text-sm">Réponse sous 24h</p>
              </div>
            </div>
            <a
              href="mailto:contact@luxura.com"
              className="text-[#8B7355] hover:text-black transition-colors font-semibold text-lg block mb-2"
            >
              contact@luxura.com
            </a>
            <p className="text-gray-500 text-sm">
              Pour les demandes d'importation
            </p>
          </div>

          <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8 hover:border-[#8B7355] transition-all">
            <div className="flex items-center space-x-4 mb-6">
              <div className="bg-[#8B7355] p-4 rounded-full">
                <MessageCircle size={28} className="text-white" />
              </div>
              <div>
                <h3 className="text-black font-bold text-lg">WhatsApp</h3>
                <p className="text-gray-500 text-sm">Réponse instantanée</p>
              </div>
            </div>
            <a
              href="https://wa.me/237680967860"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center bg-[#8B7355] text-white px-6 py-3 rounded-lg hover:bg-[#6B5A44] transition-colors font-semibold mb-2"
            >
              Ouvrir WhatsApp
            </a>
            <p className="text-gray-500 text-sm text-center">
              Discutez directement avec Mr Daniel
            </p>
          </div>
        </div>

        {/* Main Contact Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Form */}
          <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8 hover:border-[#8B7355] transition-all">
            <h2 className="text-2xl font-bold text-black mb-8 flex items-center space-x-3">
              <Send className="text-[#8B7355]" size={24} />
              <span>Formulaire de contact</span>
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 mb-2 font-medium">
                  Nom Complet
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 text-black placeholder-gray-400 focus:outline-none focus:border-[#8B7355] transition-colors"
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
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 text-black placeholder-gray-400 focus:outline-none focus:border-[#8B7355] transition-colors"
                  placeholder="votre@email.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-gray-700 mb-2 font-medium">
                  Téléphone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 text-black placeholder-gray-400 focus:outline-none focus:border-[#8B7355] transition-colors"
                  placeholder="6XX XXX XXX"
                />
              </div>

              <div>
                <label htmlFor="product" className="block text-gray-700 mb-2 font-medium">
                  Produit souhaité
                </label>
                <input
                  type="text"
                  id="product"
                  name="product"
                  value={formData.product}
                  onChange={handleChange}
                  placeholder="Ex: Smartphone, TV, Ordinateur..."
                  className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 text-black placeholder-gray-400 focus:outline-none focus:border-[#8B7355] transition-colors"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-700 mb-2 font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full bg-white border border-gray-200 rounded-lg px-4 py-3 text-black placeholder-gray-400 focus:outline-none focus:border-[#8B7355] transition-colors resize-none"
                  placeholder="Décrivez votre besoin..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-black text-white px-6 py-3 rounded-lg hover:bg-[#8B7355] transition-all duration-200 font-semibold flex items-center justify-center space-x-2"
              >
                <Send size={18} />
                <span>Envoyer via WhatsApp</span>
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8 hover:border-[#8B7355] transition-all">
              <div className="flex items-start space-x-4">
                <div className="bg-[#8B7355] p-4 rounded-lg flex-shrink-0">
                  <MapPin size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-black font-bold text-lg mb-2">Localisation</h3>
                  <p className="text-gray-600 mb-1">Douala, Cameroun</p>
                  <p className="text-gray-500 text-sm">Bureau sur rendez-vous uniquement</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8 hover:border-[#8B7355] transition-all">
              <div className="flex items-start space-x-4">
                <div className="bg-[#8B7355] p-4 rounded-lg flex-shrink-0">
                  <Clock size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-black font-bold text-lg mb-2">Horaires</h3>
                  <div className="space-y-1">
                    <p className="text-gray-600"><span className="font-semibold">Lundi - Vendredi:</span> 8h00 - 20h00</p>
                    <p className="text-gray-600"><span className="font-semibold">Samedi:</span> 9h00 - 18h00</p>
                    <p className="text-gray-600"><span className="font-semibold">Dimanche:</span> 10h00 - 16h00</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8 hover:border-[#8B7355] transition-all">
              <div className="flex items-start space-x-4">
                <div className="bg-[#8B7355] p-4 rounded-lg flex-shrink-0">
                  <Globe size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-black font-bold text-lg mb-2">Zones d'importation</h3>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-white border border-gray-200 px-3 py-1 rounded-full text-sm text-gray-700">Chine</span>
                    <span className="bg-white border border-gray-200 px-3 py-1 rounded-full text-sm text-gray-700">Corée du Sud</span>
                    <span className="bg-white border border-gray-200 px-3 py-1 rounded-full text-sm text-gray-700">Japon</span>
                    <span className="bg-white border border-gray-200 px-3 py-1 rounded-full text-sm text-gray-700">Dubaï</span>
                    <span className="bg-white border border-gray-200 px-3 py-1 rounded-full text-sm text-gray-700">Turquie</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Response Time */}
            <div className="bg-[#8B7355]/5 border border-[#8B7355]/20 rounded-2xl p-8">
              <h3 className="text-black font-bold text-lg mb-4">Temps de réponse</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">WhatsApp</span>
                  <span className="text-[#8B7355] font-semibold">&lt; 30 minutes</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Appel téléphonique</span>
                  <span className="text-[#8B7355] font-semibold">Immédiat</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Email</span>
                  <span className="text-[#8B7355] font-semibold">&lt; 4 heures</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Formulaire</span>
                  <span className="text-[#8B7355] font-semibold">&lt; 1 heure</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Map/Area */}
        <div className="bg-black text-white rounded-2xl p-12 text-center">
          <h2 className="text-2xl font-bold mb-4">Service d'importation disponible</h2>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Nous importons depuis la Chine, la Corée du Sud, le Japon, Dubaï et la Turquie. 
            De l'électronique grand public aux équipements professionnels.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="bg-white/10 px-4 py-2 rounded-full text-sm">✓ Pas de minimum de commande</div>
            <div className="bg-white/10 px-4 py-2 rounded-full text-sm">✓ Paiement sécurisé</div>
            <div className="bg-white/10 px-4 py-2 rounded-full text-sm">✓ Suivi en temps réel</div>
            <div className="bg-white/10 px-4 py-2 rounded-full text-sm">✓ Garantie incluse</div>
          </div>
        </div>
      </div>
    </div>
  );
}