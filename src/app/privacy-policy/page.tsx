import React from 'react'
import Footer from '@/component/footer'
import Link from 'next/link'
import Image from 'next/image'
const PrivacyPolicy = () => {
  return (
    <>
  
    <div className="max-w-4xl mx-auto px-4 py-12">
    <Link href="/" className='flex justify-center items-center mb-10'>
        <Image src="/images/sucka-logo.png" alt="SUCKA PUNCH Logo" width={100} height={100} />
      </Link>
      <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
      <div className="space-y-8">
        <section>
          <p className="text-gray-700 leading-relaxed">
            This Privacy Policy outlines how SUCKA PUNCH (“we,” “us,” or “our”) collects, uses, and protects the personal information of users (“you”) who visit and interact with our website, www.suckapunch.online (the “Site”). By using the Site, you agree to the terms outlined in this Privacy Policy.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">1. Information We Collect</h2>
          <p className="text-gray-700 leading-relaxed mb-2 font-semibold">Personally Identifiable Information (PII):</p>
          <p className="text-gray-700 leading-relaxed mb-2">
            We collect personally identifiable information that you provide to us voluntarily when you:
          </p>
          <ul className="list-disc pl-6 space-y-1 text-gray-700">
            <li>Create an account</li>
            <li>Sign up for a newsletter or promotional material</li>
            <li>Make a purchase</li>
            <li>Submit a contact form or feedback</li>
            <li>Participate in surveys or interactive features</li>
            <li>Communicate with us via email or other means</li>
          </ul>
          <p className="text-gray-700 leading-relaxed mt-2 mb-2">
            The types of PII we may collect include:
          </p>
          <ul className="list-disc pl-6 space-y-1 text-gray-700">
            <li>Full name</li>
            <li>Email address</li>
            <li>Postal address</li>
            <li>Phone number</li>
            <li>Payment or transaction information</li>
            <li>Any other data you provide directly through forms, chats, or emails</li>
          </ul>
          <p className="text-gray-700 leading-relaxed mt-4 mb-2 font-semibold">Non-Personally Identifiable Information:</p>
          <p className="text-gray-700 leading-relaxed mb-2">
            We may collect data that does not directly identify you, including:
          </p>
          <ul className="list-disc pl-6 space-y-1 text-gray-700">
            <li>IP address</li>
            <li>Browser type</li>
            <li>Device type and settings</li>
            <li>Pages visited and interactions on the Site</li>
            <li>Referral sources</li>
            <li>Time spent on the Site</li>
            <li>Demographic information such as age, location, and interests (if provided voluntarily)</li>
          </ul>
          <p className="text-gray-700 leading-relaxed mt-2">
            This information is generally collected via automated tools, including cookies and web analytics.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">2. Cookies and Tracking Technologies</h2>
          <p className="text-gray-700 leading-relaxed">
            We use cookies and other tracking technologies to:
          </p>
          <ul className="list-disc pl-6 space-y-1 text-gray-700">
            <li>Enhance your experience on the Site</li>
            <li>Analyze trends and improve site functionality</li>
            <li>Customize content and advertising to your preferences</li>
            <li>Track Site performance</li>
          </ul>
          <p className="text-gray-700 leading-relaxed mt-2">
            Cookies are small files stored on your device that allow us to remember your preferences and login details. You can disable cookies in your browser settings, but this may limit your ability to use certain features of the Site.
          </p>
          <p className="text-gray-700 leading-relaxed mt-2">
            We also use third-party analytics tools (e.g., Google Analytics) to collect information about your use of the Site, such as pages viewed and actions taken.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">3. IP Addresses</h2>
          <p className="text-gray-700 leading-relaxed">
            We collect and use IP addresses for various purposes, including:
          </p>
          <ul className="list-disc pl-6 space-y-1 text-gray-700">
            <li>Diagnosing issues with our servers</li>
            <li>Analyzing website traffic</li>
            <li>Preventing fraudulent activity</li>
            <li>Enhancing security</li>
          </ul>
          <p className="text-gray-700 leading-relaxed mt-2">
            IP addresses do not contain personally identifiable information and are used for system administration and broad demographic analysis.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">4. How We Use Your Information</h2>
          <p className="text-gray-700 leading-relaxed">
            We use the information we collect for the following purposes:
          </p>
          <ul className="list-disc pl-6 space-y-1 text-gray-700">
            <li>To operate and maintain the Site</li>
            <li>To process transactions or fulfill orders</li>
            <li>To respond to customer inquiries or requests</li>
            <li>To send updates, promotional material, and marketing communications</li>
            <li>To improve and personalize your experience on the Site</li>
            <li>To ensure compliance with legal obligations and enforce our Terms of Use</li>
            <li>To detect, prevent, and address fraud or security issues</li>
          </ul>
          <p className="text-gray-700 leading-relaxed mt-2">
            We may also combine your information with data from third-party sources (e.g., payment processors) to improve accuracy and customer service.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">5. Sharing Your Information</h2>
          <p className="text-gray-700 leading-relaxed">
            We do not sell your personal information. However, we may share your information in the following cases:
          </p>
          <ul className="list-disc pl-6 space-y-1 text-gray-700">
            <li>
              <span className="font-semibold">Service Providers:</span> We may share information with third-party vendors or service providers who help us operate the Site, process payments, and send communications. These third parties are obligated to protect your data and use it only for the purposes we specify.
            </li>
            <li>
              <span className="font-semibold">Business Transactions:</span> In the event of a merger, acquisition, or sale of assets, your information may be transferred to the new entity.
            </li>
            <li>
              <span className="font-semibold">Legal Requirements:</span> We may disclose your information when required by law or in response to legal requests from authorities, including law enforcement agencies.
            </li>
            <li>
              <span className="font-semibold">Partners and Affiliates:</span> We may share your information with trusted partners or affiliates for purposes such as promotions, joint ventures, or other business-related activities. You will always have the option to opt out of such sharing.
            </li>
          </ul>
          <p className="text-gray-700 leading-relaxed mt-2">
            We will not share your personal information with third parties for their own marketing purposes without your explicit consent.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">6. User-Generated Content</h2>
          <p className="text-gray-700 leading-relaxed">
            If you choose to post any content on the Site, including but not limited to comments, reviews, messages, or forum posts, you acknowledge that such content is publicly available and may be viewed, collected, and used by others. Exercise caution when sharing personal information in these areas.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">7. Data Security</h2>
          <p className="text-gray-700 leading-relaxed">
            We implement reasonable security measures to protect your personal information. These include encryption, firewalls, and secure server protocols. However, please be aware that no method of data transmission over the internet is 100% secure, and we cannot guarantee the absolute security of your information.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">8. Your Rights and Choices</h2>
          <p className="text-gray-700 leading-relaxed mb-2 font-semibold">Opting Out of Communications:</p>
          <p className="text-gray-700 leading-relaxed mb-2">
            You may opt out of receiving marketing or promotional emails from us by clicking the “unsubscribe” link in any email you receive. Alternatively, you can contact us directly at <a href="mailto:info@suckapunch.online.com" className="underline">info@suckapunch.online.com</a> to request removal from our mailing list.
          </p>
          <p className="text-gray-700 leading-relaxed mb-2 font-semibold">Access and Correction:</p>
          <p className="text-gray-700 leading-relaxed mb-2">
            You have the right to access, update, or delete any personal information we hold about you. To exercise this right, please contact us at <a href="mailto:info@suckapunch.online.com" className="underline">info@suckapunch.online.com</a>.
          </p>
          <p className="text-gray-700 leading-relaxed mb-2 font-semibold">Data Retention:</p>
          <p className="text-gray-700 leading-relaxed">
            We retain your information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">9. Third-Party Links</h2>
          <p className="text-gray-700 leading-relaxed">
            The Site may contain links to external websites that are not operated or controlled by us. We are not responsible for the privacy practices or content of these third-party sites. We encourage you to review their privacy policies before providing them with any personal information.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">10. International Users</h2>
          <p className="text-gray-700 leading-relaxed">
            By accessing the Site, you consent to the transfer of your information to the United States and any other country where we or our service providers operate. Please be aware that data protection laws may vary by jurisdiction.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">11. Childrens Privacy</h2>
          <p className="text-gray-700 leading-relaxed">
            The Site is not intended for children under the age of 13. We do not knowingly collect personal information from children. If we learn that we have inadvertently collected information from a child, we will take steps to delete it as soon as possible.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">12. Changes to This Privacy Policy</h2>
          <p className="text-gray-700 leading-relaxed">
            We may update this Privacy Policy from time to time. Any changes will be posted on this page, along with the updated Effective Date. We encourage you to review this Privacy Policy periodically to stay informed about how we are protecting your information.
          </p>
          <p className="text-gray-700 leading-relaxed mt-2">
            <strong>Effective Date:</strong> May 2, 2025
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">13. Contact Us</h2>
          <p className="text-gray-700 leading-relaxed">
            If you have any questions or concerns regarding this Privacy Policy or our data practices, please contact us at: <a href="mailto:info@suckapunch.online.com" className="underline">info@suckapunch.online.com</a>
          </p>
          <p className="text-gray-700 leading-relaxed mt-2">
            This is the most up-to-date version of the Privacy Policy for SUCKA PUNCH.
          </p>
        </section>
      </div>
     
    </div>
    <div id="footer">
        <Footer />
      </div>
    </>
  )
}

export default PrivacyPolicy