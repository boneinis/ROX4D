'use client'

import Link from 'next/link'
import { useTheme } from '../../../components/theme-provider'
import { useReducedMotion } from '../../../hooks/use-reduced-motion'

export default function SteelSelectionGuidePage() {
  const { theme } = useTheme()
  const prefersReducedMotion = useReducedMotion()
  const transitionClass = prefersReducedMotion ? '' : 'transition-colors duration-300'

  return (
    <main className={`min-h-screen ${transitionClass} ${
      theme === 'dark'
        ? 'bg-gradient-to-br from-black via-gray-900 to-gray-800'
        : 'bg-gradient-to-br from-white via-gray-50 to-gray-100'
    }`}>
      {/* Header Section */}
      <div className="w-full px-4 sm:px-6 lg:px-8 pt-16 md:pt-24 pb-6">
        <div className="max-w-7xl mx-auto space-y-12">
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
              href="/resources/steel-selection-guide"
              className={`${transitionClass} ${
                theme === 'dark' ? 'text-blue-400' : 'text-blue-600'
              }`}
            >
              Steel Selection Guide
            </Link>
          </nav>

          {/* Header */}
          <div className="text-center space-y-6">
            <div className="flex items-center justify-center gap-4">
              <div className={`h-1 w-16 md:w-24 ${theme === 'dark' ? 'bg-gradient-to-r from-transparent to-orange-500' : 'bg-gradient-to-r from-transparent to-orange-600'}`}></div>
              <h1 className={`text-4xl md:text-6xl font-black tracking-tight ${transitionClass} ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
                Dump Truck AR Steel Selection Guide
              </h1>
              <div className={`h-1 w-16 md:w-24 ${theme === 'dark' ? 'bg-gradient-to-l from-transparent to-orange-500' : 'bg-gradient-to-l from-transparent to-orange-600'}`}></div>
            </div>
            <p className={`text-lg md:text-xl max-w-3xl mx-auto ${transitionClass} ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
            }`}>
              Choose the right steel for your dump body based on what you haul and where you work
            </p>
          </div>
        </div>
      </div>

      {/* Quick Navigation - Sticky */}
      <div className={`sticky top-16 md:top-20 z-40 w-full backdrop-blur-md ${transitionClass} ${
        theme === 'dark' ? 'bg-gray-900/95 border-b border-gray-700' : 'bg-white/95 border-b border-gray-200'
      }`}>
        <div className="w-full px-4 sm:px-6 lg:px-8 py-4">
          <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
            <a href="#quick-answer" className={`p-4 rounded-lg text-center font-semibold ${transitionClass} ${
              theme === 'dark'
                ? 'bg-blue-500/20 hover:bg-blue-500/30 text-blue-400'
                : 'bg-blue-100 hover:bg-blue-200 text-blue-700'
            }`}>Quick Answer</a>
            <a href="#by-material" className={`p-4 rounded-lg text-center font-semibold ${transitionClass} ${
              theme === 'dark'
                ? 'bg-green-500/20 hover:bg-green-500/30 text-green-400'
                : 'bg-green-100 hover:bg-green-200 text-green-700'
            }`}>By Material</a>
            <a href="#steel-options" className={`p-4 rounded-lg text-center font-semibold ${transitionClass} ${
              theme === 'dark'
                ? 'bg-purple-500/20 hover:bg-purple-500/30 text-purple-400'
                : 'bg-purple-100 hover:bg-purple-200 text-purple-700'
            }`}>Steel Options</a>
            <a href="#cost-analysis" className={`p-4 rounded-lg text-center font-semibold ${transitionClass} ${
              theme === 'dark'
                ? 'bg-orange-500/20 hover:bg-orange-500/30 text-orange-400'
                : 'bg-orange-100 hover:bg-orange-200 text-orange-700'
            }`}>Cost Analysis</a>
          </div>
        </div>
      </div>

      {/* Content Sections */}
      <div className="w-full px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-7xl mx-auto space-y-12">

          {/* Quick Answer Section */}
          <div id="quick-answer" className={`scroll-mt-44 md:scroll-mt-48 backdrop-blur-sm rounded-2xl p-8 ${transitionClass} ${
            theme === 'dark'
              ? 'bg-white/5 border-2 border-gray-700'
              : 'bg-white/80 border-2 border-gray-200'
          }`}>
            <h2 className={`text-3xl font-bold mb-6 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              Quick Answer: Best Steel for Your Dump Truck
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* Best for Rock Bodies */}
              <div className={`rounded-xl p-6 ${
                theme === 'dark' ? 'bg-green-500/10 border-2 border-green-500/30' : 'bg-green-50 border-2 border-green-200'
              }`}>
                <div className={`text-sm font-semibold mb-2 ${theme === 'dark' ? 'text-green-400' : 'text-green-600'}`}>
                  Best for Rock Bodies
                </div>
                <div className={`text-2xl font-bold mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                  Hardox 500 Tuf
                </div>
                <div className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                  Handles 750 lb rocks from 6+ ft drops, works at -40°C
                </div>
              </div>

              {/* Good All-Around */}
              <div className={`rounded-xl p-6 ${
                theme === 'dark' ? 'bg-blue-500/10 border-2 border-blue-500/30' : 'bg-blue-50 border-2 border-blue-200'
              }`}>
                <div className={`text-sm font-semibold mb-2 ${theme === 'dark' ? 'text-blue-400' : 'text-blue-600'}`}>
                  Good All-Around Option
                </div>
                <div className={`text-2xl font-bold mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                  Hardox 450
                </div>
                <div className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                  Good balance for asphalt, aggregate, and general hauling applications
                </div>
              </div>

              {/* Best for Corrosion */}
              <div className={`rounded-xl p-6 ${
                theme === 'dark' ? 'bg-purple-500/10 border-2 border-purple-500/30' : 'bg-purple-50 border-2 border-purple-200'
              }`}>
                <div className={`text-sm font-semibold mb-2 ${theme === 'dark' ? 'text-purple-400' : 'text-purple-600'}`}>
                  Best for Corrosion
                </div>
                <div className={`text-2xl font-bold mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                  Stainless 304
                </div>
                <div className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                  Salt, sand, fertilizer won&apos;t corrode it - no painting needed
                </div>
              </div>

              {/* Never Use */}
              <div className={`rounded-xl p-6 ${
                theme === 'dark' ? 'bg-red-500/10 border-2 border-red-500/30' : 'bg-red-50 border-2 border-red-200'
              }`}>
                <div className={`text-sm font-semibold mb-2 ${theme === 'dark' ? 'text-red-400' : 'text-red-600'}`}>
                  Never Use
                </div>
                <div className={`text-2xl font-bold mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                  Generic AR500
                </div>
                <div className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                  Too brittle - will crack and create safety hazard
                </div>
              </div>
            </div>

            {/* Critical Warning */}
            <div className={`mt-6 p-6 rounded-xl ${
              theme === 'dark' ? 'bg-red-500/20 border-2 border-red-500' : 'bg-red-100 border-2 border-red-300'
            }`}>
              <h3 className={`text-xl font-bold mb-2 ${theme === 'dark' ? 'text-red-400' : 'text-red-700'}`}>
                The #1 Rule for Dump Bodies
              </h3>
              <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-800'}`}>
                Never use generic AR500 in dump truck floors or sides. It&apos;s too brittle and will crack from impact,
                creating dangerous metal shards. Hardox publishes impact test data - generic AR plates don&apos;t because
                they can&apos;t guarantee toughness.
              </p>
            </div>
          </div>

          {/* Steel Selection by Material Section */}
          <div id="by-material" className={`scroll-mt-44 md:scroll-mt-48 backdrop-blur-sm rounded-2xl p-8 ${transitionClass} ${
            theme === 'dark'
              ? 'bg-white/5 border-2 border-gray-700'
              : 'bg-white/80 border-2 border-gray-200'
          }`}>
            <h2 className={`text-3xl font-bold mb-6 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              Steel Selection by What You Haul
            </h2>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className={`${
                    theme === 'dark' ? 'bg-gray-800 border-gray-700' : 'bg-gray-100 border-gray-300'
                  } border-b-2`}>
                    <th className={`text-left p-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Material Hauled</th>
                    <th className={`text-left p-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Impact Level</th>
                    <th className={`text-left p-4 ${theme === 'dark' ? 'text-green-400' : 'text-green-600'}`}>Recommended Steel</th>
                    <th className={`text-left p-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Thickness</th>
                    <th className={`text-left p-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Why This Choice</th>
                  </tr>
                </thead>
                <tbody className={`${theme === 'dark' ? 'divide-gray-700' : 'divide-gray-200'} divide-y`}>
                  <tr>
                    <td className={`p-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                      <div className="font-bold">Dirt/Soil/Sand</div>
                      <div className="text-sm text-gray-500">Low impact, high abrasion</div>
                    </td>
                    <td className={`p-4 text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>Low impact, high abrasion</td>
                    <td className={`p-4 font-bold ${theme === 'dark' ? 'text-green-400' : 'text-green-600'}`}>Hardox 500 Tuf</td>
                    <td className={`p-4 text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>5/32&quot; floor, 1/8&quot; sides</td>
                    <td className={`p-4 text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>18% lighter body = more payload capacity for heavy dirt loads</td>
                  </tr>
                  <tr className={theme === 'dark' ? 'bg-white/5' : 'bg-gray-50'}>
                    <td className={`p-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                      <div className="font-bold">Crushed Stone/Gravel</div>
                      <div className="text-sm text-gray-500">Aggregate</div>
                    </td>
                    <td className={`p-4 text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>Moderate impact + sliding</td>
                    <td className={`p-4 font-bold ${theme === 'dark' ? 'text-green-400' : 'text-green-600'}`}>Hardox 500 Tuf</td>
                    <td className={`p-4 text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>5/32&quot; floor, 1/8&quot; sides</td>
                    <td className={`p-4 text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>18% weight savings critical for heavy aggregate loads</td>
                  </tr>
                  <tr>
                    <td className={`p-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                      <div className="font-bold">Hot Asphalt Hauling</div>
                      <div className="text-sm text-gray-500">Hot mix, paving materials</div>
                    </td>
                    <td className={`p-4 text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>Heat + moderate impact</td>
                    <td className={`p-4 font-bold ${theme === 'dark' ? 'text-green-400' : 'text-green-600'}`}>Hardox 500 Tuf</td>
                    <td className={`p-4 text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>5/32&quot; floor, 1/8&quot; sides</td>
                    <td className={`p-4 text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>Weight savings important for dense asphalt loads + heat resistance</td>
                  </tr>
                  <tr className={theme === 'dark' ? 'bg-white/5' : 'bg-gray-50'}>
                    <td className={`p-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                      <div className="font-bold">Salt/Sand Municipal</div>
                      <div className="text-sm text-gray-500">Winter road maintenance</div>
                    </td>
                    <td className={`p-4 text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>Corrosion + abrasion</td>
                    <td className={`p-4 font-bold ${theme === 'dark' ? 'text-purple-400' : 'text-purple-600'}`}>Stainless 304</td>
                    <td className={`p-4 text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>3/16&quot; floor, 5/32&quot; sides</td>
                    <td className={`p-4 text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>Eliminates rust, lighter weight, no painting</td>
                  </tr>
                  <tr>
                    <td className={`p-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                      <div className="font-bold">Construction Debris</div>
                      <div className="text-sm text-gray-500">Demo material, broken concrete</div>
                    </td>
                    <td className={`p-4 text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>Sharp impacts</td>
                    <td className={`p-4 font-bold ${theme === 'dark' ? 'text-green-400' : 'text-green-600'}`}>Hardox 500 Tuf</td>
                    <td className={`p-4 text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>3/16&quot; floor, 5/32&quot; sides</td>
                    <td className={`p-4 text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>Superior toughness handles sharp impacts + 18% weight savings</td>
                  </tr>
                  <tr className={theme === 'dark' ? 'bg-white/5' : 'bg-gray-50'}>
                    <td className={`p-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                      <div className="font-bold">Class II Rip Rap</div>
                      <div className="text-sm text-gray-500">12-18&quot; angular rock (~350 lbs)</div>
                    </td>
                    <td className={`p-4 text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>Significant impact</td>
                    <td className={`p-4 font-bold ${theme === 'dark' ? 'text-green-400' : 'text-green-600'}`}>Hardox 500 Tuf</td>
                    <td className={`p-4 text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>3/16&quot; floor, 5/32&quot; sides</td>
                    <td className={`p-4 text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>Weight savings help offset heavy rock loads</td>
                  </tr>
                  <tr>
                    <td className={`p-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                      <div className="font-bold">Class III Rip Rap</div>
                      <div className="text-sm text-gray-500">18-24&quot; rocks (~750 lbs)</div>
                    </td>
                    <td className={`p-4 text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>750 lb rocks, 6+ ft drops</td>
                    <td className={`p-4 font-bold ${theme === 'dark' ? 'text-green-400' : 'text-green-600'}`}>Hardox 500 Tuf</td>
                    <td className={`p-4 text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>1/4&quot; floor, 3/16&quot; sides</td>
                    <td className={`p-4 text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>Only steel proven to handle 4.9x impact energy</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className={`mt-6 p-4 rounded-lg text-xs ${
              theme === 'dark' ? 'bg-gray-800/50 border border-gray-700' : 'bg-gray-100 border border-gray-300'
            } ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
              <strong>Note:</strong> Material recommendations based on extensive field experience and SSAB technical data.
              Hardox® is a registered trademark of SSAB. Actual steel requirements may vary based on loading height,
              operator technique, climate conditions, and specific material characteristics. Consult with steel experts
              for critical applications.
            </div>
          </div>

          {/* Steel Options Compared Section */}
          <div id="steel-options" className={`scroll-mt-44 md:scroll-mt-48 backdrop-blur-sm rounded-2xl p-8 ${transitionClass} ${
            theme === 'dark'
              ? 'bg-white/5 border-2 border-gray-700'
              : 'bg-white/80 border-2 border-gray-200'
          }`}>
            <h2 className={`text-3xl font-bold mb-6 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              Dump Truck Steel Options Compared
            </h2>
            <p className={`mb-8 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
              Comprehensive comparison of steel grades for dump truck bodies
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Hardox 500 Tuf */}
              <div className={`rounded-xl p-6 ${
                theme === 'dark' ? 'bg-green-500/10 border-2 border-green-500/30' : 'bg-green-50 border-2 border-green-200'
              }`}>
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className={`text-xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                      Hardox 500 Tuf
                    </h3>
                    <div className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>SSAB</div>
                  </div>
                  <div className={`px-3 py-1 rounded-full text-sm font-bold ${
                    theme === 'dark' ? 'bg-green-500/20 text-green-400' : 'bg-green-200 text-green-700'
                  }`}>5/5</div>
                </div>
                <div className={`inline-block px-3 py-1 rounded-lg text-xs font-semibold mb-4 ${
                  theme === 'dark' ? 'bg-blue-500/20 text-blue-400' : 'bg-blue-100 text-blue-700'
                }`}>
                  Best for Rock Bodies
                </div>
                <div className={`space-y-2 text-sm mb-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                  <div><strong>Hardness:</strong> 475-505 HBW</div>
                  <div><strong>Impact Test:</strong> 27J @ -20°C (45J @ -40°C)</div>
                  <div><strong>Cold Weather:</strong> Superior</div>
                  <div><strong>Service Life:</strong> 85% longer</div>
                </div>
                <div className={`text-sm mb-3 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                  <strong>Dump Truck Uses:</strong>
                  <ul className="list-disc ml-5 mt-1">
                    <li>Rock/quarry bodies</li>
                    <li>Mining dump bodies</li>
                    <li>Demo/scrap hauling</li>
                  </ul>
                </div>
                <div className={`text-sm mb-2 ${theme === 'dark' ? 'text-green-400' : 'text-green-600'}`}>
                  <strong>Pros:</strong>
                  <ul className="list-disc ml-5 mt-1">
                    <li>Handles Class III rip rap</li>
                    <li>Excellent cold weather</li>
                    <li>18% weight savings possible</li>
                  </ul>
                </div>
                <div className={`text-sm ${theme === 'dark' ? 'text-red-400' : 'text-red-600'}`}>
                  <strong>Cons:</strong>
                  <ul className="list-disc ml-5 mt-1">
                    <li>Higher initial cost</li>
                  </ul>
                </div>
              </div>

              {/* Hardox 450 */}
              <div className={`rounded-xl p-6 ${
                theme === 'dark' ? 'bg-blue-500/10 border-2 border-blue-500/30' : 'bg-blue-50 border-2 border-blue-200'
              }`}>
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className={`text-xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                      Hardox 450
                    </h3>
                    <div className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>SSAB</div>
                  </div>
                  <div className={`px-3 py-1 rounded-full text-sm font-bold ${
                    theme === 'dark' ? 'bg-blue-500/20 text-blue-400' : 'bg-blue-200 text-blue-700'
                  }`}>4.5/5</div>
                </div>
                <div className={`inline-block px-3 py-1 rounded-lg text-xs font-semibold mb-4 ${
                  theme === 'dark' ? 'bg-blue-500/20 text-blue-400' : 'bg-blue-100 text-blue-700'
                }`}>
                  Good Option
                </div>
                <div className={`space-y-2 text-sm mb-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                  <div><strong>Hardness:</strong> 425-475 HBW</div>
                  <div><strong>Impact Test:</strong> 27J @ -20°C</div>
                  <div><strong>Cold Weather:</strong> Excellent</div>
                  <div><strong>Service Life:</strong> 50% longer</div>
                </div>
                <div className={`text-sm mb-3 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                  <strong>Dump Truck Uses:</strong>
                  <ul className="list-disc ml-5 mt-1">
                    <li>General purpose bodies</li>
                    <li>Asphalt hauling</li>
                    <li>Aggregate hauling</li>
                  </ul>
                </div>
                <div className={`text-sm mb-2 ${theme === 'dark' ? 'text-green-400' : 'text-green-600'}`}>
                  <strong>Pros:</strong>
                  <ul className="list-disc ml-5 mt-1">
                    <li>Good impact/wear balance</li>
                    <li>Easier to form</li>
                    <li>Proven in dump trucks</li>
                  </ul>
                </div>
                <div className={`text-sm ${theme === 'dark' ? 'text-red-400' : 'text-red-600'}`}>
                  <strong>Cons:</strong>
                  <ul className="list-disc ml-5 mt-1">
                    <li>Not for heaviest impacts</li>
                  </ul>
                </div>
              </div>

              {/* Stainless 304 */}
              <div className={`rounded-xl p-6 ${
                theme === 'dark' ? 'bg-purple-500/10 border-2 border-purple-500/30' : 'bg-purple-50 border-2 border-purple-200'
              }`}>
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className={`text-xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                      Stainless 304
                    </h3>
                    <div className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>Various</div>
                  </div>
                  <div className={`px-3 py-1 rounded-full text-sm font-bold ${
                    theme === 'dark' ? 'bg-purple-500/20 text-purple-400' : 'bg-purple-200 text-purple-700'
                  }`}>4.5/5</div>
                </div>
                <div className={`inline-block px-3 py-1 rounded-lg text-xs font-semibold mb-4 ${
                  theme === 'dark' ? 'bg-purple-500/20 text-purple-400' : 'bg-purple-100 text-purple-700'
                }`}>
                  Corrosion King
                </div>
                <div className={`space-y-2 text-sm mb-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                  <div><strong>Hardness:</strong> 170-220 HBW</div>
                  <div><strong>Impact Test:</strong> Excellent toughness</div>
                  <div><strong>Cold Weather:</strong> Excellent</div>
                  <div><strong>Service Life:</strong> 3-4x longer</div>
                </div>
                <div className={`text-sm mb-3 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                  <strong>Dump Truck Uses:</strong>
                  <ul className="list-disc ml-5 mt-1">
                    <li>Salt/sand bodies</li>
                    <li>Fertilizer hauling</li>
                    <li>Municipal trucks</li>
                  </ul>
                </div>
                <div className={`text-sm mb-2 ${theme === 'dark' ? 'text-green-400' : 'text-green-600'}`}>
                  <strong>Pros:</strong>
                  <ul className="list-disc ml-5 mt-1">
                    <li>No painting needed</li>
                    <li>Resists salt/chemicals</li>
                    <li>Lighter than AR steel</li>
                  </ul>
                </div>
                <div className={`text-sm ${theme === 'dark' ? 'text-red-400' : 'text-red-600'}`}>
                  <strong>Cons:</strong>
                  <ul className="list-disc ml-5 mt-1">
                    <li>High initial cost</li>
                    <li>Lower hardness</li>
                  </ul>
                </div>
              </div>

              {/* Creusabro 8000 */}
              <div className={`rounded-xl p-6 ${
                theme === 'dark' ? 'bg-white/5 border-2 border-gray-700' : 'bg-white border-2 border-gray-200'
              }`}>
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className={`text-xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                      Creusabro 8000
                    </h3>
                    <div className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>Industeel</div>
                  </div>
                  <div className={`px-3 py-1 rounded-full text-sm font-bold ${
                    theme === 'dark' ? 'bg-gray-600 text-gray-300' : 'bg-gray-200 text-gray-700'
                  }`}>4.5/5</div>
                </div>
                <div className={`space-y-2 text-sm mb-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                  <div><strong>Hardness:</strong> 370-430 HB</div>
                  <div><strong>Impact Test:</strong> Min 27J @ -20°C</div>
                  <div><strong>Cold Weather:</strong> Good</div>
                  <div><strong>Service Life:</strong> 80% longer</div>
                </div>
                <div className={`text-sm mb-3 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                  <strong>Dump Truck Uses:</strong>
                  <ul className="list-disc ml-5 mt-1">
                    <li>Mining dump bodies</li>
                    <li>Hot material hauling</li>
                    <li>Variable load types</li>
                  </ul>
                </div>
                <div className={`text-sm mb-2 ${theme === 'dark' ? 'text-green-400' : 'text-green-600'}`}>
                  <strong>Pros:</strong>
                  <ul className="list-disc ml-5 mt-1">
                    <li>Work hardens to 500+ HB</li>
                    <li>Heat resistant to 450°C</li>
                    <li>TRIP effect steel</li>
                  </ul>
                </div>
                <div className={`text-sm ${theme === 'dark' ? 'text-red-400' : 'text-red-600'}`}>
                  <strong>Cons:</strong>
                  <ul className="list-disc ml-5 mt-1">
                    <li>Limited availability</li>
                    <li>Higher cost</li>
                  </ul>
                </div>
              </div>

              {/* Quard 450 */}
              <div className={`rounded-xl p-6 ${
                theme === 'dark' ? 'bg-white/5 border-2 border-gray-700' : 'bg-white border-2 border-gray-200'
              }`}>
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className={`text-xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                      Quard 450
                    </h3>
                    <div className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>NLMK</div>
                  </div>
                  <div className={`px-3 py-1 rounded-full text-sm font-bold ${
                    theme === 'dark' ? 'bg-gray-600 text-gray-300' : 'bg-gray-200 text-gray-700'
                  }`}>4/5</div>
                </div>
                <div className={`space-y-2 text-sm mb-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                  <div><strong>Hardness:</strong> 430-480 HB</div>
                  <div><strong>Impact Test:</strong> Available on request</div>
                  <div><strong>Cold Weather:</strong> Very Good</div>
                  <div><strong>Service Life:</strong> 50% longer</div>
                </div>
                <div className={`text-sm mb-3 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                  <strong>Dump Truck Uses:</strong>
                  <ul className="list-disc ml-5 mt-1">
                    <li>Quarry trucks</li>
                    <li>Mining bodies</li>
                    <li>Heavy construction</li>
                  </ul>
                </div>
                <div className={`text-sm mb-2 ${theme === 'dark' ? 'text-green-400' : 'text-green-600'}`}>
                  <strong>Pros:</strong>
                  <ul className="list-disc ml-5 mt-1">
                    <li>Good wear resistance</li>
                    <li>Competitive pricing</li>
                    <li>European quality</li>
                  </ul>
                </div>
                <div className={`text-sm ${theme === 'dark' ? 'text-red-400' : 'text-red-600'}`}>
                  <strong>Cons:</strong>
                  <ul className="list-disc ml-5 mt-1">
                    <li>Impact data not published</li>
                    <li>Limited US distribution</li>
                  </ul>
                </div>
              </div>

              {/* Raex 400 */}
              <div className={`rounded-xl p-6 ${
                theme === 'dark' ? 'bg-white/5 border-2 border-gray-700' : 'bg-white border-2 border-gray-200'
              }`}>
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className={`text-xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                      Raex 400
                    </h3>
                    <div className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>SSAB</div>
                  </div>
                  <div className={`px-3 py-1 rounded-full text-sm font-bold ${
                    theme === 'dark' ? 'bg-gray-600 text-gray-300' : 'bg-gray-200 text-gray-700'
                  }`}>3.5/5</div>
                </div>
                <div className={`space-y-2 text-sm mb-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                  <div><strong>Hardness:</strong> 370-430 HBW</div>
                  <div><strong>Impact Test:</strong> Available on request</div>
                  <div><strong>Cold Weather:</strong> Good</div>
                  <div><strong>Service Life:</strong> 40% longer</div>
                </div>
                <div className={`text-sm mb-3 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                  <strong>Dump Truck Uses:</strong>
                  <ul className="list-disc ml-5 mt-1">
                    <li>Light-duty dump bodies</li>
                    <li>Municipal trucks</li>
                    <li>Farm applications</li>
                  </ul>
                </div>
                <div className={`text-sm mb-2 ${theme === 'dark' ? 'text-green-400' : 'text-green-600'}`}>
                  <strong>Pros:</strong>
                  <ul className="list-disc ml-5 mt-1">
                    <li>Good formability</li>
                    <li>SSAB quality</li>
                    <li>Lower cost than Hardox</li>
                  </ul>
                </div>
                <div className={`text-sm ${theme === 'dark' ? 'text-red-400' : 'text-red-600'}`}>
                  <strong>Cons:</strong>
                  <ul className="list-disc ml-5 mt-1">
                    <li>Impact data not published</li>
                    <li>Lower hardness</li>
                  </ul>
                </div>
              </div>

              {/* Hardox 400 */}
              <div className={`rounded-xl p-6 ${
                theme === 'dark' ? 'bg-white/5 border-2 border-gray-700' : 'bg-white border-2 border-gray-200'
              }`}>
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className={`text-xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                      Hardox 400
                    </h3>
                    <div className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>SSAB</div>
                  </div>
                  <div className={`px-3 py-1 rounded-full text-sm font-bold ${
                    theme === 'dark' ? 'bg-gray-600 text-gray-300' : 'bg-gray-200 text-gray-700'
                  }`}>4/5</div>
                </div>
                <div className={`space-y-2 text-sm mb-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                  <div><strong>Hardness:</strong> 370-430 HBW</div>
                  <div><strong>Impact Test:</strong> 25J @ -40°C typical</div>
                  <div><strong>Cold Weather:</strong> Good</div>
                  <div><strong>Service Life:</strong> 30% longer</div>
                </div>
                <div className={`text-sm mb-3 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                  <strong>Dump Truck Uses:</strong>
                  <ul className="list-disc ml-5 mt-1">
                    <li>Contractor bodies</li>
                    <li>Landscape trucks</li>
                    <li>Light materials</li>
                  </ul>
                </div>
                <div className={`text-sm mb-2 ${theme === 'dark' ? 'text-green-400' : 'text-green-600'}`}>
                  <strong>Pros:</strong>
                  <ul className="list-disc ml-5 mt-1">
                    <li>Good formability</li>
                    <li>Lower cost than 450</li>
                    <li>Wide availability</li>
                  </ul>
                </div>
                <div className={`text-sm ${theme === 'dark' ? 'text-red-400' : 'text-red-600'}`}>
                  <strong>Cons:</strong>
                  <ul className="list-disc ml-5 mt-1">
                    <li>Less wear resistance</li>
                  </ul>
                </div>
              </div>

              {/* AR400 */}
              <div className={`rounded-xl p-6 ${
                theme === 'dark' ? 'bg-yellow-500/10 border-2 border-yellow-500/30' : 'bg-yellow-50 border-2 border-yellow-200'
              }`}>
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className={`text-xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                      AR400
                    </h3>
                    <div className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>Generic</div>
                  </div>
                  <div className={`px-3 py-1 rounded-full text-sm font-bold ${
                    theme === 'dark' ? 'bg-yellow-500/20 text-yellow-400' : 'bg-yellow-200 text-yellow-700'
                  }`}>3/5</div>
                </div>
                <div className={`space-y-2 text-sm mb-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                  <div><strong>Hardness:</strong> 360-440 BHN</div>
                  <div><strong>Impact Test:</strong> No published data</div>
                  <div><strong>Cold Weather:</strong> Good above 0°C</div>
                  <div><strong>Service Life:</strong> Baseline</div>
                </div>
                <div className={`text-sm mb-3 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                  <strong>Dump Truck Uses:</strong>
                  <ul className="list-disc ml-5 mt-1">
                    <li>Farm trucks</li>
                    <li>Soil hauling</li>
                    <li>Warm climate only</li>
                  </ul>
                </div>
                <div className={`text-sm mb-2 ${theme === 'dark' ? 'text-green-400' : 'text-green-600'}`}>
                  <strong>Pros:</strong>
                  <ul className="list-disc ml-5 mt-1">
                    <li>Lowest cost</li>
                    <li>Wide availability</li>
                    <li>OK for dirt/sand</li>
                  </ul>
                </div>
                <div className={`text-sm ${theme === 'dark' ? 'text-red-400' : 'text-red-600'}`}>
                  <strong>Cons:</strong>
                  <ul className="list-disc ml-5 mt-1">
                    <li>No impact guarantees</li>
                    <li>Quality varies</li>
                    <li>Fails in cold weather</li>
                  </ul>
                </div>
              </div>

              {/* AR450 */}
              <div className={`rounded-xl p-6 ${
                theme === 'dark' ? 'bg-orange-500/10 border-2 border-orange-500/30' : 'bg-orange-50 border-2 border-orange-200'
              }`}>
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className={`text-xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                      AR450
                    </h3>
                    <div className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>Generic</div>
                  </div>
                  <div className={`px-3 py-1 rounded-full text-sm font-bold ${
                    theme === 'dark' ? 'bg-orange-500/20 text-orange-400' : 'bg-orange-200 text-orange-700'
                  }`}>2.5/5</div>
                </div>
                <div className={`space-y-2 text-sm mb-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                  <div><strong>Hardness:</strong> 430-480 BHN</div>
                  <div><strong>Impact Test:</strong> No published data</div>
                  <div><strong>Cold Weather:</strong> Fair (brittle)</div>
                  <div><strong>Service Life:</strong> 30% longer</div>
                </div>
                <div className={`text-sm mb-3 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                  <strong>Dump Truck Uses:</strong>
                  <ul className="list-disc ml-5 mt-1">
                    <li>Side liner plates</li>
                    <li>Tailgate liners</li>
                    <li>No structural use</li>
                  </ul>
                </div>
                <div className={`text-sm mb-2 ${theme === 'dark' ? 'text-green-400' : 'text-green-600'}`}>
                  <strong>Pros:</strong>
                  <ul className="list-disc ml-5 mt-1">
                    <li>Moderate cost</li>
                    <li>OK for sliding wear</li>
                  </ul>
                </div>
                <div className={`text-sm ${theme === 'dark' ? 'text-red-400' : 'text-red-600'}`}>
                  <strong>Cons:</strong>
                  <ul className="list-disc ml-5 mt-1">
                    <li>Too brittle for impact</li>
                    <li>Cracks in cold</li>
                    <li>Not for dump floors</li>
                  </ul>
                </div>
              </div>

              {/* T-1/A514 */}
              <div className={`rounded-xl p-6 ${
                theme === 'dark' ? 'bg-white/5 border-2 border-gray-700' : 'bg-white border-2 border-gray-200'
              }`}>
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className={`text-xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                      T-1/A514
                    </h3>
                    <div className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>Various</div>
                  </div>
                  <div className={`px-3 py-1 rounded-full text-sm font-bold ${
                    theme === 'dark' ? 'bg-gray-600 text-gray-300' : 'bg-gray-200 text-gray-700'
                  }`}>4/5</div>
                </div>
                <div className={`space-y-2 text-sm mb-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                  <div><strong>Hardness:</strong> 235-290 HBW</div>
                  <div><strong>Impact Test:</strong> Min 20J @ -50°C</div>
                  <div><strong>Cold Weather:</strong> Excellent</div>
                  <div><strong>Service Life:</strong> Structural only</div>
                </div>
                <div className={`text-sm mb-3 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                  <strong>Dump Truck Uses:</strong>
                  <ul className="list-disc ml-5 mt-1">
                    <li>Body framework</li>
                    <li>Hoist towers</li>
                    <li>Structural components</li>
                  </ul>
                </div>
                <div className={`text-sm mb-2 ${theme === 'dark' ? 'text-green-400' : 'text-green-600'}`}>
                  <strong>Pros:</strong>
                  <ul className="list-disc ml-5 mt-1">
                    <li>High strength</li>
                    <li>Excellent toughness</li>
                    <li>Weldable</li>
                  </ul>
                </div>
                <div className={`text-sm ${theme === 'dark' ? 'text-red-400' : 'text-red-600'}`}>
                  <strong>Cons:</strong>
                  <ul className="list-disc ml-5 mt-1">
                    <li>Not wear resistant</li>
                    <li>Not for dump floors</li>
                  </ul>
                </div>
              </div>

              {/* AR500 - Warning */}
              <div className={`rounded-xl p-6 ${
                theme === 'dark' ? 'bg-red-500/10 border-2 border-red-500/30' : 'bg-red-50 border-2 border-red-300'
              }`}>
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className={`text-xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                      AR500
                    </h3>
                    <div className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>Generic</div>
                  </div>
                  <div className={`px-3 py-1 rounded-full text-sm font-bold ${
                    theme === 'dark' ? 'bg-red-500/20 text-red-400' : 'bg-red-200 text-red-700'
                  }`}>1/5</div>
                </div>
                <div className={`inline-block px-3 py-1 rounded-lg text-xs font-semibold mb-4 ${
                  theme === 'dark' ? 'bg-red-500/20 text-red-400' : 'bg-red-100 text-red-700'
                }`}>
                  DO NOT USE
                </div>
                <div className={`space-y-2 text-sm mb-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                  <div><strong>Hardness:</strong> 460-544 BHN</div>
                  <div><strong>Impact Test:</strong> No published data</div>
                  <div><strong>Cold Weather:</strong> Poor (very brittle)</div>
                  <div><strong>Service Life:</strong> 60% longer wear</div>
                </div>
                <div className={`text-sm mb-3 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                  <strong>Dump Truck Uses:</strong>
                  <ul className="list-disc ml-5 mt-1">
                    <li>DO NOT USE</li>
                    <li>Too brittle</li>
                    <li>Safety hazard</li>
                  </ul>
                </div>
                <div className={`text-sm mb-2 ${theme === 'dark' ? 'text-green-400' : 'text-green-600'}`}>
                  <strong>Pros:</strong>
                  <ul className="list-disc ml-5 mt-1">
                    <li>High hardness only</li>
                  </ul>
                </div>
                <div className={`text-sm ${theme === 'dark' ? 'text-red-400' : 'text-red-600'}`}>
                  <strong>Cons:</strong>
                  <ul className="list-disc ml-5 mt-1">
                    <li>Catastrophic failure risk</li>
                    <li>Shatters on impact</li>
                    <li>Warranty void risk</li>
                  </ul>
                </div>
              </div>

              {/* Hardox 600 */}
              <div className={`rounded-xl p-6 ${
                theme === 'dark' ? 'bg-white/5 border-2 border-gray-700' : 'bg-white border-2 border-gray-200'
              }`}>
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className={`text-xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                      Hardox 600
                    </h3>
                    <div className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>SSAB</div>
                  </div>
                  <div className={`px-3 py-1 rounded-full text-sm font-bold ${
                    theme === 'dark' ? 'bg-gray-600 text-gray-300' : 'bg-gray-200 text-gray-700'
                  }`}>3/5</div>
                </div>
                <div className={`space-y-2 text-sm mb-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                  <div><strong>Hardness:</strong> 570-640 HBW</div>
                  <div><strong>Impact Test:</strong> Limited toughness</div>
                  <div><strong>Cold Weather:</strong> Fair</div>
                  <div><strong>Service Life:</strong> 2x for pure wear</div>
                </div>
                <div className={`text-sm mb-3 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                  <strong>Dump Truck Uses:</strong>
                  <ul className="list-disc ml-5 mt-1">
                    <li>Tailgate liners</li>
                    <li>High-wear zones</li>
                    <li>Non-impact areas only</li>
                  </ul>
                </div>
                <div className={`text-sm mb-2 ${theme === 'dark' ? 'text-green-400' : 'text-green-600'}`}>
                  <strong>Pros:</strong>
                  <ul className="list-disc ml-5 mt-1">
                    <li>Extreme hardness</li>
                    <li>Maximum wear life</li>
                    <li>SSAB quality</li>
                  </ul>
                </div>
                <div className={`text-sm ${theme === 'dark' ? 'text-red-400' : 'text-red-600'}`}>
                  <strong>Cons:</strong>
                  <ul className="list-disc ml-5 mt-1">
                    <li>Not for structural use</li>
                    <li>Limited formability</li>
                    <li>High cost</li>
                  </ul>
                </div>
              </div>

              {/* Strenx 700 */}
              <div className={`rounded-xl p-6 ${
                theme === 'dark' ? 'bg-white/5 border-2 border-gray-700' : 'bg-white border-2 border-gray-200'
              }`}>
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className={`text-xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                      Strenx 700
                    </h3>
                    <div className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>SSAB</div>
                  </div>
                  <div className={`px-3 py-1 rounded-full text-sm font-bold ${
                    theme === 'dark' ? 'bg-gray-600 text-gray-300' : 'bg-gray-200 text-gray-700'
                  }`}>4/5</div>
                </div>
                <div className={`space-y-2 text-sm mb-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                  <div><strong>Hardness:</strong> ≥700 MPa yield</div>
                  <div><strong>Impact Test:</strong> Min 27J @ -40°C</div>
                  <div><strong>Cold Weather:</strong> Excellent</div>
                  <div><strong>Service Life:</strong> Structural steel</div>
                </div>
                <div className={`text-sm mb-3 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                  <strong>Dump Truck Uses:</strong>
                  <ul className="list-disc ml-5 mt-1">
                    <li>Body frames</li>
                    <li>Chassis reinforcement</li>
                    <li>Weight-critical structures</li>
                  </ul>
                </div>
                <div className={`text-sm mb-2 ${theme === 'dark' ? 'text-green-400' : 'text-green-600'}`}>
                  <strong>Pros:</strong>
                  <ul className="list-disc ml-5 mt-1">
                    <li>High strength-to-weight</li>
                    <li>Excellent toughness</li>
                    <li>Weight savings</li>
                  </ul>
                </div>
                <div className={`text-sm ${theme === 'dark' ? 'text-red-400' : 'text-red-600'}`}>
                  <strong>Cons:</strong>
                  <ul className="list-disc ml-5 mt-1">
                    <li>Not wear resistant</li>
                    <li>Structural use only</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className={`mt-6 p-4 rounded-lg text-xs ${
              theme === 'dark' ? 'bg-gray-800/50 border border-gray-700' : 'bg-gray-100 border border-gray-300'
            } ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
              <strong>Note:</strong> Steel grade specifications based on manufacturer published data and independent testing.
              Hardox® is a registered trademark of SSAB. Charpy impact values per ISO 148 and ASTM E23 standards.
              Service life estimates based on field observations in rock quarry applications. Performance may vary with operating conditions.
            </div>
          </div>

          {/* Why Steel Choice Matters */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className={`backdrop-blur-sm rounded-xl p-6 ${transitionClass} ${
              theme === 'dark'
                ? 'bg-white/5 border-2 border-gray-700'
                : 'bg-white/80 border-2 border-gray-200'
            }`}>
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                theme === 'dark' ? 'bg-blue-500/20' : 'bg-blue-100'
              }`}>
                <svg className={`w-6 h-6 ${theme === 'dark' ? 'text-blue-400' : 'text-blue-600'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                </svg>
              </div>
              <h3 className={`text-lg font-bold mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                Payload Capacity
              </h3>
              <p className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                Hardox 500 Tuf allows 18% thinner design = more payload
              </p>
            </div>

            <div className={`backdrop-blur-sm rounded-xl p-6 ${transitionClass} ${
              theme === 'dark'
                ? 'bg-white/5 border-2 border-gray-700'
                : 'bg-white/80 border-2 border-gray-200'
            }`}>
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                theme === 'dark' ? 'bg-purple-500/20' : 'bg-purple-100'
              }`}>
                <svg className={`w-6 h-6 ${theme === 'dark' ? 'text-purple-400' : 'text-purple-600'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <h3 className={`text-lg font-bold mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                Winter Performance
              </h3>
              <p className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                Generic AR cracks below 0°C, Hardox works at -40°C
              </p>
            </div>

            <div className={`backdrop-blur-sm rounded-xl p-6 ${transitionClass} ${
              theme === 'dark'
                ? 'bg-white/5 border-2 border-gray-700'
                : 'bg-white/80 border-2 border-gray-200'
            }`}>
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                theme === 'dark' ? 'bg-green-500/20' : 'bg-green-100'
              }`}>
                <svg className={`w-6 h-6 ${theme === 'dark' ? 'text-green-400' : 'text-green-600'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className={`text-lg font-bold mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                Service Life
              </h3>
              <p className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                Premium steel lasts 85% longer in rock bodies
              </p>
            </div>

            <div className={`backdrop-blur-sm rounded-xl p-6 ${transitionClass} ${
              theme === 'dark'
                ? 'bg-white/5 border-2 border-gray-700'
                : 'bg-white/80 border-2 border-gray-200'
            }`}>
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                theme === 'dark' ? 'bg-orange-500/20' : 'bg-orange-100'
              }`}>
                <svg className={`w-6 h-6 ${theme === 'dark' ? 'text-orange-400' : 'text-orange-600'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className={`text-lg font-bold mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                Safety
              </h3>
              <p className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                Brittle failure creates dangerous projectiles
              </p>
            </div>
          </div>

          {/* Cost Analysis Section */}
          <div id="cost-analysis" className={`scroll-mt-44 md:scroll-mt-48 backdrop-blur-sm rounded-2xl p-8 ${transitionClass} ${
            theme === 'dark'
              ? 'bg-gradient-to-br from-green-500/10 to-blue-500/10 border-2 border-green-500/30'
              : 'bg-gradient-to-br from-green-50 to-blue-50 border-2 border-green-200'
          }`}>
            <h2 className={`text-3xl font-bold mb-6 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              Why Premium Steel Pays for Itself
            </h2>
            <p className={`mb-8 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
              Beyond the obvious durability benefits, choosing the right steel grade delivers measurable financial returns
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              {/* Increased Payload */}
              <div className={`rounded-xl p-6 ${
                theme === 'dark' ? 'bg-white/10' : 'bg-white'
              }`}>
                <h3 className={`text-lg font-bold mb-4 ${theme === 'dark' ? 'text-green-400' : 'text-green-600'}`}>
                  Increased Payload
                </h3>
                <p className={`text-sm mb-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                  More revenue per trip
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className={theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}>Weight Savings</span>
                    <span className={`font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>1,800 lbs</span>
                  </div>
                  <div className="flex justify-between">
                    <span className={theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}>Extra Payload</span>
                    <span className={`font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>+0.9 tons/load</span>
                  </div>
                  <div className="flex justify-between">
                    <span className={theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}>Daily Increase</span>
                    <span className={`font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>+3.6 tons</span>
                  </div>
                  <div className={`pt-3 mt-3 border-t ${theme === 'dark' ? 'border-gray-700' : 'border-gray-300'}`}>
                    <div className="flex justify-between items-center">
                      <span className={`font-bold ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>Annual Revenue Gain</span>
                      <span className={`text-2xl font-black ${theme === 'dark' ? 'text-green-400' : 'text-green-600'}`}>~$50,000</span>
                    </div>
                    <p className={`text-xs mt-1 ${theme === 'dark' ? 'text-gray-500' : 'text-gray-600'}`}>
                      Based on 4 loads/day @ $35/ton
                    </p>
                  </div>
                </div>
              </div>

              {/* Reduced Maintenance */}
              <div className={`rounded-xl p-6 ${
                theme === 'dark' ? 'bg-white/10' : 'bg-white'
              }`}>
                <h3 className={`text-lg font-bold mb-4 ${theme === 'dark' ? 'text-blue-400' : 'text-blue-600'}`}>
                  Reduced Maintenance
                </h3>
                <p className={`text-sm mb-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                  Lower operating costs
                </p>
                <div className="space-y-3 text-sm">
                  <div className={`flex items-start gap-2 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                    <svg className={`w-5 h-5 mt-0.5 flex-shrink-0 ${theme === 'dark' ? 'text-green-400' : 'text-green-600'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <div className="font-semibold">No liner replacements</div>
                      <div className="text-xs text-gray-500">Save $8,000-12,000 mid-life</div>
                    </div>
                  </div>
                  <div className={`flex items-start gap-2 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                    <svg className={`w-5 h-5 mt-0.5 flex-shrink-0 ${theme === 'dark' ? 'text-green-400' : 'text-green-600'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <div className="font-semibold">Less chassis stress</div>
                      <div className="text-xs text-gray-500">Extended truck frame life</div>
                    </div>
                  </div>
                  <div className={`flex items-start gap-2 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                    <svg className={`w-5 h-5 mt-0.5 flex-shrink-0 ${theme === 'dark' ? 'text-green-400' : 'text-green-600'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <div className="font-semibold">Lower hoist wear</div>
                      <div className="text-xs text-gray-500">18% less weight to lift</div>
                    </div>
                  </div>
                  <div className={`flex items-start gap-2 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                    <svg className={`w-5 h-5 mt-0.5 flex-shrink-0 ${theme === 'dark' ? 'text-green-400' : 'text-green-600'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <div className="font-semibold">Higher resale value</div>
                      <div className="text-xs text-gray-500">Premium bodies retain value</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Safety & Liability */}
              <div className={`rounded-xl p-6 ${
                theme === 'dark' ? 'bg-white/10' : 'bg-white'
              }`}>
                <h3 className={`text-lg font-bold mb-4 ${theme === 'dark' ? 'text-orange-400' : 'text-orange-600'}`}>
                  Safety & Liability
                </h3>
                <p className={`text-sm mb-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                  Risk mitigation benefits
                </p>
                <div className="space-y-3 text-sm">
                  <div className={`flex items-start gap-2 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                    <svg className={`w-5 h-5 mt-0.5 flex-shrink-0 ${theme === 'dark' ? 'text-green-400' : 'text-green-600'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <div className="font-semibold">No brittle failure</div>
                      <div className="text-xs text-gray-500">Prevents catastrophic cracks</div>
                    </div>
                  </div>
                  <div className={`flex items-start gap-2 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                    <svg className={`w-5 h-5 mt-0.5 flex-shrink-0 ${theme === 'dark' ? 'text-green-400' : 'text-green-600'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <div className="font-semibold">Warranty protection</div>
                      <div className="text-xs text-gray-500">OEM-approved materials</div>
                    </div>
                  </div>
                  <div className={`flex items-start gap-2 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                    <svg className={`w-5 h-5 mt-0.5 flex-shrink-0 ${theme === 'dark' ? 'text-green-400' : 'text-green-600'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <div className="font-semibold">Insurance benefits</div>
                      <div className="text-xs text-gray-500">Lower claims frequency</div>
                    </div>
                  </div>
                  <div className={`flex items-start gap-2 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                    <svg className={`w-5 h-5 mt-0.5 flex-shrink-0 ${theme === 'dark' ? 'text-green-400' : 'text-green-600'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <div className="font-semibold">OSHA compliance</div>
                      <div className="text-xs text-gray-500">Meet safety standards</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Total Financial Impact */}
            <div className={`rounded-xl p-6 text-center ${
              theme === 'dark' ? 'bg-white/10' : 'bg-white'
            }`}>
              <h3 className={`text-2xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                Total Financial Impact
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div>
                  <div className={`text-sm mb-1 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>Initial Premium</div>
                  <div className={`text-2xl font-bold ${theme === 'dark' ? 'text-orange-400' : 'text-orange-600'}`}>+$5,000</div>
                </div>
                <div>
                  <div className={`text-sm mb-1 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>5-Year Savings</div>
                  <div className={`text-2xl font-bold ${theme === 'dark' ? 'text-green-400' : 'text-green-600'}`}>$250,000+</div>
                </div>
                <div>
                  <div className={`text-sm mb-1 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>ROI Period</div>
                  <div className={`text-2xl font-bold ${theme === 'dark' ? 'text-blue-400' : 'text-blue-600'}`}>&lt; 2 Months</div>
                </div>
                <div>
                  <div className={`text-sm mb-1 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>Net Benefit</div>
                  <div className={`text-2xl font-bold ${theme === 'dark' ? 'text-purple-400' : 'text-purple-600'}`}>50:1</div>
                </div>
              </div>
              <p className={`text-xs mt-4 ${theme === 'dark' ? 'text-gray-500' : 'text-gray-600'}`}>
                Based on typical 20 yd³ rock body operating 4 loads/day. Actual savings vary by application, material density, and operating conditions.
              </p>
            </div>
          </div>

          {/* CTA Section */}
          <div className={`backdrop-blur-sm rounded-2xl p-6 ${transitionClass} ${
            theme === 'dark'
              ? 'bg-blue-500/10 border-2 border-blue-500/30'
              : 'bg-blue-50 border-2 border-blue-200'
          }`}>
            <p className={`text-center mb-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
              Ready to specify the right steel for your dump body?
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/resources/steel-guide"
                className={`px-6 py-3 rounded-lg font-semibold ${transitionClass} ${
                  theme === 'dark'
                    ? 'bg-blue-600 hover:bg-blue-700 text-white'
                    : 'bg-blue-600 hover:bg-blue-700 text-white'
                }`}
              >
                View Hardox Comparison
              </Link>
              <Link
                href="/flat-floor"
                className={`px-6 py-3 rounded-lg font-semibold ${transitionClass} ${
                  theme === 'dark'
                    ? 'bg-orange-600 hover:bg-orange-700 text-white'
                    : 'bg-orange-600 hover:bg-orange-700 text-white'
                }`}
              >
                Explore Our Models
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
