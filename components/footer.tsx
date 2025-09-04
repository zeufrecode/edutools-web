"use client";
import React from 'react'
import { GraduationCap, Facebook, Instagram, MessageCircle } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-16 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="relative">
                <GraduationCap className="h-8 w-8 text-purple-400" />
                <div className="absolute inset-0 h-8 w-8 text-purple-400 blur-sm opacity-50"></div>
              </div>
              <span className="text-xl font-bold">Edutools</span>
            </div>
            <p className="text-gray-400 dark:text-gray-500 mb-6 max-w-md">
              La solution moderne pour la gestion scolaire en Afrique. 
              Développée par Bekawave Solution pour transformer l'éducation.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="group relative w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center hover:bg-purple-700 transition-all duration-300 hover:scale-110">
                <Facebook className="h-5 w-5" />
                <div className="absolute inset-0 bg-purple-600 rounded-full blur opacity-50 group-hover:opacity-75"></div>
              </a>
              <a href="#" className="group relative w-10 h-10 bg-green-600 rounded-full flex items-center justify-center hover:bg-green-700 transition-all duration-300 hover:scale-110">
                <MessageCircle className="h-5 w-5" />
                <div className="absolute inset-0 bg-green-600 rounded-full blur opacity-50 group-hover:opacity-75"></div>
              </a>
              <a href="#" className="group relative w-10 h-10 bg-pink-600 rounded-full flex items-center justify-center hover:bg-pink-700 transition-all duration-300 hover:scale-110">
                <Instagram className="h-5 w-5" />
                <div className="absolute inset-0 bg-pink-600 rounded-full blur opacity-50 group-hover:opacity-75"></div>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Liens rapides</h3>
            <ul className="space-y-2">
              <li><a href="#accueil" className="text-gray-400 dark:text-gray-500 hover:text-white dark:hover:text-gray-300 transition-colors">Accueil</a></li>
              <li><a href="#fonctionnalites" className="text-gray-400 dark:text-gray-500 hover:text-white dark:hover:text-gray-300 transition-colors">Fonctionnalités</a></li>
              <li><a href="#apropos" className="text-gray-400 dark:text-gray-500 hover:text-white dark:hover:text-gray-300 transition-colors">À propos</a></li>
              <li><a href="#contact" className="text-gray-400 dark:text-gray-500 hover:text-white dark:hover:text-gray-300 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Légal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 dark:text-gray-500 hover:text-white dark:hover:text-gray-300 transition-colors">Politique de confidentialité</a></li>
              <li><a href="#" className="text-gray-400 dark:text-gray-500 hover:text-white dark:hover:text-gray-300 transition-colors">Conditions d'utilisation</a></li>
              <li><a href="#" className="text-gray-400 dark:text-gray-500 hover:text-white dark:hover:text-gray-300 transition-colors">Support</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 dark:border-gray-700 mt-12 pt-8 text-center">
          <p className="text-gray-400 dark:text-gray-500">
            © 2025 Bekawave Solution – Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
