const nodemailer = require('nodemailer');

// Serverless function for sending booking emails
module.exports = async (req, res) => {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, phone, email, date, time, guests, specialRequests } = req.body;

    // Validate required fields
    if (!name || !phone || !date || !time || !guests) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Create transporter using Gmail SMTP
    const transporter = nodemailer.createTransporter({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    // Format booking date
    const bookingDate = new Date(date).toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });

    // Email content
    const emailHTML = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
        <div style="background-color: #6B8E6B; color: white; padding: 20px; text-align: center; border-radius: 10px 10px 0 0;">
          <h1 style="margin: 0; font-size: 24px;">New Table Booking</h1>
          <p style="margin: 5px 0 0 0; opacity: 0.9;">Clay and Cuisine Cafe</p>
        </div>
        
        <div style="background-color: white; padding: 30px; border-radius: 0 0 10px 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
          <h2 style="color: #6B8E6B; margin-top: 0; border-bottom: 2px solid #6B8E6B; padding-bottom: 10px;">Booking Details</h2>
          
          <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
            <tr style="border-bottom: 1px solid #eee;">
              <td style="padding: 12px 0; font-weight: bold; color: #6B8E6B; width: 30%;">Guest Name:</td>
              <td style="padding: 12px 0;">${name}</td>
            </tr>
            <tr style="border-bottom: 1px solid #eee;">
              <td style="padding: 12px 0; font-weight: bold; color: #6B8E6B;">Phone:</td>
              <td style="padding: 12px 0;">${phone}</td>
            </tr>
            ${email ? `
            <tr style="border-bottom: 1px solid #eee;">
              <td style="padding: 12px 0; font-weight: bold; color: #6B8E6B;">Email:</td>
              <td style="padding: 12px 0;">${email}</td>
            </tr>
            ` : ''}
            <tr style="border-bottom: 1px solid #eee;">
              <td style="padding: 12px 0; font-weight: bold; color: #6B8E6B;">Date:</td>
              <td style="padding: 12px 0;">${bookingDate}</td>
            </tr>
            <tr style="border-bottom: 1px solid #eee;">
              <td style="padding: 12px 0; font-weight: bold; color: #6B8E6B;">Time:</td>
              <td style="padding: 12px 0;">${time}</td>
            </tr>
            <tr style="border-bottom: 1px solid #eee;">
              <td style="padding: 12px 0; font-weight: bold; color: #6B8E6B;">Guests:</td>
              <td style="padding: 12px 0;">${guests} ${guests === '1' ? 'Guest' : 'Guests'}</td>
            </tr>
            ${specialRequests ? `
            <tr>
              <td style="padding: 12px 0; font-weight: bold; color: #6B8E6B; vertical-align: top;">Special Requests:</td>
              <td style="padding: 12px 0;">${specialRequests}</td>
            </tr>
            ` : ''}
          </table>
          
          <div style="background-color: #f8f9fa; padding: 15px; border-radius: 5px; margin-top: 20px; border-left: 4px solid #6B8E6B;">
            <p style="margin: 0; color: #666; font-size: 14px;">
              <strong>Note:</strong> Please confirm this booking by contacting the guest directly.
            </p>
          </div>
        </div>
      </div>
    `;

    // Email options
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.BUSINESS_EMAIL,
      subject: 'New Table Booking – Clay and Cuisine Cafe',
      html: emailHTML
    };

    // Send email
    await transporter.sendMail(mailOptions);

    res.status(200).json({ success: true, message: 'Booking email sent successfully' });

  } catch (error) {
    console.error('Email sending error:', error);
    res.status(500).json({ error: 'Failed to send booking email' });
  }
};