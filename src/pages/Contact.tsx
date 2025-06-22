
import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Créer le message WhatsApp
    const whatsappMessage = `
Nouveau contact depuis le site web:
- Nom: ${formData.name}
- Email: ${formData.email}
- Téléphone: ${formData.phone}
- Sujet: ${formData.subject}
- Message: ${formData.message}
    `.trim();

    const whatsappUrl = `https://wa.me/237600000000?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank');

    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Téléphone',
      details: ['+237 693 427 529', '+237 693 595 356'],
      color: 'text-green-500'
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['fobadeffo@gmail.com', 'jacobbrayan@gmail.com'],
      color: 'text-blue-500'
    },
    {
      icon: MapPin,
      title: 'Adresse',
      details: ['Marché Central, Douala', 'Bonanjo, Face Pharmacie du Peuple'],
      color: 'text-red-500'
    },
    {
      icon: Clock,
      title: 'Horaires',
      details: ['Lun-Sam: 8h00 - 18h00', 'Dim: 9h00 - 16h00'],
      color: 'text-orange-500'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-playfair font-bold text-afrochic-indigo mb-4">
            Contactez-Nous
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Nous sommes là pour répondre à toutes vos questions et vous accompagner 
            dans le choix de vos tissus africains.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
              <h2 className="text-xl font-semibold text-afrochic-indigo mb-6">
                Informations de Contact
              </h2>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={info.title} className="flex items-start space-x-4">
                    <div className={`p-2 rounded-lg bg-gray-100 ${info.color}`}>
                      <info.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-1">
                        {info.title}
                      </h3>
                      {info.details.map((detail, i) => (
                        <p key={i} className="text-gray-600 text-sm">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* WhatsApp CTA */}
            <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-2xl shadow-lg p-6 text-white text-center">
              <h3 className="text-lg font-semibold mb-3">
                Commande Rapide
              </h3>
              <p className="text-green-100 text-sm mb-4">
                Contactez-nous directement sur WhatsApp pour une réponse immédiate !
              </p>
              <a
                href="https://wa.me/237693427529"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors"
              >
                <Phone className="w-5 h-5" />
                WhatsApp
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-semibold text-afrochic-indigo mb-6">
                Envoyez-nous un Message
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Nom complet *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-afrochic-orange focus:border-transparent transition-colors"
                      placeholder="Votre nom complet"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Téléphone *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-afrochic-orange focus:border-transparent transition-colors"
                      placeholder="+237 6XX XXX XXX"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-afrochic-orange focus:border-transparent transition-colors"
                    placeholder="votre@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Sujet *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-afrochic-orange focus:border-transparent transition-colors"
                  >
                    <option value="">Choisissez un sujet</option>
                    <option value="Commande">Passer une commande</option>
                    <option value="Information">Demande d'information</option>
                    <option value="Livraison">Question sur la livraison</option>
                    <option value="Autre">Autre</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-afrochic-orange focus:border-transparent transition-colors resize-none"
                    placeholder="Décrivez votre demande en détail..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-afrochic-orange hover:bg-afrochic-orange/90 text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center gap-2 transition-colors"
                >
                  <Send className="w-5 h-5" />
                  Envoyer le Message
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-12 bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-afrochic-indigo">
              Notre Localisation
            </h2>
            <p className="text-gray-600 mt-1">
              Marché Central de Douala, Bonanjo
            </p>
          </div>
          <div className="h-96 bg-gray-100 flex items-center justify-center">
            <div className="text-center text-gray-500">
              <MapPin className="w-12 h-12 mx-auto mb-4" />
              <p className="text-lg font-medium">Carte Google Maps</p>
              <p className="text-sm">Intégration disponible avec votre API key</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
