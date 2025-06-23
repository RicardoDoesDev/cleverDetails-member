import emailjs from '@emailjs/browser';

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

// Initialize EmailJS with your public key
// Get these credentials from EmailJS Dashboard:
// - PUBLIC_KEY: Account → API Keys
// - SERVICE_ID: Email Services
// - TEMPLATE_IDs: Email Templates → Template Settings
emailjs.init(process.env.REACT_APP_EMAILJS_PUBLIC_KEY || '');

// Constants for EmailJS configuration
const EMAIL_SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID || '';
const EMAIL_TEMPLATES = {
  // Template dedicated to booking requests (sends to info@cleverdetails.com)
  BOOKING: process.env.REACT_APP_EMAILJS_BOOKING_TEMPLATE_ID || '',
  // Template shared by partnership requests and reviews (sends to marketing@cleverdetails.pt)
  MARKETING: process.env.REACT_APP_EMAILJS_MARKETING_TEMPLATE_ID || ''
};

// Debug log for configuration
console.log('EmailJS Configuration:', {
  serviceId: EMAIL_SERVICE_ID,
  hasPublicKey: !!process.env.REACT_APP_EMAILJS_PUBLIC_KEY,
  templates: {
    booking: EMAIL_TEMPLATES.BOOKING,
    marketing: EMAIL_TEMPLATES.MARKETING
  }
});

