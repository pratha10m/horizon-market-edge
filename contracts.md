# Horizon Market Edge - API Contracts

## Overview
This document outlines the API contracts between frontend and backend for the Horizon Market Edge institutional trading platform.

---

## Backend APIs

### 1. Newsletter Subscription
**Endpoint:** `POST /api/newsletter`

**Request Body:**
```json
{
  "email": "user@example.com"
}
```

**Response:**
```json
{
  "id": "uuid",
  "email": "user@example.com",
  "subscribed_at": "2024-03-15T10:30:00Z"
}
```

**MongoDB Model:**
- Collection: `newsletter_subscribers`
- Fields: id (string), email (string), subscribed_at (datetime)

---

### 2. Contact Form Submission
**Endpoint:** `POST /api/contact`

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "message": "I'm interested in the Pro plan..."
}
```

**Response:**
```json
{
  "id": "uuid",
  "name": "John Doe",
  "email": "john@example.com",
  "message": "I'm interested in the Pro plan...",
  "submitted_at": "2024-03-15T10:30:00Z",
  "status": "pending"
}
```

**MongoDB Model:**
- Collection: `contact_submissions`
- Fields: id (string), name (string), email (string), message (string), submitted_at (datetime), status (string)

---

## Frontend Implementation Notes

### Current Static Content
- Trade Breakdowns: Static showcase (3 examples)
- Blog Posts: Static showcase (4 articles)
- Pricing Plans: Static display with mock Stripe buttons
- Social Links: Placeholder URLs (Discord, Telegram)

### Forms with Backend Integration
- Newsletter subscription form (connected to /api/newsletter)
- Contact form (connected to /api/contact)

### Toast Notifications
- Using sonner for user feedback
- Success/error states for form submissions

---

## Backend Implementation Tasks

1. **Create MongoDB Models:**
   - NewsletterSubscriber model
   - ContactSubmission model

2. **Create API Endpoints:**
   - POST /api/newsletter - handle email subscriptions
   - POST /api/contact - handle contact form submissions

3. **Validation:**
   - Email format validation
   - Required field checks
   - Duplicate email prevention for newsletter

4. **Error Handling:**
   - Return appropriate HTTP status codes
   - Provide clear error messages

---

## Integration Steps

1. Backend creates models and endpoints as specified
2. Test endpoints using curl or Postman
3. Frontend already configured to call these endpoints
4. Verify form submissions are stored in MongoDB
5. Test error handling and validation

---

## Future Enhancements (Not in Current Scope)
- Stripe payment integration
- Dynamic blog CMS
- Trade breakdown management system
- User authentication
- Admin dashboard