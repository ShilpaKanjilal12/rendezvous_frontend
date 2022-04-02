import React from 'react'

const Footer = () => {
  return (
    <div className="container">
    <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
      <div className="col-md-4 d-flex align-items-center" style={{display: "flex", alignItems: "center", justifyContent: "center", margin: "0px 0px 20px 0"}}>
        <a href="/" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1" >
          Rendezvous
        </a>
        <span className="text-muted">© 2022 Company, Inc</span>
      </div>
    </footer>
  </div>
  )
}

export default Footer