import React from 'react';

function Tags({ item }) {
  return (
    <span className="inline-block text-xs mr-2 my-1 uppercase border px-2 text-indigo-600 border-indigo-600 hover:bg-indigo-600 hover:text-indigo-100 cursor-default">
      {item}
    </span>
  )
}

export default Tags