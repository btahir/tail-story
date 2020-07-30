import React, { useEffect, useState } from "react";
import TweetEmbed from 'react-tweet-embed';

import Layout from "../components/layout";
import SEO from "../components/seo";
import axios from 'axios';

function IndexPage() {

  const [topicData, setTopicData] = useState(null)
  const [activeTweets, setActiveTweets] = useState(null)

  useEffect(() => {
    axios.get('https://storage.googleapis.com/wsbthinkin/tweet_data.json', {
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
    })
      .then(function (response) {
        // handle success
        setTopicData(response.data);

      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  }, [])

  const handleClick = (newTopic) => {
    setActiveTweets(newTopic)
  }

  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Home"
      />
      <div className="flex justify-evenly flex-wrap mb-12">
        {topicData && topicData.map((topic, index) => {
          if(topic.topic) {
            return (
              <button key={index} onClick={() => handleClick(topic.topic)} className="m-4 p-2 bg-gray-100 rounded text-teal-400 focus:outline-none focus:bg-teal-400 focus:text-white">{topic.topic}</button>
            )
          }
        }          
        )}
      </div>
      {
        topicData && topicData.map( (topic,index) => {
          if (topic.topic === activeTweets) {
            return (
              <div key={index}>
                <div className="text-center text-lg font-bold mb-8 text-gray-900">{topic.topic}</div>
                <div className="flex justify-around">
                  <div className="w-1/3">
                    <div className="text-center text-lg font-bold text-gray-700 mb-4">Nays</div>
                    {topic.sentiment.NEGATIVE.map((id, index) =>
                      <TweetEmbed key={index} id={id} />
                    )}
                  </div>
                  <div className="border-l-2 border-gray-400"></div>
                  <div className="w-1/3">
                    <div className="text-center text-lg font-bold text-gray-700 mb-4">Ayes</div>
                    {topic.sentiment.POSITIVE.map((id, index) =>
                      <TweetEmbed key={index} id={id} />
                    )}
                  </div>
                </div>
              </div>
            )
          }
        })
      }
    </Layout>
  );
}

export default IndexPage;
