# Clay and Cuisine Cafe - Email Booking System Setup

## Overview
This system sends table booking details directly to your email whenever a customer submits a booking form.

## Setup Instructions

### 1. Environment Variables
1. Copy `.env.example` to `.env`
2. Update the following variables:
   - `EMAIL_USER`: Your Gmail address
   - `EMAIL_PASS`: Your Gmail App Password (see instructions below)
   - `BUSINESS_EMAIL`: Email where you want to receive bookings

### 2. Gmail App Password Setup
1. Go to your Google Account settings
2. Enable 2-Factor Authentication if not already enabled
3. Go to Security > App passwords
4. Generate a new app password for "Mail"
5. Use the 16-character password as `EMAIL_PASS`

### 3. Deployment Options

#### Option A: Vercel (Recommended)
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts to deploy
4. Add environment variables in Vercel dashboard:
   - EMAIL_USER
   - EMAIL_PASS
   - BUSINESS_EMAIL

#### Option B: Netlify
1. Install Netlify CLI: `npm i -g netlify-cli`
2. Run: `netlify deploy`
3. Add environment variables in Netlify dashboard

#### Option C: AWS Lambda
1. Package the function with dependencies
2. Upload to AWS Lambda
3. Set environment variables in Lambda configuration
4. Configure API Gateway endpoint

### 4. Frontend Configuration
The frontend is already configured to send POST requests to `/api/send-booking-email`

### 5. Testing
1. Submit a test booking through the website
2. Check your business email for the booking notification
3. Verify all booking details are correctly formatted

## Email Template Features
- Professional HTML formatting
- Clay and Cuisine Cafe branding
- All booking details clearly displayed
- Responsive design for mobile email clients
- Special requests handling

## Security Features
- Input validation and sanitization
- Environment variable protection
- Error handling and logging
- CORS protection

## Troubleshooting
- Check environment variables are set correctly
- Verify Gmail App Password is valid
- Check serverless function logs for errors
- Ensure email addresses are valid

## Support
For technical issues, check the serverless function logs in your deployment platform dashboard.