export const emailService = {
  // Uses BOOKING template - sends to info@cleverdetails.com
  async sendBookingRequest(data: BookingRequestData): Promise<boolean> {
    try {
      console.log('Preparing to send booking request:', {
        name: data.name,
        email: data.email,
        subject: data.subject
      });

      const content = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
          <!-- Header with Logo and Title -->
          <div style="background-color: #1a1a1a; padding: 30px 20px; text-align: center;">
            <h1 style="color: #ffffff; margin: 0; font-size: 24px; font-weight: 600;">New Booking Request</h1>
            <p style="color: #D9A95D; margin: 10px 0 0 0; font-size: 16px;">We Love Vilamoura</p>
          </div>

          <!-- Main Content -->
          <div style="padding: 30px; background-color: #ffffff;">
            <!-- Contact Section -->
            <div style="margin-bottom: 30px;">
              <h2 style="color: #1a1a1a; font-size: 20px; margin: 0 0 20px 0; padding-bottom: 10px; border-bottom: 2px solid #D9A95D;">
                Contact Details
              </h2>
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 8px 0; color: #666666; width: 120px;"><strong>Name:</strong></td>
                  <td style="padding: 8px 0; color: #333333;">${data.name}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; color: #666666;"><strong>Email:</strong></td>
                  <td style="padding: 8px 0; color: #333333;">
                    <a href="mailto:${data.email}" style="color: #D9A95D; text-decoration: none;">${data.email}</a>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; color: #666666;"><strong>Phone:</strong></td>
                  <td style="padding: 8px 0; color: #333333;">
                    <a href="tel:${data.phone}" style="color: #D9A95D; text-decoration: none;">${data.phone}</a>
                  </td>
                </tr>
              </table>
            </div>

            <!-- Request Section -->
            <div style="margin-bottom: 30px;">
              <h2 style="color: #1a1a1a; font-size: 20px; margin: 0 0 20px 0; padding-bottom: 10px; border-bottom: 2px solid #D9A95D;">
                Request Details
              </h2>
              <div style="background-color: #f9f9f9; padding: 20px; border-radius: 6px;">
                <p style="margin: 0 0 15px 0; color: #333333;">
                  <strong style="color: #666666;">Subject:</strong><br>
                  ${data.subject}
                </p>
                <p style="margin: 0; color: #333333;">
                  <strong style="color: #666666;">Message:</strong><br>
                  ${data.message}
                </p>
              </div>
            </div>

            <!-- Trust Signals -->
            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee;">
              <p style="color: #666666; font-size: 14px; line-height: 1.6; margin: 0;">
                This is an automated message from the We Love Vilamoura booking system.<br>
                To ensure you receive our communications, please add us to your safe senders list.
              </p>
            </div>
          </div>

          <!-- Footer -->
          <div style="background-color: #f4f4f4; padding: 20px; text-align: center;">
            <p style="margin: 0 0 10px 0; color: #666666; font-size: 14px;">
              Received on: ${new Date().toLocaleString('en-GB', {
                dateStyle: 'full',
                timeStyle: 'short',
                timeZone: 'Europe/Lisbon'
              })}
            </p>
            <p style="margin: 0; color: #666666; font-size: 12px;">
              © ${new Date().getFullYear()} Clever Details - We Love Vilamoura<br>
              <small>This is a secure automated message. Please do not reply directly to this email.</small>
            </p>
          </div>
        </div>
      `;

      const templateParams = {
        to_name: 'Clever Details Booking Team',
        subject: `Booking Request from ${data.name}`,
        title: 'New Booking Request',
        content: content,
        reply_to: data.email,
        date: new Date().toLocaleString('en-GB', {
          dateStyle: 'full',
          timeStyle: 'short',
          timeZone: 'Europe/Lisbon'
        })
      };

      console.log('Sending booking email with params:', templateParams);
      
      const response = await emailjs.send(
        EMAIL_SERVICE_ID,
        EMAIL_TEMPLATES.BOOKING,
        templateParams
      );

      console.log('Booking email sent successfully:', response);
      return true;
    } catch (error) {
      console.error('Error sending booking request:', error);
      if (error instanceof Error) {
        console.error('Error details:', {
          message: error.message,
          stack: error.stack
        });
      }
      throw error;
    }
  },

  // Uses MARKETING template - sends to marketing@cleverdetails.pt
  async sendPartnershipRequest(data: PartnershipRequestData): Promise<boolean> {
    try {
      console.log('Preparing to send partnership request:', {
        businessName: data.businessName,
        email: data.email
      });

      const content = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
          <!-- Header with Logo and Title -->
          <div style="background-color: #1a1a1a; padding: 30px 20px; text-align: center;">
            <h1 style="color: #ffffff; margin: 0; font-size: 24px; font-weight: 600;">New Partnership Request</h1>
            <p style="color: #D9A95D; margin: 10px 0 0 0; font-size: 16px;">We Love Vilamoura</p>
          </div>

          <!-- Main Content -->
          <div style="padding: 30px; background-color: #ffffff;">
            <!-- Business Details Section -->
            <div style="margin-bottom: 30px;">
              <h2 style="color: #1a1a1a; font-size: 20px; margin: 0 0 20px 0; padding-bottom: 10px; border-bottom: 2px solid #D9A95D;">
                Business Details
              </h2>
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 8px 0; color: #666666; width: 120px;"><strong>Business:</strong></td>
                  <td style="padding: 8px 0; color: #333333;">${data.businessName}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; color: #666666;"><strong>Contact:</strong></td>
                  <td style="padding: 8px 0; color: #333333;">${data.contactName}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; color: #666666;"><strong>Email:</strong></td>
                  <td style="padding: 8px 0; color: #333333;">
                    <a href="mailto:${data.email}" style="color: #D9A95D; text-decoration: none;">${data.email}</a>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; color: #666666;"><strong>Phone:</strong></td>
                  <td style="padding: 8px 0; color: #333333;">
                    <a href="tel:${data.phone}" style="color: #D9A95D; text-decoration: none;">${data.phone}</a>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; color: #666666;"><strong>Type:</strong></td>
                  <td style="padding: 8px 0; color: #333333;">${data.businessType}</td>
                </tr>
              </table>
            </div>

            <!-- Description Section -->
            <div style="margin-bottom: 30px;">
              <h2 style="color: #1a1a1a; font-size: 20px; margin: 0 0 20px 0; padding-bottom: 10px; border-bottom: 2px solid #D9A95D;">
                Business Description
              </h2>
              <div style="background-color: #f9f9f9; padding: 20px; border-radius: 6px;">
                <p style="margin: 0; color: #333333;">${data.description}</p>
              </div>
            </div>

            <!-- Trust Signals -->
            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee;">
              <p style="color: #666666; font-size: 14px; line-height: 1.6; margin: 0;">
                This is an automated message from the We Love Vilamoura partnership system.<br>
                To ensure you receive our communications, please add us to your safe senders list.
              </p>
            </div>
          </div>

          <!-- Footer -->
          <div style="background-color: #f4f4f4; padding: 20px; text-align: center;">
            <p style="margin: 0 0 10px 0; color: #666666; font-size: 14px;">
              Received on: ${new Date().toLocaleString('en-GB', {
                dateStyle: 'full',
                timeStyle: 'short',
                timeZone: 'Europe/Lisbon'
              })}
            </p>
            <p style="margin: 0; color: #666666; font-size: 12px;">
              © ${new Date().getFullYear()} Clever Details - We Love Vilamoura<br>
              <small>This is a secure automated message. Please do not reply directly to this email.</small>
            </p>
          </div>
        </div>
      `;

      const templateParams = {
        to_name: 'Clever Details Marketing Team',
        subject: `New Partnership Request: ${data.businessName}`,
        title: 'New Partnership Request',
        content: content,
        reply_to: data.email,
        date: new Date().toLocaleString('en-GB', {
          dateStyle: 'full',
          timeStyle: 'short',
          timeZone: 'Europe/Lisbon'
        })
      };

      console.log('Sending partnership email with params:', templateParams);

      const response = await emailjs.send(
        EMAIL_SERVICE_ID,
        EMAIL_TEMPLATES.MARKETING,
        templateParams
      );

      console.log('Partnership email sent successfully:', response);
      return true;
    } catch (error) {
      console.error('Error sending partnership request:', error);
      if (error instanceof Error) {
        console.error('Error details:', {
          message: error.message,
          stack: error.stack
        });
      }
      throw error;
    }
  },

  // Uses MARKETING template - sends to marketing@cleverdetails.pt
  async sendReviewNotification(data: ReviewNotificationData): Promise<boolean> {
    try {
      console.log('Preparing to send review notification:', {
        itemName: data.itemName,
        author: data.author,
        rating: data.rating
      });

      const content = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
          <!-- Header with Logo and Title -->
          <div style="background-color: #1a1a1a; padding: 30px 20px; text-align: center;">
            <h1 style="color: #ffffff; margin: 0; font-size: 24px; font-weight: 600;">New Review Submitted</h1>
            <p style="color: #D9A95D; margin: 10px 0 0 0; font-size: 16px;">We Love Vilamoura</p>
          </div>

          <!-- Main Content -->
          <div style="padding: 30px; background-color: #ffffff;">
            <!-- Review Details Section -->
            <div style="margin-bottom: 30px;">
              <h2 style="color: #1a1a1a; font-size: 20px; margin: 0 0 20px 0; padding-bottom: 10px; border-bottom: 2px solid #D9A95D;">
                Review Details
              </h2>
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 8px 0; color: #666666; width: 120px;"><strong>Item:</strong></td>
                  <td style="padding: 8px 0; color: #333333;">${data.itemName}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; color: #666666;"><strong>Category:</strong></td>
                  <td style="padding: 8px 0; color: #333333;">${data.category}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; color: #666666;"><strong>Author:</strong></td>
                  <td style="padding: 8px 0; color: #333333;">${data.author}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; color: #666666;"><strong>Rating:</strong></td>
                  <td style="padding: 8px 0;">
                    <span style="color: #D9A95D; font-size: 20px;">${'★'.repeat(data.rating)}${'☆'.repeat(5-data.rating)}</span>
                  </td>
                </tr>
              </table>
            </div>

            <!-- Comment Section -->
            <div style="margin-bottom: 30px;">
              <h2 style="color: #1a1a1a; font-size: 20px; margin: 0 0 20px 0; padding-bottom: 10px; border-bottom: 2px solid #D9A95D;">
                Review Comment
              </h2>
              <div style="background-color: #f9f9f9; padding: 20px; border-radius: 6px;">
                <p style="margin: 0; color: #333333;">${data.comment}</p>
              </div>
            </div>

            <!-- Trust Signals -->
            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee;">
              <p style="color: #666666; font-size: 14px; line-height: 1.6; margin: 0;">
                This is an automated message from the We Love Vilamoura review system.<br>
                To ensure you receive our communications, please add us to your safe senders list.
              </p>
            </div>
          </div>

          <!-- Footer -->
          <div style="background-color: #f4f4f4; padding: 20px; text-align: center;">
            <p style="margin: 0 0 10px 0; color: #666666; font-size: 14px;">
              Received on: ${new Date().toLocaleString('en-GB', {
                dateStyle: 'full',
                timeStyle: 'short',
                timeZone: 'Europe/Lisbon'
              })}
            </p>
            <p style="margin: 0; color: #666666; font-size: 12px;">
              © ${new Date().getFullYear()} Clever Details - We Love Vilamoura<br>
              <small>This is a secure automated message. Please do not reply directly to this email.</small>
            </p>
          </div>
        </div>
      `;

      const templateParams = {
        to_name: 'Clever Details Marketing Team',
        subject: `New Review for ${data.itemName}`,
        title: 'New Review Submitted',
        content: content,
        date: new Date().toLocaleString('en-GB', {
          dateStyle: 'full',
          timeStyle: 'short',
          timeZone: 'Europe/Lisbon'
        })
      };

      console.log('Sending review notification with params:', templateParams);

      const response = await emailjs.send(
        EMAIL_SERVICE_ID,
        EMAIL_TEMPLATES.MARKETING,
        templateParams
      );

      console.log('Review notification sent successfully:', response);
      return true;
    } catch (error) {
      console.error('Error sending review notification:', error);
      if (error instanceof Error) {
        console.error('Error details:', {
          message: error.message,
          stack: error.stack
        });
      }
      throw error;
    }
  }
}; 