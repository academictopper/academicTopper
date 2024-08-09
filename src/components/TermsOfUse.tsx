// pages/terms-of-use.js

import React from 'react';
import { Spotlight } from './ui/Spotlight';

const TermsOfUse = () => {
  return (
    <div className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02] text-gray-100 p-8">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">Terms of Use</h1>

        <p className="mb-4">
          Welcome to Academic Topper. By accessing and using our website, you agree to comply with and be bound by the following terms and conditions of use, which together with our privacy policy govern Academic Topper's relationship with you in relation to this website.
        </p>

        <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
        <p className="mb-4">
          By accessing or using our website, you agree to be bound by these Terms of Use and our Privacy Policy. If you do not agree with these terms, you are prohibited from using or accessing this site.
        </p>

        <h2 className="text-2xl font-semibold mb-4">2. Use of the Site</h2>
        <p className="mb-4">
          The content on this website is for your general information and use only. It is subject to change without notice. Your use of any information or materials on this website is entirely at your own risk, for which we shall not be liable.
        </p>

        <h2 className="text-2xl font-semibold mb-4">3. Intellectual Property</h2>
        <p className="mb-4">
          This website contains material which is owned by or licensed to us. This material includes, but is not limited to, the design, layout, look, appearance, and graphics. Reproduction is prohibited without prior permission.
        </p>

        <h2 className="text-2xl font-semibold mb-4">4. User Conduct</h2>
        <p className="mb-4">
          You agree not to use the site in a way that may impair its performance, corrupt its content, or otherwise reduce the overall functionality of the site. You also agree not to compromise the security of the site or attempt to gain access to secured areas or sensitive information.
        </p>

        <h2 className="text-2xl font-semibold mb-4">5. Limitation of Liability</h2>
        <p className="mb-4">
          Under no circumstances will Academic Topper be liable for any direct, indirect, incidental, or consequential damages that result from the use of, or the inability to use, the website.
        </p>

        <h2 className="text-2xl font-semibold mb-4">6. Governing Law</h2>
        <p className="mb-4">
          These terms and conditions are governed by and construed in accordance with the laws of India, and you irrevocably submit to the exclusive jurisdiction of the courts in India.
        </p>

        <h2 className="text-2xl font-semibold mb-4">7. Changes to Terms</h2>
        <p className="mb-4">
          Academic Topper reserves the right to revise these Terms of Use at any time by updating this page. Your continued use of the site after any changes are made will constitute your acceptance of such changes.
        </p>

        <h2 className="text-2xl font-semibold mb-4">8. Contact Information</h2>
        <p className="mb-4">
          If you have any questions about these Terms of Use, please contact us  using the information on our contact page.
        </p>

        <p className="text-center mt-8">
          <strong>Last Updated:</strong> July 30, 2024
        </p>
      </div>
    </div>
  );
};

export default TermsOfUse;
