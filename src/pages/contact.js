import React from "react";

import Layout from "../components/Layout";
import SEO from "../components/SEO";

function ContactPage() {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Contact"
      />
      <section>
        If you have any questions or issues, please send an email to <b>9gansart@gmail.com</b>
      </section>
    </Layout>
  );
}

export default ContactPage;
