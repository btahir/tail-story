import React from "react";
import Step from "./Step";
import { faUser, faSearch, faHandshake } from "@fortawesome/free-solid-svg-icons";

function HowItWorks() {

  return (
    <div className="py-12 px-4">
      <div className="container mx-auto">
        <div className="text-center w-full lg:w-2/3 mx-auto">
          <h2 className="text-2xl md:text-4xl font-bold leading-tight">
            Get matched based on what you work on
          </h2>
          <p className="text-lg py-2 text-gray-800 font-body">
            By leveraging project based hiring, developers get to showcase their work while managers use that to filter for relevant job candidates.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row lg:justify-center items-center py-4 lg:py-16">
          <Step 
            iconSrc={faUser} 
            title="Step #1"
            description="Developers create their profiles and add up to 3 Github Projects to our listings."
          />
          <Step 
            iconSrc={faSearch} 
            title="Step #2"
            description="Hiring managers find projects that are aligned with their teams tech stack and tasks."
          />
          <Step 
            iconSrc={faHandshake} 
            title="Step #3"
            description="Managers can then reach out to the developers to talk about opportunities!"
          />                                       
        </div>
      </div>
    </div>
  )
}

export default HowItWorks;