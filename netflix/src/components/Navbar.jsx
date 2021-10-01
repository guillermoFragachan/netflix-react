



const Navbar = (props) =>
(
   
      
          <>
                <nav className="navbar navbar-expand-lg  background">
        <a className="navbar-brand "><img className="img-fluid" width="120"src="./assets/netflix_logo.png" alt='img' /></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse  " id="navbarNav">
          <ul className="navbar-nav ">
            <li className="nav-item ">
              <a className="nav-link svg">Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link background" >TV Shows</a>
            </li>
            <li className="nav-item">
              <a className="nav-link svg">Movies</a>
            </li>
            <li className="nav-item">
              <a className="nav-link svg" >Recently Added</a>
            </li>
            <li className="nav-item">
              <a className="nav-link svg">Back Office</a>
            </li>
          </ul>
        </div>

        <div>
          
          <div className="dropdown d-inline-block">
              <a className="btn nav-btn">
                <span className="d-inline-block background">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                  </svg>
                </span>
              </a>
              <a className="btn nav-btn">
                <span className="d-inline-block background"><img src="./assets/kids_icon.png" width="32" height="32" className="mr-1" alt='img' /></span>
              </a>
              <a className="btn nav-btn">
              <span className="d-inline-block background">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-bell-fill" viewBox="0 0 16 16">
                  <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z"/>
                </svg>
              </span>
              </a>
              <a className="btn nav-btn dropdown-toggle" role="button" id="dropdownMenuLink"
                  data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <img src="./assets/avatar.png" width="32" height="32" alt='img'className="mr-1" />
                  <span className="d-inline-block background">User</span>
              </a>
              
              

              <div className="dropdown-menu background" aria-labelledby="dropdownMenuLink">
                  <a className="dropdown-item background" >Edit</a>
                  <a className="dropdown-item background" > Settings</a>
                  <a className="dropdown-item background" >Something else here</a>
              </div>
          </div>
      </div>
      </nav>

          
          
          
          
          </>
       
    
)




export default Navbar