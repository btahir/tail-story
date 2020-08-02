import React from "react";

import Layout from "../components/Layout";
import SEO from "../components/SEO";
import { useAuth } from "gatsby-theme-firebase";
import { manageStripeSubscription } from '../utils/stripeActions';

function IndexPage() {
  const { isLoggedIn, profile } = useAuth();
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Home"
      />
      <div className="text-center text-2xl font-bold text-gray-800 tracking-wide" >{isLoggedIn ? `Welcome ${profile.displayName}` : 'Hello!'}</div>
      <div className="flex justify-center mt-10 outline-none">
        {isLoggedIn ?
          // <button onClick={(e) => redirectToCheckout(e, profile.uid)} className="px-4 py-2 bg-teal-400 rounded text-gray-100 focus:outline-none">Buy Now</button>
          <button onClick={() => manageStripeSubscription(profile.uid, 'https://tail-story.netlify.app')} className="px-4 py-2 bg-teal-400 rounded text-gray-100 focus:outline-none">Manage Subscription</button>
          : null
        }
      </div>
    </Layout>
  );
}

export default IndexPage;
