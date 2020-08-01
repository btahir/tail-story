# Gatsby Starter Tailwind

Tailwind starter wih authentication + stripe.

## Firebase

Use firebase for authentication (email + social logins) and store user object in firestore. 
Leverage gatsby-firebase-theme for this.

### Set up env variables

For development, create a .env.development file locally and add these ENV variables. If you want to see gatsby build && serve, you will have to create a .env.production file as well. For netlify, add env variables in UI.

```FIREBASE_API_KEY="<YOURDATA>"
FIREBASE_AUTH_DOMAIN="<YOURDATA>"
FIREBASE_DATABASE_URL="<YOURDATA>"
FIREBASE_PROJECT_ID="<YOURDATA>"
FIREBASE_STORAGE_BUCKET="<YOURDATA>"
FIREBASE_MESSAGING_SENDER_ID="<YOURDATA>"
FIREBASE_APP_ID="<YOURDATA>"```

## Stripe

Use redirectToCheckout function. New Price API instead of Plan API.
Send clientReferenceId as metadata. This can be used to update firestore for isPaying: true, Subscription_Plan info via webhook once checkout complete.
