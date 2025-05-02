import React from 'react'
import Footer from '@/component/footer'
import Image from 'next/image'
import Link from 'next/link'
const TermsAndConditions = () => {
  return (
    <>
    <div className="max-w-4xl mx-auto px-4 py-12">
      <Link href="/" className='flex justify-center items-center mb-10'>
        <Image src="/images/sucka-logo.png" alt="SUCKA PUNCH Logo" width={100} height={100} />
      </Link>
      <h1 className="text-4xl font-bold mb-8">SUCKA PUNCH Terms of Service</h1>
      <div className="space-y-8">
        <section>
          <p className="text-gray-700 leading-relaxed mb-4">
            <strong>Effective Date:</strong> January 1, 2025
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Welcome to SUCKA PUNCH! These Terms of Service Terms govern your access to and use of all SUCKA PUNCH products, services, content, and websites the Services. Please read them carefully. By using our Services, you agree to be bound by these Terms. If you do not agree, do not use our Services.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">1. Eligibility</h2>
          <p className="text-gray-700 leading-relaxed">
            You must be at least 21 years of age (or the age of majority in your jurisdiction) to use our Services. If you are under 21, you may only use the Services under the supervision of a parent or legal guardian who agrees to be bound by these Terms.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">2. Account Registration</h2>
          <p className="text-gray-700 leading-relaxed">
            To access certain features of the Services, you may be required to create an account. You agree to:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Provide accurate, current, and complete information.</li>
            <li>Maintain the security and confidentiality of your login credentials.</li>
            <li>Notify us immediately of any unauthorized use of your account.</li>
            <li>You are responsible for all activities that occur under your account.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">3. Product Use and Safety</h2>
          <p className="text-gray-700 leading-relaxed">
            SUCKA PUNCH provides consumer products. You agree to:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Use all products as intended and follow provided instructions.</li>
            <li>Assume all risk associated with improper use or modification.</li>
            <li>SUCKA PUNCH is not liable for injuries, damages, or losses resulting from misuse of our products.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">4. Payment and Billing</h2>
          <p className="text-gray-700 leading-relaxed">
            All purchases through SUCKA PUNCH are subject to payment in full at the time of order unless otherwise agreed. You agree to:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Provide valid payment information.</li>
            <li>Authorize SUCKA PUNCH to charge the provided payment method.</li>
            <li>Pay any applicable taxes and fees.</li>
            <li>We reserve the right to cancel or refuse any order for any reason.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">5. Returns and Refunds</h2>
          <p className="text-gray-700 leading-relaxed">
            Please refer to our Return Policy for detailed information on returns and refunds. SUCKA PUNCH accepts returns on unused, unopened products within 30 days of purchase. Custom or damaged items may not be eligible for return.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">6. Subscriptions and Auto-Renewals</h2>
          <p className="text-gray-700 leading-relaxed">
            If you purchase a subscription to a SUCKA PUNCH service, it may automatically renew at the end of each term unless you cancel before the renewal date. You may manage or cancel subscriptions in your account settings.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">7. Intellectual Property</h2>
          <p className="text-gray-700 leading-relaxed">
            All content and intellectual property on SUCKA PUNCH platforms—including but not limited to product designs, logos, trademarks, text, images, and video—is owned by SUCKA PUNCH or its licensors. You may not:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Copy, reproduce, distribute, or create derivative works from our content.</li>
            <li>Use any branding or logos without permission.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">8. User Content</h2>
          <p className="text-gray-700 leading-relaxed">
            You may be able to submit content (e.g., reviews, comments, or uploads). By submitting content, you grant SUCKA PUNCH a non-exclusive, royalty-free, worldwide, perpetual license to use, display, reproduce, and distribute your content in connection with the Services. You agree not to submit content that:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Violates any law or rights of others.</li>
            <li>Is false, misleading, or defamatory.</li>
            <li>Contains viruses or malicious code.</li>
          </ul>
          <p className="text-gray-700 leading-relaxed">
            We may remove or moderate content at our discretion.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">9. Prohibited Conduct</h2>
          <p className="text-gray-700 leading-relaxed">
            You agree not to:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Use the Services for unlawful purposes.</li>
            <li>Interfere with or disrupt the operation of the Services.</li>
            <li>Use bots, data mining, or scraping tools.</li>
            <li>Impersonate another person or misrepresent your identity.</li>
          </ul>
          <p className="text-gray-700 leading-relaxed">
            Violations may result in account termination or legal action.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">10. Third-Party Services</h2>
          <p className="text-gray-700 leading-relaxed">
            SUCKA PUNCH may link to or incorporate third-party services or content. We do not control and are not responsible for such services. Your use of third-party services is subject to their respective terms and policies.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">11. Disclaimers</h2>
          <p className="text-gray-700 leading-relaxed">
            The Services are provided &quot;as is&quot; and &quot;as available&quot; without warranties of any kind. To the maximum extent permitted by law, SUCKA PUNCH disclaims all warranties, express or implied, including merchantability, fitness for a particular purpose, and non-infringement. We do not warrant that:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>The Services will be uninterrupted or error-free.</li>
            <li>The information provided is accurate or complete.</li>
            <li>Any defects will be corrected.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">12. Limitation of Liability</h2>
          <p className="text-gray-700 leading-relaxed">
            To the maximum extent permitted by law, SUCKA PUNCH is not liable for any indirect, incidental, consequential, or punitive damages arising out of or related to your use of the Services. Our total liability for any claims under these Terms is limited to the amount you paid for the Services in the twelve months preceding the claim.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">13. Indemnification</h2>
          <p className="text-gray-700 leading-relaxed">
            You agree to defend, indemnify, and hold harmless SUCKA PUNCH, its officers, employees, and agents from and against any claims, liabilities, damages, losses, and expenses (including legal fees) arising out of your use of the Services or violation of these Terms.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">14. Termination</h2>
          <p className="text-gray-700 leading-relaxed">
            We may suspend or terminate your account or access to the Services at any time for any reason, including violation of these Terms. You may also stop using the Services at any time.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">15. Changes to Terms</h2>
          <p className="text-gray-700 leading-relaxed">
            We reserve the right to modify these Terms at any time. When changes are made, we will update the Effective Date. Continued use of the Services after changes constitutes your acceptance of the new Terms.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">16. Governing Law</h2>
          <p className="text-gray-700 leading-relaxed">
            These Terms are governed by the laws of the State of Georgia, without regard to its conflict of laws rules. Any legal action must be brought in the courts located in Fulton County, Georgia.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">17. Contact Information</h2>
          <p className="text-gray-700 leading-relaxed">
            For questions about these Terms, please contact us at:<br />
            Email: info@suckapunch.online.com
          </p>
        </section>

        <p className="text-gray-700 leading-relaxed mt-8">
          Thank you for being a part of SUCKA PUNCH.<br />
        </p>
      </div>
    
    </div>
      <div id="footer">
      <Footer />
    </div>
      </>
  )
}

export default TermsAndConditions