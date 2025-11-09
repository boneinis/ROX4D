'use client'

import Link from 'next/link'
import { useTheme } from './theme-provider'
import { ThemeToggle } from './theme-toggle'
import { useReducedMotion } from '../hooks/use-reduced-motion'

export function Header() {
  const { theme } = useTheme()
  const prefersReducedMotion = useReducedMotion()
  const transitionClass = prefersReducedMotion ? '' : 'transition-colors duration-300'

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 ${transitionClass} ${
      theme === 'dark' ? 'bg-black/80' : 'bg-white/80'
    } backdrop-blur-md border-b ${
      theme === 'dark' ? 'border-gray-800' : 'border-gray-200'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href="/" className="flex items-center">
            <img
              src={theme === 'dark' ? '/rox4d-logo-dark.png' : '/rox4d-logo.png'}
              alt="ROX4D Logo"
              className="h-8 md:h-12 w-auto"
            />
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <div className="relative group">
              <Link
                href="/flat-floor"
                className={`text-sm font-semibold ${transitionClass} ${
                  theme === 'dark'
                    ? 'text-gray-300 hover:text-white'
                    : 'text-gray-700 hover:text-gray-900'
                }`}
              >
                Flat Floor
              </Link>
              <div className={`absolute left-0 mt-2 w-48 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 ${
                theme === 'dark' ? 'bg-gray-800' : 'bg-white'
              } border ${theme === 'dark' ? 'border-gray-700' : 'border-gray-200'}`}>
                <div className="py-2">
                  <Link
                    href="/flat-floor/alpha"
                    className={`block px-4 py-2 text-sm ${transitionClass} ${
                      theme === 'dark'
                        ? 'text-gray-300 hover:bg-gray-700 hover:text-white'
                        : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                    }`}
                  >
                    Alpha
                  </Link>
                  <Link
                    href="/flat-floor/apex"
                    className={`block px-4 py-2 text-sm ${transitionClass} ${
                      theme === 'dark'
                        ? 'text-gray-300 hover:bg-gray-700 hover:text-white'
                        : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                    }`}
                  >
                    Apex
                  </Link>
                </div>
              </div>
            </div>
            <Link
              href="/elliptical"
              className={`text-sm font-semibold ${transitionClass} ${
                theme === 'dark'
                  ? 'text-gray-300 hover:text-white'
                  : 'text-gray-700 hover:text-gray-900'
              }`}
            >
              Elliptical
            </Link>
          </nav>

          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}
