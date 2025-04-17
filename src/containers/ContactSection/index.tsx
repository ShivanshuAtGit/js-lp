'use client';
import React, { useState } from 'react';
import { playFlairFont } from '@/utils/fonts';
import DrawNumber from '@/components/DrawNumber';

const ContactSection = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState({ text: '', type: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage({ text: '', type: '' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ fullName, email, contactNumber }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage({ text: 'Message sent successfully!', type: 'success' });
        setFullName('');
        setEmail('');
        setContactNumber('');
      } else {
        setMessage({ text: data.error || 'Failed to send message.', type: 'error' });
      }
    } catch (error) {
      setMessage({ text: 'An error occurred. Please try again.', type: 'error' });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="NAV_SECTION">
      <div className="max-w-128 px-5 md:px-20 mx-auto">
        <div className="section-grid_child">
          <h2 className={`${playFlairFont.className} t-ternary`}>Contact us</h2>
          <h3
            className={`${playFlairFont.className} t-secondary t-gradient pt-2 sm:pt-4`}
          >
            Jagran Samrat
          </h3>
          <p className="t-para pt-2 sm:pt-4">
            A distinguished artist who uses soulful music to{' '}
            <strong>Sanskritik Virasat</strong> and <strong>Sanskar</strong>{' '}
            into society while bridging Bharat&apos;s rich cultural heritage and
            values.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="section-grid_child mt-8">
          <div className="mb-4">
            <label className="block text-sm text-[#472f37]" htmlFor="fullName">
              Full name
            </label>
            <input
              className="w-full p-2 mt-2 border border-gray-300 rounded"
              type="text"
              id="fullName"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm text-[#472f37]" htmlFor="email">
              Email id
            </label>
            <input
              className="w-full p-2 mt-2 border border-gray-300 rounded"
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-sm text-[#472f37]"
              htmlFor="contactNumber"
            >
              Contact number
            </label>
            <input
              className="w-full p-2 mt-2 border border-gray-300 rounded"
              type="tel"
              id="contactNumber"
              value={contactNumber}
              onChange={(e) => setContactNumber(e.target.value)}
              required
            />
          </div>
          {message.text && (
            <div className={`mb-4 p-2 rounded ${message.type === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
              }`}>
              {message.text}
            </div>
          )}
          <button
            className="w-full p-2 mt-4 bg-[#472f37] text-white rounded disabled:opacity-50"
            type="submit"
            disabled={isLoading}
          >
            {isLoading ? 'Sending...' : 'Submit'}
          </button>
          <DrawNumber number={'04'} />
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
