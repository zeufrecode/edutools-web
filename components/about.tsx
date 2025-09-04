"use client";
import React from 'react'
import { Target, Heart, Zap, Globe } from 'lucide-react'

const About = () => {
  return (
    <section id="apropos" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50/50 to-blue-50/50 dark:from-gray-900/50 dark:to-purple-900/50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              À propos de 
              <span className="text-purple-600 dark:text-purple-400"> Bekawave Solution</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              Bekawave Solution est une jeune startup technologique africaine portée par de futurs ingénieurs passionnés. Nous développons des solutions numériques pour l’éducation avec une mission claire : rendre accessibles les outils modernes de gestion scolaire et transformer l’expérience éducative en Afrique. »
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/50 rounded-xl flex items-center justify-center flex-shrink-0 backdrop-blur-sm border border-purple-200 dark:border-purple-700/50">
                  <Target className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Notre Mission</h3>
                  <p className="text-gray-600 dark:text-gray-300">Moderniser l'éducation africaine grâce à des solutions technologiques adaptées aux réalités locales.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/50 rounded-xl flex items-center justify-center flex-shrink-0 backdrop-blur-sm border border-purple-200 dark:border-purple-700/50">
                  <Heart className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Engagement Local</h3>
                  <p className="text-gray-600 dark:text-gray-300">Une équipe africaine qui comprend les défis spécifiques de l'éducation sur le continent.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/50 rounded-xl flex items-center justify-center flex-shrink-0 backdrop-blur-sm border border-purple-200 dark:border-purple-700/50">
                  <Zap className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Innovation</h3>
                  <p className="text-gray-600 dark:text-gray-300">Des solutions créatives et performantes pour répondre aux besoins évolutifs du secteur éducatif.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative bg-gradient-to-br from-purple-400 to-purple-600 dark:from-purple-600 dark:to-purple-800 rounded-3xl p-8 text-white shadow-2xl">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-purple-600 dark:from-purple-600 dark:to-purple-800 rounded-3xl blur-xl opacity-50 scale-105"></div>
              
              <div className="relative z-10 text-center">
                <Globe className="h-16 w-16 mx-auto mb-6 opacity-90" />
                <h3 className="text-2xl font-bold mb-4">Spécialisation Éducation Numérique</h3>
                <p className="text-purple-100 dark:text-purple-200 leading-relaxed">
                  Nous nous concentrons exclusivement sur l'éducation pour offrir des solutions 
                  parfaitement adaptées aux besoins des établissements scolaires africains.
                </p>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-purple-200 dark:bg-purple-800/50 rounded-full opacity-50 blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-purple-300 dark:bg-purple-700/50 rounded-full opacity-50 blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
