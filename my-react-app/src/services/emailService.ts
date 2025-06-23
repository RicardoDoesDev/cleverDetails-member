interface BookingRequestData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

interface PartnershipRequestData {
  businessName: string;
  contactName: string;
  email: string;
  phone: string;
  businessType: string;
  description: string;
}

interface ReviewNotificationData {
  itemName: string;
  category: string;
  author: string;
  rating: number;
  comment: string;
}

export const emailService = {
  async sendBookingRequest(data: BookingRequestData): Promise<boolean> {
    try {
      const formattedMessage = `
      New Booking Request
      ------------------

      Contact Details
      --------------
      Name: ${data.name}
      Email: ${data.email}
      Phone: ${data.phone}
      Subject: ${data.subject}

      Message
      -------
      ${data.message}

      ------------------
      Sent from: Clever Details Contact Form
      Date: ${new Date().toLocaleString('en-GB', { 
        dateStyle: 'full',
        timeStyle: 'short',
        timeZone: 'Europe/Lisbon'
      })}`;

            const autoResponse = `
      Dear ${data.name},

      Thank you for contacting Clever Details. We have received your booking request and will get back to you shortly.

      Your Request Details:
      - Subject: ${data.subject}
      - Message: ${data.message}

      We typically respond within 24 hours during business days.
      If you need immediate assistance, please call us at +351 289 314 500.

      Best regards,
      The Clever Details Team

      ------------------
      Vilamoura, Portugal
      www.cleverdetails.com
      +351 289 314 500`;

      const response = await fetch(`https://formsubmit.co/ajax/developing@cleverdetails.pt`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          _captcha: false,
          _subject: `New Booking Request: ${data.subject}`,
          name: data.name,
          email: data.email,
          message: formattedMessage,
          _autoresponse: autoResponse
        })
      });

      if (!response.ok) {
        throw new Error('Failed to send email');
      }

      const result = await response.json();
      return result.success || false;
    } catch (error) {
      console.error('Error sending booking request:', error);
      throw error;
    }
  },

  async sendPartnershipRequest(data: PartnershipRequestData): Promise<boolean> {
    try {
      const formattedMessage = `
      New Partnership Request
      ------------------

      Business Details
      --------------
      Business Name: ${data.businessName}
      Contact Name: ${data.contactName}
      Email: ${data.email}
      Phone: ${data.phone}
      Business Type: ${data.businessType}

      Description
      ----------
      ${data.description}

      ------------------
      Sent from: Clever Details Partnership Form
      Date: ${new Date().toLocaleString('en-GB', { 
        dateStyle: 'full',
        timeStyle: 'short',
        timeZone: 'Europe/Lisbon'
      })}`;

            const autoResponse = `
      Dear ${data.contactName},

      Thank you for your interest in partnering with Clever Details. We have received your partnership request and will review it shortly.

      Your Business Details:
      - Business Name: ${data.businessName}
      - Business Type: ${data.businessType}

      We typically respond within 48 hours during business days.
      If you need immediate assistance, please call us at +351 289 314 500.

      Best regards,
      The Clever Details Team

      ------------------
      Vilamoura, Portugal
      www.cleverdetails.com
      +351 289 314 500`;

      const response = await fetch(`https://formsubmit.co/ajax/marketing@cleverdetails.pt`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          _captcha: false,
          _subject: `New Partnership Request: ${data.businessName} - ${data.businessType}`,
          name: data.contactName,
          email: data.email,
          message: formattedMessage,
          _autoresponse: autoResponse
        })
      });

      if (!response.ok) {
        throw new Error('Failed to send email');
      }

      const result = await response.json();
      return result.success || false;
    } catch (error) {
      console.error('Error sending partnership request:', error);
      throw error;
    }
  },

  async sendReviewNotification(data: ReviewNotificationData): Promise<boolean> {
    try {
      const formattedMessage = `
      New Review Submitted
      ------------------

      Item: ${data.itemName}
      Category: ${data.category}
      Rating: ${data.rating} stars
      Author: ${data.author}

      Comment:
      ${data.comment}

      ------------------
      Submitted on: ${new Date().toLocaleString('en-GB', { 
        dateStyle: 'full',
        timeStyle: 'short',
        timeZone: 'Europe/Lisbon'
      })}`;

      const response = await fetch(`https://formsubmit.co/ajax/marketing@cleverdetails.pt`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          _captcha: false,
          _subject: `New Review for ${data.itemName}`,
          name: data.author,
          email: 'marketing@cleverdetails.pt',
          message: formattedMessage
        })
      });

      if (!response.ok) {
        throw new Error('Failed to send email');
      }

      const result = await response.json();
      return result.success || false;
    } catch (error) {
      console.error('Error sending review notification:', error);
      throw error;
    }
  }
}; 