export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-white flex items-center justify-center p-24">
      <div className="bg-white rounded-xl shadow-md p-8 max-w-3xl w-full text-gray-800">
        <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
        <p className="mb-4">Effective Date: August 18, 2025</p>

        <p className="mb-4">
          At Beway Labs, we value your privacy and are committed to protecting your personal data...
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">1. Information We Collect</h2>
        <ul className="list-disc list-inside ml-4 mb-4">
          <li>Contact details you provide (name, email, phone)</li>
          <li>Technical data (IP address, browser type, cookies)</li>
        </ul>

        <h2 className="text-xl font-semibold mt-8 mb-2">2. How We Use Your Data</h2>
        <ul className="list-disc list-inside ml-4 mb-4">
          <li>Provide and manage our services</li>
          <li>Communicate with you</li>
          <li>Improve our offerings</li>
          <li>Ensure legal compliance</li>
        </ul>

        <h2 className="text-xl font-semibold mt-8 mb-2">3. Cookies</h2>
        <p className="mb-4">
          We use cookies to enhance your browsing experience...
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">4. Third-Party Services</h2>
        <p className="mb-4">
          We may use third-party tools (e.g. Google Analytics)...
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">5. Your Rights</h2>
        <p className="mb-4">
          You have the right to access, correct, or delete your data. Contact us at{" "}
          <a href="mailto:legal@bewaylabs.com" className="text-blue-600 underline">
            legal@bewaylabs.com
          </a>.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">6. Changes</h2>
        <p className="mb-4">
          We may update this policy occasionally. Please check this page regularly.
        </p>

        <p>
          For questions or requests, contact us at:{" "}
          <strong>contact@bewaylabs.com</strong>
        </p>
      </div>
    </div>
  );
}
