import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/navbar'
import Section from '../components/section'
import LinkGroup from '../components/linkgroup'
import Footer from '../components/footer'
import { useEffect } from 'react'
import dynamic from 'next/dynamic'
import Link from 'next/link'

export default function Home() {
  const Map = dynamic(
    () => import('../components/map'), // replace '@components/map' with your component's location
    { ssr: false } // This line is important. It's what prevents server-side render
  )

  useEffect(() => {
    var scrollSpy = null;
    if (typeof document !== undefined) {
      import("bootstrap/dist/js/bootstrap").then((bootstrap) => {

        scrollSpy = new bootstrap.ScrollSpy(document.body, {
          target: '#scrollspynav'
        })
      });
    }

    return () => {
      if (scrollSpy) {
        scrollSpy.dispose();
      };
    }
  }, []);

  return (
    <>
      <Navbar />
      <Head>
        <title>OSG Toolkit Info</title>
        <meta name="description" content="Toolkit Info" />
        <link rel="icon" href="/OSG-logo.svg" />
      </Head>

      <div className='container'>
        <div className="row">
          <div className="col-md-6">
            <h1 className="display-3" id="home">perfSONAR Toolkit Information</h1>
            <p className="lead">
              The perfSONAR Toolkit Information Page serves to be a web-based source where a user can navigate between all the various resources that are available to them. A user can navigate to find sites about official documentation, resources in regards to the OSG Network's Pipelines and other services, as well as more analytical resources such as Kibana Dashboards.
            </p>
            <Link href="/toolkitlinks">
              <a className='btn btn-success'>Instance Dashboards <i className="bi bi-arrow-right"></i></a>
            </Link>
          </div>
          <div className="col-md-6">
            <Map />
          </div>
        </div>

      </div>


      <Section title="Documentation" id="documentation">
        <LinkGroup title="OSG Networking Area Documentation"
          image="/link-pics/OSG_networking_area_documentation_image.png"
          link="https://opensciencegrid.org/networking/"
          badges={['Documentation']}>
          This takes you to the OSG Networking Area Documentation
        </LinkGroup>
        <LinkGroup title="perfSONAR Toolkit Documentation"
          image="/link-pics/perfsonar_toolkit_documentation_image.png"
          link="https://docs.perfsonar.net/"
          badges={['Documentation']}>
          This takes you to the perfSONAR Toolkit documentation
        </LinkGroup>
        <LinkGroup title="ESnet Fasterdata Home (Network/system Tuning)"
          image="/link-pics/ESnet_fasterdata_home_network_tuning_image.png"
          link="http://fasterdata.es.net/"
          badges={['Documentation', 'Troubleshooting']}>
          This takes you to the ESnet Fasterdata homepage
        </LinkGroup>
        <LinkGroup title="ESnet Network Troubleshooting Guide"
          image="/link-pics/ESnet_network_troubleshooting_guide_image.png"
          link="https://fasterdata.es.net/performance-testing/troubleshooting/network-troubleshooting-quick-reference-guide/"
          badges={['Documentation', 'Troubleshooting']}>
          This takes you to the ESnet troubleshooting page
        </LinkGroup>
      </Section>

      <Section title="OSG Network Pipelines" id="osgnetworkpipeline">
        <LinkGroup title="perfSONAR Ingest Rate"
          image="/link-pics/perfSONAR_Ingest_Rate_image.png"
          badges={['Measurements']}
          link="https://atlas-kibana.mwt2.org:5601/s/networking/app/kibana#/visualize/edit/58bf3e80-18d1-11e8-8f2f-ab6704660c79?_g=(filters:!(),refreshInterval:(pause:!t,value:0),time:(from:now-7d,to:now))&_a=(filters:!(),linked:!f,query:(language:lucene,query:(match_all:())),uiState:(),vis:(aggs:!(),params:(expression:'.es(index%3D!'ps_owd!',%20q%3D!'*!').label(!'OWD!'),%0A.es(index%3D!'ps_throughput!',%20q%3D!'*!').label(!'throughput!').yaxis(2),%0A.es(index%3D!'ps_meta!',%20q%3D!'*!').label(!'metadata!').yaxis(2),%0A.es(index%3D!'ps_status!',%20q%3D!'*!').label(!'status!').yaxis(2),%0A.es(index%3D!'ps_trace!',%20q%3D!'*!').label(!'traceroute!'),%0A.es(index%3D!'ps_packetloss!',%20q%3D!'*!').label(!'packet%20loss!'),%0A.es(index%3D!'ps_retransmits!',%20q%3D!'*!').label(!'retransmits!').yaxis(2)',interval:auto,type:timelion),title:'PerfSONAR%20ingest',type:timelion))">
          This is the Kibana interface to the University of Chicago ATLAS Analytics platform which hosts our network metrics (as well as lots of other analytics data)
        </LinkGroup>
        <LinkGroup title="Status of Production Services"
          image="/link-pics/status_production_services_image.png"
          badges={['Measurements', 'Certificate Required']}
          link="https://psetf.opensciencegrid.org/etf/check_mk/index.py?start_url=%2Fetf%2Fcheck_mk%2Fview.py%3Faggr_group%3DOSG%2520Network%2520ITB%2520Servers%26view_name%3Daggr_group">
          This is the OSG/WLCG perfSONAR Production service monitoring host, based upon the Experiments Testing Framework (ETF) and Check_MK.
        </LinkGroup>
        <LinkGroup title="Status of ITB Services"
          image="/link-pics/status_itb_services_image.png"
          badges={['Measurements', 'Certificate Required']}
          link="https://psetf.opensciencegrid.org/etf/check_mk/index.py?start_url=%2Fetf%2Fcheck_mk%2Fview.py%3Faggr_group%3DOSG%2520Production%2520Network%2520Services%26view_name%3Daggr_group">
          This is the OSG/WLCG perfSONAR Infrastructure Test Bed (ITB) service monitoring host, based upon the Experiments Testing Framework (ETF) and Check_MK
        </LinkGroup>
      </Section>

      <Section title="OSG Network Services" id="osgnetworkservices">
        <LinkGroup title="OSG/WLCG MaDDash"
          image="/link-pics/osg_wlcg_maddash_image.png"
          badges={['Measurements']}
          link="https://psmad.opensciencegrid.org/maddash-webui/index.cgi">
          This takes you to the OSG MaDDash webpage.
        </LinkGroup>
        <LinkGroup title="OSG/WLCG pSConfig (PWA)"
          image="/link-pics/osg_wlcg_psconfig_image.png"
          badges={['Measurements']}
          link="https://psconfig.opensciencegrid.org/">
          This takes you to the OSG/WLCG central perfSONAR toolkit configuration page
        </LinkGroup>
        <LinkGroup title="OSG/WLCG psetf (check_mk) monitoring"
          image="/link-pics/osg_wlcg_psetf_monitoring_image.png"
          badges={['Measurements', 'Certificate Required']}
          link="https://psetf.opensciencegrid.org/etf/check_mk/">
          This takes you to the ETF service monitoring page for OSG/WLCG perfSONARs.
        </LinkGroup>
      </Section>

      <Section title="Analytics and Dashboards" id="analytics">
        <LinkGroup title="Alarms And Alert Subscription Service"
          image="/link-pics/AAAS.png"
          badges={['Measurements']}
          link="https://aaas.atlas-ml.org/">
          This site allows users to customize and recieve specific alarms and alerts pertaining to the type of data of their choosing
        </LinkGroup>
        <LinkGroup title="OSG/SAND/WLCG ELK Network Dashboards"
          image="/link-pics/osg_sand_wlsg_elk_network_dashboards_image.png"
          badges={['Measurements']}
          link="https://atlas-kibana.mwt2.org:5061/s/networking/app/kibana#/dashboards?notFound=dashboard&_g=()">
          This is the OSG/SAND/WLCG ELK network dashboards
        </LinkGroup>
        <LinkGroup title="PS Dash"
          image="/link-pics/ps-dash.png"
          badges={['Measurements']}
          link="https://ps-dash.uc.ssl-hep.org/sites">
          PS Dash shows an overview of metrics for perfSONAR instances
        </LinkGroup>
        <LinkGroup title="WLCG Grafana Network Dashboards"
          image="/link-pics/wlcg_grafana_network_dashboards_image.png"
          badges={['Measurements']}
          link="http://monit-grafana-open.cern.ch/dashboard/db/home?orgId=16">
          This is the WLCG/OSG Grafana dashboards hosted at CERN
        </LinkGroup>
        <LinkGroup title="OSG Overview of Packet Loss Kibana Dashboard"
          image="/link-pics/OSG_Overview_of_Packet_Loss_Kibana_Dashboard_image.png"
          badges={['Measurements']}
          link="https://atlas-kibana.mwt2.org:5601/s/networking/app/kibana#/dashboard/07a03a80-beda-11e9-96c8-d543436ab024?_g=(filters%3A!()%2CrefreshInterval%3A(pause%3A!t%2Cvalue%3A0)%2Ctime%3A(from%3Anow-7d%2Cto%3Anow))">
          The Overview of Packet Loss Kibana dashboard
        </LinkGroup>
        <LinkGroup title="OSG perfSONAR Infrastructure details on a Kibana Dashboard"
          image="/link-pics/OSG_perfSONAR_Infrastructure_details_on_a_Kibana_Dashboard_image.png"
          badges={['Measurements']}
          link="https://atlas-kibana.mwt2.org:5601/s/networking/app/kibana#/dashboard/bfd9ce90-4542-11e7-a5be-63230ea2b639?_g=(refreshInterval:(pause:!t,value:0),time:(from:now-30d,mode:quick,to:now))&_a=(description:'',filters:!(),fullScreenMode:!f,options:(darkTheme:!f,useMargins:!f),panels:!((embeddableConfig:(vis:(defaultColors:('0%20-%20100':'rgb(0,104,55)'),legendOpen:!f)),gridData:(h:13,i:'1',w:8,x:0,y:15),id:'853ff9d0-4542-11e7-a5be-63230ea2b639',panelIndex:'1',type:visualization,version:'6.3.0'),(embeddableConfig:(vis:(colors:('2':%23890F02,'3':%236D1F62),legendOpen:!t)),gridData:(h:15,i:'4',w:12,x:12,y:0),id:'24cfcba0-4544-11e7-a5be-63230ea2b639',panelIndex:'4',type:visualization,version:'6.3.0'),(gridData:(h:15,i:'5',w:12,x:24,y:0),id:'84c8dbc0-4547-11e7-a5be-63230ea2b639',panelIndex:'5',type:visualization,version:'6.3.0'),(embeddableConfig:(vis:(params:(sort:(columnIndex:0,direction:asc)))),gridData:(h:25,i:'9',w:44,x:0,y:73),id:e0c8d190-45d4-11e7-a5be-63230ea2b639,panelIndex:'9',type:visualization,version:'6.3.0'),(embeddableConfig:(spy:(mode:(fill:!f,name:!n)),vis:(colors:('Average%20ntp.offset':%2382B5D8,'NTP%20Offset':%23508642,'Offset%20(seconds)':%239AC48A),legendOpen:!t)),gridData:(h:25,i:'10',w:12,x:0,y:48),id:b6ac6a00-45d6-11e7-a5be-63230ea2b639,panelIndex:'10',type:visualization,version:'6.3.0'),(embeddableConfig:(spy:(mode:(fill:!f,name:!n)),vis:(colors:('Average%20ntp.offset':%2382B5D8,Delay:%23EA6460,Dispersion:%235195CE),legendOpen:!t)),gridData:(h:25,i:'11',w:12,x:12,y:48),id:eed87da0-45d7-11e7-a5be-63230ea2b639,panelIndex:'11',type:visualization,version:'6.3.0'),(gridData:(h:25,i:'12',w:20,x:24,y:48),id:b8fc9ec0-45da-11e7-a5be-63230ea2b639,panelIndex:'12',type:visualization,version:'6.3.0'),(embeddableConfig:(vis:(params:(sort:(columnIndex:10,direction:desc)))),gridData:(h:35,i:'13',w:44,x:0,y:98),id:a46c7530-45e8-11e7-a5be-63230ea2b639,panelIndex:'13',type:visualization,version:'6.3.0'),(gridData:(h:20,i:'14',w:21,x:0,y:28),id:d1d07770-4777-11e7-9ba5-cb02ba77fee8,panelIndex:'14',type:visualization,version:'6.3.0'),(gridData:(h:20,i:'15',w:23,x:21,y:28),id:'722239b0-4779-11e7-9ba5-cb02ba77fee8',panelIndex:'15',type:visualization,version:'6.3.0'),(gridData:(h:15,i:'16',w:12,x:0,y:0),id:'19a29970-2927-11e8-b846-6d32755e5603',panelIndex:'16',type:visualization,version:'6.3.0'),(gridData:(h:13,i:'17',w:13,x:8,y:15),id:'71c8fa60-2c2c-11e8-b846-6d32755e5603',panelIndex:'17',type:visualization,version:'6.3.0'),(embeddableConfig:(),gridData:(h:13,i:'18',w:15,x:21,y:15),id:'5b48a320-4509-11e9-9a8d-07fa5dee6891',panelIndex:'18',type:visualization,version:'6.5.0')),query:(language:lucene,query:'*'),timeRestore:!t,title:'perfSONAR%20Infrastructure',viewMode:view)">
          This is the OSG/WLCG perfSONAR Infrastructure dashboard
        </LinkGroup>
        <LinkGroup title="The MEPHI Traceroute Visualizer using our OSG/WLCG traceroute measurements"
          image="/link-pics/mephi_traceroute_visualizer_image.png"
          badges={['Measurements']}
          link="https://perfsonar.uc.ssl-hep.org/">
          This takes you to our MEPHI collaborators traceroute visualization tool for OSG/WLCG perfSONAR traceroutes
        </LinkGroup>
        <LinkGroup title="The SAND Project focused on networking analytics for OSG and WLCG"
          image="/link-pics/sand_project_homepage_image.png"
          badges={['Measurements']}
          link="https://sand-ci.org/">
          This takes you to SAND project webpage
        </LinkGroup>
      </Section>
      <Footer />
    </>
  )
}
