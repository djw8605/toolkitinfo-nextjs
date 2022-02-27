import Image from 'next/image'


export default function Navbar() {

  //<Image src="/public/logo.svg" width="30" height="30" className="d-inline-block align-top" alt="" />
  return (
    <nav className="navbar navbar-expand-lg navbar-dark sticky-top">
      <div className='container'>
        <a className="navbar-brand" href="#">
          <img src="/OSG-logo.svg" alt="" width="60" height="30" className="d-inline-block align-text-top" />
          {' '}
          <span className="pl-2">Toolkit Information</span>
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent" id="scrollspynav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="#home">Home</a>

            </li>
            <li className="nav-item">
              <a className="nav-link" href="#documentation">Documentation</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#osgnetworkpipeline">Network Pipelines</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#osgnetworkservices">Network Services</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#analytics">Analytics and Dashboards</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}