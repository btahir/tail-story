import React, { useState, useEffect } from "react";

import Layout from "../components/Layout";
import SEO from "../components/SEO";
import Card from "../components/Card";
import { useAuth } from "gatsby-theme-firebase";
import { manageStripeSubscription } from '../utils/stripeActions';
import { getStripeSubscription } from '../utils/firebaseActions';

function IndexPage() {
  const { isLoading, isLoggedIn, profile } = useAuth();
  const [stripePlan, setStripePlan] = useState(null);

  useEffect(() => {
    if (profile) {
      getStripeSubscription(profile.uid)
        .then(res => {
          if (res) {
            setStripePlan(res)
          }
          else {
            setTimeout(
              function () {
                getStripeSubscription(profile.uid)
                  .then(res => setStripePlan(res))
              }, 2500)
          }
        });
    }
  }, [profile])

  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Home"
      />
      {isLoading ? null :
        <div className="justify-center outline-none">
          <ul className="flex">
            <li className="mr-3">
              <a className="inline-block border border-blue-500 rounded py-1 px-3 bg-blue-500 text-white" href="#">Active Pill</a>
            </li>
            <li className="mr-3">
              <a className="inline-block border border-white rounded hover:border-gray-200 text-blue-500 hover:bg-gray-200 py-1 px-3" href="#">Pill</a>
            </li>
          </ul>          
          <div className="flex flex-wrap mt-10">
            {[1,1,1,1].map((item, index) => <Card key={index} />)}
          </div>
        </div>
      }
    </Layout>
  );
}

export default IndexPage;
