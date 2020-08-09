import React, { useState, useEffect } from "react";

import Layout from "../components/Layout";
import SEO from "../components/SEO";
import Card from "../components/Card";
import { useAuth } from "gatsby-theme-firebase";
import { readIdeas } from '../utils/firebaseActions';

function IndexPage() {
  const { isLoading } = useAuth();
  const [ideas, setIdeas] = useState(null);

  useEffect(() => {
    readIdeas().then(idea => setIdeas(idea));
    
  },[])

  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Home"
      />
      {isLoading ? null :
        <div className="justify-center outline-none">
          <div className="pt-2 relative mx-auto text-gray-600 text-center max-w-xs mb-16">
            <p>Share your book ideas with the community!</p>
          </div>  
          <ul className="flex">
            <li className="mr-3">
              <a className="inline-block border border-blue-500 rounded py-1 px-3 bg-blue-500 text-white" href="/">Fantasy</a>
            </li>
            <li className="mr-3">
              <a className="inline-block border border-white rounded hover:border-gray-200 text-blue-500 hover:bg-gray-200 py-1 px-3" href="/">Mystery</a>
            </li>
          </ul>          
          <div className="flex flex-wrap mt-10">
            {ideas && ideas.map((item, index) => <Card key={index} item={item} />)}
          </div>
        </div>
      }
    </Layout>
  );
}

export default IndexPage;
