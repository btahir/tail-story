import React from "react";
import TweetEmbed from 'react-tweet-embed';

import Layout from "../components/layout";
import SEO from "../components/seo";

function IndexPage() {

  const TWITTER_DATA = {
    topic: {
      POSITIVE: ['1288557453723021312','1287899851921985538','1287816036201316353'],
      NEGATIVE: ['1288253794309087232','1288567602344792071','1288196706706874369']
    }
  }

  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Home"
      />
      <div className="text-center text-lg font-bold mb-8">Trending Topic</div>
      <div className="flex justify-around">
        <div className="w-1/3">
          <div className="text-center text-lg font-bold text-gray-700 mb-4">Nays</div>
          {TWITTER_DATA.topic.NEGATIVE.map(id => 
            <TweetEmbed id={id} />
          )}          
        </div>
        <div className="border-l-2 h-screen border-gray-400"></div>
        <div className="w-1/3">
          <div className="text-center text-lg font-bold text-gray-700 mb-4">Ayes</div>
          {TWITTER_DATA.topic.POSITIVE.map(id => 
            <TweetEmbed id={id} />
          )}  
        </div>
      </div>
    </Layout>
  );
}

export default IndexPage;
