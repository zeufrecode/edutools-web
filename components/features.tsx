"use client";
import React from 'react'
import { Users, CreditCard, BookOpen, Calendar, Smartphone, Wifi, WifiOff, MessageCircle } from 'lucide-react'

const Features = () => {
  const features = [
    {
      icon: Users,
      title: "Gestion complète de l'école",
      description: "Gérez facilement vos élèves, enseignants, emplois du temps et toutes les données scolaires en un seul endroit.",
      color: "bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400"
    },
    {
      icon: CreditCard,
      title: "Portail dédié aux parents",
      description: "Suivi en temps réel, paiements sécurisés, communication directe avec l'école et accès aux notes.",
      color: "bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400"
    },
    {
      icon: BookOpen,
      title: "Cours en ligne accessibles",
      description: "Plateforme d'apprentissage intégrée permettant aux élèves d'accéder aux cours à distance.",
      color: "bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400"
    },
    {
      icon: Calendar,
      title: "Application adaptable",
      description: "Solution flexible qui s'adapte aux besoins spécifiques de chaque établissement scolaire.",
      color: "bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400"
    },
    {
      icon: Smartphone,
      title: "Interface mobile optimisée",
      description: "Application mobile native pour un accès facile depuis n'importe quel appareil.",
      color: "bg-pink-100 dark:bg-pink-900/30 text-pink-600 dark:text-pink-400"
    },
    {
      icon: WifiOff,
      title: "Utilisation hors ligne",
      description: "Fonctionnalités essentielles accessibles même sans connexion internet pour les parents.",
      color: "bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400"
    }
  ]

  return (
    <section id="fonctionnalites" className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Fonctionnalités
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Une solution complète pour moderniser la gestion de votre établissement scolaire
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="relative group bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl rounded-2xl p-8 shadow-lg hover:shadow-xl dark:shadow-purple-500/10 hover:dark:shadow-purple-500/20 transition-all duration-300 transform hover:-translate-y-2 border border-purple-100 dark:border-gray-700/50"
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 dark:from-purple-500/20 dark:to-pink-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
              
              <div className="relative z-10">
                <div className={`w-16 h-16 rounded-2xl ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
