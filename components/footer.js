import Image from 'next/image'

export default function Footer() {

  return (
    <section className="footer">
      <div className="container">
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3">
          <div className="col-md-12 align-items-center">
            <div className="row">
              <div className="mx-auto text-center p-2">
                <h3>Sponsored By:</h3>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <div className="mx-auto text-center">
                  <a href="https://sand-ci.org/">
                    <Image src="/sand_logo.png" height="79" width="124" />
                  </a>
                </div>
              </div>
              <div className="col">
                <div className="mx-auto text-center">
                  <a href="https://iris-hep.org/">
                    <Image src="/Iris-hep-6-WHITE-complete.png" height="79" width="210" />
                  </a>
                </div>
              </div>
              <div className="col">
                <div className="mx-auto text-center">
                  <a href="https://nsf.gov/">
                    <Image src="/NSF_4-Color_bitmap_Logo.png" height="79" width="78" />
                  </a>
                </div>
              </div>
              <div className="col">
                <div className="mx-auto text-center">
                  <a href="https://opensciencegrid.org/">
                    <Image src="/OSG_Logo_W_Text.svg" height="79" width="119" />
                  </a>
                </div>
              </div>
            </div>

          </div>
        </footer>
      </div>
    </section>
  )
}