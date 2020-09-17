import React from "react";

import Layout from "../components/Layout";
import SEO from "../components/SEO";

function CommunityPage() {
  return (
    <Layout>
      <SEO title="Community" />
      <section className="mt-6 w-5/6 max-w-4xl mx-auto">
        <h2 className="text-center text-4xl tracking-tight leading-10 font-bold text-gray-900 sm:text-5xl sm:leading-none">
          Community
        </h2>
        <p className="mt-16 text-lg text-gray-700">
          To get in touch with us, please send us an <a className="text-indigo-600 font-bold" href="mailto:projectjobdev@gmail.com" >email</a> or, better yet,
          join our <a className="text-indigo-600 font-bold" target="_blank" rel="noreferrer" href="https://join.slack.com/t/newworkspace-kpx6731/shared_invite/zt-hjsl3mck-4bo1zBHZ4vB3yvGyAAHoIg">
            Slack Community</a> and connect with fellow developers and employers.
        <br /><br />
        </p>
      </section>
    </Layout>
  );
}

export default CommunityPage;
