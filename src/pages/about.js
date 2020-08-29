import React from "react";

import Layout from "../components/Layout";
import SEO from "../components/SEO";

function AboutPage() {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="About"
      />

      <section className="flex flex-col items-center md:flex-row">
        <div className="md:w-2/3 md:mr-8">
          <blockquote className="pl-4 font-serif leading-loose text-justify border-l-4 border-gray-900">
            All life is an experiment. The more experiments you make the better.
          </blockquote>

          <cite className="block mt-4 text-xs font-bold text-right uppercase">
            – Ralph Waldo Emerson
          </cite>
        </div>
      </section>
    </Layout>
  );
}

export default AboutPage;
