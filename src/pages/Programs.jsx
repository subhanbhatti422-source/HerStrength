import "./Programs.css";
import Navbar from "../components/Navbar/Navbar";
import { useState,useEffect } from "react";
import GetStarted from "../components/GetStartedsection/GetStarted";
import Testimonials from "../components/Testimonials/Testimonials";
import Instagram from "../components/Instagram/Instagram";
import Footer from "../components/Footer/Footer";
import { useLocation } from "react-router-dom";



const Programs = () => {

 const [isWeekly, setIsWeekly] = useState(true);

  const prices = {
    weekly:  { start: 150, premium: 250 },
    monthly: { start: 600, premium: 1000 },
  };

  const current = isWeekly ? prices.weekly : prices.monthly;


  const [openIndex, setOpenIndex] = useState(null);

const toggle = (i) => {
  setOpenIndex(openIndex === i ? null : i);
};



const faqs = [
  { q: "What types of training do you offer?", a: "We offer personal coaching, group training, stretching sessions, nutrition coaching, online coaching, and yoga & mindfulness programs." },
  { q: "Do I need to be in shape before joining?", a: "Not at all! Our programs are designed for all fitness levels, from complete beginners to experienced athletes." },
  { q: "How do I know which program is right for me?", a: "We offer a free consultation to assess your goals and recommend the best program for your needs." },
  { q: "What if I have a busy schedule?", a: "We have flexible scheduling options including early morning, evening, and online sessions to fit your lifestyle." },
  { q: "Is nutrition support included?", a: "Nutrition guidance is included in our Premium plan. Basic guidance is available in the Start plan as well." },
  { q: "How long before I see results?", a: "Most members start noticing changes within 4–6 weeks with consistent effort and proper nutrition." },
  { q: "Do you offer online or virtual coaching?", a: "Yes! We offer fully online coaching programs with customized workouts and weekly virtual check-ins." },
  { q: "How do I get started?", a: "Simply click 'Book Trial Training Now' on our homepage or contact us directly to schedule your first session." },
];



const location = useLocation();

useEffect(() => {
  if (location.hash) {
    const element = document.getElementById(location.hash.substring(1));

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  } else {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
}, [location]);
  


  return (    
    <>
    <Navbar/>
    
      <section className="programs-hero">
        <div className="driven-badge">
          <span>✦</span> Our Programs
        </div>
        <h1>Strong <span>Programs</span> for<br />Confident Women</h1>
        <p>At HerStrength, we offer programs tailored to every<br />woman's goals and fitness level.</p>
      </section>


      <div className="programs-main-img"></div>


      <section className="programs-grid-section">
        <div className="driven-badge">
          <span>✦</span> Find Your Strength
        </div>
        <h2 className="programs-grid-heading">
          Programs That <span>Fits</span> You
        </h2>

        <div className="programs-grid">
          <div className="pgrid-card pgrid-img1">
            <div className="pgrid-overlay">
              <h3>Personal Coaching</h3>
              <p>Personalized one-on-one sessions designed to fit your goals, fitness level, and lifestyle.</p>
            </div>
          </div>
          <div className="pgrid-card pgrid-img2">
            <div className="pgrid-overlay">
              <h3>Group Training</h3>
              <p>Engaging small-group sessions that keep you motivated, inspired, and on track toward your goals.</p>
            </div>
          </div>
          <div className="pgrid-card pgrid-img3">
            <div className="pgrid-overlay">
              <h3>Stretching Sessions</h3>
              <p>Significantly enhance your mobility, effectively reduce the risk of injury, and boost your strength and performance.</p>
            </div>
          </div>
          <div className="pgrid-card pgrid-img4">
            <div className="pgrid-overlay">
              <h3>Nutrition Coaching</h3>
              <p>Strong strategies for fueling your body, enhancing strength, improving stamina, and achieving sustainable results.</p>
            </div>
          </div>
          <div className="pgrid-card pgrid-img5">
            <div className="pgrid-overlay">
              <h3>Online Coaching</h3>
              <p>Train anytime, anywhere with customized workouts, nutrition support, and weekly virtual check-ins.</p>
            </div>
          </div>
          <div className="pgrid-card pgrid-img6">
            <div className="pgrid-overlay">
              <h3>Yoga and Mindfulness</h3>
              <p>Enhance flexibility, reduce stress, and improve balance with guided yoga and breathing practices.</p>
            </div>
          </div>
        </div>
      </section>





       <section id="pricing" className="Pricing-Section">
      <div className="driven-badge">
        <span>✦</span> Pricing
      </div>

      <h2 className="pricing-heading">
        Choose the <span>Plan</span> that Fits<br />
        Your Goals and Lifestyle
      </h2>

      <div className="pricing-toggle">
        <button
          className={isWeekly ? "toggle-active" : ""}
          onClick={() => setIsWeekly(true)}
        >Weekly</button>
        <button
          className={!isWeekly ? "toggle-active" : ""}
          onClick={() => setIsWeekly(false)}
        >Monthly</button>
      </div>

    
      <div className="pricing-cards">

        <div className="pricing-card">
          <div className="pricing-card-top">
            <h3>Start</h3>
            <span className="price-badge">Perfect for Beginners</span>
          </div>
          <div className="price-amount">
            <b>${current.start}</b>
            <span>/{isWeekly ? "per week" : "per month"}</span>
          </div>
          <p className="price-desc">Ideal for those starting a fitness journey or wanting structured guidance.</p>
          <p className="includes-title">Includes:</p>
          <ul className="price-features">
            <li><span>✦</span> Access to group training sessions</li>
            <li><span>✦</span> One personalized 1:1 coaching session per week</li>
            <li><span>✦</span> Basic nutrition guidance</li>
            <li><span>✦</span> Weekly progress check-in</li>
            <li><span>✦</span> Support & accountability</li>
          </ul>
          <button className="price-btn">Join Now ↗</button>
        </div>

        <div className="pricing-card">
          <div className="pricing-card-top">
            <h3>Premium</h3>
            <span className="price-badge">Complete Transformation</span>
          </div>
          <div className="price-amount">
            <b>${current.premium}</b>
            <span>/{isWeekly ? "per week" : "per month"}</span>
          </div>
          <p className="price-desc">Ideal for individuals committed to fast, comprehensive results with full support and guidance.</p>
          <p className="includes-title">Includes Everything in Start Package, Plus:</p>
          <ul className="price-features">
            <li><span>✦</span> Unlimited group training sessions</li>
            <li><span>✦</span> Personalized 1:1 coaching 2–3x per week</li>
            <li><span>✦</span> Advanced nutrition coaching and meal plans</li>
            <li><span>✦</span> Priority scheduling and progress tracking</li>
            <li><span>✦</span> Access to exclusive workshops and challenges</li>
          </ul>
          <button className="price-btn">Join Now ↗</button>
        </div>

      </div>
    </section>



    <section id="faqs" className="FAQ-Section">
  <div className="driven-badge">
    <span>✦</span> FAQs
  </div>

  <h2 className="faq-heading">
    Frequently <span>Asked</span> Questions
  </h2>

  <div className="faq-list">
    {faqs.map((item, i) => (
      <div className="faq-item" key={i} onClick={() => toggle(i)}>
        <div className="faq-question">
          <p>{item.q}</p>
          <span className={openIndex === i ? "faq-icon open" : "faq-icon"}>+</span>
        </div>
        {openIndex === i && (
          <p className="faq-answer">{item.a}</p>
        )}
      </div>
    ))}
  </div>
</section>

<GetStarted/>
<Testimonials/>
<Instagram/>

<Footer/>
    
    </>
    
  )
}

export default Programs
