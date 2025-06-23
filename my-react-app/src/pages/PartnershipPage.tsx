import React, { useState } from 'react';
import { emailService } from '../services/emailService';
import { useLanguage } from '../contexts/LanguageContext';

const PartnershipPage: React.FC = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    businessName: '',
    contactName: '',
    email: '',
    phone: '',
    businessType: '',
    description: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      const success = await emailService.sendPartnershipRequest({
        businessName: formData.businessName,
        contactName: formData.contactName,
        email: formData.email,
        phone: formData.phone,
        businessType: formData.businessType,
        description: formData.description
      });
      
      if (success) {
        setSubmitStatus({
          type: 'success',
          message: 'Your partnership request has been sent successfully! We will get back to you soon.'
        });
        setFormData({
          businessName: '',
          contactName: '',
          email: '',
          phone: '',
          businessType: '',
          description: ''
        });
      } else {
        throw new Error('Failed to send partnership request. Please try again later or contact us directly at marketing@cleverdetails.pt');
      }
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'Failed to send partnership request. Please try again later or contact us directly at marketing@cleverdetails.pt'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        {/* Partnership Benefits */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-primary mb-6 text-center">{t.partnership.title}</h2>
          <div className="flex flex-row items-center justify-center">
            <div className="text-center w-1/2">
              <h3 className="font-bold mb-2 text-secondary text-xl">{t.partnership.benefit1.title}</h3>
              <p className="text-gray-600">{t.partnership.benefit1.description}</p>
            </div>
            <div className="text-center w-1/2">
              <h3 className="font-bold mb-2 text-secondary text-xl">{t.partnership.benefit2.title}</h3>
              <p className="text-gray-600">{t.partnership.benefit2.description}</p>
            </div>
          </div>
        </div>

        {/* Partnership Form */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-primary mb-6">{t.partnership.form.title}</h2>
          
          {submitStatus.type && (
            <div
              className={`mb-6 p-4 rounded ${
                submitStatus.type === 'success'
                  ? 'bg-green-100 text-green-700'
                  : 'bg-red-100 text-red-700'
              }`}
            >
              {submitStatus.message}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="businessName" className="block text-sm font-medium text-gray-700 mb-1">
                  {t.partnership.form.businessName}
                </label>
                <input
                  type="text"
                  id="businessName"
                  name="businessName"
                  value={formData.businessName}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-secondary"
                  required
                />
              </div>
              <div>
                <label htmlFor="contactName" className="block text-sm font-medium text-gray-700 mb-1">
                  {t.partnership.form.contactName}
                </label>
                <input
                  type="text"
                  id="contactName"
                  name="contactName"
                  value={formData.contactName}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-secondary"
                  required
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  {t.partnership.form.email}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-secondary"
                  required
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  {t.partnership.form.phone}
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-secondary"
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="businessType" className="block text-sm font-medium text-gray-700 mb-1">
                {t.partnership.form.businessType.label}
              </label>
              <select
                id="businessType"
                name="businessType"
                value={formData.businessType}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-secondary"
                required
              >
                <option value="">{t.partnership.form.businessType.placeholder}</option>
                <option value="boat-tours">{t.partnership.form.businessType.options.boatTours}</option>
                <option value="restaurants">{t.partnership.form.businessType.options.restaurants}</option>
                <option value="activities">{t.partnership.form.businessType.options.activities}</option>
                <option value="winery">{t.partnership.form.businessType.options.winery}</option>
                <option value="wellness">{t.partnership.form.businessType.options.wellness}</option>
                <option value="chef-service">{t.partnership.form.businessType.options.chefService}</option>
                <option value="other">{t.partnership.form.businessType.options.other}</option>
              </select>
            </div>

            <div>
              <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
                {t.partnership.form.description}
              </label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                rows={4}
                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-secondary"
                required
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={`
                w-full bg-secondary text-white py-3 px-4 rounded-lg hover:bg-secondary-hover transition-colors
                ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}
              `}
            >
              {isSubmitting ? t.partnership.form.submitting : t.partnership.form.submit}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PartnershipPage; 