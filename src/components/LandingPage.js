import React from 'react'
import './LandingPage.css'
const LandingPage = () => {
  return (
    <div className="main">
      <nav class="navbar navbar-dark navbar-expand-lg bg-transparent">
        <div class="container-fluid">
          <a class="navbar-brand" href="/">
            Eshller
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="/navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link" aria-current="page" href="/">
                  Music Inventory
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/">
                  Sports Inventory
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/">
                  Tech Inventory
                </a>
              </li>
            </ul>
            <div class="d-flex" role="search">
              <button class="btn btn-outline-warning" type="submit">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </nav>
      <div className="heading">
        <span>Inventory Portal</span>
      </div>
    </div>
  )
}

export default LandingPage