import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import img1 from "./assests/professional-electrical-engineer-doing-regular-maintenance-electric-cabinets-installations_308072-3615.jpg";
import img2 from "./assests/blog-15.png";
import img3 from "./assests/pharma-project.jpg";
import gxplogo from "./assests/finallogo.jpg";
import Navbar from './Navbar';
import { BrowserRouter as Router, Route, Switch, Link, Routes } from 'react-router-dom';
import { type } from '@testing-library/user-event/dist/type';
import Enquiry from './Enquiry';
import RecordsList from './RecordList';
import Signup from './Signup';





const ImageSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Auto-slide
    autoplaySpeed: 2000, // Slide every 3s
  };

  const images = [img1, img2, img3];

  return (
    <>
    
   
   

  <div style={{position: "relative"}}>
    <Slider {...settings}>
      {images.map((src, index) => (
        <div key={index} style={{ textAlign: 'center' }}>
          <img
            src={src}
            alt={`Slide ${index + 1}`}
            style={{ width: "100%", height: "670px", objectFit: "cover" }}
          />
        </div>
      ))}
    </Slider>
    
    {/* <div style={{ position: 'absolute',top:'10px', left: '10px', padding: '5px',borderRadius: '5px',color: 'skyblue', width:'40px', height:'40px'}}>
    </div> */}
    
    <div style={{ position: 'absolute',top:'10px', left: '10px'}}>
    {/* <h2>Welcome to GXP Compliance Partners</h2> */}

    <img src={gxplogo} alt='Gxplogo'
    style={{left:'10px', width: "100%", height: "80px", objectFit: "cover" }}/> 
   </div>
   <div style={{ position: 'absolute',top:'2px', left: '100px'}}>
    <h2 style={{fontFamily:"Verdana, serif",fontSize:'25px',color:'black'}}> GXP <br/>
                Compliance Partners </h2>

    
    
   </div>
    
   
    <div style={{ position: 'absolute', top:'115px',left: '38px',textAlign:'right', padding:'10px',margin:'20px', justifyContent:'space-between',gap:'50px'}}>
            <ul style={{}}>
                <li style={{display: 'inline', padding: '10px 40px',  }}>
                    <Link className='linkCss'  to="/">Home</Link>
                </li>
                <li style={{display: 'inline', padding: '10px 40px',}}>
                    <Link className='linkCss' to="/aboutus">About us</Link>
                </li>
                <li  style={{display: 'inline', padding:'10px 40px', }}>
                    <Link className='linkCss' to="/services">Services</Link>
                </li>
                <li  style={{display: 'inline', padding:'10px 40px',listStyleType:'none' }}>
                    <Link className='linkCss' to="/contact">Contact</Link>
                </li>
            </ul>
        </div>
    
    
    
    </div>
    <div style={{ position: 'absolute', top:'2px',right: '2px',textAlign:'center',}}>
    <Enquiry/>

 
 
    </div>
    <div style={{ position: 'absolute', bottom:'2px',right: '2px',textAlign:'center',}}>
    <Signup/>
    
 
 
    </div>
    {/* <div style={{ position: 'absolute', top:'2px',right: '2px',textAlign:'center',}}>
    
    
    <RecordsList/>
    </div> */}


    
    
      
      
    </>
  );
};

export default ImageSlider;
