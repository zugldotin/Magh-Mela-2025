# Cashfree Production Setup Guide

## Overview

Your Cashfree payment integration now supports both **sandbox** and **production** environments. The environment is controlled via the `NEXT_PUBLIC_CASHFREE_ENV` environment variable.

## Environment Variables Required

Add the following variables to your `.env.local` file:

```env
# Cashfree Configuration
CASHFREE_APP_ID=your_production_app_id
CASHFREE_SECRET_KEY=your_production_secret_key
NEXT_PUBLIC_CASHFREE_ENV=production

# Base URL (for payment redirects)
NEXT_PUBLIC_BASE_URL=https://your-production-domain.com
```

## Getting Production Credentials

1. **Login to Cashfree Dashboard**: https://merchant.cashfree.com/
2. **Navigate to Developers** → **API Keys**
3. **Switch to Production Mode** (toggle in the top-right corner)
4. **Generate Production API Keys**:
   - Copy the **App ID** (Client ID)
   - Copy the **Secret Key** (Client Secret)
5. **Update your `.env.local`** with these production credentials

## Configuration Steps

### Step 1: Update Environment Variables

In your `.env.local` file:

```env
# For Production
NEXT_PUBLIC_CASHFREE_ENV=production
CASHFREE_APP_ID=your_production_app_id_here
CASHFREE_SECRET_KEY=your_production_secret_key_here
NEXT_PUBLIC_BASE_URL=https://your-domain.com

# For Testing/Sandbox (comment out when in production)
# NEXT_PUBLIC_CASHFREE_ENV=sandbox
# CASHFREE_APP_ID=your_sandbox_app_id_here
# CASHFREE_SECRET_KEY=your_sandbox_secret_key_here
```

### Step 2: Verify Webhook Configuration (if applicable)

If you're using webhooks for payment verification:

1. Go to Cashfree Dashboard → **Developers** → **Webhooks**
2. Set your production webhook URL: `https://your-domain.com/api/payment/webhook`
3. Enable relevant events (e.g., `ORDER_PAID`, `SETTLEMENT`)

### Step 3: Test in Production

Before going live, test with small amounts:

1. Set `NEXT_PUBLIC_CASHFREE_ENV=production`
2. Use real payment credentials
3. Make a test transaction with a small amount (₹1-10)
4. Verify the payment flow works end-to-end

## API Endpoints Used

The integration automatically switches between these endpoints based on `NEXT_PUBLIC_CASHFREE_ENV`:

| Environment    | API Base URL                             | Payment Page URL                              |
| -------------- | ---------------------------------------- | --------------------------------------------- |
| **Sandbox**    | `https://sandbox.cashfree.com/pg/orders` | `https://sandbox.cashfree.com/pg/view/order/` |
| **Production** | `https://api.cashfree.com/pg/orders`     | `https://payments.cashfree.com/order/#`       |

## Files Modified

The following files now support environment-based configuration:

1. ✅ `/app/api/payment/create/route.ts` - Order creation
2. ✅ `/app/api/payment/verify/route.ts` - Payment verification
3. ✅ `/app/api/payment/redirect/route.ts` - Payment redirect handling

## Security Checklist

- [ ] Never commit `.env.local` to version control
- [ ] Store production credentials securely (use environment variables in deployment platform)
- [ ] Enable IP whitelisting in Cashfree dashboard (if available)
- [ ] Set up proper webhook signature verification
- [ ] Use HTTPS for all production URLs
- [ ] Test thoroughly in sandbox before switching to production

## Switching Between Environments

### For Development/Testing (Sandbox):

```env
NEXT_PUBLIC_CASHFREE_ENV=sandbox
```

### For Production:

```env
NEXT_PUBLIC_CASHFREE_ENV=production
```

## Deployment Platforms

### Vercel

Add environment variables in: **Project Settings** → **Environment Variables**

### Netlify

Add environment variables in: **Site Settings** → **Build & Deploy** → **Environment**

### Other Platforms

Refer to your platform's documentation for setting environment variables.

## Troubleshooting

### Issue: "Payment gateway not configured"

- **Solution**: Ensure `CASHFREE_APP_ID` and `CASHFREE_SECRET_KEY` are set correctly

### Issue: Payments failing in production

- **Solution**:
  1. Verify you're using **production** credentials (not sandbox)
  2. Check that `NEXT_PUBLIC_CASHFREE_ENV=production`
  3. Ensure your domain is whitelisted in Cashfree dashboard

### Issue: Redirect URL not working

- **Solution**: Update `NEXT_PUBLIC_BASE_URL` to your actual production domain

## Support

- **Cashfree Documentation**: https://docs.cashfree.com/
- **Cashfree Support**: support@cashfree.com
- **API Reference**: https://docs.cashfree.com/reference/pg-new-apis-endpoint

---

**Last Updated**: December 17, 2025
