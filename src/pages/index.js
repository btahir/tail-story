import React from "react";

import Layout from "../components/Layout";
import SEO from "../components/SEO";
import Card from "../components/Card";
import { useAuth } from "gatsby-theme-firebase";

function IndexPage() {
  const { isLoading } = useAuth();

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
            {/* <input className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-full text-sm focus:outline-none w-full"
              type="search" name="search" placeholder="Search" />               
            <button type="submit" className="absolute top-0 right-0 mt-5 mr-4">
              <svg className="text-gray-600 h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg"
                version="1.1" id="Capa_1" x="0px" y="0px"
                viewBox="0 0 56.966 56.966"
                width="512px" height="512px">
                <path
                  d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
              </svg>
            </button>             */}
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
            {[1,1,1,1].map((item, index) => <Card key={index} />)}
          </div>
        </div>
      }
    </Layout>
  );
}

export default IndexPage;
