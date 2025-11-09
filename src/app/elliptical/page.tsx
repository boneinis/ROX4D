'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useTheme } from '../../components/theme-provider'
import { EmailCaptureModal } from '../../components/email-capture-modal'
import { useReducedMotion } from '../../hooks/use-reduced-motion'

export default function EllipticalPage() {
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

          {/* Coming Soon Banner */}
          <div className="w-full relative">
            <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-lg shadow-2xl">
              <h2 className="text-3xl md:text-4xl font-bold tracking-wide">COMING SOON</h2>
              <p className="text-sm md:text-base mt-2 opacity-90">Revolutionary elliptical design in development</p>
            </div>
          </div>

          {/* Back to Home Link */}
          <div className="w-full">
            <Link
              href="/"
              className={`inline-flex items-center gap-2 text-sm font-semibold ${transitionClass} ${
                theme === 'dark'
                  ? 'text-blue-400 hover:text-blue-300'
                  : 'text-blue-600 hover:text-blue-700'
              }`}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Home
            </Link>
          </div>

          {/* Title */}
          <div className="space-y-4">
            <h1 className={`text-4xl md:text-6xl font-bold ${transitionClass} ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              Elliptical Dump Body
            </h1>
            <p className={`text-xl md:text-2xl ${transitionClass} ${
              theme === 'dark' ? 'text-orange-400' : 'text-orange-600'
            }`}>
              Next Generation Design
            </p>
          </div>

          {/* Description */}
          <div className={`max-w-3xl space-y-6 ${transitionClass} ${
            theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
          }`}>
            <p className="text-lg leading-relaxed">
              The ROX4D Elliptical dump body represents the future of heavy-duty truck body design.
              Featuring an innovative elliptical cross-section, this design optimizes material flow
              for superior performance.
            </p>
            <p className="text-lg leading-relaxed">
              Built with the same revolutionary materials and engineering excellence as our Flat Floor
              series, the Elliptical body will maintain the{' '}
              <span className={`font-semibold ${theme === 'dark' ? 'text-green-400' : 'text-green-600'}`}>
                lightweight, high-strength performance
              </span>{' '}
              you expect from ROX4D.
            </p>
          </div>

          {/* Key Features */}
          <div className={`w-full backdrop-blur-sm rounded-xl p-8 ${transitionClass} ${
            theme === 'dark'
              ? 'bg-white/5 border-2 border-gray-700'
              : 'bg-gray-900/5 border-2 border-gray-300'
          }`}>
            <h2 className={`text-2xl md:text-3xl font-bold mb-6 ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              Anticipated Features
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Feature 1 */}
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className={`mt-1 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 ${
                    theme === 'dark' ? 'bg-orange-600/20' : 'bg-orange-100'
                  }`}>
                    <svg className={`w-6 h-6 ${
                      theme === 'dark' ? 'text-orange-400' : 'text-orange-600'
                    }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className={`font-semibold text-lg ${
                      theme === 'dark' ? 'text-white' : 'text-gray-900'
                    }`}>
                      Innovative Design
                    </h3>
                    <p className={`text-sm ${
                      theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                      Elliptical cross-section provides optimal structural integrity
                    </p>
                  </div>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className={`mt-1 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 ${
                    theme === 'dark' ? 'bg-orange-600/20' : 'bg-orange-100'
                  }`}>
                    <svg className={`w-6 h-6 ${
                      theme === 'dark' ? 'text-orange-400' : 'text-orange-600'
                    }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
                    </svg>
                  </div>
                  <div>
                    <h3 className={`font-semibold text-lg ${
                      theme === 'dark' ? 'text-white' : 'text-gray-900'
                    }`}>
                      Optimized Material Flow
                    </h3>
                    <p className={`text-sm ${
                      theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                      Smooth curves facilitate easier material discharge and reduced buildup
                    </p>
                  </div>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className={`mt-1 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 ${
                    theme === 'dark' ? 'bg-orange-600/20' : 'bg-orange-100'
                  }`}>
                    <svg className={`w-6 h-6 ${
                      theme === 'dark' ? 'text-orange-400' : 'text-orange-600'
                    }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className={`font-semibold text-lg ${
                      theme === 'dark' ? 'text-white' : 'text-gray-900'
                    }`}>
                      Superior Strength-to-Weight
                    </h3>
                    <p className={`text-sm ${
                      theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                      Advanced materials provide exceptional durability without excess weight
                    </p>
                  </div>
                </div>
              </div>

              {/* Feature 4 */}
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className={`mt-1 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 ${
                    theme === 'dark' ? 'bg-orange-600/20' : 'bg-orange-100'
                  }`}>
                    <svg className={`w-6 h-6 ${
                      theme === 'dark' ? 'text-orange-400' : 'text-orange-600'
                    }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                    </svg>
                  </div>
                  <div>
                    <h3 className={`font-semibold text-lg ${
                      theme === 'dark' ? 'text-white' : 'text-gray-900'
                    }`}>
                      Customizable Options
                    </h3>
                    <p className={`text-sm ${
                      theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                      Multiple configurations to meet your specific hauling needs
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="space-y-6">
            <p className={`text-lg ${transitionClass} ${
              theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
            }`}>
              Be the first to know when the Elliptical dump body becomes available
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

        </div>
      </div>
    </main>
    <EmailCaptureModal
      isOpen={modalOpen}
      onClose={() => setModalOpen(false)}
      type={modalType}
    />
    </>
  )
}
