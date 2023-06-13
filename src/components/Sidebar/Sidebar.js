import React from 'react'

const SideBar = () => {
  return (
    <div>
      <div className="flex-shrink-0 p-3" style={{ width: '200' }}>
        <a href="/" className="d-flex align-items-center pb-3 mb-3 link-body-emphasis text-decoration-none border-bottom">
          {/* <svg className="bi pe-none me-2" width="30" height="24"><use xlink:href="#bootstrap"></use></svg> */}
          <span className="fs-5 fw-semibold">Filter</span>
        </a>

        <div className="dropdown">
          <button className="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            Categories
          </button>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Business</a></li>
            <li><a className="dropdown-item" href="#">Comics</a></li>
            <li><a className="dropdown-item" href="#">Motivation</a></li>
          </ul>
        </div>


        <div className="dropdown">
          <button className="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            Price
          </button>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </div>

        <div className="dropdown">
          <button className="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            Rating
          </button>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Ranking High to Low</a></li>
            <li><a className="dropdown-item" href="#">Ranking Low to High</a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default SideBar