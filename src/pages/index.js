import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
import { getDefiData } from '../utils/firebaseActions';

function IndexPage() {

  const [defiData, setDefiData] = useState([]);

  useEffect(() => {
    getDefiData().then(res => {
      res.forEach(doc => {
        doc.interval_ending = getFirestoreDate(doc.interval_ending)
      })
      setDefiData(res)
    })

  }, [])

  const getFirestoreDate = (time) => {
    return new Date(time.seconds * 1000 + time.nanoseconds / 1000000).toLocaleDateString()
  }

  return (
    <Layout>
      <SEO title="Home" />
      <h1 className="text-center my-4 font-bold text-2xl">DeFi Snapshot</h1>
      <div className="mt-12 flex flex-col items-center mx-auto max-w-6xl">
        {['followers', 'eth_price', 'eth_vol'].map((item, index) => (
          <LineChart
            key={index}
            className="my-4"
            width={500}
            height={300}
            data={defiData}
            margin={{
              top: 5, right: 30, left: 60, bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="interval_ending" />
            <YAxis domain={['dataMin, dataMax']} />
            <Tooltip />
            <Legend />
            <Line type="monotone" dot={false} dataKey={item} stroke="#8884d8" activeDot={{ r: 4 }} />
          </LineChart>
        ))}
      </div>
    </Layout>
  );
}

export default IndexPage;
