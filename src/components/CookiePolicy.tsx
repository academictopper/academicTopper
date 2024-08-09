import React from 'react';
import { Spotlight } from './ui/Spotlight';

const CookiePolicy = () => {
  return (
    <div className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02] text-white flex flex-col items-center justify-center p-6">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <h1 className="text-4xl font-bold mb-8">Cookie Policy</h1>
      <div className="max-w-3xl text-gray-300">
        <p className="mb-4">
          At Academic Topper, we use cookies and similar tracking technologies to enhance your browsing experience, analyze site traffic, and understand our audience. This Cookie Policy explains how we use cookies, what types of cookies we use, and your choices regarding cookies.
        </p>
        <h2 className="text-2xl font-semibold mb-4">What Are Cookies?</h2>
        <p className="mb-4">
          Cookies are small text files that are stored on your device when you visit a website. They help the website remember your actions and preferences (such as login, language, and other display preferences) over a period of time.
        </p>
        <h2 className="text-2xl font-semibold mb-4">How We Use Cookies</h2>
        <p className="mb-4">
          We use cookies to improve your experience on our website. This includes:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li>Remembering your preferences and settings</li>
          <li>Analyzing site traffic and user behavior</li>
          <li>Delivering personalized content and advertisements</li>
          <li>Improving the performance and functionality of our website</li>
        </ul>
        <h2 className="text-2xl font-semibold mb-4">Your Choices</h2>
        <p className="mb-4">
          You can manage your cookie preferences through your browser settings. Most browsers allow you to block or delete cookies, but doing so may affect your experience on our website.
        </p>
        <p className="mb-4">
          By using our website, you consent to our use of cookies as described in this policy. If you do not agree to the use of cookies, you should adjust your browser settings accordingly or refrain from using our website.
        </p>
        <p>
          For more information about our use of cookies, please contact us.
        </p>
      </div>
    </div>
  );
};

export default CookiePolicy;
