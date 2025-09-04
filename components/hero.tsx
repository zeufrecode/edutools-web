"use client";
import React from 'react'
import { ArrowRight, Play, Sparkles, Zap } from 'lucide-react'

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="accueil" className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative min-h-screen flex items-center">
      {/* Glow Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-400/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-blue-400/20 rounded-full blur-3xl animate-pulse animation-delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-pink-400/25 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center">
          <div className="animate-fade-in-up">
            {/* Floating Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-orange-500/10 to-red-500/10 dark:from-orange-500/20 dark:to-red-500/20 backdrop-blur-md border border-orange-500/30 dark:border-orange-500/40 text-orange-600 dark:text-orange-400 mb-8 shadow-lg shadow-orange-500/25">
              <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium">Application en développement - Lancement 2026</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
                Edutools
              </span>
              <br />
              <span className="text-gray-800 dark:text-gray-200">Réinventez</span>
              <br />
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                la gestion scolaire
              </span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Simple, moderne, adapté aux écoles africaines.
              <br />
              <span className="text-purple-600 dark:text-purple-400 font-semibold">Bientôt disponible - L'avenir de l'éducation commence ici.</span>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <button 
                onClick={scrollToContact}
                className="group relative bg-gradient-to-r from-purple-600 to-pink-600 text-white px-10 py-4 rounded-2xl text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-2xl shadow-purple-500/50 hover:shadow-purple-500/75 flex items-center gap-3"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur opacity-75 group-hover:opacity-100 transition-opacity"></div>
                <span className="relative">Être notifié du lancement</span>
                <ArrowRight className="h-5 w-5 relative group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button className="group relative bg-white/10 backdrop-blur-md border border-white/20 text-purple-700 px-10 py-4 rounded-2xl text-lg font-semibold hover:bg-white/20 transition-all duration-300 flex items-center gap-3 shadow-lg shadow-purple-500/25">
                <Play className="h-5 w-5 group-hover:scale-110 transition-transform" />
                <span>Voir la vidéo</span>
              </button>
            </div>
          </div>

          {/* Glassmorphism Hero Card */}
          <div className="relative max-w-5xl mx-auto animate-fade-in-up animation-delay-300">
            {/* Glow effect behind the card */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 rounded-3xl blur-2xl opacity-30 scale-105"></div>
            
            {/* Main glassmorphism card */}
            <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-2xl shadow-purple-500/25 transform hover:scale-[1.02] transition-all duration-500">
              {/* Inner glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-purple-500/10 rounded-3xl"></div>
              
              <div className="relative">
                {/* Top floating elements */}
                <div className="absolute -top-4 left-8 w-8 h-8 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full blur-sm opacity-60 animate-bounce"></div>
                <div className="absolute -top-2 right-12 w-6 h-6 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full blur-sm opacity-60 animate-bounce animation-delay-500"></div>
                
                {/* Main content area */}
                <div className="bg-gradient-to-br from-purple-50/50 to-blue-50/50 backdrop-blur-sm rounded-2xl h-64 sm:h-80 lg:h-96 flex items-center justify-center relative overflow-hidden">
                  {/* Animated background pattern */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-4 left-4 w-16 h-16 border-2 border-purple-400 rounded-lg rotate-12 animate-spin-slow"></div>
                    <div className="absolute top-8 right-8 w-12 h-12 border-2 border-pink-400 rounded-full animate-pulse"></div>
                    <div className="absolute bottom-8 left-12 w-20 h-20 border-2 border-blue-400 rounded-lg -rotate-12 animate-spin-slow"></div>
                    <div className="absolute bottom-4 right-4 w-8 h-8 border-2 border-purple-400 rounded-full animate-bounce"></div>
                  </div>
                  
                  {/* Center content */}
                  <div className="text-center relative z-10">
                    <div className="relative mb-6">
                      <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto shadow-2xl shadow-purple-500/50 transform rotate-3 hover:rotate-0 transition-transform duration-300">
                        <Play className="h-10 w-10 text-white" />
                      </div>
                      {/* Glow effect around play button */}
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl blur-xl opacity-50 scale-150"></div>
                    </div>
                    
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-700 to-pink-700 bg-clip-text text-transparent mb-2">
                      Interface Edutools
                    </h3>
                    <p className="text-purple-600 font-medium">Découvrez l'expérience utilisateur révolutionnaire</p>
                    
                    {/* Floating stats */}
                    <div className="flex justify-center gap-8 mt-8">
                      <div className="bg-white/20 backdrop-blur-sm rounded-xl px-4 py-2 border border-white/30">
                        <div className="text-2xl font-bold text-purple-700">500+</div>
                        <div className="text-xs text-purple-600">Écoles</div>
                      </div>
                      <div className="bg-white/20 backdrop-blur-sm rounded-xl px-4 py-2 border border-white/30">
                        <div className="text-2xl font-bold text-pink-700">50K+</div>
                        <div className="text-xs text-pink-600">Élèves</div>
                      </div>
                      <div className="bg-white/20 backdrop-blur-sm rounded-xl px-4 py-2 border border-white/30">
                        <div className="text-2xl font-bold text-blue-700">99%</div>
                        <div className="text-xs text-blue-600">Satisfaction</div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Bottom floating elements */}
                <div className="absolute -bottom-2 left-16 w-4 h-4 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full blur-sm opacity-60 animate-ping"></div>
                <div className="absolute -bottom-4 right-20 w-6 h-6 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full blur-sm opacity-60 animate-ping animation-delay-1000"></div>
              </div>
            </div>

            {/* Additional floating elements around the card */}
            <div className="absolute -top-8 -left-8 w-16 h-16 bg-gradient-to-r from-purple-400/30 to-pink-400/30 rounded-full blur-xl animate-float"></div>
            <div className="absolute -top-4 -right-12 w-12 h-12 bg-gradient-to-r from-blue-400/30 to-purple-400/30 rounded-full blur-xl animate-float animation-delay-1000"></div>
            <div className="absolute -bottom-8 -right-8 w-20 h-20 bg-gradient-to-r from-pink-400/30 to-blue-400/30 rounded-full blur-xl animate-float animation-delay-2000"></div>
            <div className="absolute -bottom-4 -left-12 w-14 h-14 bg-gradient-to-r from-purple-400/30 to-blue-400/30 rounded-full blur-xl animate-float animation-delay-500"></div>
          </div>

          {/* Trust indicators */}
          <div className="mt-16 flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="flex items-center gap-2 text-gray-600">
              <Zap className="h-5 w-5 text-purple-500" />
              <span className="text-sm font-medium">Déploiement rapide</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <Sparkles className="h-5 w-5 text-pink-500" />
              <span className="text-sm font-medium">Interface intuitive</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <Play className="h-5 w-5 text-blue-500" />
              <span className="text-sm font-medium">Formation incluse</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
