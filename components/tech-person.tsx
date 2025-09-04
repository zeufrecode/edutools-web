"use client";
import React from 'react'
import { Code, Zap, Cpu, Wifi, Database, Shield } from 'lucide-react'

const TechPerson = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-400/20 dark:bg-cyan-400/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-400/20 dark:bg-purple-400/30 rounded-full blur-3xl animate-pulse animation-delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Tech Person Illustration */}
          <div className="relative">
            {/* Main glassmorphism container */}
            <div className="relative bg-white/10 dark:bg-gray-900/20 backdrop-blur-xl border border-white/20 dark:border-gray-700/30 rounded-3xl p-8 shadow-2xl">
              
              {/* Neon glow around container */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 rounded-3xl blur-xl"></div>
              
              <div className="relative">
                {/* Tech Person Avatar */}
                <div className="relative mx-auto w-48 h-48 mb-8">
                  {/* Avatar background with neon effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 via-purple-500 to-pink-500 rounded-full blur-lg opacity-60 animate-pulse"></div>
                  <div className="relative w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 rounded-full border-4 border-white/30 dark:border-gray-700/50 flex items-center justify-center overflow-hidden">
                    
                    {/* Tech person silhouette */}
                    <div className="w-32 h-32 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-full flex items-center justify-center">
                      <Code className="h-16 w-16 text-white" />
                    </div>
                    
                    {/* Floating tech icons around avatar */}
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-cyan-400 rounded-full flex items-center justify-center shadow-lg shadow-cyan-400/50 animate-bounce">
                      <Zap className="h-4 w-4 text-white" />
                    </div>
                    <div className="absolute -bottom-2 -left-2 w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center shadow-lg shadow-purple-500/50 animate-bounce animation-delay-500">
                      <Cpu className="h-4 w-4 text-white" />
                    </div>
                    <div className="absolute top-1/2 -right-4 w-6 h-6 bg-pink-500 rounded-full flex items-center justify-center shadow-lg shadow-pink-500/50 animate-ping">
                      <Wifi className="h-3 w-3 text-white" />
                    </div>
                  </div>
                </div>

                {/* Tech skills indicators */}
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-white/20 dark:bg-gray-800/30 backdrop-blur-sm rounded-xl p-3 border border-white/30 dark:border-gray-700/30 text-center group hover:bg-white/30 dark:hover:bg-gray-700/40 transition-all duration-300">
                    <Database className="h-6 w-6 text-cyan-400 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                    <div className="text-xs font-medium text-gray-700 dark:text-gray-300">Backend</div>
                  </div>
                  <div className="bg-white/20 dark:bg-gray-800/30 backdrop-blur-sm rounded-xl p-3 border border-white/30 dark:border-gray-700/30 text-center group hover:bg-white/30 dark:hover:bg-gray-700/40 transition-all duration-300">
                    <Code className="h-6 w-6 text-purple-400 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                    <div className="text-xs font-medium text-gray-700 dark:text-gray-300">Frontend</div>
                  </div>
                  <div className="bg-white/20 dark:bg-gray-800/30 backdrop-blur-sm rounded-xl p-3 border border-white/30 dark:border-gray-700/30 text-center group hover:bg-white/30 dark:hover:bg-gray-700/40 transition-all duration-300">
                    <Shield className="h-6 w-6 text-pink-400 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                    <div className="text-xs font-medium text-gray-700 dark:text-gray-300">Security</div>
                  </div>
                </div>

                {/* Neon lines decoration */}
                <div className="absolute top-4 left-4 w-16 h-0.5 bg-gradient-to-r from-cyan-400 to-transparent animate-pulse"></div>
                <div className="absolute bottom-4 right-4 w-16 h-0.5 bg-gradient-to-l from-purple-400 to-transparent animate-pulse animation-delay-1000"></div>
                <div className="absolute top-1/2 left-0 w-0.5 h-16 bg-gradient-to-b from-pink-400 to-transparent animate-pulse animation-delay-500"></div>
              </div>
            </div>

            {/* Floating elements around the container */}
            <div className="absolute -top-4 -left-4 w-8 h-8 bg-cyan-400/30 rounded-full blur-sm animate-float"></div>
            <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-purple-400/30 rounded-full blur-sm animate-float animation-delay-1000"></div>
            <div className="absolute top-1/2 -right-8 w-4 h-4 bg-pink-400/30 rounded-full blur-sm animate-ping"></div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/10 to-purple-500/10 dark:from-cyan-500/20 dark:to-purple-500/20 backdrop-blur-sm border border-cyan-500/20 dark:border-cyan-500/30 text-cyan-600 dark:text-cyan-400 mb-6">
                <Zap className="h-4 w-4" />
                <span className="text-sm font-medium">Réalisé par de futurs ingénieurs en informatique</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Une équipe 
                <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent"> tech passionnée</span>
                <br />
                pour l'éducation
              </h2>
              
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
                Notre équipe de jeunes développeurs étudiants travaille avec passion pour imaginer une solution éducative innovante pour l’Afrique. Chaque ligne de code est écrite avec l’objectif de simplifier la vie des écoles.
              </p>
            </div>

            {/* Coming Soon Badge */}
            <div className="relative">
              <div className="bg-gradient-to-r from-orange-500/10 to-red-500/10 dark:from-orange-500/20 dark:to-red-500/20 backdrop-blur-sm border border-orange-500/30 dark:border-orange-500/40 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-3 h-3 bg-orange-500 rounded-full animate-pulse"></div>
                  <span className="text-orange-600 dark:text-orange-400 font-semibold text-lg">Bientôt disponible</span>
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  L'application Edutools est actuellement en développement final. 
                  Nous peaufinons chaque détail pour vous offrir la meilleure expérience possible.
                </p>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  🚀 Lancement prévu : <span className="font-semibold text-purple-600 dark:text-purple-400">en 2026</span>
                </div>
              </div>
              
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-2xl blur-xl opacity-50"></div>
            </div>

            {/* Tech stack preview */}
            
          </div>
        </div>
      </div>
    </section>
  )
}

export default TechPerson
