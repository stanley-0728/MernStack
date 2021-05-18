import React from 'react'
const Navbar = () => {
 
  return (
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark" style={{backgroundColor:"rgba(1,0,1,0.7)"}}>
  <div className="container-fluid box">
    <a className="navbar-brand mx-4" href="/">Hello user</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse " id="navbarNav" >
      <ul className="navbar-nav ">
      <li className="nav-item px-2">
          <a className="nav-link active fav" aria-current="page" href="/dashboard">Home</a>
        </li>
        <li className="nav-item px-2">
          <a className="nav-link  fav" aria-current="page" href="/favourite">Favourite</a>
        </li>
       
      </ul>
    </div>
  </div>
</nav>

    )
}

export default Navbar
