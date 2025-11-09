'use client'

import Link from 'next/link'
import { useTheme } from '../../../components/theme-provider'
import { useReducedMotion } from '../../../hooks/use-reduced-motion'

export default function SteelGuidePage() {
  const { theme } = useTheme()
  const prefersReducedMotion = useReducedMotion()
  const transitionClass = prefersReducedMotion ? '' : 'transition-colors duration-300'

  return (
    <main className={`min-h-screen ${transitionClass} ${
      theme === 'dark'
        ? 'bg-gradient-to-br from-black via-gray-900 to-gray-800'
        : 'bg-gradient-to-br from-white via-gray-50 to-gray-100'
    }`}>
      <div className="w-full px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Breadcrumbs */}
          <nav className="flex items-center space-x-2 text-sm -mt-20">
            <Link
              href="/"
              className={`${transitionClass} ${
                theme === 'dark' ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Home
            </Link>
            <span className={theme === 'dark' ? 'text-gray-600' : 'text-gray-400'}>/</span>
            <Link
              href="/resources/steel-guide"
              className={`${transitionClass} ${
                theme === 'dark' ? 'text-blue-400' : 'text-blue-600'
              }`}
            >
              Steel Guide
            </Link>
          </nav>

          {/* Header */}
          <div className="text-center space-y-6">
            <div className="flex items-center justify-center gap-4">
              <div className={`h-1 w-16 md:w-24 ${theme === 'dark' ? 'bg-gradient-to-r from-transparent to-blue-500' : 'bg-gradient-to-r from-transparent to-blue-600'}`}></div>
              <h1 className={`text-4xl md:text-6xl font-black tracking-tight ${transitionClass} ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
                Steel Material Guide
              </h1>
              <div className={`h-1 w-16 md:w-24 ${theme === 'dark' ? 'bg-gradient-to-l from-transparent to-blue-500' : 'bg-gradient-to-l from-transparent to-blue-600'}`}></div>
            </div>
            <p className={`text-lg md:text-xl max-w-3xl mx-auto ${transitionClass} ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
            }`}>
              Understanding Hardox steel options for dump truck body construction
            </p>
          </div>

          {/* Introduction */}
          <div className={`backdrop-blur-sm rounded-2xl p-8 ${transitionClass} ${
            theme === 'dark'
              ? 'bg-white/5 border-2 border-gray-700'
              : 'bg-white/80 border-2 border-gray-200'
          }`}>
            <h2 className={`text-2xl font-bold mb-4 ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              Why Steel Selection Matters
            </h2>
            <p className={`mb-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
              The choice of steel material significantly impacts your dump body&apos;s durability, weight, and payload capacity.
              ROX4D uses premium Hardox steel options to deliver the optimal balance of strength and weight savings.
            </p>
            <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
              Hardox is a wear-resistant steel known for exceptional hardness and impact resistance, making it ideal
              for demanding applications like aggregate hauling, construction debris, and rip rap transport.
            </p>
          </div>

          {/* Hardox Comparison Chart */}
          <div className={`backdrop-blur-sm rounded-2xl p-8 ${transitionClass} ${
            theme === 'dark'
              ? 'bg-white/5 border-2 border-gray-700'
              : 'bg-white/80 border-2 border-gray-200'
          }`}>
            <h2 className={`text-2xl font-bold mb-6 ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              Hardox 450 vs Hardox 500 Tuf Comparison
            </h2>

            {/* Specifications Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {/* Hardox 450 */}
              <div className={`rounded-xl p-6 ${
                theme === 'dark' ? 'bg-blue-500/10 border-2 border-blue-500/30' : 'bg-blue-50 border-2 border-blue-200'
              }`}>
                <h3 className={`text-xl font-bold mb-4 ${theme === 'dark' ? 'text-blue-400' : 'text-blue-600'}`}>
                  Hardox 450 (Standard)
                </h3>
                <div className="space-y-3">
                  <div>
                    <p className={`text-sm font-semibold ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>Hardness</p>
                    <p className={`text-lg font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>425-475 HBW</p>
                  </div>
                  <div>
                    <p className={`text-sm font-semibold ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>Yield Strength</p>
                    <p className={`text-lg font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>1100-1300 MPa</p>
                  </div>
                  <div>
                    <p className={`text-sm font-semibold ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>Impact Energy</p>
                    <p className={`text-lg font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>50 J at -40°C</p>
                  </div>
                </div>
              </div>

              {/* Hardox 500 Tuf */}
              <div className={`rounded-xl p-6 ${
                theme === 'dark' ? 'bg-green-500/10 border-2 border-green-500/30' : 'bg-green-50 border-2 border-green-200'
              }`}>
                <h3 className={`text-xl font-bold mb-4 ${theme === 'dark' ? 'text-green-400' : 'text-green-600'}`}>
                  Hardox 500 Tuf (Lightweight)
                </h3>
                <div className="space-y-3">
                  <div>
                    <p className={`text-sm font-semibold ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>Hardness</p>
                    <p className={`text-lg font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>475-505 HBW</p>
                  </div>
                  <div>
                    <p className={`text-sm font-semibold ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>Yield Strength</p>
                    <p className={`text-lg font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>1250-1400 MPa</p>
                  </div>
                  <div>
                    <p className={`text-sm font-semibold ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>Impact Energy</p>
                    <p className={`text-lg font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>45 J at -40°C</p>
                  </div>
                </div>
                <div className={`mt-4 pt-4 border-t ${theme === 'dark' ? 'border-green-500/30' : 'border-green-300'}`}>
                  <p className={`text-sm font-bold ${theme === 'dark' ? 'text-green-400' : 'text-green-600'}`}>
                    18-23% Weight Reduction
                  </p>
                </div>
              </div>
            </div>

            {/* Application Recommendations Table */}
            <div className="overflow-x-auto">
              <h3 className={`text-xl font-bold mb-4 ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
                Application Recommendations
              </h3>
              <table className="w-full">
                <thead>
                  <tr className={`${
                    theme === 'dark' ? 'bg-gray-800 border-gray-700' : 'bg-gray-100 border-gray-300'
                  } border-b-2`}>
                    <th className={`text-left p-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Material Type</th>
                    <th className={`text-center p-4 ${theme === 'dark' ? 'text-blue-400' : 'text-blue-600'}`}>Hardox 450</th>
                    <th className={`text-center p-4 ${theme === 'dark' ? 'text-green-400' : 'text-green-600'}`}>Hardox 500 Tuf</th>
                  </tr>
                </thead>
                <tbody className={`${theme === 'dark' ? 'divide-gray-700' : 'divide-gray-200'} divide-y`}>
                  <tr>
                    <td className={`p-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                      <span className="font-semibold">Aggregate Materials</span>
                      <br />
                      <span className="text-sm">Sand, dirt, crushed stone</span>
                    </td>
                    <td className="p-4 text-center">
                      <span className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${
                        theme === 'dark' ? 'bg-blue-500/20 text-blue-400' : 'bg-blue-100 text-blue-700'
                      }`}>
                        Recommended
                      </span>
                    </td>
                    <td className="p-4 text-center">
                      <span className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${
                        theme === 'dark' ? 'bg-green-500/20 text-green-400' : 'bg-green-100 text-green-700'
                      }`}>
                        Best Choice
                      </span>
                    </td>
                  </tr>
                  <tr className={theme === 'dark' ? 'bg-white/5' : 'bg-gray-50'}>
                    <td className={`p-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                      <span className="font-semibold">Hot Asphalt</span>
                      <br />
                      <span className="text-sm">Paving materials</span>
                    </td>
                    <td className="p-4 text-center">
                      <span className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${
                        theme === 'dark' ? 'bg-blue-500/20 text-blue-400' : 'bg-blue-100 text-blue-700'
                      }`}>
                        Recommended
                      </span>
                    </td>
                    <td className="p-4 text-center">
                      <span className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${
                        theme === 'dark' ? 'bg-green-500/20 text-green-400' : 'bg-green-100 text-green-700'
                      }`}>
                        Best Choice
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className={`p-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                      <span className="font-semibold">Class I Rip Rap</span>
                      <br />
                      <span className="text-sm">6-12&quot; angular rock (~125 lbs)</span>
                    </td>
                    <td className="p-4 text-center">
                      <span className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${
                        theme === 'dark' ? 'bg-blue-500/20 text-blue-400' : 'bg-blue-100 text-blue-700'
                      }`}>
                        Recommended
                      </span>
                    </td>
                    <td className="p-4 text-center">
                      <span className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${
                        theme === 'dark' ? 'bg-green-500/20 text-green-400' : 'bg-green-100 text-green-700'
                      }`}>
                        Best Choice
                      </span>
                    </td>
                  </tr>
                  <tr className={theme === 'dark' ? 'bg-white/5' : 'bg-gray-50'}>
                    <td className={`p-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                      <span className="font-semibold">Class II Rip Rap</span>
                      <br />
                      <span className="text-sm">12-18&quot; angular rock (~350 lbs)</span>
                    </td>
                    <td className="p-4 text-center">
                      <span className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${
                        theme === 'dark' ? 'bg-blue-500/20 text-blue-400' : 'bg-blue-100 text-blue-700'
                      }`}>
                        Recommended
                      </span>
                    </td>
                    <td className="p-4 text-center">
                      <span className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${
                        theme === 'dark' ? 'bg-yellow-500/20 text-yellow-400' : 'bg-yellow-100 text-yellow-700'
                      }`}>
                        Acceptable
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className={`p-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                      <span className="font-semibold">Class III Rip Rap</span>
                      <br />
                      <span className="text-sm">18-24&quot;+ angular rock (~750 lbs)</span>
                    </td>
                    <td className="p-4 text-center">
                      <span className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${
                        theme === 'dark' ? 'bg-blue-500/20 text-blue-400' : 'bg-blue-100 text-blue-700'
                      }`}>
                        Recommended
                      </span>
                    </td>
                    <td className="p-4 text-center">
                      <span className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${
                        theme === 'dark' ? 'bg-red-500/20 text-red-400' : 'bg-red-100 text-red-700'
                      }`}>
                        Not Recommended
                      </span>
                    </td>
                  </tr>
                  <tr className={theme === 'dark' ? 'bg-white/5' : 'bg-gray-50'}>
                    <td className={`p-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                      <span className="font-semibold">Construction Debris</span>
                      <br />
                      <span className="text-sm">Demo material, broken concrete</span>
                    </td>
                    <td className="p-4 text-center">
                      <span className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${
                        theme === 'dark' ? 'bg-blue-500/20 text-blue-400' : 'bg-blue-100 text-blue-700'
                      }`}>
                        Recommended
                      </span>
                    </td>
                    <td className="p-4 text-center">
                      <span className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${
                        theme === 'dark' ? 'bg-green-500/20 text-green-400' : 'bg-green-100 text-green-700'
                      }`}>
                        Best Choice
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Key Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className={`backdrop-blur-sm rounded-2xl p-8 ${transitionClass} ${
              theme === 'dark'
                ? 'bg-white/5 border-2 border-gray-700'
                : 'bg-white/80 border-2 border-gray-200'
            }`}>
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                theme === 'dark' ? 'bg-blue-500/20' : 'bg-blue-100'
              }`}>
                <svg className={`w-6 h-6 ${theme === 'dark' ? 'text-blue-400' : 'text-blue-600'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className={`text-xl font-bold mb-3 ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
                Superior Durability
              </h3>
              <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                Both Hardox grades offer exceptional wear resistance and impact strength, ensuring your dump body
                withstands years of demanding use in the harshest conditions.
              </p>
            </div>

            <div className={`backdrop-blur-sm rounded-2xl p-8 ${transitionClass} ${
              theme === 'dark'
                ? 'bg-white/5 border-2 border-gray-700'
                : 'bg-white/80 border-2 border-gray-200'
            }`}>
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                theme === 'dark' ? 'bg-green-500/20' : 'bg-green-100'
              }`}>
                <svg className={`w-6 h-6 ${theme === 'dark' ? 'text-green-400' : 'text-green-600'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                </svg>
              </div>
              <h3 className={`text-xl font-bold mb-3 ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
                Maximum Payload
              </h3>
              <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                Hardox 500 Tuf delivers 18-23% weight reduction compared to Hardox 450, allowing you to carry
                more payload per trip while maintaining equivalent durability for most applications.
              </p>
            </div>
          </div>

          {/* Back Links */}
          <div className={`backdrop-blur-sm rounded-2xl p-6 ${transitionClass} ${
            theme === 'dark'
              ? 'bg-blue-500/10 border-2 border-blue-500/30'
              : 'bg-blue-50 border-2 border-blue-200'
          }`}>
            <p className={`text-center mb-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
              Ready to explore our dump body options?
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/flat-floor/alpha"
                className={`px-6 py-3 rounded-lg font-semibold ${transitionClass} ${
                  theme === 'dark'
                    ? 'bg-blue-600 hover:bg-blue-700 text-white'
                    : 'bg-blue-600 hover:bg-blue-700 text-white'
                }`}
              >
                View Alpha Model
              </Link>
              <Link
                href="/flat-floor/apex"
                className={`px-6 py-3 rounded-lg font-semibold ${transitionClass} ${
                  theme === 'dark'
                    ? 'bg-orange-600 hover:bg-orange-700 text-white'
                    : 'bg-orange-600 hover:bg-orange-700 text-white'
                }`}
              >
                View Apex Model
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
