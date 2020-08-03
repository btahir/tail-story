# Gatsby Starter Tailwind

Tailwind starter wih authentication + stripe.

## Firebase

Use firebase for authentication (email + social logins) and store user object in firestore. 
Leverage gatsby-firebase-theme for this.

### Set up env variables

For development, create a .env.development file locally and add these ENV variables. If you want to see gatsby build && serve, you will have to create a .env.production file as well. For netlify, add env variables in UI.

```
FIREBASE_API_KEY="<YOURDATA>"
FIREBASE_AUTH_DOMAIN="<YOURDATA>"
FIREBASE_DATABASE_URL="<YOURDATA>"
FIREBASE_PROJECT_ID="<YOURDATA>"
FIREBASE_STORAGE_BUCKET="<YOURDATA>"
FIREBASE_MESSAGING_SENDER_ID="<YOURDATA>"
FIREBASE_APP_ID="<YOURDATA>"
```

## Stripe

Use redirectToCheckout function. New Price API instead of Plan API.
Send clientReferenceId as metadata. This can be used to update firestore for isPaying: true, Subscription_Plan info via webhook once checkout complete.

## Firebase Functions

We need to setup firebase functions so Sripe webhooks can call them after events (add subscription, change subscription etc).
Source: https://firebase.google.com/docs/functions/get-started

In tail-story, run


```
firebase login
firebase init functions
```

This will create firebase.json, .firebaserc, functions folder with all the things needed to deploy functions. index.js is where functions live.
See saas-generator for Hamza's bash deployment.

### Firebase variables
These are in the deploy.sh file

```
export STRIPE_SIGNING_UPD_SUB=STRIPE_WEBHOOK_SIGNATURE
export STRIPE_TOKEN=STRIPE_SECRET_KEY
export STRIPE_DEFAULT_PRICE_PLAN=STRIPE_PRICE_PLAN
export STRIPE_RETURN_URL=BILLING_PORTAL_RETURN_URL
```


