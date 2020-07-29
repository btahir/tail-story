import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

function IndexPage() {

  const handleSignup = () => {
    
  }

  const handleLogin = () => {
    
  }

  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Home"
      />
      <h1>Sign Up for Premium Corgi Content</h1>

      <div className="user-info">
        <button id="left" onClick={handleLogin}>Log In</button>
        <button id="right" onClick={handleSignup}>Sign Up</button>
      </div>

      <div className="corgi-content">
        <div className="content">
          <h2>Free Content</h2>
          <div className="free"></div>
        </div>
        <div className="content">
          <h2>Pro Content</h2>
          <div className="pro"></div>
        </div>
        <div className="content">
          <h2>Premium Content</h2>
          <div className="premium"></div>
        </div>
      </div>
    </Layout>
  );
}

export default IndexPage;
