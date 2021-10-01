import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/mainstyle.css'
import Navbar from './components/Navbar'
import MovieListWithSearch from './components/MovieListWithSearch'
import Footer from './components/Footer'
import MovieList from './components/MovieList'

import { Container } from 'react-bootstrap'





function App() {
  return (

   <>

<Navbar/>

<Container fluid>

<h4 class="pt-4">Action</h4>
<MovieListWithSearch/>
{/* <h4 class="pt-4">Action</h4>
<MovieList/>
<h4 class="pt-4">Action</h4>
<MovieList/> */}

</Container>


   
{/*    
   <Footer/> */}
   </>
  )
}

export default App;
