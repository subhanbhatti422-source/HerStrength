import { useState, useEffect, useRef } from "react";
import Navbar from "../components/Navbar/Navbar";
import "./Home.css";


import gemini from "../assets/images/gemini-logo.svg";
import image30 from "../assets/images/image30.jpg";
import btnArrow from "../assets/images/download (1).svg";
import girl1 from "../assets/images/image4.jpg";
import girl2 from "../assets/images/image23.jpg";
import girl3 from "../assets/images/image7.jpg";
import girl4 from "../assets/images/image8.jpg";
import onlyLogo from "../assets/images/only-logo.svg";
import leftArrow from "../assets/images/right-icon.svg";
import rightArrow from "../assets/images/left-icon.svg";
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
import video1 from "../assets/video/XG1CyLY3NKPKLWJiGdDjrZXma8.mp4";



import "remixicon/fonts/remixicon.css";
import Instagram from "../components/Instagram/Instagram";
import Testimonials from "../components/Testimonials/Testimonials";
import GetStarted from "../components/GetStartedsection/GetStarted";
import Footer from "../components/Footer/Footer";


const Home = () => {

  
  const [reviews, setReviews] = useState(0);
  const [rating, setRating] = useState(0);
  const [experience, setExperience] = useState(0);
  const [guarantee, setGuarantee] = useState(0);

  useEffect(() => {
    let r = 0;
    let ra = 0;
    let e = 0;
    let g = 0;

    const fastTimer = setInterval(() => {
      if (r < 800) setReviews(++r);
      if (g < 100) setGuarantee(++g);

      if (r >= 800 && g >= 100) {
        clearInterval(fastTimer);
      }
    }, 5);

    const slowTimer = setInterval(() => {
      if (ra < 5) setRating(++ra);
      if (e < 10) setExperience(++e);

      if (ra >= 5 && e >= 10) {
        clearInterval(slowTimer);
      }
    }, 300);

    return () => {
      clearInterval(fastTimer);
      clearInterval(slowTimer);
    };
  }, []);

  
const [currentIndex, setCurrentIndex] = useState(0);
const sliderRef = useRef(null);

// 2. Functions - return se pehle
const scrollRight = () => {
  const newIndex = currentIndex + 1;
  setCurrentIndex(newIndex);
  sliderRef.current.scrollTo({ left: newIndex * 710, behavior: 'smooth' });
};

const scrollLeft = () => {
  const newIndex = currentIndex - 1;
  setCurrentIndex(newIndex);
  sliderRef.current.scrollTo({ left: newIndex * 710, behavior: 'smooth' });
};


  return (

    <>
    <Navbar />
      
      <section className="Fitness-Studio">
    <div className="Stronger">
      <img src={gemini} />
      <p>Stronger Starts Here</p>
    </div>

    <div className="Fitness">
      <h1>A Fitness Studio <span>Built</span> for <br /> Women <img src={image30} /> by Woman.</h1>
      <div className="Fitness-p">
        <p>HerStrength is the fitness studio designed for women who <br /> want to transform their bodies, minds, and lifestyles.</p>
      </div>
      <div className="fitness-btn">
      <button>Start Your Journey <img src={btnArrow} /></button>
      </div>
    </div>

    <div className="small-reviews">
      <div className="four-circle-image">
        <img src={girl2} alt="" />
        <img src={girl1} alt="" />
        <img src={girl3} alt="" />
        <img src={girl4} alt="" />
      </div>

      <div className="stars">
        <div className="four-star">
          <div className="star-svg">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgba(134,158,77,1)"><path d="M11.9998 17L6.12197 20.5902L7.72007 13.8906L2.48926 9.40983L9.35479 8.85942L11.9998 2.5L14.6449 8.85942L21.5104 9.40983L16.2796 13.8906L17.8777 20.5902L11.9998 17Z"></path></svg>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgba(134,158,77,1)"><path d="M11.9998 17L6.12197 20.5902L7.72007 13.8906L2.48926 9.40983L9.35479 8.85942L11.9998 2.5L14.6449 8.85942L21.5104 9.40983L16.2796 13.8906L17.8777 20.5902L11.9998 17Z"></path></svg>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgba(134,158,77,1)"><path d="M11.9998 17L6.12197 20.5902L7.72007 13.8906L2.48926 9.40983L9.35479 8.85942L11.9998 2.5L14.6449 8.85942L21.5104 9.40983L16.2796 13.8906L17.8777 20.5902L11.9998 17Z"></path></svg>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgba(134,158,77,1)"><path d="M11.9998 17L6.12197 20.5902L7.72007 13.8906L2.48926 9.40983L9.35479 8.85942L11.9998 2.5L14.6449 8.85942L21.5104 9.40983L16.2796 13.8906L17.8777 20.5902L11.9998 17Z"></path></svg>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgba(134,158,77,1)"><path d="M11.9998 17L6.12197 20.5902L7.72007 13.8906L2.48926 9.40983L9.35479 8.85942L11.9998 2.5L14.6449 8.85942L21.5104 9.40983L16.2796 13.8906L17.8777 20.5902L11.9998 17Z"></path></svg>
        </div>
        <b>4.8/5</b>
        
        </div>
          <div className="star-p">
        <p>800+ Satisfied Clients</p>
        </div>
      </div>
    </div>

   

      </section>

       <div className="main-image">        
    </div>

    <section className="only-logo">

<div className="logo-p">
    <img src={onlyLogo} />
    <h2>“HerStrength <span>empowers </span>women to <br /> <span>build</span> confidence, resilience, and <br /> lasting strength <span>together </span>.”</h2>
</div>

<div className="four-reviews-box">
<div className="Satisfied-Clients">
 <div className="counter-box">
 <h2>{reviews}+</h2>
  <p>Happy Reviews</p>
</div>
</div>
<div className="Average-Rating">
  <h2>{rating}/5</h2>
  <p>Average Rating</p>
</div>
<div className="Years-of-Experience">
  <h2>{experience}</h2>
  <p>Years of Experience</p>
</div>
<div className="Guaranteed-Results">
  <h2>{guarantee}%</h2>
    <p>Guaranteed Results</p>
</div>
</div>
    </section>


    <section className="Our-Programs">
       <div className="Stronger2">
      <img src={gemini} />
      <p>Our Programs</p>
    </div>
    <div className="Strength-p">
    <p>Find Your <span> Strength</span></p>
   <div className="left-right-arrow">
  <img src={rightArrow} onClick={scrollLeft} />
  <img src={leftArrow} onClick={scrollRight} />
</div>
    </div>

 <div className="Strength-box" ref={sliderRef}>
  <div className="Nutrition-box1">
    <div className="card-overlay">
      <h3>Personal Coaching</h3>
      <p>Personalized one-on-one sessions designed to fit your goals, <br /> fitness level, and lifestyle.</p>
    </div>
  </div>
  <div className="Nutrition-box2">
    <div className="card-overlay">
      <h3>Group Training</h3>
      <p>Engaging small-group sessions that keep you motivated, <br /> inspired, and on track toward your goals.</p>
    </div>
  </div>
  <div className="Nutrition-box3">
    <div className="card-overlay">
      <h3>Stretching Sessions</h3>
      <p>Significantly enhance your mobility, effectively reduce the risk <br /> of injury, and boost your strength andperformance.</p>
    </div> 
  </div>
  <div className="Nutrition-box4">
    <div className="card-overlay">
      <h3>Nutrition Coaching</h3>
      <p>Strong strategies for fueling your body, enhancing strength, <br /> improving stamina, and achieving sustainable results.</p>
    </div>
  </div>
  <div className="Nutrition-box5">
    <div className="card-overlay">
      <h3>Online Coaching</h3>
      <p>Train anytime, anywhere with customized workouts, nutrition <br /> support, and weekly virtual check-ins.</p>
    </div>
  </div>
  <div className="Nutrition-box6">
    <div className="card-overlay">
      <h3>Yoga & Mindfulness</h3>
      <p>Enhance flexibility, reduce stress, and improve balance with <br /> guided yoga and breathing practices.</p>
    </div>
  </div>
</div>
    
    </section>


    <section className="Meet-Founder">
  <div className="founder-image">
    <img src="https://framerusercontent.com/images/xCjPJbkK7kJYYvQ0CQ2DVaQREMk.jpg?scale-down-to=1024&width=1128&height=1246" alt="Founder" />
  </div>

  <div className="founder-content">
    <div className="driven-badge">
      <span>✦</span> Driven by Strength
    </div>

    <h2>Meet the <span>Founder</span></h2>

    <p className="founder-desc">
      Hi, I'm Jane, founder of HerStrength. I started this studio to create a <br />
      safe, empowering space where women could build strength and <br /> confidence
      together. With years of experience as a certified trainer and <br /> nutrition
      coach, my mission is simple: to help women discover their <br /> strongest
      selves—inside and out.
    </p>

    <p className="quick-facts-title">Quick Facts:</p>

    <ul className="quick-facts">
      <li><span>✦</span> Certified Personal and Group Trainer</li>
      <li><span>✦</span> 8+ Years in Women's Fitness</li>
      <li><span>✦</span> Nutrition & Wellness Specialist</li>
    </ul>

    <button className="founder-btn">Read More About Us ↗</button>
  </div>
</section>


<section className="Transformations">
  <div className="driven-badge">
    <span>✦</span> Transformations
  </div>

  <h2 className="transform-heading">
    Women Who <span>Lift.</span><br />
    Lives That <span>Change.</span>
  </h2>

  <p className="transform-desc">
    At HerStrength, every win matters. Here's how<br />
    our members are transforming their lives.
  </p>


  <div className="marquee-wrapper">
    <div className="marquee-track marquee-right">
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
    <button className="founder-btn">Read Women Stroies ↗</button>
</section>


<section className="Why-Choose">
  <div className="driven-badge">
    <span>✦</span> Advantages
  </div>

  <h2 className="choose-heading">
    Why Women <span>Choose</span> Us
  </h2>

  <p className="choose-desc">
    We go beyond fitness—our studio is built for women who want<br />
    results, support, and empowerment.
  </p>

  <div className="choose-grid">


    <div className="choose-left">
      <div className="choose-card">
        <i className="ri-dumbbell-line choose-icon"></i>
        <h3>Expert Coaching</h3>
        <p>Certified trainers who understand <br /> women's fitness and guide you step.</p>
      </div>
      <div className="choose-card">
        <i className="ri-seedling-line choose-icon"></i>
        <h3>Holistic Approach</h3>
        <p>Programs designed to strengthen body, <br /> mind, and lifestyle.</p>
      </div>
    </div>


    <div className="choose-video">
      <video autoPlay muted loop playsInline>
        <source src={video1} type="video/mp4" />
      </video>
    </div>

    <div className="choose-right">
      <div className="choose-card">
        <i className="ri-group-line choose-icon"></i>
        <h3>Supportive Community</h3>
        <p>Train in a motivating environment where <br /> women lift each other up.</p>
      </div>
      <div className="choose-card">
        <i className="ri-award-line choose-icon"></i>
        <h3>Proven Results</h3>
        <p>From strength gains to confidence boosts, <br /> we deliver transformations last.</p>
      </div>
    </div>

  </div>
</section>


<GetStarted/>


<Testimonials/>


<section className="Blog-Section">
  <div className="blog-header">
    <div>
      <div className="driven-badge">
        <span>✦</span> Our Blog
      </div>
      <h2 className="blog-heading">
        HerStrength <span>Insights</span>
      </h2>
    </div>
    <button className="blog-btn">See All Posts ↗</button>
  </div>

  <div className="blog-cards">
    <div className="blog-card">
      <div className="blog-img blog-img1">
        <span className="blog-tag">Stretching</span>
      </div>
      <h3>5 Simple Stretches to Improve Flexibility at Home</h3>
      <p>October 1, 2025</p>
    </div>
    <div className="blog-card">
      <div className="blog-img blog-img2">
        <span className="blog-tag">Nutrition</span>
      </div>
      <h3>Nutrition Made Simple: Building a Balanced Plate</h3>
      <p>October 1, 2025</p>
    </div>
    <div className="blog-card">
      <div className="blog-img blog-img3">
        <span className="blog-tag">Fitness</span>
      </div>
      <h3>The Power of Group Training: Why Community Matters</h3>
      <p>October 1, 2025</p>
    </div>
  </div>
</section>

<Instagram/>

<Footer/>







    </>

  );
};

export default Home;