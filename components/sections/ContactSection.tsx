'use client';

import { useState } from 'react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setSubmitStatus('success');

    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({ name: '', email: '', phone: '' });
      setSubmitStatus(null);
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="section-padding bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block glass-effect px-4 py-1.5 rounded-full text-sm font-medium text-emerald-300 mb-4">
            Contact
          </div>
          <h2 className="text-white mb-6">
            Découvrez ÉPURE
          </h2>
          <p className="text-lg text-slate-300 leading-relaxed">
            Laissez-nous vos coordonnées et nous vous recontacterons pour vous présenter le projet
            et vous envoyer le dossier complet.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold">Informations de contact</h3>
              <div className="space-y-5">
                <div className="flex items-start space-x-4 hover:translate-x-2 transition-transform">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-lg">Adresse</div>
                    <div className="text-slate-300">Veyrier, Genève</div>
                  </div>
                </div>
                <div className="flex items-start space-x-4 hover:translate-x-2 transition-transform">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-lg">Email</div>
                    <a href="mailto:contact@epure.ch" className="text-emerald-300 hover:text-emerald-200 transition-colors">
                      contact@epure.ch
                    </a>
                  </div>
                </div>
                <div className="flex items-start space-x-4 hover:translate-x-2 transition-transform">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-lg">Téléphone</div>
                    <a href="tel:+41223456789" className="text-emerald-300 hover:text-emerald-200 transition-colors">
                      +41 22 345 67 89
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Info */}
            <div className="glass-effect rounded-2xl p-6 space-y-4">
              <h4 className="font-bold text-lg">Horaires</h4>
              <div className="space-y-2 text-sm text-slate-300">
                <div className="flex justify-between">
                  <span>Lundi - Vendredi</span>
                  <span className="text-white font-medium">9h00 - 18h00</span>
                </div>
                <div className="flex justify-between">
                  <span>Samedi</span>
                  <span className="text-white font-medium">Sur rendez-vous</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass-effect rounded-2xl p-8 text-slate-900">
            <h3 className="text-3xl font-bold mb-2">Demander le dossier</h3>
            <p className="text-slate-600 mb-8">Remplissez ce formulaire et nous vous recontacterons rapidement</p>

            {submitStatus === 'success' ? (
              <div className="bg-emerald-100 text-emerald-800 p-8 rounded-xl text-center">
                <svg className="w-16 h-16 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div className="font-bold text-lg">Merci pour votre demande !</div>
                <div className="text-sm mt-2">Nous vous contacterons très prochainement.</div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold mb-2 text-slate-700">
                    Nom complet *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Jean Dupont"
                    className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all placeholder:text-slate-400"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold mb-2 text-slate-700">
                    Adresse e-mail *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="jean.dupont@email.com"
                    className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all placeholder:text-slate-400"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold mb-2 text-slate-700">
                    Numéro de téléphone *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="+41 22 123 45 67"
                    className="w-full px-4 py-3 border-2 border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all placeholder:text-slate-400"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed text-lg py-4 hover:scale-105 transition-transform"
                >
                  {isSubmitting ? 'Envoi en cours...' : 'Envoyer ma demande'}
                </button>

                <p className="text-xs text-slate-500 text-center">
                  Vos données sont traitées de manière confidentielle et ne seront pas partagées.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
