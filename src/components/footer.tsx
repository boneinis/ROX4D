'use client'

import Link from 'next/link'
import { useTheme } from './theme-provider'
import { useReducedMotion } from '../hooks/use-reduced-motion'

export function Footer() {
  const { theme } = useTheme()
  const prefersReducedMotion = useReducedMotion()
  const transitionClass = prefersReducedMotion ? '' : 'transition-colors duration-300'

  return (
    <footer className={`${transitionClass} ${
      theme === 'dark' ? 'bg-black/80 border-gray-800' : 'bg-white/80 border-gray-200'
    } border-t backdrop-blur-md`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <img
              src={theme === 'dark' ? '/rox4d-logo-dark.png' : '/rox4d-logo.png'}
              alt="ROX4D Logo"
              className="h-8 w-auto"
            />
            <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
              Revolutionary dump truck bodies for Class 7 and Class 8 trucks.
            </p>
          </div>

          {/* Products */}
          <div>
            <h3 className={`text-sm font-semibold mb-4 ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              Products
            </h3>
            <ul className="space-y-2">
              <li>
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
                <ul className="mt-2 ml-4 space-y-2">
                  <li>
                    <Link
                      href="/flat-floor/alpha"
                      className={`text-sm ${transitionClass} ${
                        theme === 'dark'
                          ? 'text-gray-400 hover:text-white'
                          : 'text-gray-600 hover:text-gray-900'
                      }`}
                    >
                      Alpha
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/flat-floor/apex"
                      className={`text-sm ${transitionClass} ${
                        theme === 'dark'
                          ? 'text-gray-400 hover:text-white'
                          : 'text-gray-600 hover:text-gray-900'
                      }`}
                    >
                      Apex
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link
                  href="/elliptical"
                  className={`text-sm font-semibold ${transitionClass} ${
                    theme === 'dark'
                      ? 'text-gray-300 hover:text-white'
                      : 'text-gray-700 hover:text-gray-900'
                  }`}
                >
                  Elliptical <span className="text-xs text-orange-500">(Coming Soon)</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className={`text-sm font-semibold mb-4 ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              Legal
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/warranty"
                  className={`text-sm ${transitionClass} ${
                    theme === 'dark'
                      ? 'text-gray-400 hover:text-white'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  Warranty
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className={`text-sm ${transitionClass} ${
                    theme === 'dark'
                      ? 'text-gray-400 hover:text-white'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={`mt-8 pt-8 border-t ${
          theme === 'dark' ? 'border-gray-800' : 'border-gray-200'
        }`}>
          <p className={`text-sm text-center ${
            theme === 'dark' ? 'text-gray-500' : 'text-gray-600'
          }`}>
            &copy; {new Date().getFullYear()} ROX4D Truck Bodies. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
