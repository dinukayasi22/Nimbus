import React from 'react';

const AboutPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-3xl bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-semibold text-center mb-6">About Us</h1>
        <p className="text-gray-700 text-lg leading-relaxed mb-4">
          Welcome to [Your Company Name]! We are dedicated to providing the best services to our customers.
          Our team is passionate about delivering high-quality solutions that meet your needs. We believe in
          innovation, excellence, and building strong relationships with our clients.
        </p>
        <p className="text-gray-700 text-lg leading-relaxed mb-4">
          Our mission is to create value through our expertise and commitment to excellence. We strive to exceed
          expectations and consistently deliver top-notch results. Whether you're looking for [services/products], we
          have the knowledge and experience to help you achieve your goals.
        </p>
        <p className="text-gray-700 text-lg leading-relaxed">
          Thank you for choosing [Your Company Name]. We look forward to working with you and helping you
          succeed.
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
