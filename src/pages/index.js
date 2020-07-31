import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import { useAuth } from "gatsby-theme-firebase";

function IndexPage() {
  const { isLoggedIn, profile } = useAuth();
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Home"
      />
      <div className="text-center text-2xl font-bold text-gray-800 tracking-wide" >{isLoggedIn ? `Welcome ${profile.displayName}` : 'Please Sign In'}</div>

  
    </Layout>
  );
}

export default IndexPage;
