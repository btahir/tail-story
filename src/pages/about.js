import React from "react";

import Layout from "../components/Layout";
import SEO from "../components/SEO";

function AboutPage() {
  return (
    <Layout>
      <SEO title="About" />
      <section className="mt-6 w-5/6 max-w-4xl mx-auto">
        <h2 className="text-center text-4xl tracking-tight leading-10 font-bold text-gray-900 sm:text-5xl sm:leading-none">
          What's this about?
      </h2>
        <p className="mt-16 text-lg text-gray-700">
          We keep hearing it: hiring is broken.
        <br /><br /> Managers keep getting frustrated when its taking months to hire good talent. Often - when new hires come onboard it turns out to be a mismatch
        leading to even more frustration and waste of resources.
        <br />< br /> Meanwhile developers are endlessly complaining, for valid reasons, about not getting noticed and having to go through gate keepers that
        have a very surface level understanding of the project requirements. Often - when they do get a chance, the dreaded algo-full interview process prevents them from joining
        a team they would have otherwise conributed greatly to.
        <br /><br /> Everyone says we need to change this situation, yet the information gap between employer and potential employee is stubbornly still there. In an age
        of accelerating change where the speed of execution can often be the deciding factor in a company's success, and especially with the move towards remote work, the need to
        fill this gap is more crucial than ever.
      </p>
        <h3 className="my-8 text-center text-4xl tracking-tight leading-10 font-bold text-gray-900 sm:leading-none">
          Project Based Hiring
      </h3>
      <p className="mt-12 text-lg text-gray-700">
        The hiring problem is a complicated one and there are a lot of parts that need fixing before we get to a much better state. We believe one solution that can
        help mitigate this gap is project based hiring.
        <br /><br />The idea is simple. Usually an employer starts with a perfect candidate in mind and tries to match them to an available job. We think there is utiility in flipping this script.
        So rather than the perfect candidate, search for projects that closely match your requirements. If you have to build a React app with a Python Flask API backend, then search for projects that
        have those. And then, if you like what you see, contact the developer who created them. There are inherent advantages to this approach.
        <br /><br /><b>You match with better candidates.</b> Turns out the person who's already built a React app with a Python Flask API is very likely a good candidate for bulding a React App with a Python Flask API.
        By focusing on what they have done, you can filter for the right developer.
        <br /><br /> <b>They hit the ground running.</b> Since they have already done projects that are similar to your requirements, they will onboard faster and be able to contribute faster.
        <br /><br /> <b>You can discover hidden gems.</b> There are a lot of great developers who are ignored by HR of big companies because they don't fit their image of
        what a developer at their company should be like e.g. they went to a coding bootcamp instead of having a CS degree.
      </p>
      <h3 className="my-8 text-center text-4xl tracking-tight leading-10 font-bold text-gray-900 sm:leading-none">
          Not for everyone
      </h3>   
      <p className="mt-12 text-lg text-gray-700">
        We realize this is not a universal solution and not for everyone. We don't expect the FAANG companies to drop their established hiring practices and adopt
        this philosophy. For a lot of bigger companies, the algo-fueled multi-month hiring process makes sense.
        <br /><br /> Where we see this approach really working is for smaller companies and for short term hires / contract roles. For those use cases, often time employers are looking for 
        developers to do a project or two. And project based hiring is ideal for finding that developer who can execute effectively on that project.

      </p>   
      </section>
    </Layout>
  );
}

export default AboutPage;
