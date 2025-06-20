interface EmailData {
  name: string;
  email: string;
  subject: string;
  message: string;
  formType?: 'item' | 'partnership';
}

export const emailService = {
  async sendEmail(data: EmailData): Promise<boolean> {
    try {
      const formattedMessage = `
${data.formType === 'partnership' ? 'New Partnership Request' : 'New Booking Request'}
------------------

Contact Details
--------------
Name: ${data.name}
Email: ${data.email}
Subject: ${data.subject}

Message
-------
${data.message}

------------------
Sent from: Clever Details ${data.formType === 'partnership' ? 'Partnership' : 'Contact'} Form
Date: ${new Date().toLocaleString('en-GB', { 
  dateStyle: 'full',
  timeStyle: 'short',
  timeZone: 'Europe/Lisbon'
})}`;

      const autoResponse = `
Dear ${data.name},

Thank you for contacting Clever Details. We have received your ${data.formType === 'partnership' ? 'partnership request' : 'booking request'} and will get back to you shortly.

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

      const targetEmail = data.formType === 'partnership' ? 'marketing@cleverdetails.pt' : 'developing@cleverdetails.pt';

      const response = await fetch(`https://formsubmit.co/ajax/${targetEmail}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          _captcha: false,
          _subject: `${data.formType === 'partnership' ? 'New Partnership Request' : 'New Booking Request'}: ${data.subject}`,
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
      console.error('Error sending email:', error);
      throw error;
    }
  }
}; 