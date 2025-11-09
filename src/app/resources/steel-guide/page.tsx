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

          {/* Chart Legend & Specifications */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Hardox 450 Standard */}
            <div className={`backdrop-blur-sm rounded-xl p-6 ${transitionClass} ${
              theme === 'dark'
                ? 'bg-white/5 border-2 border-gray-700'
                : 'bg-white/80 border-2 border-gray-200'
            }`}>
              <h3 className={`text-lg font-bold mb-3 ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
              }`}>
                Hardox 450 Standard
              </h3>
              <p className={`text-sm mb-4 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                Proven field performance with established thickness standards. Lower material cost per pound.
              </p>
              <div className="space-y-2 text-sm">
                <div>
                  <span className={`font-semibold ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>Hardness:</span>
                  <span className={`ml-2 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>425-475 HBW</span>
                </div>
                <div>
                  <span className={`font-semibold ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>Yield Strength:</span>
                  <span className={`ml-2 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>1250 MPa (181 ksi)</span>
                </div>
                <div>
                  <span className={`font-semibold ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>Impact Energy:</span>
                  <span className={`ml-2 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>50 J (37 ft-lb) at -40°C</span>
                </div>
              </div>
            </div>

            {/* Hardox 500 Tuf Lightweight */}
            <div className={`backdrop-blur-sm rounded-xl p-6 ${transitionClass} ${
              theme === 'dark'
                ? 'bg-gradient-to-br from-green-500/10 to-blue-500/10 border-2 border-green-500/30'
                : 'bg-gradient-to-br from-green-50 to-blue-50 border-2 border-green-200'
            }`}>
              <h3 className={`text-lg font-bold mb-3 ${
                theme === 'dark' ? 'text-green-400' : 'text-green-600'
              }`}>
                Hardox 500 Tuf Lightweight
              </h3>
              <p className={`text-sm mb-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                Superior hardness and toughness allows thinner sections. Significant weight savings for more payload.
              </p>
              <div className="space-y-2 text-sm">
                <div>
                  <span className={`font-semibold ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>Hardness:</span>
                  <span className={`ml-2 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>475-505 HBW</span>
                </div>
                <div>
                  <span className={`font-semibold ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>Yield Strength:</span>
                  <span className={`ml-2 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>1370 MPa (199 ksi)</span>
                </div>
                <div>
                  <span className={`font-semibold ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>Impact Energy:</span>
                  <div className={`ml-2 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                    50 J (37 ft-lb) at -40°C (typical)
                    <br />
                    27 J (20 ft-lb) at -20°C (guaranteed)
                  </div>
                </div>
              </div>
            </div>

            {/* Performance Comparison */}
            <div className={`backdrop-blur-sm rounded-xl p-6 ${transitionClass} ${
              theme === 'dark'
                ? 'bg-gradient-to-br from-blue-500/10 to-purple-500/10 border-2 border-blue-500/30'
                : 'bg-gradient-to-br from-blue-50 to-purple-50 border-2 border-blue-200'
            }`}>
              <h3 className={`text-lg font-bold mb-3 ${
                theme === 'dark' ? 'text-blue-400' : 'text-blue-600'
              }`}>
                Performance Comparison
              </h3>
              <p className={`text-sm mb-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                Field-tested comparison showing how thinner 500 Tuf performs vs thicker 450 standard.
              </p>
              <div className="space-y-3">
                <div className={`flex items-start gap-2 text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                  <svg className={`w-5 h-5 mt-0.5 flex-shrink-0 ${theme === 'dark' ? 'text-green-400' : 'text-green-600'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>~18% lighter</strong> body with 500 Tuf</span>
                </div>
                <div className={`flex items-start gap-2 text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                  <svg className={`w-5 h-5 mt-0.5 flex-shrink-0 ${theme === 'dark' ? 'text-green-400' : 'text-green-600'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span><strong>Up to 40% longer wear life</strong> vs Hardox 450</span>
                </div>
                <div className={`flex items-start gap-2 text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                  <svg className={`w-5 h-5 mt-0.5 flex-shrink-0 ${theme === 'dark' ? 'text-green-400' : 'text-green-600'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>500 Tuf <strong>combines best of both grades</strong></span>
                </div>
              </div>
            </div>
          </div>

          {/* Hardox Comparison Chart */}
          <div className={`backdrop-blur-sm rounded-2xl p-8 ${transitionClass} ${
            theme === 'dark'
              ? 'bg-white/5 border-2 border-gray-700'
              : 'bg-white/80 border-2 border-gray-200'
          }`}>
            <h2 className={`text-2xl md:text-3xl font-bold mb-2 text-center ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              Hardox Steel Thickness Comparison Chart
            </h2>
            <p className={`text-center mb-8 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
              Comparing Hardox 450 vs 500 Tuf performance across different applications
            </p>

            {/* Application Comparison Table */}
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className={`${
                    theme === 'dark' ? 'bg-gray-800 border-gray-700' : 'bg-gray-100 border-gray-300'
                  } border-b-2`}>
                    <th className={`text-left p-4 font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Application</th>
                    <th className={`text-left p-4 font-bold ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>Hardox 450<br /><span className="text-sm font-normal">Standard Option</span></th>
                    <th className={`text-left p-4 font-bold ${theme === 'dark' ? 'text-green-400' : 'text-green-600'}`}>Hardox 500 Tuf<br /><span className="text-sm font-normal">Lightweight Option</span></th>
                    <th className={`text-left p-4 font-bold ${theme === 'dark' ? 'text-blue-400' : 'text-blue-600'}`}>Performance Comparison<br /><span className="text-sm font-normal">500 Tuf vs Thicker 450</span></th>
                  </tr>
                </thead>
                <tbody className={`${theme === 'dark' ? 'divide-gray-700' : 'divide-gray-200'} divide-y`}>
                  <tr>
                    <td className={`p-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                      <div className="font-bold mb-1">Aggregate Materials</div>
                      <div className="text-sm">Sand, Dirt, #1 & Smaller Crushed Stone/Gravel</div>
                    </td>
                    <td className={`p-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                      <div className="text-sm">3/16&quot; Floor + 5/32&quot; Walls</div>
                    </td>
                    <td className={`p-4 ${theme === 'dark' ? 'text-green-300' : 'text-green-700'}`}>
                      <div className="text-sm font-semibold">5/32&quot; Floor + 1/8&quot; Walls</div>
                      <div className="text-xs mt-1">~18% lighter</div>
                    </td>
                    <td className={`p-4 ${theme === 'dark' ? 'text-blue-300' : 'text-blue-700'}`}>
                      <div className={`inline-block px-3 py-1 rounded-full text-xs font-bold mb-2 ${
                        theme === 'dark' ? 'bg-green-500/20 text-green-400' : 'bg-green-100 text-green-700'
                      }`}>500 Tuf Better</div>
                      <div className="text-sm">500 Tuf provides ~7% better dent resistance plus 18% weight savings for increased payload</div>
                    </td>
                  </tr>

                  <tr className={theme === 'dark' ? 'bg-white/5' : 'bg-gray-50'}>
                    <td className={`p-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                      <div className="font-bold mb-1">Hot Asphalt</div>
                      <div className="text-sm">Hot Mix, Paving Materials</div>
                    </td>
                    <td className={`p-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                      <div className="text-sm">3/16&quot; Floor + 5/32&quot; Walls</div>
                      <div className="text-xs text-gray-500 mt-1">Field proven standard</div>
                    </td>
                    <td className={`p-4 ${theme === 'dark' ? 'text-green-300' : 'text-green-700'}`}>
                      <div className="text-sm font-semibold">5/32&quot; Floor + 1/8&quot; Walls</div>
                      <div className="text-xs mt-1">~18% lighter</div>
                    </td>
                    <td className={`p-4 ${theme === 'dark' ? 'text-blue-300' : 'text-blue-700'}`}>
                      <div className={`inline-block px-3 py-1 rounded-full text-xs font-bold mb-2 ${
                        theme === 'dark' ? 'bg-green-500/20 text-green-400' : 'bg-green-100 text-green-700'
                      }`}>500 Tuf Better</div>
                      <div className="text-sm">500 Tuf offers superior hardness and impact resistance while being 18% lighter</div>
                    </td>
                  </tr>

                  <tr>
                    <td className={`p-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                      <div className="font-bold mb-1">Class I Rip Rap</div>
                      <div className="text-sm">6-12&quot; Angular Rock (~125 lbs typical)</div>
                    </td>
                    <td className={`p-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                      <div className="text-sm">3/16&quot; Floor + 5/32&quot; Walls</div>
                      <div className="text-xs text-gray-500 mt-1">Adequate for Class I</div>
                    </td>
                    <td className={`p-4 ${theme === 'dark' ? 'text-green-300' : 'text-green-700'}`}>
                      <div className="text-sm font-semibold">5/32&quot; Floor + 1/8&quot; Walls</div>
                      <div className="text-xs mt-1">~18% lighter</div>
                    </td>
                    <td className={`p-4 ${theme === 'dark' ? 'text-blue-300' : 'text-blue-700'}`}>
                      <div className={`inline-block px-3 py-1 rounded-full text-xs font-bold mb-2 ${
                        theme === 'dark' ? 'bg-green-500/20 text-green-400' : 'bg-green-100 text-green-700'
                      }`}>500 Tuf Better</div>
                      <div className="text-sm">500 Tuf&apos;s superior hardness fully compensates for thinner material, providing equal durability at 18% less weight</div>
                    </td>
                  </tr>

                  <tr className={theme === 'dark' ? 'bg-white/5' : 'bg-gray-50'}>
                    <td className={`p-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                      <div className="font-bold mb-1">Class II Rip Rap</div>
                      <div className="text-sm">12-18&quot; Angular Rock (~350 lbs typical)</div>
                    </td>
                    <td className={`p-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                      <div className="text-sm">1/4&quot; Floor + 3/16&quot; Walls</div>
                      <div className="text-xs text-gray-500 mt-1">For heavy impact resistance</div>
                    </td>
                    <td className={`p-4 ${theme === 'dark' ? 'text-green-300' : 'text-green-700'}`}>
                      <div className="text-sm font-semibold">3/16&quot; Floor + 5/32&quot; Walls</div>
                      <div className="text-xs mt-1">~20% lighter (~750lbs extra payload)</div>
                    </td>
                    <td className={`p-4 ${theme === 'dark' ? 'text-blue-300' : 'text-blue-700'}`}>
                      <div className={`inline-block px-3 py-1 rounded-full text-xs font-bold mb-2 ${
                        theme === 'dark' ? 'bg-blue-500/20 text-blue-400' : 'bg-blue-100 text-blue-700'
                      }`}>Similar Performance</div>
                      <div className="text-sm">500 Tuf matches 450&apos;s durability with 20% weight reduction - higher hardness offsets thinner walls</div>
                    </td>
                  </tr>

                  <tr>
                    <td className={`p-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                      <div className="font-bold mb-1">Class III Rip Rap</div>
                      <div className="text-sm">18-24&quot;+ Angular Rock (~750 lbs typical)</div>
                    </td>
                    <td className={`p-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                      <div className="text-sm">5/16&quot; Floor + 1/4&quot; Walls</div>
                      <div className="text-xs text-gray-500 mt-1">Heavy-duty specification</div>
                    </td>
                    <td className={`p-4 ${theme === 'dark' ? 'text-green-300' : 'text-green-700'}`}>
                      <div className="text-sm font-semibold">1/4&quot; Floor + 3/16&quot; Walls</div>
                      <div className="text-xs mt-1">~23% lighter (~1150lbs extra payload)</div>
                    </td>
                    <td className={`p-4 ${theme === 'dark' ? 'text-blue-300' : 'text-blue-700'}`}>
                      <div className={`inline-block px-3 py-1 rounded-full text-xs font-bold mb-2 ${
                        theme === 'dark' ? 'bg-blue-500/20 text-blue-400' : 'bg-blue-100 text-blue-700'
                      }`}>Similar Performance</div>
                      <div className="text-sm">500 Tuf delivers equal protection with 23% weight savings - ideal for extreme impact while maximizing payload</div>
                    </td>
                  </tr>

                  <tr className={theme === 'dark' ? 'bg-white/5' : 'bg-gray-50'}>
                    <td className={`p-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                      <div className="font-bold mb-1">Construction Debris</div>
                      <div className="text-sm">Demo Material, Broken Concrete, Mixed</div>
                    </td>
                    <td className={`p-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                      <div className="text-sm">1/4&quot; Floor + 3/16&quot; Walls</div>
                      <div className="text-xs text-gray-500 mt-1">Some denting at 3/16&quot; 1/4&quot; for heavy use</div>
                    </td>
                    <td className={`p-4 ${theme === 'dark' ? 'text-green-300' : 'text-green-700'}`}>
                      <div className="text-sm font-semibold">3/16&quot; Floor + 5/32&quot; Walls</div>
                      <div className="text-xs mt-1">~20% lighter (~750lbs extra payload)</div>
                    </td>
                    <td className={`p-4 ${theme === 'dark' ? 'text-blue-300' : 'text-blue-700'}`}>
                      <div className={`inline-block px-3 py-1 rounded-full text-xs font-bold mb-2 ${
                        theme === 'dark' ? 'bg-green-500/20 text-green-400' : 'bg-green-100 text-green-700'
                      }`}>500 Tuf Better</div>
                      <div className="text-sm">500 Tuf&apos;s superior toughness handles sharp impacts better than 450, plus delivers 20% weight savings</div>
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

          {/* Technical Note */}
          <div className={`backdrop-blur-sm rounded-xl p-6 border ${transitionClass} ${
            theme === 'dark'
              ? 'bg-gray-800/50 border-gray-700'
              : 'bg-gray-100 border-gray-300'
          }`}>
            <p className={`text-xs ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
              <strong>Note:</strong> Technical specifications based on official SSAB data. Hardox® is a registered trademark of SSAB.
              Performance comparisons based on field testing and SSAB published data. This chart is for reference purposes only -
              actual performance may vary based on specific usage conditions, material handling practices, and operating environment.
            </p>
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
