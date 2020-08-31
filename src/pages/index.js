import React from "react";

import Layout from "../components/Layout";
import SEO from "../components/SEO";

function IndexPage() {

  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Home"
      />
      <div>
        Hello
      </div>
    </Layout>
  );
}

export default IndexPage;
