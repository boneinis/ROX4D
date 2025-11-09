'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useTheme } from '../../../components/theme-provider'
import { ThemeToggle } from '../../../components/theme-toggle'
import { EmailCaptureModal } from '../../../components/email-capture-modal'
import { Truck3DViewer } from '../../../components/truck-3d-viewer'
import { useReducedMotion } from '../../../hooks/use-reduced-motion'

export default function AlphaModelPage() {
  const { theme } = useTheme()
  const [modalOpen, setModalOpen] = useState(false)
  const [modalType, setModalType] = useState<'notify' | 'learn'>('notify')
  const [selectedGrade, setSelectedGrade] = useState<'haul' | 'edge' | 'beast'>('haul')
  const prefersReducedMotion = useReducedMotion()

  const transitionClass = prefersReducedMotion ? '' : 'transition-colors duration-300'

  const gradeSpecs = {
    haul: { sides: '1/8" Hardox 500 Tuff', floor: '5/32" Hardox 500 Tuff' },
    edge: { sides: '5/32" Hardox 500 Tuff', floor: '3/16" Hardox 500 Tuff' },
    beast: { sides: '3/16" Hardox 500 Tuff', floor: '1/4" Hardox 500 Tuff' }
  }

  return (
    <>
      <main className={`min-h-screen ${transitionClass} ${
        theme === 'dark'
          ? 'bg-gradient-to-br from-black via-gray-900 to-gray-800'
          : 'bg-gradient-to-br from-white via-gray-50 to-gray-100'
      }`}>
        <div className="w-full px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="flex flex-col items-center justify-center text-center space-y-12 max-w-6xl mx-auto w-full">

          {/* Back Navigation */}
          <div className="w-full flex justify-start -mt-20">
            <Link
              href="/flat-floor"
              className={`flex items-center gap-2 px-2 py-1 rounded transition-colors duration-200 ${
                theme === 'dark'
                  ? 'text-gray-400 hover:text-white hover:bg-white/5'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-900/5'
              }`}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              <span className="text-sm">Back to Flat Floor</span>
            </Link>
          </div>

          {/* Header */}
          <div className="space-y-4">
            <h1 className={`text-5xl md:text-7xl font-black tracking-tight ${transitionClass} ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              ALPHA
            </h1>
            <div className="flex items-center justify-center gap-3">
              <div className={`h-1 w-12 ${theme === 'dark' ? 'bg-blue-500' : 'bg-blue-600'}`}></div>
              <p className={`text-lg md:text-xl font-semibold tracking-wide uppercase ${transitionClass} ${
                theme === 'dark' ? 'text-blue-400' : 'text-blue-600'
              }`}>
                Flat Floor Design
              </p>
              <div className={`h-1 w-12 ${theme === 'dark' ? 'bg-blue-500' : 'bg-blue-600'}`}></div>
            </div>
          </div>

          <div className="w-full space-y-8">
            <h2 className={`text-3xl md:text-5xl font-bold ${transitionClass} ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`} style={{lineHeight: '1.2', marginBottom: '0.5em'}}>
              Precision Engineering
              <span className="block text-blue-600 mt-2">Built for Performance</span>
            </h2>

            <p className={`text-lg md:text-xl ${transitionClass} ${
              theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
            }`} style={{lineHeight: '1.7'}}>
              The Alpha model combines innovative flat floor design with precision engineering.
              Choose from three grades to match your specific hauling requirements.
            </p>
          </div>

          {/* Alpha Specific Features */}
          <div className={`w-full backdrop-blur-sm rounded-xl p-8 ${transitionClass} ${
            theme === 'dark'
              ? 'bg-white/5 border-2 border-gray-700'
              : 'bg-gray-900/5 border-2 border-gray-300'
          }`}>
            <h3 className={`text-2xl md:text-3xl font-bold mb-6 ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              Alpha Advantages
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Feature 1 */}
              <div className="flex items-start gap-4">
                <div className={`mt-1 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 ${
                  theme === 'dark' ? 'bg-blue-600/20' : 'bg-blue-100'
                }`}>
                  <svg className={`w-6 h-6 ${
                    theme === 'dark' ? 'text-blue-400' : 'text-blue-600'
                  }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
                  </svg>
                </div>
                <div>
                  <h4 className={`font-semibold text-lg mb-2 ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>
                    98" Fender Width
                  </h4>
                  <p className={`text-sm ${transitionClass} ${
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    Perfectly matched to the width of modern heavy-duty trucks for optimal fit and coverage
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex items-start gap-4">
                <div className={`mt-1 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 ${
                  theme === 'dark' ? 'bg-blue-600/20' : 'bg-blue-100'
                }`}>
                  <svg className={`w-6 h-6 ${
                    theme === 'dark' ? 'text-blue-400' : 'text-blue-600'
                  }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
                  </svg>
                </div>
                <div>
                  <h4 className={`font-semibold text-lg mb-2 ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>
                    Optional Air Highlift Tailgate
                  </h4>
                  <p className={`text-sm ${transitionClass} ${
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    Advanced air-assisted tailgate system with built-in safety pin allows safe access to the inside of the bed during operation
                  </p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="flex items-start gap-4">
                <div className={`mt-1 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 ${
                  theme === 'dark' ? 'bg-blue-600/20' : 'bg-blue-100'
                }`}>
                  <svg className={`w-6 h-6 ${
                    theme === 'dark' ? 'text-blue-400' : 'text-blue-600'
                  }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <div>
                  <h4 className={`font-semibold text-lg mb-2 ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>
                    Multiple Tailgate Slope Options
                  </h4>
                  <p className={`text-sm ${transitionClass} ${
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    Choose from straight, 6° or 12° tailgate slopes to optimize material discharge for your specific application
                  </p>
                </div>
              </div>

              {/* Feature 4 */}
              <div className="flex items-start gap-4">
                <div className={`mt-1 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 ${
                  theme === 'dark' ? 'bg-blue-600/20' : 'bg-blue-100'
                }`}>
                  <svg className={`w-6 h-6 ${
                    theme === 'dark' ? 'text-blue-400' : 'text-blue-600'
                  }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
                  </svg>
                </div>
                <div>
                  <h4 className={`font-semibold text-lg mb-2 ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>
                    Optional 45° Front Corners
                  </h4>
                  <p className={`text-sm ${transitionClass} ${
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    Optional angled front corners enhance material distribution and reduce stress concentration points
                  </p>
                </div>
              </div>

              {/* Feature 5 */}
              <div className="flex items-start gap-4">
                <div className={`mt-1 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 ${
                  theme === 'dark' ? 'bg-blue-600/20' : 'bg-blue-100'
                }`}>
                  <svg className={`w-6 h-6 ${
                    theme === 'dark' ? 'text-blue-400' : 'text-blue-600'
                  }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                  </svg>
                </div>
                <div>
                  <h4 className={`font-semibold text-lg mb-2 ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>
                    Access Door in Front Wall
                  </h4>
                  <p className={`text-sm ${transitionClass} ${
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    Convenient access door allows for easy inspection and maintenance without raising the body
                  </p>
                </div>
              </div>

              {/* Feature 6 */}
              <div className="flex items-start gap-4">
                <div className={`mt-1 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 ${
                  theme === 'dark' ? 'bg-blue-600/20' : 'bg-blue-100'
                }`}>
                  <svg className={`w-6 h-6 ${
                    theme === 'dark' ? 'text-blue-400' : 'text-blue-600'
                  }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
                <div>
                  <h4 className={`font-semibold text-lg mb-2 ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>
                    Tapered Front to Rear Design
                  </h4>
                  <p className={`text-sm ${transitionClass} ${
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    Strategic taper from front to rear facilitates better load release and reduces material retention
                  </p>
                </div>
              </div>

              {/* Feature 7 */}
              <div className="flex items-start gap-4">
                <div className={`mt-1 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 ${
                  theme === 'dark' ? 'bg-blue-600/20' : 'bg-blue-100'
                }`}>
                  <svg className={`w-6 h-6 ${
                    theme === 'dark' ? 'text-blue-400' : 'text-blue-600'
                  }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </div>
                <div>
                  <h4 className={`font-semibold text-lg mb-2 ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>
                    Consistent Interior Sidewall Profile
                  </h4>
                  <p className={`text-sm ${transitionClass} ${
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    Uniform sidewall profile from front to tailgate ensures smooth material flow and predictable dumping
                  </p>
                </div>
              </div>

              {/* Feature 8 */}
              <div className="flex items-start gap-4">
                <div className={`mt-1 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 ${
                  theme === 'dark' ? 'bg-blue-600/20' : 'bg-blue-100'
                }`}>
                  <svg className={`w-6 h-6 ${
                    theme === 'dark' ? 'text-blue-400' : 'text-blue-600'
                  }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <div>
                  <h4 className={`font-semibold text-lg mb-2 ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>
                    Multiple Fender Material Options
                  </h4>
                  <p className={`text-sm ${transitionClass} ${
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    Available with Aluminum, Steel and Stainless Steel fenders to suit your application and preferences
                  </p>
                </div>
              </div>

              {/* Feature 9 */}
              <div className="flex items-start gap-4">
                <div className={`mt-1 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 ${
                  theme === 'dark' ? 'bg-blue-600/20' : 'bg-blue-100'
                }`}>
                  <svg className={`w-6 h-6 ${
                    theme === 'dark' ? 'text-blue-400' : 'text-blue-600'
                  }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21l1.65-3.8a9 9 0 1 1 4.15 4.15L3 21z" />
                  </svg>
                </div>
                <div>
                  <h4 className={`font-semibold text-lg mb-2 ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>
                    Sloped Sidewall Option
                  </h4>
                  <p className={`text-sm ${transitionClass} ${
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    Available with sloped sidewalls for increased capacity while maintaining regulatory height requirements
                  </p>
                </div>
              </div>

              {/* Feature 10 */}
              <div className="flex items-start gap-4">
                <div className={`mt-1 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 ${
                  theme === 'dark' ? 'bg-blue-600/20' : 'bg-blue-100'
                }`}>
                  <svg className={`w-6 h-6 ${
                    theme === 'dark' ? 'text-blue-400' : 'text-blue-600'
                  }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h4 className={`font-semibold text-lg mb-2 ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>
                    Single Piece Sidewall & Toprail
                  </h4>
                  <p className={`text-sm ${transitionClass} ${
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    Available with single piece sidewall and toprail construction for weight savings and enhanced durability
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Grade Selection */}
          <div className="w-full space-y-8">
            <div className="text-center space-y-4">
              <h3 className={`text-2xl md:text-3xl font-bold ${transitionClass} ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
                Select Your Grade
              </h3>
              <p className={`text-base ${transitionClass} ${
                theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
              }`}>
                All grades built with Hardox 500 Tuff body and Strenx 110XF longsills
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
              {/* Haul Grade */}
              <button
                onClick={() => setSelectedGrade('haul')}
                className={`backdrop-blur-sm rounded-xl p-6 text-left transition-all duration-200 ${
                  selectedGrade === 'haul'
                    ? theme === 'dark'
                      ? 'bg-white/10 border-2 border-green-500 shadow-lg shadow-green-500/20'
                      : 'bg-green-50 border-2 border-green-500 shadow-lg'
                    : theme === 'dark'
                      ? 'bg-white/5 border-2 border-gray-700 hover:border-green-500/50'
                      : 'bg-gray-900/5 border-2 border-gray-300 hover:border-green-500/50'
                }`}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h4 className={`text-xl font-bold ${transitionClass} ${
                      theme === 'dark' ? 'text-white' : 'text-gray-900'
                    }`}>Haul</h4>
                    {selectedGrade === 'haul' && (
                      <svg className="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    )}
                  </div>
                  <p className={`text-sm ${transitionClass} ${
                    theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                  }`}><span className="font-semibold">Suggested use:</span> Aggregate and asphalt hauling with enough strength for jobsite use</p>
                  <div className={`pt-4 border-t ${theme === 'dark' ? 'border-gray-700' : 'border-gray-300'}`}>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className={`text-xs font-semibold uppercase ${theme === 'dark' ? 'text-gray-500' : 'text-gray-500'}`}>Sides</span>
                        <span className={`text-sm font-bold ${theme === 'dark' ? 'text-green-400' : 'text-green-600'}`}>{gradeSpecs.haul.sides}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className={`text-xs font-semibold uppercase ${theme === 'dark' ? 'text-gray-500' : 'text-gray-500'}`}>Floor</span>
                        <span className={`text-sm font-bold ${theme === 'dark' ? 'text-green-400' : 'text-green-600'}`}>{gradeSpecs.haul.floor}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </button>

              {/* Edge Grade */}
              <button
                onClick={() => setSelectedGrade('edge')}
                className={`backdrop-blur-sm rounded-xl p-6 text-left transition-all duration-200 ${
                  selectedGrade === 'edge'
                    ? theme === 'dark'
                      ? 'bg-white/10 border-2 border-blue-500 shadow-lg shadow-blue-500/20'
                      : 'bg-blue-50 border-2 border-blue-500 shadow-lg'
                    : theme === 'dark'
                      ? 'bg-white/5 border-2 border-gray-700 hover:border-blue-500/50'
                      : 'bg-gray-900/5 border-2 border-gray-300 hover:border-blue-500/50'
                }`}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h4 className={`text-xl font-bold ${transitionClass} ${
                      theme === 'dark' ? 'text-white' : 'text-gray-900'
                    }`}>Edge</h4>
                    {selectedGrade === 'edge' && (
                      <svg className="w-6 h-6 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    )}
                  </div>
                  <p className={`text-sm ${transitionClass} ${
                    theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                  }`}><span className="font-semibold">Suggested use:</span> Jobsite and construction and demolition applications</p>
                  <div className={`pt-4 border-t ${theme === 'dark' ? 'border-gray-700' : 'border-gray-300'}`}>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className={`text-xs font-semibold uppercase ${theme === 'dark' ? 'text-gray-500' : 'text-gray-500'}`}>Sides</span>
                        <span className={`text-sm font-bold ${theme === 'dark' ? 'text-blue-400' : 'text-blue-600'}`}>{gradeSpecs.edge.sides}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className={`text-xs font-semibold uppercase ${theme === 'dark' ? 'text-gray-500' : 'text-gray-500'}`}>Floor</span>
                        <span className={`text-sm font-bold ${theme === 'dark' ? 'text-blue-400' : 'text-blue-600'}`}>{gradeSpecs.edge.floor}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </button>

              {/* Beast Grade */}
              <button
                onClick={() => setSelectedGrade('beast')}
                className={`backdrop-blur-sm rounded-xl p-6 text-left transition-all duration-200 ${
                  selectedGrade === 'beast'
                    ? theme === 'dark'
                      ? 'bg-white/10 border-2 border-orange-500 shadow-lg shadow-orange-500/20'
                      : 'bg-orange-50 border-2 border-orange-500 shadow-lg'
                    : theme === 'dark'
                      ? 'bg-white/5 border-2 border-gray-700 hover:border-orange-500/50'
                      : 'bg-gray-900/5 border-2 border-gray-300 hover:border-orange-500/50'
                }`}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h4 className={`text-xl font-bold ${transitionClass} ${
                      theme === 'dark' ? 'text-white' : 'text-gray-900'
                    }`}>Beast</h4>
                    {selectedGrade === 'beast' && (
                      <svg className="w-6 h-6 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    )}
                  </div>
                  <p className={`text-sm ${transitionClass} ${
                    theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                  }`}><span className="font-semibold">Suggested use:</span> Severe service applications that still need to be weight conscious</p>
                  <div className={`pt-4 border-t ${theme === 'dark' ? 'border-gray-700' : 'border-gray-300'}`}>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className={`text-xs font-semibold uppercase ${theme === 'dark' ? 'text-gray-500' : 'text-gray-500'}`}>Sides</span>
                        <span className={`text-sm font-bold ${theme === 'dark' ? 'text-orange-400' : 'text-orange-600'}`}>{gradeSpecs.beast.sides}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className={`text-xs font-semibold uppercase ${theme === 'dark' ? 'text-gray-500' : 'text-gray-500'}`}>Floor</span>
                        <span className={`text-sm font-bold ${theme === 'dark' ? 'text-orange-400' : 'text-orange-600'}`}>{gradeSpecs.beast.floor}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </button>
            </div>

            {/* Selected Configuration Summary */}
            <div className={`backdrop-blur-sm rounded-xl p-6 ${transitionClass} ${
              theme === 'dark'
                ? 'bg-white/5 border border-gray-700'
                : 'bg-gray-900/5 border border-gray-300'
            }`}>
              <h4 className={`text-lg font-bold mb-4 ${transitionClass} ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>Your Configuration</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className={`text-sm font-semibold mb-2 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>Model</p>
                  <p className={`text-lg font-bold ${theme === 'dark' ? 'text-blue-400' : 'text-blue-600'}`}>
                    Alpha {selectedGrade.charAt(0).toUpperCase() + selectedGrade.slice(1)}
                  </p>
                </div>
                <div>
                  <p className={`text-sm font-semibold mb-2 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>Construction Materials</p>
                  <div className="space-y-1">
                    <p className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                      <span className="font-semibold">Body:</span> Hardox 500 Tuff
                    </p>
                    <p className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                      <span className="font-semibold">Longsills:</span> Strenx 110XF
                    </p>
                    <p className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                      <span className="font-semibold">Sides:</span> {gradeSpecs[selectedGrade].sides}
                    </p>
                    <p className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                      <span className="font-semibold">Floor:</span> {gradeSpecs[selectedGrade].floor}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Available Sizes */}
            <div className={`backdrop-blur-sm rounded-xl p-6 ${transitionClass} ${
              theme === 'dark'
                ? 'bg-white/5 border border-gray-700'
                : 'bg-gray-900/5 border border-gray-300'
            }`}>
              <h4 className={`text-lg font-bold mb-4 ${transitionClass} ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>Available Sizes</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <p className={`text-sm font-semibold mb-3 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>Body Lengths</p>
                  <p className={`text-base ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                    <span className="font-bold text-blue-500">12' to 24'</span>
                  </p>
                </div>
                <div>
                  <p className={`text-sm font-semibold mb-3 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>Side Heights</p>
                  <div className="flex flex-wrap gap-2">
                    <span className={`px-3 py-1 rounded-lg text-sm font-semibold ${theme === 'dark' ? 'bg-blue-500/20 text-blue-400 border border-blue-500/50' : 'bg-blue-100 text-blue-700 border border-blue-300'}`}>
                      42"
                    </span>
                    <span className={`px-3 py-1 rounded-lg text-sm font-semibold ${theme === 'dark' ? 'bg-blue-500/20 text-blue-400 border border-blue-500/50' : 'bg-blue-100 text-blue-700 border border-blue-300'}`}>
                      48"
                    </span>
                    <span className={`px-3 py-1 rounded-lg text-sm font-semibold ${theme === 'dark' ? 'bg-blue-500/20 text-blue-400 border border-blue-500/50' : 'bg-blue-100 text-blue-700 border border-blue-300'}`}>
                      54"
                    </span>
                    <span className={`px-3 py-1 rounded-lg text-sm font-semibold ${theme === 'dark' ? 'bg-blue-500/20 text-blue-400 border border-blue-500/50' : 'bg-blue-100 text-blue-700 border border-blue-300'}`}>
                      60"
                    </span>
                    <span className={`px-3 py-1 rounded-lg text-sm font-semibold ${theme === 'dark' ? 'bg-purple-500/20 text-purple-400 border border-purple-500/50' : 'bg-purple-100 text-purple-700 border border-purple-300'}`}>
                      Sloped 66"-54"
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 3D Model Preview */}
          <div className="w-full space-y-6 max-w-screen-xl mx-auto">
            <h3 className={`text-2xl md:text-3xl font-bold text-center ${transitionClass} ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              Experience the Alpha Design
            </h3>
            <p className={`text-center ${transitionClass} ${
              theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
            }`}>
              Explore the Alpha model in interactive 3D
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
              Ready to order your Alpha model?
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
              Alpha Model | Flat Floor Dump Body | Class 7 & Class 8 Compatible
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
