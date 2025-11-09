'use client'

import { useTheme } from '../../components/theme-provider'
import { useReducedMotion } from '../../hooks/use-reduced-motion'

export default function WarrantyPage() {
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
        <div className="max-w-4xl mx-auto">
          <h1 className={`text-4xl md:text-5xl font-bold mb-8 ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            Warranty Information
          </h1>

          <div className={`space-y-6 ${
            theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
          }`}>
            <section>
              <h2 className={`text-2xl font-bold mb-4 ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
                Limited Warranty
              </h2>
              <p className="mb-4">
                ROX4D Truck Bodies provides a comprehensive warranty on all our dump truck bodies.
                We stand behind the quality and durability of our products.
              </p>
            </section>

            <section>
              <h2 className={`text-2xl font-bold mb-4 ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
                Coverage Period
              </h2>
              <p className="mb-4">
                Our warranty coverage varies by component and model. Please contact us for specific
                warranty terms and conditions for your particular truck body configuration.
              </p>
            </section>

            <section>
              <h2 className={`text-2xl font-bold mb-4 ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
                What&apos;s Covered
              </h2>
              <ul className="list-disc list-inside space-y-2 mb-4">
                <li>Structural integrity defects</li>
                <li>Manufacturing defects in materials</li>
                <li>Workmanship issues</li>
                <li>Premature wear under normal operating conditions</li>
              </ul>
            </section>

            <section>
              <h2 className={`text-2xl font-bold mb-4 ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
                What&apos;s Not Covered
              </h2>
              <ul className="list-disc list-inside space-y-2 mb-4">
                <li>Normal wear and tear</li>
                <li>Damage from improper use or maintenance</li>
                <li>Modifications not approved by ROX4D</li>
                <li>Damage from accidents or collisions</li>
                <li>Corrosion due to lack of maintenance</li>
              </ul>
            </section>

            <section>
              <h2 className={`text-2xl font-bold mb-4 ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
                Making a Warranty Claim
              </h2>
              <p className="mb-4">
                To file a warranty claim, please contact our customer service team with your
                truck body serial number, purchase date, and detailed description of the issue.
                We will work with you to resolve any covered defects promptly.
              </p>
            </section>

            <section className={`mt-8 p-6 rounded-lg ${
              theme === 'dark' ? 'bg-white/5 border border-gray-700' : 'bg-gray-900/5 border border-gray-300'
            }`}>
              <p className="text-sm">
                This warranty information is provided as a general overview. Complete warranty
                terms and conditions are provided with each truck body purchase. For specific
                warranty details or questions, please contact ROX4D Truck Bodies directly.
              </p>
            </section>
          </div>
        </div>
      </div>
    </main>
  )
}
