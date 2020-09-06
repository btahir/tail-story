import React, { useState, useEffect } from "react";
import Card from "./Card";
import { getAllProjects } from "../utils/firebaseActions";

const DATA = [
  {
    id: 123,
    title: 'ImageMin API',
    description: 'I spun up a FastAPI server using the base docker image and deployed an API to compress images.',
    tags: ['python','docker','image compression','opencv','api'],
    author: '124222',
    createdAt: 'Sun Aug 30 2020',
    starCount: 123,
  },
  {
    id: 124,
    title: 'Funnier Reddit',
    description: 'I used React and Redux to build a Reddit clone. It\'s way slicker and funnier.',
    tags: ['react','redux','javascript','web app'],
    author: '124222',
    createdAt: 'Sat July 21 2019',
    starCount: 5,
  },
  {
    id: 125,
    title: 'Covid Dating',
    description: 'I built a covid dating app. You can submit Covid negative resuls and get verified and then go on dates. Weird.',
    tags: ['java','sql','social media','vue'],
    author: '1242898',
    createdAt: 'Thur June 21 2020',
    starCount: 4216,
  },
  {
    id: 126,
    title: 'Hotdog NotHotdog App',
    description: 'I deployed a ML model using a Flask API that categorizes things into Hotdogs and Not Hotdogs. The client side is built using React.',
    tags: ['python','machine learning','computer vision','flask','react'],
    author: '124254554',
    createdAt: 'Mon Aug 21 2020',
    starCount: 23,
  },      
]

function Main() {
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    getAllProjects().then(res => setFilteredData(res))
  }, [])

  const filterResults = (searchTerm) => {
    if(searchTerm === '') {
      getAllProjects().then(res => setFilteredData(res))
      return
    }
    let results = []
    getAllProjects().then((res) => {
      res.forEach(el => (
        el.tagArray.forEach(tag => {
          if (searchTerm === tag) {
            results.push(el)
            setFilteredData( results )
          } else {
            setFilteredData( [] )
          }
        })
      ))
    })
  }

  return (
    <>
     <div className="pt-2 relative mx-auto text-gray-600 text-center w-full sm:w-1/2">
        <input className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none w-full"
          onChange={(event) => filterResults(event.target.value)} type="search" name="search" placeholder="Search" />
        <button type="submit" className="absolute right-0 top-0 mt-5 mr-4">
          <svg className="text-gray-600 h-4 w-4 fill-current" viewBox="0 0 56.966 56.966" width="512px" height="512px">
            <path
              d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
          </svg>
        </button>
      </div>  
      <div className="mt-16 flex flex-col">
        {filteredData.map((el, index) => <Card key={index} item={el} />)}        
      </div>        
    </>
  );
}

export default Main;
