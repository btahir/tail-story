import React, { useContext } from "react";
import { GlobalStateContext } from '../context/GlobalContextProvider';
import imgCard from '../images/abduction-illustration.svg';

function Card({ children }) {
	const themeState = useContext(GlobalStateContext);

	let style = themeState.theme === 'light' ? 'flex flex-col min-h-screen font-sans text-gray-900 bg-gray-100' : 'flex flex-col min-h-screen font-sans text-gray-100 bg-gray-800';

	return (
		<div className="max-w-xs rounded overflow-hidden shadow-lg m-4">
			<img className="w-full h-40" src={imgCard} alt="Sunset in the mountains" />
			<div className="px-6 py-4">
				<div className="font-bold text-xl mb-2">The Coldest Sunset</div>
				<p className="text-gray-700 text-base">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
				</p>
			</div>
			<div className="px-6 pt-4 pb-2">
				<span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
				<span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
				<span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
			</div>
    </div>
  );
}

export default Card;