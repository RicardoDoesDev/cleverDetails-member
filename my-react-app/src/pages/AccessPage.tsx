import React from 'react';

const AccessPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-serif text-secondary text-center mb-12">Access Information</h1>

      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-primary mb-6">Contact Us</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">Address</h3>
                <p>Marina de Vilamoura</p>
                <p>8125-401 Quarteira</p>
                <p>Portugal</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Phone</h3>
                <p>+351 912 345 678</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Email</h3>
                <p>info@cleverdetails.com</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Business Hours</h3>
                <p>Monday - Sunday: 9:00 AM - 6:00 PM</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-primary mb-6">Send us a Message</h2>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-secondary"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-secondary"
                  required
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-secondary"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-secondary"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-secondary text-white py-2 px-4 rounded-lg hover:bg-secondary-hover transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-12 bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-primary mb-6">Location</h2>
          <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3176.0778307421305!2d-8.126111684745028!3d37.08083797989069!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd1ab45d5c0b2fed%3A0x4acbc8f265d76cc4!2sMarina%20de%20Vilamoura!5e0!3m2!1sen!2spt!4v1647881147757!5m2!1sen!2spt"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccessPage; 