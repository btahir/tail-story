import React from "react";

import Layout from "../components/Layout1";
import SEO from "../components/SEO1";
import { useAuth } from "gatsby-theme-firebase";

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
        <button className="px-4 py-2 bg-teal-400 rounded text-gray-100 focus:outline-none">Buy Now</button>
      </div>
    </Layout>
  );
}

export default IndexPage;
