import React from 'react'
import ExpandLessIcon from '@material-ui/icons/ExpandLess';

const Card = ( {item} ) => {
    const {title, summary} = item
    return (
        <div className="max-w-xs rounded overflow-hidden shadow-lg m-4">
            {/* <img className="w-full" src="/img/card-top.jpg" alt="Sunset in the mountains"> */}
                <div className="px-6 py-2">
                    <div className="flex justify-between my-2">
                    <div className="font-bold text-xl mb-2">{title}</div>
                        <div className="relative cursor-pointer">                            
                            <ExpandLessIcon />
                            <span className="text-xs absolute right-0 bottom-0">295</span>
                        </div>
                    </div>                    
                    <p className="text-gray-700 text-base">
                        {summary}
                    </p>
                </div>
                <div className="px-6 py-2">
                    {/* <span className="">created:</span> */}
                </div>
        </div>
    )
}

export default Card;
