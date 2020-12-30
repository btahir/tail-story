import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Step({iconSrc, title, description}) {

  return (
    <div className="px-4 w-full md:w-1/3 flex flex-col justify-between items-center mt-16 lg:mt-0">
      <div className="bg-indigo-500 rounded-full p-6">
        <FontAwesomeIcon className="text-white" icon={iconSrc} size="3x" />
      </div>
      <div className="mt-4 text-center">
        <h3 className="mb-2 font-bold text-xl md:text-2xl lg:text-xl">
          {title}
        </h3>
        <p className="text-gray-700">
          {description}
        </p>
      </div>
    </div>
  )
}

export default Step;