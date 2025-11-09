'use client'

import { useTheme } from '../../components/theme-provider'
import { useReducedMotion } from '../../hooks/use-reduced-motion'

export default function TermsPage() {
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
            Terms & Conditions
          </h1>

          <div className={`space-y-6 ${
            theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
          }`}>
            <section>
              <p className="mb-4 text-sm">
                Last Updated: {new Date().toLocaleDateString()}
              </p>
            </section>

            <section>
              <h2 className={`text-2xl font-bold mb-4 ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
                1. Acceptance of Terms
              </h2>
              <p className="mb-4">
                By accessing and using this website, you accept and agree to be bound by the terms
                and provision of this agreement. If you do not agree to these terms, please do not
                use this website.
              </p>
            </section>

            <section>
              <h2 className={`text-2xl font-bold mb-4 ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
                2. Use License
              </h2>
              <p className="mb-4">
                Permission is granted to temporarily access the materials on ROX4D Truck Bodies&apos;
                website for personal, non-commercial transitory viewing only. This is the grant of
                a license, not a transfer of title.
              </p>
              <p className="mb-4">Under this license you may not:</p>
              <ul className="list-disc list-inside space-y-2 mb-4 ml-4">
                <li>Modify or copy the materials</li>
                <li>Use the materials for any commercial purpose</li>
                <li>Attempt to decompile or reverse engineer any software</li>
                <li>Remove any copyright or proprietary notations</li>
              </ul>
            </section>

            <section>
              <h2 className={`text-2xl font-bold mb-4 ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
                3. Product Information
              </h2>
              <p className="mb-4">
                ROX4D Truck Bodies reserves the right to modify product specifications, features,
                and pricing without prior notice. All product information is subject to change and
                should be verified before purchase.
              </p>
            </section>

            <section>
              <h2 className={`text-2xl font-bold mb-4 ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
                4. Limitation of Liability
              </h2>
              <p className="mb-4">
                In no event shall ROX4D Truck Bodies or its suppliers be liable for any damages
                arising out of the use or inability to use the materials on this website, even if
                ROX4D or an authorized representative has been notified of the possibility of such damage.
              </p>
            </section>

            <section>
              <h2 className={`text-2xl font-bold mb-4 ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
                5. Accuracy of Materials
              </h2>
              <p className="mb-4">
                The materials appearing on ROX4D Truck Bodies&apos; website could include technical,
                typographical, or photographic errors. ROX4D does not warrant that any of the
                materials on its website are accurate, complete, or current.
              </p>
            </section>

            <section>
              <h2 className={`text-2xl font-bold mb-4 ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
                6. Intellectual Property
              </h2>
              <p className="mb-4">
                All content on this website, including but not limited to text, graphics, logos,
                images, and software, is the property of ROX4D Truck Bodies and is protected by
                copyright and other intellectual property laws.
              </p>
            </section>

            <section>
              <h2 className={`text-2xl font-bold mb-4 ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
                7. Governing Law
              </h2>
              <p className="mb-4">
                These terms and conditions are governed by and construed in accordance with the
                laws of the jurisdiction in which ROX4D Truck Bodies operates.
              </p>
            </section>

            <section>
              <h2 className={`text-2xl font-bold mb-4 ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
                8. Changes to Terms
              </h2>
              <p className="mb-4">
                ROX4D Truck Bodies may revise these terms of service at any time without notice.
                By using this website, you are agreeing to be bound by the then-current version
                of these terms.
              </p>
            </section>

            <section>
              <h2 className={`text-2xl font-bold mb-4 ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}>
                9. Contact Information
              </h2>
              <p className="mb-4">
                If you have any questions about these Terms & Conditions, please contact
                ROX4D Truck Bodies directly.
              </p>
            </section>

            <section className={`mt-8 p-6 rounded-lg ${
              theme === 'dark' ? 'bg-white/5 border border-gray-700' : 'bg-gray-900/5 border border-gray-300'
            }`}>
              <p className="text-sm">
                These terms and conditions are provided as a general framework. For complete legal
                terms or specific questions, please contact ROX4D Truck Bodies directly.
              </p>
            </section>
          </div>
        </div>
      </div>
    </main>
  )
}
