import Image from 'next/image'
import Badges from './badges'


export default function LinkGroup({ image, title, children, badges, link}) {

  return (
    <>
      <div className='col'>
        <div className="card">
          <div className="row g-0">
            <div className="col-md-4">
              <Image src={image} className="img-fluid rounded-start" alt="" width="600px" height="400px" />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <Badges badges={badges} />
                <p className="card-text">{children}
                </p>
                <a href={link} className="btn btn-primary">Launch <i className="bi bi-arrow-right"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}
