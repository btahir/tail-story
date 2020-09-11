import React from "react";

import Layout from "../components/Layout";
import SEO from "../components/SEO";

function DeveloperPage() {
  return (
    <Layout>
      <SEO title="Developers" />
      <section className="mt-6 w-5/6 max-w-4xl mx-auto">
        <h2 className="text-center text-4xl tracking-tight leading-10 font-bold text-gray-900 sm:text-5xl sm:leading-none">
          For Developers
      </h2>
        <p className="mt-16 text-lg text-gray-700">
          Here is a quick overview of what you can do to build a portfolio on Project Job. 
          <br /><br />You can build a publicly shareable profile once you log in. The profile is empty but you can upload
          your image for a profile avatar and add some details of your job title and skills. 
          <br /><br /> The bottom section has a list of your projects. You can add up to 3 projects to be featured in the projects list.
          This is your chance to stand out so give a nice overview of what went into building that project. Who knows if someone is looking for
          a dev to build them something like that!
          <br /><br /> Here is a quick example of yours truly adding a project.
        </p>
        <iframe
          className="mt-12 w-full max-w-lg mx-auto"
          height="320"
          title="Scrilys Demo"
          src="https://www.youtube.com/embed/s2LRgEUBEuM"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          webkitallowfullscreen="true"
          mozallowfullscreen="true"
        />
      </section>
    </Layout>
  );
}

export default DeveloperPage;
