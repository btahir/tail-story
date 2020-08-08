import React from "react";

import Layout from "../components/Layout";
import SEO from "../components/SEO";

function SubmitPage() {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Contact"
      />
      <section>
        <form className="mx-auto md:w-1/2">
          <p className="mb-8 leading-loose text-lg">
            Submit your awesome idea!
          </p>

          <label
            className="block mb-2 text-xs font-bold uppercase"
            htmlFor="title"
          >
            Title
          </label>

          <input
            className="w-full mb-6 form-input"
            id="title"
            placeholder="The Coldest Sunset"
            type="text"
          />

          <label
            className="block mb-2 text-xs font-bold uppercase"
            htmlFor="summary"
          >
            Summary
          </label>

          <textarea
            className="w-full mb-6 form-textarea"
            id="summary"
            placeholder="Once upon a time..."
            rows="8"
          />

        <div className="w-full md:w-1/3 mb-10">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-state">
                Category
            </label>
            <div className="relative">
                <select className="block appearance-none w-full border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                    <option>Fantasy</option>
                    <option>Sci-Fi</option>
                    <option>Mystery</option>
                    <option>Romance</option>
                    <option>Fan Fiction</option>
                    <option>Other</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                </div>
            </div>
        </div>          

          <button className="mt-4 px-6 py-2 text-md font-bold text-white bg-gray-700 border-b-4 border-gray-800 rounded hover:border-gray-700 hover:bg-gray-600">
            Submit
          </button>
        </form>
      </section>
    </Layout>
  );
}

export default SubmitPage;
