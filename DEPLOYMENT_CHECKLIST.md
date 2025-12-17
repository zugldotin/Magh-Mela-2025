# 🚀 Cashfree Production Deployment Checklist

## ✅ Code Changes (COMPLETED)

- [x] Updated `/app/api/payment/create/route.ts` to use environment-based URLs
- [x] Updated `/components/EnrollmentModal.tsx` to use environment-based SDK mode
- [x] Added debug logging for troubleshooting

## 📋 Vercel Environment Variables Setup

### Required Variables for Production:

| Variable Name              | Value                           | Where to Get It                                              |
| -------------------------- | ------------------------------- | ------------------------------------------------------------ |
| `NEXT_PUBLIC_CASHFREE_ENV` | `production`                    | Set this manually                                            |
| `CASHFREE_APP_ID`          | Your production App ID          | Cashfree Dashboard → Developers → API Keys (Production mode) |
| `CASHFREE_SECRET_KEY`      | Your production Secret Key      | Cashfree Dashboard → Developers → API Keys (Production mode) |
| `NEXT_PUBLIC_BASE_URL`     | `https://www.prayagrajvisit.in` | Your production domain                                       |

### Steps to Add Variables in Vercel:

1. **Go to Vercel Dashboard**: https://vercel.com/dashboard
2. **Select your project**: Click on "Magh-Mela-2025" or "prayagrajvisit"
3. **Navigate to Settings**: Click "Settings" tab
4. **Go to Environment Variables**: Click "Environment Variables" in the sidebar
5. **Add each variable**:
   - Click "Add New"
   - Enter the variable name (e.g., `NEXT_PUBLIC_CASHFREE_ENV`)
   - Enter the value (e.g., `production`)
   - Select environment: **Production** (uncheck Preview and Development)
   - Click "Save"
6. **Repeat** for all 4 variables above

## 🔑 Getting Production Credentials from Cashfree

1. **Login**: https://merchant.cashfree.com/
2. **Switch to Production**: Toggle in the top-right corner (it should say "Production" not "Sandbox")
3. **Navigate**: Go to **Developers** → **API Keys**
4. **Copy Credentials**:
   - Copy **App ID** (also called Client ID)
   - Copy **Secret Key** (also called Client Secret)
5. **Paste in Vercel**: Add these to your Vercel environment variables

## 🔄 Deploy to Production

After adding environment variables:

### Option 1: Automatic Redeploy

- Vercel will automatically redeploy when you add environment variables

### Option 2: Manual Redeploy

1. Go to **Deployments** tab in Vercel
2. Find the latest deployment
3. Click the **three dots (•••)** menu
4. Click **Redeploy**
5. Confirm the redeployment

### Option 3: Git Push (Recommended)

```bash
git add .
git commit -m "Configure Cashfree for production"
git push origin main
```

## 🧪 Testing Production

After deployment:

1. **Visit**: https://www.prayagrajvisit.in
2. **Open Enrollment Modal**: Click "Book Now" or similar button
3. **Fill Form**: Enter test details
4. **Check Browser Console**:
   - Should see: `🔧 Cashfree Environment: production`
   - Should see: `🌐 Using API URL: https://api.cashfree.com/pg/orders`
5. **Initiate Payment**: Click the payment button
6. **Verify**: Should load Cashfree production payment page (NOT sandbox)

## 🐛 Troubleshooting

### Still seeing sandbox URLs?

- **Clear browser cache**: Hard refresh (Cmd+Shift+R on Mac, Ctrl+Shift+R on Windows)
- **Check environment variables**: Ensure they're set for "Production" environment
- **Verify deployment**: Make sure the latest deployment includes your changes

### Still getting 401 Unauthorized?

- **Verify credentials**: Double-check App ID and Secret Key from Cashfree dashboard
- **Check environment**: Ensure you're in "Production" mode in Cashfree dashboard
- **Check logs**: Look at Vercel function logs for detailed error messages

### Payment session ID invalid?

- This was caused by sandbox/production mismatch - should be fixed now
- Ensure frontend and backend are using the same environment

## 📊 Verify Environment Variables

To check if environment variables are set correctly in Vercel:

1. Go to **Settings** → **Environment Variables**
2. You should see all 4 variables listed
3. Each should show "Production" under the "Environments" column

## 🎯 Expected Behavior After Fix

### Before (Sandbox):

- ❌ API URL: `https://sandbox.cashfree.com/pg/orders`
- ❌ SDK Mode: `sandbox`
- ❌ Payment page: `https://sandbox.cashfree.com/pg/view/order/...`

### After (Production):

- ✅ API URL: `https://api.cashfree.com/pg/orders`
- ✅ SDK Mode: `production`
- ✅ Payment page: `https://payments.cashfree.com/order/#...`

## 🔒 Security Notes

- ✅ Never commit `.env.local` to Git
- ✅ Use Vercel's environment variables for production secrets
- ✅ Keep production and sandbox credentials separate
- ✅ Regularly rotate API keys for security

---

**Status**: Ready for deployment! 🎉

Once you add the environment variables to Vercel and redeploy, your Cashfree integration will work in production mode.
