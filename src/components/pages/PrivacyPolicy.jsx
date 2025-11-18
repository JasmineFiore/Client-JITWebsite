
export default function PrivacyPolicy() {
  return (
    <div className="bg-gray-50 py-16 px-4">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-2xl p-8 md:p-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-6 text-center">
          Privacy Policy
        </h1>

        <div className="space-y-6 text-gray-700 leading-relaxed">
          <p>
            By accessing the JIT Institute website, our companion site jit.edu
            or other domains under our control, you are agreeing to be bound by
            these websites Terms and Conditions of Use, all applicable laws and
            regulations, and agree that you are responsible for compliance with
            any applicable local laws. If you do not agree with any of these
            terms, you are prohibited from using or accessing this site.
          </p>

          <p>
            At jitmediainstitute.com (the “Site”), JIT Institute (“we”, “us”,
            “our”) understands that sharing your personal information online
            takes trust. We take online privacy seriously and strive to ensure
            the confidentiality of your personal information. This Privacy
            Policy discusses how your data may be collected and used when you
            visit the Site.
          </p>

          <p>
            By using the Site, you agree to this Privacy Policy and confirm you
            are legally able to form a binding contract. If you do not accept
            these terms, discontinue accessing or using this Site.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8">
            External Links
          </h2>
          <p>
            This Privacy Policy applies only to this Site. Once you click on an
            external link, you leave our Site and are no longer protected under
            this policy. We encourage you to review the privacy policies of
            third-party websites you visit.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8">
            Registration & Information Accuracy
          </h2>
          <p>
            Many Site features require registration. If you register, you must
            provide accurate personal information. Incorrect information may
            impact how we communicate with you.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8">
            Policy Updates
          </h2>
          <p>
            We may update this Privacy Policy at any time. Significant changes
            will be communicated via email or a Site notice, and continued use
            indicates acceptance.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8">
            Site Security Rules
          </h2>
          <ul className="list-disc ml-6 space-y-2">
            <li>Accessing unauthorized data or accounts</li>
            <li>Attempting to breach security or authentication measures</li>
            <li>
              Interfering with Site services (e.g., viruses, flooding, DOS
              attacks)
            </li>
            <li>Sending unsolicited promotional emails</li>
            <li>Forging TCP/IP headers in emails or posts</li>
          </ul>

          <p>Violations may result in civil or criminal actions.</p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8">
            Collection of Non-Personal Information
          </h2>
          <p>
            Even without registration, we may collect non-personally
            identifiable information via:
          </p>
          <ul className="list-disc ml-6 space-y-2">
            <li>Cookies</li>
            <li>Advertising trackers</li>
            <li>
              Log files (browser, device type, IP address, referral website)
            </li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8">
            Personal Information
          </h2>
          <p>
            Personal information (“Personally Identifiable Information”) may
            include your:
          </p>
          <ul className="list-disc ml-6 space-y-2">
            <li>Name</li>
            <li>Email</li>
            <li>Phone number</li>
            <li>Address</li>
            <li>Topics of interest</li>
          </ul>

          <p>
            We use this information to communicate, respond to questions, send
            updates, or offer services.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8">
            Emails You Send to Us
          </h2>
          <p>
            Emails sent to us may be retained and used to address your concern.
            Do not send confidential or proprietary information via email.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8">
            Composite Data
          </h2>
          <p>
            We may combine user information in a non-identifiable form to create
            reports or share insights with third parties. We do not disclose
            personal details without permission.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8">
            How We Use Your Information
          </h2>

          <ul className="list-disc ml-6 space-y-2">
            <li>To provide requested services</li>
            <li>To communicate updates and offers</li>
            <li>To improve Site performance</li>
            <li>To enforce Terms of Service</li>
            <li>To customize user experience</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8">
            Sharing Your Information
          </h2>
          <p>Your data may be shared:</p>
          <ul className="list-disc ml-6 space-y-2">
            <li>To comply with legal processes</li>
            <li>To investigate illegal activities</li>
            <li>In corporate transactions (merger, sale, bankruptcy)</li>
          </ul>

          <h2 className="text-2xl font-semibold">Data Removal Requests</h2>
          <p>
            Email us at <strong>info@jitmediainstitute.com</strong> to request
            removal of your personal information. Verification will be required.
          </p>

          <h2 className="text-2xl font-semibold">
            How We Protect Your Information
          </h2>
          <p>
            We use firewalls, secure servers, and limited access controls.
            However, no system is fully secure, and we cannot guarantee
            protection from all unauthorized access.
          </p>

          <h2 className="text-2xl font-semibold">Disclaimer</h2>
          <p>
            The Site materials are provided “as is”. We make no warranties
            regarding accuracy, performance, or reliability.
          </p>

          <h2 className="text-2xl font-semibold">Limitation of Liability</h2>
          <p>
            We are not liable for any indirect, incidental, or consequential
            damages arising from Site use, interruptions, or data loss.
          </p>

          <h2 className="text-2xl font-semibold">Indemnification</h2>
          <p>
            You agree to indemnify and hold harmless JIT Institute from any
            claims arising from your use of the Site.
          </p>
        </div>

        <p className="text-center mt-10 text-gray-500 text-sm">
          © {new Date().getFullYear()} JIT Institute. All Rights Reserved.
        </p>
      </div>
    </div>
  );
}
