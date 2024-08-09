import React from 'react';
import { Spotlight } from './ui/Spotlight';

const ClaimPolicy = () => {
  return (
    <div className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02] text-white flex flex-col items-center justify-center p-6">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <h1 className="text-4xl font-bold mb-8">Claim Policy</h1>
      <div className="max-w-3xl text-gray-300">
        <p className="mb-4">
          At Academic Topper, we are committed to providing accurate and reliable educational resources. However, we acknowledge that errors or disputes may arise. This Claim Policy outlines the steps you can take to address any issues or discrepancies you encounter.
        </p>
        <h2 className="text-2xl font-semibold mb-4">Filing a Claim</h2>
        <p className="mb-4">
          If you believe that any content on our platform is incorrect, misleading, or infringes on your rights, please contact us immediately. Provide as much detail as possible to help us investigate and resolve the issue promptly.
        </p>
        <h2 className="text-2xl font-semibold mb-4">Claim Review Process</h2>
        <p className="mb-4">
          Once a claim is filed, our team will review the information provided. We may contact you for additional details or clarification. Our goal is to resolve all claims fairly and efficiently.
        </p>
        <h2 className="text-2xl font-semibold mb-4">Resolution</h2>
        <p className="mb-4">
          After reviewing your claim, we will take appropriate action, which may include correcting the content, removing the material, or other measures as necessary. We will notify you of the outcome of your claim.
        </p>
        <p>
          Thank you for helping us maintain the quality and integrity of our platform.
        </p>
      </div>
    </div>
  );
};

export default ClaimPolicy;
