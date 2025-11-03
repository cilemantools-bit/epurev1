'use client';

import { useState } from 'react';

export default function ContactSection() {
  const [formType, setFormType] = useState<'dossier' | 'portes-ouvertes' | 'rappel'>('dossier');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    date: '',
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
      setFormData({ name: '', email: '', phone: '', message: '', date: '' });
      setSubmitStatus(null);
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="section-padding bg-slate-600-800 text-white">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm font-medium tracking-wider text-emerald-200 uppercase mb-2">
            Contact
          </p>
          <h2 className="text-white mb-6">
            Découvrez ÉPURE
          </h2>
          <p className="text-lg text-slate-600-300 leading-relaxed">
            Demandez le dossier complet, inscrivez-vous aux portes ouvertes ou prenez rendez-vous
            pour une visite privée.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form Selection & Contact Info */}
          <div className="space-y-8">
            {/* Form Type Selector */}
            <div className="bg-slate-600 rounded-sm p-6">
              <h3 className="text-xl font-serif mb-4">Je souhaite...</h3>
              <div className="space-y-3">
                <button
                  onClick={() => setFormType('dossier')}
                  className={`w-full text-left p-4 rounded-sm transition-all duration-200 ${
                    formType === 'dossier'
                      ? 'bg-emerald-700 text-white'
                      : 'bg-white/10 hover:bg-white/20 text-white'
                  }`}
                >
                  <div className="font-medium">Recevoir le dossier complet</div>
                  <div className="text-sm opacity-80 mt-1">Plans, prix et caractéristiques détaillées</div>
                </button>
                <button
                  onClick={() => setFormType('portes-ouvertes')}
                  className={`w-full text-left p-4 rounded-sm transition-all duration-200 ${
                    formType === 'portes-ouvertes'
                      ? 'bg-emerald-700 text-white'
                      : 'bg-white/10 hover:bg-white/20 text-white'
                  }`}
                >
                  <div className="font-medium">M'inscrire aux portes ouvertes</div>
                  <div className="text-sm opacity-80 mt-1">Visitez les villas et rencontrez l'équipe</div>
                </button>
                <button
                  onClick={() => setFormType('rappel')}
                  className={`w-full text-left p-4 rounded-sm transition-all duration-200 ${
                    formType === 'rappel'
                      ? 'bg-emerald-700 text-white'
                      : 'bg-white/10 hover:bg-white/20 text-white'
                  }`}
                >
                  <div className="font-medium">Être rappelé(e)</div>
                  <div className="text-sm opacity-80 mt-1">Un conseiller vous contactera rapidement</div>
                </button>
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              <h3 className="text-xl font-serif">Informations de contact</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <svg className="w-6 h-6 text-emerald-200 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div>
                    <div className="font-medium">Adresse</div>
                    <div className="text-sm text-slate-600-300">Veyrier, Genève</div>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <svg className="w-6 h-6 text-emerald-200 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <div>
                    <div className="font-medium">Email</div>
                    <a href="mailto:contact@ipure.ch" className="text-sm text-emerald-200 hover:text-emerald transition-colors">
                      contact@ipure.ch
                    </a>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <svg className="w-6 h-6 text-emerald-200 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <div>
                    <div className="font-medium">Téléphone</div>
                    <a href="tel:+41223456789" className="text-sm text-emerald-200 hover:text-emerald transition-colors">
                      +41 22 345 67 89
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-sm p-8 text-slate-600-800">
            <h3 className="text-2xl font-serif mb-6">
              {formType === 'dossier' && 'Demander le dossier'}
              {formType === 'portes-ouvertes' && 'Inscription aux portes ouvertes'}
              {formType === 'rappel' && 'Demande de rappel'}
            </h3>

            {submitStatus === 'success' ? (
              <div className="bg-green-100 text-green-800 p-6 rounded-sm text-center">
                <svg className="w-12 h-12 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div className="font-medium">Merci pour votre demande !</div>
                <div className="text-sm mt-2">Nous vous contacterons très prochainement.</div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Nom complet *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-slate-300-300 rounded-sm focus:ring-2 focus:ring-emerald-700 focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-slate-300-300 rounded-sm focus:ring-2 focus:ring-emerald-700 focus:border-transparent"
                  />
                </div>

                {(formType === 'rappel' || formType === 'portes-ouvertes') && (
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">
                      Téléphone *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-slate-300-300 rounded-sm focus:ring-2 focus:ring-emerald-700 focus:border-transparent"
                    />
                  </div>
                )}

                {formType === 'portes-ouvertes' && (
                  <div>
                    <label htmlFor="date" className="block text-sm font-medium mb-2">
                      Date souhaitée
                    </label>
                    <select
                      id="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-slate-300-300 rounded-sm focus:ring-2 focus:ring-emerald-700 focus:border-transparent"
                    >
                      <option value="">Sélectionnez une date</option>
                      <option value="2025-11-15">Samedi 15 novembre 2025 - 10h-17h</option>
                      <option value="2025-11-22">Samedi 22 novembre 2025 - 10h-17h</option>
                      <option value="2025-11-29">Samedi 29 novembre 2025 - 10h-17h</option>
                    </select>
                  </div>
                )}

                {formType === 'rappel' && (
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message (optionnel)
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-3 border border-slate-300-300 rounded-sm focus:ring-2 focus:ring-emerald-700 focus:border-transparent"
                    />
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Envoi en cours...' : 'Envoyer ma demande'}
                </button>

                <p className="text-xs text-slate-600 text-center">
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
