import Navbar from '../components/navbar'
import Head from 'next/head'
import useSWR from 'swr'
import InstanceSelect from '../components/instanceselect';
import { useState } from 'react';

import dynamic from 'next/dynamic'

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function ToolkitLinks() {
  // Get the site information from the API
  const { data, error } = useSWR('/api/getinstances', fetcher, { refreshInterval: 3600000 });
  const Map = dynamic(
    () => import('../components/map'), // replace '@components/map' with your component's location
    { ssr: false } // This line is important. It's what prevents server-side render
  )
  /*
  const InstanceSelect = dynamic(
    () => import('../components/instanceselect'), // replace '@components/map' with your component's location
    { ssr: false } // This line is important. It's what prevents server-side render
  )
  */
  const [selectedInstance, setSelectedInstance] = useState(null);
  const onChange = (instance) => {
    console.log(instance);
    setSelectedInstance(instance);
  };

  return (
    <>
      <Navbar />
      <Head>
        <title>OSG Toolkit Info</title>
        <meta name="description" content="Toolkit Info" />
        <link rel="icon" href="/OSG-logo.svg" />
      </Head>

      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1>Toolkit Selection</h1>
            <p>
              Select a toolkit below to get started.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <InstanceSelect instances={data} onChange={onChange} />
          </div>
          <div className='col-6'>
            <Map instance={selectedInstance} />
          </div>
        </div>
      </div>

    </>
  )
}