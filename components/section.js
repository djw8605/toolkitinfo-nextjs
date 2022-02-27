


export default function Section({ title, children, id }) {


  return (
    <>
      <section className="section">
        <h2 className="section-title shadow-sm" id={id}>{title}</h2>
        <div className="container">
          <div className="row row-cols-1 row-cols-md-2 g-4">
            
              {children}
          </div>
        </div>
      </section>
    </>
  )
}