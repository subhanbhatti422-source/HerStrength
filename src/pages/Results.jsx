
import Navbar from '../components/Navbar/Navbar'
import TransformResult from '../components/TransformResult/transform'
import "./Results.css";


import transtionGirl1 from "../assets/images/image2.jpg";
import transtionGirl2 from "../assets/images/image5.jpg";
import transtionGirl3 from "../assets/images/image9.jpg";
import transtionGirl4 from "../assets/images/image11.jpg";
import transtionGirl5 from "../assets/images/image12.jpg";
import transtionGirl6 from "../assets/images/image19.jpg";
import transtionGirl7 from "../assets/images/image20.jpg";
import transtionGirl8 from "../assets/images/image21.jpg";
import transtionGirl9 from "../assets/images/image22.jpg";
import transtionGirl10 from "../assets/images/image25.jpg";
import transtionGirl11 from "../assets/images/image29.jpg";
import GetStarted from '../components/GetStartedsection/GetStarted';
import Testimonials from '../components/Testimonials/Testimonials';
import Instagram from '../components/Instagram/Instagram';
import Footer from '../components/Footer/Footer';

const Results = () => {
  return (
    <>
    <Navbar/>

    <TransformResult/>

    <section className="Transformations">
      <div className="driven-badge">
        <span>✦</span> Result Photos


      </div>
    
      <h2 className="transform-heading">
       Other Photos of Member <br /> <span> Transformation</span>
      </h2>
    
      
    
    
      <div className="marquee-wrapper">
        <div className="marquee-track marquee-right space">
          <img src={transtionGirl1} alt="" />
          <img src={transtionGirl2} alt="" />
          <img src={transtionGirl3} alt="" />
          <img src={transtionGirl4} alt="" />
          <img src={transtionGirl5} alt="" />
          <img src={transtionGirl6} alt="" />
          <img src={transtionGirl7} alt="" />
          <img src={transtionGirl8} alt="" />
          <img src={transtionGirl9} alt="" />
          <img src={transtionGirl10} alt="" />
        </div>
      </div>
    
    
      <div className="marquee-wrapper">
        <div className="marquee-track marquee-left">
          <img src={transtionGirl11} alt="" />
          <img src={transtionGirl1} alt="" />
          <img src={transtionGirl2} alt="" />
          <img src={transtionGirl3} alt="" />
          <img src={transtionGirl4} alt="" />
          <img src={transtionGirl5} alt="" />
          <img src={transtionGirl6} alt="" />
          <img src={transtionGirl7} alt="" />
          <img src={transtionGirl8} alt="" />
          <img src={transtionGirl9} alt="" />
        </div>
    
    
      </div>
    </section>

    <GetStarted/>
    <Testimonials/>
    <Instagram/>
    <Footer/>

    </>
  )
}

export default Results
