"use client";
import React from 'react'
import { Smile, Shield, MapPin, Headphones } from 'lucide-react'

const WhyChoose = () => {
  const reasons = [
    {
      icon: Smile,
      title: "Interface simple et intuitive",
      description: "Design pensé pour être utilisé facilement par tous, sans formation complexe."
    },
    {
      icon: Shield,
      title: "Sécurité des données",
      description: "Protection maximale des informations sensibles avec des standards de sécurité élevés."
    },
    {
      icon: MapPin,
      title: "Adapté aux réalités locales",
      description: "Solution conçue spécifiquement pour les besoins des écoles africaines."
    },
    {
      icon: Headphones,
      title: "Support rapide et personnalisé",
      description: "Équipe de support dédiée disponible pour vous accompagner à chaque étape."
    }
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 to-white dark:from-gray-900 dark:to-purple-900/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Pourquoi choisir 
            <span className="text-purple-600 dark:text-purple-400"> Edutools</span> ?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Des avantages concrets qui font la différence pour votre établissement
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reasons.map((reason, index) => (
            <div 
              key={index}
              className="group flex items-start gap-6 p-8 bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl rounded-2xl shadow-lg hover:shadow-xl dark:shadow-purple-500/10 hover:dark:shadow-purple-500/20 transition-all duration-300 border border-purple-100 dark:border-gray-700/50 hover:border-purple-200 dark:hover:border-purple-600/50"
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-pink-500/5 dark:from-purple-500/10 dark:to-pink-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
              
              <div className="relative z-10 w-16 h-16 bg-purple-100 dark:bg-purple-900/50 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 border border-purple-200 dark:border-purple-700/50">
                <reason.icon className="h-8 w-8 text-purple-600 dark:text-purple-400" />
              </div>
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {reason.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="relative bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl rounded-3xl p-8 shadow-xl border border-purple-100 dark:border-gray-700/50 max-w-2xl mx-auto">
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 dark:from-purple-500/20 dark:to-pink-500/20 rounded-3xl blur-xl opacity-50"></div>
            
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Prêt à transformer votre école ?
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Rejoignez les établissements qui ont déjà fait le choix de la modernité
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="relative bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-full font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 hover:scale-105">
                  <span className="relative z-10">Devenir partenaire</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur opacity-50"></div>
                </button>
                <button className="border border-purple-600 dark:border-purple-400 text-purple-600 dark:text-purple-400 px-8 py-3 rounded-full font-semibold hover:bg-purple-50 dark:hover:bg-purple-900/30 transition-colors backdrop-blur-sm">
                  Commencer maintenant
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyChoose
