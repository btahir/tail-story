import React from 'react'
import ExpandLessIcon from '@material-ui/icons/ExpandLess';

const Card = () => {
    return (
        <div className="max-w-xs rounded overflow-hidden shadow-lg m-4">
            {/* <img className="w-full" src="/img/card-top.jpg" alt="Sunset in the mountains"> */}
                <div className="px-6 py-2">
                    <div className="flex justify-between">
                        <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
                        <div className="relative cursor-pointer">                            
                            <ExpandLessIcon />
                            <span className="text-xs absolute right-0 bottom-0">295</span>
                        </div>
                    </div>                    
                    <p className="text-gray-700 text-base">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                    </p>
                </div>
                <div className="px-6 py-2">
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 my-1">#photography</span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 my-1">#travel</span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 my-1">#winter</span>
                </div>
        </div>
    )
}

export default Card;
