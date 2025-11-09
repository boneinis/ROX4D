'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useTheme } from '../components/theme-provider'
import { EmailCaptureModal } from '../components/email-capture-modal'
import { useReducedMotion } from '../hooks/use-reduced-motion'

export default function Home() {
  const { theme } = useTheme()
  const [modalOpen, setModalOpen] = useState(false)
  const [modalType, setModalType] = useState<'notify' | 'learn'>('notify')
  const prefersReducedMotion = useReducedMotion()

  const transitionClass = prefersReducedMotion ? '' : 'transition-colors duration-300'
  
  return (
    <>
      <main className={`min-h-screen ${transitionClass} ${
        theme === 'dark'
          ? 'bg-gradient-to-br from-black via-gray-900 to-gray-800'
          : 'bg-gradient-to-br from-white via-gray-50 to-gray-100'
      }`}>
        <div className="w-full px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="flex flex-col items-center justify-center text-center space-y-12 max-w-6xl mx-auto w-full">
          <div className="flex items-center justify-center">
            <img
              src={theme === 'dark' ? '/rox4d-logo-dark.png' : '/rox4d-logo.png'}
              alt="ROX4D Truck Bodies Logo"
              className="w-full max-w-md md:max-w-xl lg:max-w-2xl h-auto"
            />
          </div>

          <div className="w-full space-y-8">
            <h2 className={`text-3xl md:text-5xl font-bold ${transitionClass} ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`} style={{lineHeight: '1.2', marginBottom: '0.5em'}}>
              Choose Your Dump Body Design
              <span className="block text-blue-600 mt-2">Engineered for Excellence</span>
            </h2>

            <p className={`text-lg md:text-xl ${transitionClass} ${
              theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
            }`} style={{lineHeight: '1.7'}}>
              Revolutionary dump truck bodies designed for Class 7 and Class 8 trucks.
              Built with advanced materials and engineering excellence to deliver{' '}
              <span className={`font-semibold ${theme === 'dark' ? 'text-blue-400' : 'text-blue-600'}`}>15% stronger performance</span>{' '}while being{' '}
              <span className={`font-semibold ${theme === 'dark' ? 'text-green-400' : 'text-green-600'}`}>2,100-2,500 lbs lighter than competitors</span>.
            </p>
          </div>

          {/* Product Options */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 w-full">
            {/* Flat Floor Option */}
            <Link
              href="/flat-floor"
              className={`group backdrop-blur-sm rounded-2xl p-10 ${transitionClass} ${
                theme === 'dark'
                  ? 'bg-white/5 border-2 border-gray-700 hover:border-blue-500 shadow-xl hover:shadow-2xl hover:shadow-blue-500/30'
                  : 'bg-white/80 border-2 border-gray-200 hover:border-blue-500 shadow-xl hover:shadow-2xl hover:shadow-blue-500/20'
              } transition-all duration-300 hover:scale-[1.03] cursor-pointer`}
            >
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className={`text-3xl font-black ${transitionClass} ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>Flat Floor</h3>
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${transitionClass} ${
                    theme === 'dark' ? 'bg-blue-500/20 group-hover:bg-blue-500/30' : 'bg-blue-100 group-hover:bg-blue-200'
                  }`}>
                    <svg className={`w-6 h-6 transform group-hover:translate-x-1 transition-transform ${
                      theme === 'dark' ? 'text-blue-400' : 'text-blue-600'
                    }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>

                <div className={`w-20 h-20 rounded-2xl flex items-center justify-center ${transitionClass} ${
                  theme === 'dark' ? 'bg-gradient-to-br from-blue-600/30 to-blue-600/10' : 'bg-gradient-to-br from-blue-100 to-blue-50'
                } ring-2 ${theme === 'dark' ? 'ring-blue-500/20' : 'ring-blue-200'}`}>
                  <svg className={`w-10 h-10 ${transitionClass} ${
                    theme === 'dark' ? 'text-blue-400' : 'text-blue-600'
                  }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7h16M4 12h16M4 17h16" />
                  </svg>
                </div>

                <p className={`text-base leading-relaxed ${transitionClass} ${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  Maximum payload capacity with a completely flat interior surface. Perfect for materials requiring level loading and easy cleanup.
                </p>

                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
                      theme === 'dark' ? 'bg-green-500/20' : 'bg-green-100'
                    }`}>
                      <svg className={`w-4 h-4 ${theme === 'dark' ? 'text-green-400' : 'text-green-600'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className={`text-sm font-semibold ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>Level loading surface</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
                      theme === 'dark' ? 'bg-green-500/20' : 'bg-green-100'
                    }`}>
                      <svg className={`w-4 h-4 ${theme === 'dark' ? 'text-green-400' : 'text-green-600'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className={`text-sm font-semibold ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>Easy to clean</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
                      theme === 'dark' ? 'bg-green-500/20' : 'bg-green-100'
                    }`}>
                      <svg className={`w-4 h-4 ${theme === 'dark' ? 'text-green-400' : 'text-green-600'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className={`text-sm font-semibold ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>Higher capacity</span>
                  </div>
                </div>

                <div className={`pt-6 mt-2 border-t ${theme === 'dark' ? 'border-gray-700' : 'border-gray-200'}`}>
                  <div className="flex items-center justify-center gap-2">
                    <span className={`text-base font-bold ${theme === 'dark' ? 'text-blue-400' : 'text-blue-600'} group-hover:underline`}>
                      Explore Models
                    </span>
                    <svg className={`w-5 h-5 transform group-hover:translate-x-1 transition-transform ${
                      theme === 'dark' ? 'text-blue-400' : 'text-blue-600'
                    }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>

            {/* Elliptical Option with Coming Soon Banner */}
            <Link
              href="/elliptical"
              className={`relative group backdrop-blur-sm rounded-2xl p-10 ${transitionClass} ${
                theme === 'dark'
                  ? 'bg-white/5 border-2 border-gray-700 hover:border-orange-500 shadow-xl hover:shadow-2xl hover:shadow-orange-500/30'
                  : 'bg-white/80 border-2 border-gray-200 hover:border-orange-500 shadow-xl hover:shadow-2xl hover:shadow-orange-500/20'
              } overflow-hidden transition-all duration-300 hover:scale-[1.03] cursor-pointer`}
            >
              {/* Coming Soon Banner */}
              <div className="absolute top-8 -right-12 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-16 py-2 transform rotate-45 shadow-xl z-10">
                <span className="text-sm font-bold tracking-wide">COMING SOON</span>
              </div>

              <div className="relative z-0 space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className={`text-3xl font-black ${transitionClass} ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>Elliptical</h3>
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${transitionClass} ${
                    theme === 'dark' ? 'bg-orange-500/20 group-hover:bg-orange-500/30' : 'bg-orange-100 group-hover:bg-orange-200'
                  }`}>
                    <svg className={`w-6 h-6 transform group-hover:translate-x-1 transition-transform ${
                      theme === 'dark' ? 'text-orange-400' : 'text-orange-600'
                    }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>

                <div className={`w-20 h-20 rounded-2xl flex items-center justify-center ${transitionClass} ${
                  theme === 'dark' ? 'bg-gradient-to-br from-orange-600/30 to-orange-600/10' : 'bg-gradient-to-br from-orange-100 to-orange-50'
                } ring-2 ${theme === 'dark' ? 'ring-orange-500/20' : 'ring-orange-200'}`}>
                  <svg className={`w-10 h-10 ${transitionClass} ${
                    theme === 'dark' ? 'text-orange-400' : 'text-orange-600'
                  }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>

                <p className={`text-base leading-relaxed ${transitionClass} ${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  Innovative elliptical cross-section design optimized for superior material flow and structural integrity.
                </p>

                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
                      theme === 'dark' ? 'bg-green-500/20' : 'bg-green-100'
                    }`}>
                      <svg className={`w-4 h-4 ${theme === 'dark' ? 'text-green-400' : 'text-green-600'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className={`text-sm font-semibold ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>Innovative design</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
                      theme === 'dark' ? 'bg-green-500/20' : 'bg-green-100'
                    }`}>
                      <svg className={`w-4 h-4 ${theme === 'dark' ? 'text-green-400' : 'text-green-600'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className={`text-sm font-semibold ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>Better material flow</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
                      theme === 'dark' ? 'bg-green-500/20' : 'bg-green-100'
                    }`}>
                      <svg className={`w-4 h-4 ${theme === 'dark' ? 'text-green-400' : 'text-green-600'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className={`text-sm font-semibold ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>Structural integrity</span>
                  </div>
                </div>

                <div className={`pt-6 mt-2 border-t ${theme === 'dark' ? 'border-gray-700' : 'border-gray-200'}`}>
                  <div className="flex items-center justify-center gap-2">
                    <span className={`text-base font-bold ${theme === 'dark' ? 'text-orange-400' : 'text-orange-600'} group-hover:underline`}>
                      Learn More
                    </span>
                    <svg className={`w-5 h-5 transform group-hover:translate-x-1 transition-transform ${
                      theme === 'dark' ? 'text-orange-400' : 'text-orange-600'
                    }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          </div>

          {/* Performance Comparison Charts */}
          <div className="w-full space-y-12 max-w-screen-xl mx-auto">
            <div className="text-center space-y-6">
              <div className="flex items-center justify-center gap-4">
                <div className={`h-1 w-16 md:w-24 ${theme === 'dark' ? 'bg-gradient-to-r from-transparent to-blue-500' : 'bg-gradient-to-r from-transparent to-blue-600'}`}></div>
                <h3 className={`text-3xl md:text-4xl font-black tracking-tight ${transitionClass} ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>
                  Performance Comparison
                </h3>
                <div className={`h-1 w-16 md:w-24 ${theme === 'dark' ? 'bg-gradient-to-l from-transparent to-blue-500' : 'bg-gradient-to-l from-transparent to-blue-600'}`}></div>
              </div>
              <p className={`text-lg md:text-xl max-w-3xl mx-auto ${transitionClass} ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
              }`}>
                ROX4D vs Competitors Light Weight Steel Bodies
              </p>
              <p className={`text-base ${transitionClass} ${
                theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
              }`}>
                See how our advanced engineering delivers superior performance
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
              {/* Weight Comparison */}
              <div className={`group backdrop-blur-sm rounded-2xl p-8 ${transitionClass} ${
                theme === 'dark'
                  ? 'bg-white/5 border-2 border-gray-700 hover:border-blue-500 shadow-lg hover:shadow-2xl hover:shadow-blue-500/20'
                  : 'bg-white/80 border-2 border-gray-200 hover:border-blue-500 shadow-lg hover:shadow-2xl hover:shadow-blue-500/10'
              } transition-all duration-300 hover:scale-[1.02]`}>
                <div className="flex items-center justify-center gap-3 mb-8">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                    theme === 'dark' ? 'bg-blue-500/20' : 'bg-blue-100'
                  }`}>
                    <svg className={`w-6 h-6 ${theme === 'dark' ? 'text-blue-400' : 'text-blue-600'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                    </svg>
                  </div>
                  <h4 className={`text-xl font-bold ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>Weight Comparison</h4>
                </div>
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between mb-3">
                      <span className={`text-sm font-semibold ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>Competitor A</span>
                      <span className={`text-base font-bold ${theme === 'dark' ? 'text-red-400' : 'text-red-600'}`}>7,000 lbs</span>
                    </div>
                    <div className={`w-full rounded-full h-5 ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-200'}`}>
                      <div className="bg-gradient-to-r from-red-600 to-red-500 h-5 rounded-full shadow-md" style={{width: '100%'}}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-3">
                      <span className={`text-sm font-semibold ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>Competitor B</span>
                      <span className={`text-base font-bold ${theme === 'dark' ? 'text-yellow-400' : 'text-yellow-600'}`}>6,600 lbs</span>
                    </div>
                    <div className={`w-full rounded-full h-5 ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-200'}`}>
                      <div className="bg-gradient-to-r from-yellow-600 to-yellow-500 h-5 rounded-full shadow-md" style={{width: '94%'}}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-3">
                      <span className={`text-base font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>ROX4D</span>
                      <span className={`text-base font-bold ${theme === 'dark' ? 'text-green-400' : 'text-green-600'}`}>4,500 lbs</span>
                    </div>
                    <div className={`w-full rounded-full h-5 ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-200'}`}>
                      <div className={`bg-gradient-to-r from-green-600 to-green-500 h-5 rounded-full shadow-lg ${
                        theme === 'dark' ? 'shadow-green-500/50' : 'shadow-green-500/30'
                      }`} style={{width: '64%'}}></div>
                    </div>
                  </div>
                </div>
                <div className={`mt-6 pt-6 border-t ${theme === 'dark' ? 'border-gray-700' : 'border-gray-200'} space-y-3`}>
                  <div className={`flex items-center justify-center gap-2 ${theme === 'dark' ? 'text-green-400' : 'text-green-600'}`}>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <p className="text-sm font-bold">
                      Up to 2,500 lbs lighter
                    </p>
                  </div>
                  <p className={`text-xs text-center ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                    More payload capacity means more revenue per trip
                  </p>
                  <div className={`pt-2 space-y-1`}>
                    <p className={`text-xs text-center ${theme === 'dark' ? 'text-gray-500' : 'text-gray-600'} italic`}>
                      *Based on 21' body with air high lift
                    </p>
                    <p className={`text-xs text-center ${theme === 'dark' ? 'text-gray-500' : 'text-gray-600'} italic`}>
                      *Weight savings may vary based on options
                    </p>
                  </div>
                </div>
              </div>

              {/* Impact Resistance */}
              <div className={`group backdrop-blur-sm rounded-2xl p-8 ${transitionClass} ${
                theme === 'dark'
                  ? 'bg-white/5 border-2 border-gray-700 hover:border-orange-500 shadow-lg hover:shadow-2xl hover:shadow-orange-500/20'
                  : 'bg-white/80 border-2 border-gray-200 hover:border-orange-500 shadow-lg hover:shadow-2xl hover:shadow-orange-500/10'
              } transition-all duration-300 hover:scale-[1.02]`}>
                <div className="flex items-center justify-center gap-3 mb-8">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                    theme === 'dark' ? 'bg-orange-500/20' : 'bg-orange-100'
                  }`}>
                    <svg className={`w-6 h-6 ${theme === 'dark' ? 'text-orange-400' : 'text-orange-600'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h4 className={`text-xl font-bold ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>Impact Resistance</h4>
                </div>
                <div className="space-y-6">
                  <div>
                    <div className="mb-3">
                      <span className={`text-sm font-semibold ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>Competitor A</span>
                    </div>
                    <div className={`w-full rounded-full h-5 ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-200'}`}>
                      <div className="bg-gradient-to-r from-yellow-600 to-yellow-500 h-5 rounded-full shadow-md" style={{width: '85%'}}></div>
                    </div>
                  </div>
                  <div>
                    <div className="mb-3">
                      <span className={`text-sm font-semibold ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>Competitor B</span>
                    </div>
                    <div className={`w-full rounded-full h-5 ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-200'}`}>
                      <div className="bg-gradient-to-r from-orange-600 to-orange-500 h-5 rounded-full shadow-md" style={{width: '70%'}}></div>
                    </div>
                  </div>
                  <div>
                    <div className="mb-3">
                      <span className={`text-base font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>ROX4D</span>
                    </div>
                    <div className={`w-full rounded-full h-5 ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-200'}`}>
                      <div className={`bg-gradient-to-r from-green-600 to-green-500 h-5 rounded-full shadow-lg ${
                        theme === 'dark' ? 'shadow-green-500/50' : 'shadow-green-500/30'
                      }`} style={{width: '100%'}}></div>
                    </div>
                  </div>
                </div>
                <div className={`mt-6 pt-6 border-t ${theme === 'dark' ? 'border-gray-700' : 'border-gray-200'} space-y-3`}>
                  <div className={`flex items-center justify-center gap-2 ${theme === 'dark' ? 'text-green-400' : 'text-green-600'}`}>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <p className="text-sm font-bold">
                      Superior impact resistance
                    </p>
                  </div>
                  <p className={`text-xs text-center ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                    Advanced materials withstand daily wear and abuse
                  </p>
                  <p className={`text-xs text-center pt-2 ${theme === 'dark' ? 'text-gray-500' : 'text-gray-600'}`}>
                    Longer service life with less downtime for repairs
                  </p>
                </div>
              </div>

              {/* Structural Strength */}
              <div className={`group backdrop-blur-sm rounded-2xl p-8 ${transitionClass} ${
                theme === 'dark'
                  ? 'bg-white/5 border-2 border-gray-700 hover:border-purple-500 shadow-lg hover:shadow-2xl hover:shadow-purple-500/20'
                  : 'bg-white/80 border-2 border-gray-200 hover:border-purple-500 shadow-lg hover:shadow-2xl hover:shadow-purple-500/10'
              } transition-all duration-300 hover:scale-[1.02]`}>
                <div className="flex items-center justify-center gap-3 mb-8">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                    theme === 'dark' ? 'bg-purple-500/20' : 'bg-purple-100'
                  }`}>
                    <svg className={`w-6 h-6 ${theme === 'dark' ? 'text-purple-400' : 'text-purple-600'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                  </div>
                  <h4 className={`text-xl font-bold ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>Structural Strength</h4>
                </div>
                <div className="space-y-6">
                  <div>
                    <div className="mb-3">
                      <span className={`text-sm font-semibold ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>Competitor A</span>
                    </div>
                    <div className={`w-full rounded-full h-5 ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-200'}`}>
                      <div className="bg-gradient-to-r from-yellow-600 to-yellow-500 h-5 rounded-full shadow-md" style={{width: '87%'}}></div>
                    </div>
                  </div>
                  <div>
                    <div className="mb-3">
                      <span className={`text-sm font-semibold ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>Competitor B</span>
                    </div>
                    <div className={`w-full rounded-full h-5 ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-200'}`}>
                      <div className="bg-gradient-to-r from-orange-600 to-orange-500 h-5 rounded-full shadow-md" style={{width: '65%'}}></div>
                    </div>
                  </div>
                  <div>
                    <div className="mb-3">
                      <span className={`text-base font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>ROX4D</span>
                    </div>
                    <div className={`w-full rounded-full h-5 ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-200'}`}>
                      <div className={`bg-gradient-to-r from-green-600 to-green-500 h-5 rounded-full shadow-lg ${
                        theme === 'dark' ? 'shadow-green-500/50' : 'shadow-green-500/30'
                      }`} style={{width: '100%'}}></div>
                    </div>
                  </div>
                </div>
                <div className={`mt-6 pt-6 border-t ${theme === 'dark' ? 'border-gray-700' : 'border-gray-200'} space-y-3`}>
                  <div className={`flex items-center justify-center gap-2 ${theme === 'dark' ? 'text-green-400' : 'text-green-600'}`}>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <p className="text-sm font-bold">
                      15% stronger than competitors
                    </p>
                  </div>
                  <p className={`text-xs text-center ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                    Engineered for maximum durability and performance
                  </p>
                  <p className={`text-xs text-center pt-2 ${theme === 'dark' ? 'text-gray-500' : 'text-gray-600'}`}>
                    Handle heavier loads with confidence
                  </p>
                </div>
              </div>

              {/* Lifetime Earnings Increase */}
              <div className={`group backdrop-blur-sm rounded-2xl p-8 ${transitionClass} ${
                theme === 'dark'
                  ? 'bg-white/5 border-2 border-gray-700 hover:border-green-500 shadow-lg hover:shadow-2xl hover:shadow-green-500/20'
                  : 'bg-white/80 border-2 border-gray-200 hover:border-green-500 shadow-lg hover:shadow-2xl hover:shadow-green-500/10'
              } transition-all duration-300 hover:scale-[1.02]`}>
                <div className="flex items-center justify-center gap-3 mb-8">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                    theme === 'dark' ? 'bg-green-500/20' : 'bg-green-100'
                  }`}>
                    <svg className={`w-6 h-6 ${theme === 'dark' ? 'text-green-400' : 'text-green-600'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h4 className={`text-xl font-bold ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>Lifetime Earnings Increase</h4>
                </div>
                <div className="space-y-4">
                  <div className={`text-center p-4 rounded-xl ${
                    theme === 'dark' ? 'bg-blue-500/10' : 'bg-blue-50'
                  }`}>
                    <p className={`text-xs mb-2 font-semibold ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>Additional Payload per Load</p>
                    <p className={`text-3xl font-black ${theme === 'dark' ? 'text-blue-400' : 'text-blue-600'}`}>2,000 lbs</p>
                  </div>
                  <div className={`text-center p-4 rounded-xl ${
                    theme === 'dark' ? 'bg-green-500/10' : 'bg-green-50'
                  }`}>
                    <p className={`text-xs mb-1 font-semibold ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>Earning Capacity <span className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>(Per hour)</span></p>
                    <p className={`text-3xl font-black ${theme === 'dark' ? 'text-green-400' : 'text-green-600'}`}>$18/hr</p>
                  </div>
                  <div className={`text-center p-4 rounded-xl ${
                    theme === 'dark' ? 'bg-green-500/10 border-2 border-green-500/30' : 'bg-green-50 border-2 border-green-200'
                  }`}>
                    <p className={`text-xs mb-1 font-semibold ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>Annual Revenue <span className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>(2,000 hrs/year)</span></p>
                    <p className={`text-4xl font-black ${theme === 'dark' ? 'text-green-400' : 'text-green-600'}`}>$36,000</p>
                  </div>
                </div>
                <div className={`mt-6 pt-6 border-t ${theme === 'dark' ? 'border-gray-700' : 'border-gray-200'}`}>
                  <p className={`text-sm text-center font-bold ${theme === 'dark' ? 'text-green-400' : 'text-green-600'}`}>
                    Increased payload = increased profitability
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <p className={`text-lg ${transitionClass} ${
              theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
            }`} style={{lineHeight: '1.6'}}>
              Ready to revolutionize your fleet?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => {
                  setModalType('notify')
                  setModalOpen(true)
                }}
                className={`px-8 py-3 font-semibold rounded-lg transition-colors duration-200 ${
                  theme === 'dark'
                    ? 'bg-orange-500 hover:bg-orange-600 text-white'
                    : 'bg-orange-500 hover:bg-orange-600 text-white'
                }`}
              >
                Get Notified
              </button>
              <button
                onClick={() => {
                  setModalType('learn')
                  setModalOpen(true)
                }}
                className={`px-8 py-3 border font-semibold rounded-lg transition-colors duration-200 ${
                  theme === 'dark'
                    ? 'border-blue-500 hover:border-blue-400 text-blue-400 hover:text-blue-300'
                    : 'border-blue-500 hover:border-blue-600 text-blue-600 hover:text-blue-700'
                }`}
              >
                Learn More
              </button>
            </div>
          </div>

          <div className={`pt-8 border-t ${transitionClass} ${
            theme === 'dark' ? 'border-gray-700/50' : 'border-gray-300/50'
          }`}>
            <p className={`text-sm ${transitionClass} ${
              theme === 'dark' ? 'text-gray-500' : 'text-gray-600'
            }`}>
              Class 7 & Class 8 Heavy-Duty Truck Bodies | Built for Performance
            </p>
          </div>
        </div>
      </div>
    </main>
    <EmailCaptureModal
      isOpen={modalOpen}
      onClose={() => setModalOpen(false)}
      type={modalType}
    />
    </>
  );
}
