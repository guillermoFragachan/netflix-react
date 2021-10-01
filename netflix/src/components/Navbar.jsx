



const Navbar = (props) =>
(
   
      
          <>
                <nav class="navbar navbar-expand-lg  background">
        <a class="navbar-brand " href="./index.html"><img class="img-fluid" width="120"src="./assets/netflix_logo.png" /></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse  " id="navbarNav">
          <ul class="navbar-nav ">
            <li class="nav-item ">
              <a class="nav-link svg" href="./index.html">Home <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link background" href="./index.html">TV Shows</a>
            </li>
            <li class="nav-item">
              <a class="nav-link svg" href="#">Movies</a>
            </li>
            <li class="nav-item">
              <a class="nav-link svg" href="#">Recently Added</a>
            </li>
            <li class="nav-item">
              <a class="nav-link svg" href="./backoffice.html">Back Office</a>
            </li>
          </ul>
        </div>

        <div>
          
          <div class="dropdown d-inline-block">
              <a class="btn nav-btn">
                <span class="d-inline-block background">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                  </svg>
                </span>
              </a>
              <a class="btn nav-btn">
                <span class="d-inline-block background"><img src="./assets/kids_icon.png" width="32" height="32" class="mr-1" /></span>
              </a>
              <a class="btn nav-btn">
              <span class="d-inline-block background">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bell-fill" viewBox="0 0 16 16">
                  <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z"/>
                </svg>
              </span>
              </a>
              <a class="btn nav-btn dropdown-toggle" href="#" role="button" id="dropdownMenuLink"
                  data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <img src="./assets/avatar.png" width="32" height="32" class="mr-1" />
                  <span class="d-inline-block background">User</span>
              </a>
              
              

              <div class="dropdown-menu background" aria-labelledby="dropdownMenuLink">
                  <a class="dropdown-item background" href="./edit-profile.html">Edit</a>
                  <a class="dropdown-item background" href="./settings.html"> Settings</a>
                  <a class="dropdown-item background" href="#">Something else here</a>
              </div>
          </div>
      </div>
      </nav>

          
          
          
          
          </>
       
    
)




export default Navbar