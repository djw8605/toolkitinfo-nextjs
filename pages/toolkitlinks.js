import Navbar from '../components/navbar'
import Head from 'next/head'
import useSWR from 'swr'
import InstanceSelect from '../components/instanceselect';
import { useState } from 'react';

import dynamic from 'next/dynamic'
import Footer from '../components/footer';

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
          <div className="col-md-12">
            <h1>Toolkit Selection</h1>
            <p>
              Select a toolkit below to get started.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className='row'>
              <div className='col-12'>
                <InstanceSelect instances={data} onChange={onChange} />
              </div>
              <div className='col-12'>
                <div className='row my-4'>
                  <div className='col-12'>
                    <div className='row mb-4'>
                      <div className='col-12'>
                        <div className='card'>
                          <div className='card-body'>
                            <h5 className='card-title'>
                              Direct link to toolkit
                            </h5>

                            <p className='card-text'>
                              Toolkit page describes the host running the toolkit and lists measurements performed by the host.
                            </p>
                            {selectedInstance ? (
                              <a className="btn btn-primary" target="_blank" href={"https://" + selectedInstance.host + "/toolkit"}>Toolkit Page <i className="bi bi-arrow-right"></i></a>
                            ) : (
                              <button className="btn btn-primary" disabled>Toolkit Page <i className="bi bi-arrow-right"></i></button>
                            )}

                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="row row-cols-1 row-cols-md-2 g-4">
                      <div className="col">
                        <div className="card">
                          <div className="card-body">
                            <h5 className="card-title">Packet Loss</h5>
                            <p className="card-text">Dashboard describing the packet loss for {selectedInstance && selectedInstance.host}</p>
                            {selectedInstance ? (
                              <a className="btn btn-primary" target="_blank" href={"https://atlas-kibana.mwt2.org:5601/s/networking/app/dashboards#/view/07a03a80-beda-11e9-96c8-d543436ab024?_g=(filters:!(),refreshInterval:(pause:!t,value:0),time:(from:now-4h,to:now))&_a=(description:'Visualizations%20and%20metrics%20for%20measurement%20of%20packet%20loss%20from%20the%20OSG%2FWLCG%20perfSONAR%20network%20monitoring%20infrastructure.',filters:!(),fullScreenMode:!f,options:(darkTheme:!f,hidePanelTitles:!f,useMargins:!t),query:(language:lucene,query:'(src_host:" + selectedInstance.host + "%20AND%20dest_host:*)%20OR%20(src_host:*%20AND%20dest_host:" + selectedInstance.host + ")'),tags:!(),timeRestore:!f,title:'Overview%20of%20%20Packet%20Loss%20in%20OSG%2FWLCG',viewMode:view)"}>Dashboard</a>
                            ) : (
                              <button className="btn btn-primary" disabled>Dashboard</button>
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="col">
                        <div className="card">
                          <div className="card-body">
                            <h5 className="card-title">Traceroute</h5>
                            <p className="card-text">Dashboard describing the traceroute information for {selectedInstance && selectedInstance.host}</p>
                            {selectedInstance ? (
                              <a className="btn btn-primary" target="_blank" href={"https://atlas-kibana.mwt2.org:5601/s/networking/app/dashboards#/view/58121420-5e17-11ea-bad0-ff3d06e7229e?_g=(filters:!(),refreshInterval:(pause:!t,value:0),time:(from:now-4h,to:now))&_a=(description:'This%20dashboard%20tries%20to%20summarize%20the%20perfSONAR%20traceroute%20information%20from%20the%20OSG%2FWLCG%20infrastructure.',filters:!(),fullScreenMode:!f,options:(hidePanelTitles:!f,useMargins:!t),query:(language:kuery,query:'(src_host:" + selectedInstance.host + "%20AND%20dest_host:*)%20OR%20(src_host:*%20AND%20dest_host:" + selectedInstance.host + ")'),tags:!(),timeRestore:!f,title:'Overview%20of%20Traceroute',viewMode:view)"}>Dashboard</a>
                            ) : (
                              <button className="btn btn-primary" disabled>Dashboard</button>
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="col">
                        <div className="card">
                          <div className="card-body">
                            <h5 className="card-title">Throughput</h5>
                            <p className="card-text">Dashboard describing the throughput information for {selectedInstance && selectedInstance.host}</p>
                            {selectedInstance ? (
                              <a className="btn btn-primary" target="_blank" href={"https://atlas-kibana.mwt2.org:5601/s/networking/app/dashboards#/view/ab7c4950-5cfa-11ea-bad0-ff3d06e7229e?_g=(filters:!(),refreshInterval:(pause:!t,value:0),time:(from:now-4h,to:now))&_a=(description:'Visualizations%20and%20metrics%20for%20measurement%20of%20throughput%20from%20the%20OSG%2FWLCG%20perfSONAR%20network%20monitoring%20infrastructure.',filters:!(),fullScreenMode:!f,options:(darkTheme:!f,hidePanelTitles:!f,useMargins:!t),query:(language:lucene,query:'(src_host:" + selectedInstance.host + "%20AND%20dest_host:*)%20OR%20(src_host:*%20AND%20dest_host:" + selectedInstance.host + ")'),tags:!(),timeRestore:!f,title:'Overview%20of%20Throughput%20in%20OSG%2FWLCG',viewMode:view)"}>Dashboard</a>
                            ) : (
                              <button className="btn btn-primary" disabled>Dashboard</button>
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="col">
                        <div className="card">
                          <div className="card-body">
                            <h5 className="card-title">One Way Delay</h5>
                            <p className="card-text">Dashboard describing the one way delay information for {selectedInstance && selectedInstance.host}</p>
                            {selectedInstance ? (
                              <a className="btn btn-primary" target="_blank" href={"https://atlas-kibana.mwt2.org:5601/s/networking/app/dashboards#/view/dc2879e0-d115-11ea-9344-2da4788d78a4?_g=(filters:!(),refreshInterval:(pause:!t,value:0),time:(from:now-4h,to:now))&_a=(description:'Visualizations%20and%20metrics%20for%20measurement%20of%20OWD%20from%20the%20OSG%2FWLCG%20perfSONAR%20network%20monitoring%20infrastructure.',filters:!(),fullScreenMode:!f,options:(darkTheme:!f,hidePanelTitles:!f,useMargins:!t),query:(language:lucene,query:'(src_host:" + selectedInstance.host + "%20AND%20dest_host:*)%20OR%20(src_host:*%20AND%20dest_host:" + selectedInstance.host + ")'),tags:!(),timeRestore:!t,title:'Overview%20of%20%20OWD%20in%20OSG%2FWLCG',viewMode:view)"}>Dashboard</a>
                            ) : (
                              <button className="btn btn-primary" disabled>Dashboard</button>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
          <div className='col-md-6'>
            <Map instance={selectedInstance} />
          </div>
        </div>



      </div>
      <Footer />

    </>
  )
}