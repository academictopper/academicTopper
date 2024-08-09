// pages/privacy-policy.js

import React from 'react';
import { Spotlight } from './ui/Spotlight';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02] text-gray-100 p-8">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">Privacy Policy</h1>

        <p className="mb-4">
          Welcome to Academic Topper. Your privacy is important to us. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.
        </p>

        <h2 className="text-2xl font-semibold mb-4">1. Information We Collect</h2>
        <p className="mb-4">
          We may collect personal information such as your name, email address, phone number, and other details that you provide when you register on our site, subscribe to our newsletter, or fill out a form.
        </p>

        <h2 className="text-2xl font-semibold mb-4">2. How We Use Your Information</h2>
        <p className="mb-4">
          We use the information we collect to improve our website, personalize your experience, improve customer service, and send periodic emails regarding your order or other products and services.
        </p>

        <h2 className="text-2xl font-semibold mb-4">3. How We Protect Your Information</h2>
        <p className="mb-4">
          We implement a variety of security measures to maintain the safety of your personal information when you place an order or enter, submit, or access your personal information.
        </p>

        <h2 className="text-2xl font-semibold mb-4">4. Sharing Your Information</h2>
        <p className="mb-4">
          We do not sell, trade, or otherwise transfer to outside parties your personally identifiable information. This does not include trusted third parties who assist us in operating our website, conducting our business, or servicing you, so long as those parties agree to keep this information confidential.
        </p>

        <h2 className="text-2xl font-semibold mb-4">5. Your Consent</h2>
        <p className="mb-4">
          By using our site, you consent to our website privacy policy.
        </p>

        <h2 className="text-2xl font-semibold mb-4">6. Changes to Our Privacy Policy</h2>
        <p className="mb-4">
          If we decide to change our privacy policy, we will post those changes on this page.
        </p>

        <h2 className="text-2xl font-semibold mb-4">7. Contacting Us</h2>
        <p className="mb-4">
          If there are any questions regarding this privacy policy, you may contact us using the information on our contact page.
        </p>

        <p className="text-center mt-8">
          <strong>Last Updated:</strong> July 30, 2024
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
