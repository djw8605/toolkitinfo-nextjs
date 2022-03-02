import Link from 'next/link'
import { useRouter } from 'next/router'


export default function Navbar() {

  const { pathname } = useRouter();
  const mainPage = pathname === "/";
  //<Image src="/public/logo.svg" width="30" height="30" className="d-inline-block align-top" alt="" />
  return (
    <nav className="navbar navbar-expand-lg navbar-dark sticky-top">
      <div className='container'>
        <Link href="/">
        <a className="navbar-brand">
          <img src="/OSG-logo.svg" alt="" width="60" height="30" className="d-inline-block align-text-top" />
          {' '}
          <span className="pl-2">Toolkit Information</span>
        </a>
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#scrollspynav" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="scrollspynav" className={mainPage ? "scrollspynav" : ""}>
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            {mainPage &&
              <>
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
              </>
            }
            <li className="nav-item">
              <Link href="/toolkitlinks">
                <a className="nav-link">Toolkit Links</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}