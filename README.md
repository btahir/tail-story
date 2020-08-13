# Gatsby Starter Tailwind

Live Demo: https://tail-story.netlify.app/

To start, cd into project directory and run

```
yarn && yarn dev
```

Tailwind starter wih authentication + stripe. Built on the shoulders of

Tailwind Starter: https://github.com/taylorbryant/gatsby-starter-tailwind

Gatsby Theme Firebase: https://github.com/epilande/gatsby-theme-firebase

Stripe Customer Portal: https://www.netlify.com/blog/2020/07/13/manage-subscriptions-and-protect-content-with-stripe/

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

## Firebase Functions

We need to setup firebase functions so Stripe webhooks can call them after events (add subscription, change subscription etc).
Source: https://firebase.google.com/docs/functions/get-started

In the project directory, run


```
firebase login
firebase init functions
```

This will create firebase.json, .firebaserc, functions folder with all the things needed to deploy functions. index.js is where functions live.
You will need to updated .firebaserc for the name of your GCP project.

Add functions to index.js and create deploy.sh file. To deploy functions, cd into the functions directory and run
```
sh deploy.sh
```

### Firebase Function Variables

These are in the deploy.sh file

```
export STRIPE_SIGNING_UPD_SUB=STRIPE_WEBHOOK_SIGNATURE
export STRIPE_TOKEN=STRIPE_SECRET_KEY
export STRIPE_DEFAULT_PRICE_PLAN=STRIPE_PRICE_PLAN
export STRIPE_RETURN_URL=BILLING_PORTAL_RETURN_URL
```

## Stripe

We will use the addSubscription hook to create a Stripe customer on sign up. Then we can leverage the Stripe Customer Portal 
to let the user manage their subscription plan. We can use a updateSubscription webhook to update our databse on any Stripe subscription changes.

