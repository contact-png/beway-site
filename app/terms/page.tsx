export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-white flex items-center justify-center p-24">
      <div className="bg-white rounded-xl shadow-md p-8 max-w-3xl w-full text-gray-800">
        <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>
        <p className="mb-4">Effective Date: July 1st, 2025</p>

        <p className="mb-4">
          These Terms of Service (“Terms”) govern your access to and use of the services provided by Beway Labs (“we”, “our”, or “us”). By accessing our website or using our services, you agree to be bound by these Terms.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">1. Services Provided</h2>
        <p className="mb-4">
          We offer fully managed digital services including website creation, custom application development, and AI integration. Services are provided under a fixed monthly subscription, with no upfront payment and full code ownership.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">2. User Responsibilities</h2>
        <ul className="list-disc list-inside ml-4 mb-4">
          <li>You must provide accurate and complete information when subscribing to our services.</li>
          <li>You agree not to use our services for any illegal or unauthorized purposes.</li>
        </ul>

        <h2 className="text-xl font-semibold mt-8 mb-2">3. Payment Terms</h2>
        <p className="mb-4">
          All payments are made monthly in advance. Failure to pay may result in suspension or termination of services. No refunds will be issued for partial months or unused services.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">4. Intellectual Property</h2>
        <p className="mb-4">
          Upon completion and full payment of the subscription period, all code and deliverables become your property. We retain no rights over your product.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">5. Limitation of Liability</h2>
        <p className="mb-4">
          We are not liable for any indirect, incidental, or consequential damages arising from your use of our services. Our total liability shall not exceed the amount paid in the past 3 months.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">6. Modifications</h2>
        <p className="mb-4">
          We reserve the right to update these Terms at any time. Continued use of our services constitutes acceptance of the modified Terms.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">7. Contact</h2>
        <p>
          For questions regarding these Terms, contact us at:{" "}
          <strong>contact@bewaylabs.com</strong>
        </p>
      </div>
    </div>
  );
}
