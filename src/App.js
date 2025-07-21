import logo from './logo.svg';
import './App.css';
import gxplogo from './assests/gxplogo.jpg';
import ImageSlider from './ImageSlider';
import { BrowserRouter as Router, Route, Switch, Link, Routes, BrowserRouter } from 'react-router-dom';
import Navbar from './Navbar';
import Aboutus from './Aboutus';
import Services from './Services';
import Contact from './Contact';
import Users from './Users';
import Home from './Home';
import Details from './Details';
//import RecordsList from './RecordList';

//const Home = () => <h2>Home page</h2>;

function App() {
  return (
    <div className="App">
     
     
   <link rel='gxplogo' href={`url(${gxplogo})`} />
   <title> Gxp Compliance Partners</title>
     
          
          {/* <ImageSlider/> */}
          <div >
          <BrowserRouter>
          <ImageSlider/>
       
          {/* <Aboutus/> */}
          

          
        
          
            <Routes>
                <Route path='/' index  exact element={<Home/>}/>
                <Route path='/aboutus' element={<Aboutus/>}/>
                <Route path='/services' element={<Services/>}/>
                <Route path='/contact' element={<Contact/>}/>
                <Route path='/users' element={<Users/>}/>
                <Route path='/details' element={<Details/>}/>
            </Routes>
          
       
       
      
      </BrowserRouter>
    </div>
</div>
  )}


export default App;
