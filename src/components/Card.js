import React from "react";

function Card({ item }) {
	const {title, description, tags, createdAt, starCount } = item;
	
	function numberWithCommas(x) {
		return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	}

	const formattedStarCount = numberWithCommas(starCount);

	return (
		<div className="rounded overflow-hidden m-4">
			<div className="flex justify-between">
				<div className="flex flex-col w-2/3">
					<div className="px-6 py-4">
						<div className="font-bold text-xl mb-2">{title}</div>
						<p className="text-gray-700 text-base">
							{description}
						</p>
					</div>
					<div className="px-6 pt-4 pb-2">
						{tags.map( (tag, index) => 
							<span key={index} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{tag}</span>					
						)}
					</div>
				</div>				
				<div className="flex flex-col justify-start">
					<div className="flex my-2">
						<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
						<div className="ml-2">{formattedStarCount}</div>
					</div>
					<div className="text-gray-600">{createdAt}</div>
				</div>
			</div>
    </div>
  );
}

export default Card;