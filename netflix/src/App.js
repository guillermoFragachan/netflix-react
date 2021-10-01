import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/mainstyle.css'
import Navbar from './components/Navbar'
import SingleMovie from './components/SingleMovie'
import MovieList from './components/MovieList';
import Footer from "./components/Footer";




function App() {
  return (

   <>

<Navbar/>

<SingleMovie/>

       <Footer />
   
   
   </>
  )

}

export default App;
