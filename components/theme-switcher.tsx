"use client";
import React from 'react'
import { Sun, Moon } from 'lucide-react'
import { useTheme } from '../contexts/theme-context'

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      onClick={toggleTheme}
      className="relative p-2 rounded-xl bg-white/10 dark:bg-gray-800/50 backdrop-blur-md border border-white/20 dark:border-gray-700/50 hover:bg-white/20 dark:hover:bg-gray-700/50 transition-all duration-300 group"
    >
      <div className="relative w-6 h-6">
        <Sun className={`absolute inset-0 h-6 w-6 text-yellow-500 transition-all duration-300 ${
          theme === 'light' ? 'rotate-0 scale-100 opacity-100' : 'rotate-90 scale-0 opacity-0'
        }`} />
        <Moon className={`absolute inset-0 h-6 w-6 text-blue-400 transition-all duration-300 ${
          theme === 'dark' ? 'rotate-0 scale-100 opacity-100' : '-rotate-90 scale-0 opacity-0'
        }`} />
      </div>
      
      {/* Glow effect */}
      <div className={`absolute inset-0 rounded-xl blur-md transition-opacity duration-300 ${
        theme === 'light' 
          ? 'bg-yellow-400/30 group-hover:bg-yellow-400/50' 
          : 'bg-blue-400/30 group-hover:bg-blue-400/50'
      }`}></div>
    </button>
  )
}

export default ThemeSwitcher
