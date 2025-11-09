'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useTheme } from '../../components/theme-provider'
import { ThemeToggle } from '../../components/theme-toggle'
import { EmailCaptureModal } from '../../components/email-capture-modal'
import { Truck3DViewer } from '../../components/truck-3d-viewer'
import { useReducedMotion } from '../../hooks/use-reduced-motion'

export default function FlatFloorPage() {
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

          {/* Back to Home Link */}
          <div className="w-full flex justify-start -mt-20">
            <Link
              href="/"
              className={`flex items-center gap-2 px-2 py-1 rounded transition-colors duration-200 ${
                theme === 'dark'
                  ? 'text-gray-400 hover:text-white hover:bg-white/5'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-900/5'
              }`}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              <span className="text-sm">Back to Home</span>
            </Link>
          </div>

          {/* Header */}
          <div className="space-y-4">
            <h1 className={`text-5xl md:text-7xl font-black tracking-tight ${transitionClass} ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              FLAT FLOOR
            </h1>
            <div className="flex items-center justify-center gap-3">
              <div className={`h-1 w-12 ${theme === 'dark' ? 'bg-blue-500' : 'bg-blue-600'}`}></div>
              <p className={`text-lg md:text-xl font-semibold tracking-wide uppercase ${transitionClass} ${
                theme === 'dark' ? 'text-blue-400' : 'text-blue-600'
              }`}>
                Dump Bodies
              </p>
              <div className={`h-1 w-12 ${theme === 'dark' ? 'bg-blue-500' : 'bg-blue-600'}`}></div>
            </div>
          </div>

          <div className="w-full space-y-8">
            <h2 className={`text-3xl md:text-5xl font-bold ${transitionClass} ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`} style={{lineHeight: '1.2', marginBottom: '0.5em'}}>
              Maximum Payload Capacity
              <span className="block text-blue-600 mt-2">Flat Floor Innovation</span>
            </h2>

            <p className={`text-lg md:text-xl ${transitionClass} ${
              theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
            }`} style={{lineHeight: '1.7'}}>
              Our flat floor dump bodies are engineered for Class 7 and Class 8 trucks,
              providing maximum payload capacity with a completely flat interior surface.
              Perfect for hauling materials that require level loading and easy cleanup.
            </p>
          </div>

          {/* Feature Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
            <div className={`backdrop-blur-sm rounded-xl p-6 ${transitionClass} ${
              theme === 'dark'
                ? 'bg-white/5 border border-gray-700'
                : 'bg-gray-900/5 border border-gray-300'
            }`}>
              <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${transitionClass} ${
                theme === 'dark' ? 'bg-blue-600/20' : 'bg-blue-100'
              }`}>
                <svg className={`w-6 h-6 ${transitionClass} ${
                  theme === 'dark' ? 'text-blue-400' : 'text-blue-600'
                }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7h16M4 12h16M4 17h16" />
                </svg>
              </div>
              <h3 className={`text-lg font-semibold mb-2 ${transitionClass} ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>Flat Interior</h3>
              <p className={`text-sm ${transitionClass} ${
                theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
              }`}>
                Completely level floor for optimal material distribution and easy cleaning
              </p>
            </div>

            <div className={`backdrop-blur-sm rounded-xl p-6 ${transitionClass} ${
              theme === 'dark'
                ? 'bg-white/5 border border-gray-700'
                : 'bg-gray-900/5 border border-gray-300'
            }`}>
              <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${transitionClass} ${
                theme === 'dark' ? 'bg-green-600/20' : 'bg-green-100'
              }`}>
                <svg className={`w-6 h-6 ${transitionClass} ${
                  theme === 'dark' ? 'text-green-400' : 'text-green-600'
                }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className={`text-lg font-semibold mb-2 ${transitionClass} ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>Higher Capacity</h3>
              <p className={`text-sm ${transitionClass} ${
                theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
              }`}>
                Maximized interior volume for increased payload capacity
              </p>
            </div>

            <div className={`backdrop-blur-sm rounded-xl p-6 ${transitionClass} ${
              theme === 'dark'
                ? 'bg-white/5 border border-gray-700'
                : 'bg-gray-900/5 border border-gray-300'
            }`}>
              <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${transitionClass} ${
                theme === 'dark' ? 'bg-orange-600/20' : 'bg-orange-100'
              }`}>
                <svg className={`w-6 h-6 ${transitionClass} ${
                  theme === 'dark' ? 'text-orange-400' : 'text-orange-600'
                }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className={`text-lg font-semibold mb-2 ${transitionClass} ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>Reinforced Structure</h3>
              <p className={`text-sm ${transitionClass} ${
                theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
              }`}>
                Advanced engineering provides superior strength without added weight
              </p>
            </div>
          </div>

          {/* Key Benefits */}
          <div className={`w-full backdrop-blur-sm rounded-xl p-8 ${transitionClass} ${
            theme === 'dark'
              ? 'bg-white/5 border border-gray-700'
              : 'bg-gray-900/5 border border-gray-300'
          }`}>
            <h3 className={`text-2xl font-bold mb-6 ${transitionClass} ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>Key Benefits</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
              <div className="flex items-start gap-3">
                <svg className={`w-5 h-5 mt-0.5 flex-shrink-0 ${theme === 'dark' ? 'text-green-400' : 'text-green-600'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <p className={`text-sm ${transitionClass} ${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                }`}><span className="font-semibold">15% stronger</span> than traditional designs</p>
              </div>
              <div className="flex items-start gap-3">
                <svg className={`w-5 h-5 mt-0.5 flex-shrink-0 ${theme === 'dark' ? 'text-green-400' : 'text-green-600'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <p className={`text-sm ${transitionClass} ${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                }`}><span className="font-semibold">1,000-2,500 lbs lighter</span> than comparable steel</p>
              </div>
              <div className="flex items-start gap-3">
                <svg className={`w-5 h-5 mt-0.5 flex-shrink-0 ${theme === 'dark' ? 'text-green-400' : 'text-green-600'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <p className={`text-sm ${transitionClass} ${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                }`}>Comparable to or lighter than aluminum bodies</p>
              </div>
              <div className="flex items-start gap-3">
                <svg className={`w-5 h-5 mt-0.5 flex-shrink-0 ${theme === 'dark' ? 'text-green-400' : 'text-green-600'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <p className={`text-sm ${transitionClass} ${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                }`}>Easy to clean flat surface</p>
              </div>
              <div className="flex items-start gap-3">
                <svg className={`w-5 h-5 mt-0.5 flex-shrink-0 ${theme === 'dark' ? 'text-green-400' : 'text-green-600'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <p className={`text-sm ${transitionClass} ${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                }`}>Optimized for maximum payload</p>
              </div>
              <div className="flex items-start gap-3">
                <svg className={`w-5 h-5 mt-0.5 flex-shrink-0 ${theme === 'dark' ? 'text-green-400' : 'text-green-600'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <p className={`text-sm ${transitionClass} ${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                }`}>Advanced material construction</p>
              </div>
              <div className="flex items-start gap-3">
                <svg className={`w-5 h-5 mt-0.5 flex-shrink-0 ${theme === 'dark' ? 'text-green-400' : 'text-green-600'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <p className={`text-sm ${transitionClass} ${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                }`}>Class 7 & Class 8 compatible</p>
              </div>
              <div className="flex items-start gap-3">
                <svg className={`w-5 h-5 mt-0.5 flex-shrink-0 ${theme === 'dark' ? 'text-green-400' : 'text-green-600'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <p className={`text-sm ${transitionClass} ${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                }`}>Continuous sidewall profile from front to rear of bed</p>
              </div>
              <div className="flex items-start gap-3">
                <svg className={`w-5 h-5 mt-0.5 flex-shrink-0 ${theme === 'dark' ? 'text-green-400' : 'text-green-600'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <p className={`text-sm ${transitionClass} ${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                }`}>Tapered design with rear wider than front for easier material release</p>
              </div>
            </div>
          </div>

          {/* Model Selection */}
          <div className="w-full space-y-8">
            <div className="text-center space-y-4">
              <h3 className={`text-2xl md:text-3xl font-bold ${transitionClass} ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
                Choose Your Model
              </h3>
              <p className={`text-base ${transitionClass} ${
                theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
              }`}>
                All models built with Hardox 500 Tuff as standard and Strenx 110XF for longsills
              </p>
            </div>

            {/* Model Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
              {/* Alpha Model */}
              <Link
                href="/flat-floor/alpha"
                className={`group backdrop-blur-sm rounded-xl p-8 ${transitionClass} ${
                  theme === 'dark'
                    ? 'bg-white/5 border-2 border-gray-700 hover:border-blue-500'
                    : 'bg-gray-900/5 border-2 border-gray-300 hover:border-blue-500'
                } transition-all duration-300 hover:scale-105 cursor-pointer`}
              >
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className={`text-2xl font-bold ${transitionClass} ${
                      theme === 'dark' ? 'text-white' : 'text-gray-900'
                    }`}>Alpha Model</h3>
                    <svg className={`w-6 h-6 transform group-hover:translate-x-1 transition-transform ${
                      theme === 'dark' ? 'text-blue-400' : 'text-blue-600'
                    }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>

                  <div className={`w-16 h-16 rounded-lg flex items-center justify-center ${transitionClass} ${
                    theme === 'dark' ? 'bg-blue-600/20' : 'bg-blue-100'
                  }`}>
                    <svg className={`w-8 h-8 ${transitionClass} ${
                      theme === 'dark' ? 'text-blue-400' : 'text-blue-600'
                    }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>

                  <p className={`text-base ${transitionClass} ${
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    Precision-engineered flat floor design with three grade options to match your hauling needs.
                  </p>

                  <div className="space-y-2">
                    <p className={`text-sm font-semibold ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>Available Grades:</p>
                    <div className="flex flex-wrap gap-2">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${theme === 'dark' ? 'bg-green-500/20 text-green-400' : 'bg-green-100 text-green-700'}`}>
                        Haul
                      </span>
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${theme === 'dark' ? 'bg-blue-500/20 text-blue-400' : 'bg-blue-100 text-blue-700'}`}>
                        Edge
                      </span>
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${theme === 'dark' ? 'bg-orange-500/20 text-orange-400' : 'bg-orange-100 text-orange-700'}`}>
                        Beast
                      </span>
                    </div>
                  </div>

                  <div className={`pt-4 border-t ${theme === 'dark' ? 'border-gray-700' : 'border-gray-300'}`}>
                    <span className={`text-sm font-semibold ${theme === 'dark' ? 'text-blue-400' : 'text-blue-600'} group-hover:underline`}>
                      Explore Alpha Model →
                    </span>
                  </div>
                </div>
              </Link>

              {/* Apex Model */}
              <Link
                href="/flat-floor/apex"
                className={`group backdrop-blur-sm rounded-xl p-8 ${transitionClass} ${
                  theme === 'dark'
                    ? 'bg-white/5 border-2 border-gray-700 hover:border-orange-500'
                    : 'bg-gray-900/5 border-2 border-gray-300 hover:border-orange-500'
                } transition-all duration-300 hover:scale-105 cursor-pointer`}
              >
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className={`text-2xl font-bold ${transitionClass} ${
                      theme === 'dark' ? 'text-white' : 'text-gray-900'
                    }`}>Apex Model</h3>
                    <svg className={`w-6 h-6 transform group-hover:translate-x-1 transition-transform ${
                      theme === 'dark' ? 'text-orange-400' : 'text-orange-600'
                    }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>

                  <div className={`w-16 h-16 rounded-lg flex items-center justify-center ${transitionClass} ${
                    theme === 'dark' ? 'bg-orange-600/20' : 'bg-orange-100'
                  }`}>
                    <svg className={`w-8 h-8 ${transitionClass} ${
                      theme === 'dark' ? 'text-orange-400' : 'text-orange-600'
                    }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                    </svg>
                  </div>

                  <p className={`text-base ${transitionClass} ${
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    Premium flat floor design with advanced engineering for maximum performance and durability.
                  </p>

                  <div className="space-y-2">
                    <p className={`text-sm font-semibold ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>Available Grades:</p>
                    <div className="flex flex-wrap gap-2">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${theme === 'dark' ? 'bg-green-500/20 text-green-400' : 'bg-green-100 text-green-700'}`}>
                        Haul
                      </span>
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${theme === 'dark' ? 'bg-blue-500/20 text-blue-400' : 'bg-blue-100 text-blue-700'}`}>
                        Edge
                      </span>
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${theme === 'dark' ? 'bg-orange-500/20 text-orange-400' : 'bg-orange-100 text-orange-700'}`}>
                        Beast
                      </span>
                    </div>
                  </div>

                  <div className={`pt-4 border-t ${theme === 'dark' ? 'border-gray-700' : 'border-gray-300'}`}>
                    <span className={`text-sm font-semibold ${theme === 'dark' ? 'text-orange-400' : 'text-orange-600'} group-hover:underline`}>
                      Explore Apex Model →
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          </div>

          {/* 3D Model Preview */}
          <div className="w-full space-y-6 max-w-screen-xl mx-auto">
            <h3 className={`text-2xl md:text-3xl font-bold text-center ${transitionClass} ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              Experience Our Design
            </h3>
            <p className={`text-center ${transitionClass} ${
              theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
            }`}>
              Explore our flat floor dump body in interactive 3D
            </p>
            <div className={`relative w-full backdrop-blur-sm rounded-xl overflow-hidden ${transitionClass} ${
              theme === 'dark'
                ? 'bg-white/5 border border-gray-700'
                : 'bg-gray-900/5 border border-gray-300'
            }`}>
              <Truck3DViewer />
            </div>
          </div>

          <div className="space-y-6">
            <p className={`text-lg ${transitionClass} ${
              theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
            }`} style={{lineHeight: '1.6'}}>
              Ready to upgrade your fleet with flat floor dump bodies?
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
              Flat Floor Class 7 & Class 8 Heavy-Duty Truck Bodies | Built for Performance
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
