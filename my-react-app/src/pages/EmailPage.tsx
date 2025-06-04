import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { emailService } from '../services/emailService';
import { useLanguage } from '../contexts/LanguageContext';

interface EmailFormData {
  name: string;
  phone: string;
  email: string;
  subject: string;
  message: string;
  formType?: 'item' | 'partnership';
}

const EmailPage: React.FC = () => {
  const { t } = useLanguage();
  const [searchParams] = useSearchParams();
  const [formData, setFormData] = useState<EmailFormData>({
    name: '',
    phone: '',
    email: '',
    subject: searchParams.get('subject') || '',
    message: searchParams.get('message') || '',
    formType: (searchParams.get('type') as 'item' | 'partnership') || 'item'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  // Update form when URL params change
  useEffect(() => {
    setFormData(prev => ({
      ...prev,
      subject: searchParams.get('subject') || prev.subject,
      message: searchParams.get('message') || prev.message,
      formType: (searchParams.get('type') as 'item' | 'partnership') || prev.formType
    }));
  }, [searchParams]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
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
      const success = await emailService.sendEmail(formData);
      
      if (success) {
        setSubmitStatus({
          type: 'success',
          message: 'Your message has been sent successfully! We will get back to you soon.'
        });
        setFormData({
          name: '',
          phone: '',
          email: '',
          subject: '',
          message: '',
          formType: 'item'
        });
      } else {
        throw new Error('Failed to send email');
      }
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'Failed to send message. Please try again later or contact us directly at info@cleverdetails.com'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pb-12 px-4 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-primary mb-8 text-center">
        {t.contact.title}
      </h1>
      
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

      <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-lg p-8">
        <div className="mb-6">
          <label
            htmlFor="name"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            {t.contact.form.name.label}
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-secondary"
            placeholder={t.contact.form.name.placeholder}
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="phone"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            {t.contact.form.phone.label}
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-secondary"
            placeholder={t.contact.form.phone.placeholder}
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="email"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            {t.contact.form.email.label}
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-secondary"
            placeholder={t.contact.form.email.placeholder}
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="subject"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            {t.contact.form.subject.label}
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-secondary"
            placeholder={t.contact.form.subject.placeholder}
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="message"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            {t.contact.form.message.label}
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={6}
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-secondary"
            placeholder={t.contact.form.message.placeholder}
          />
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            disabled={isSubmitting}
            className={`
              bg-primary hover:bg-secondary text-white font-bold py-3 px-8 rounded
              transition-colors duration-300
              ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}
            `}
          >
            {isSubmitting ? t.contact.form.sending : t.contact.form.submit}
          </button>
        </div>
      </form>
    </div>
  );
};

export default EmailPage; 