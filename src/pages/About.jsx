import gemini from "../assets/images/gemini-logo.svg";
import Footer from "../components/Footer/Footer";
import GetStarted from "../components/GetStartedsection/GetStarted";
import Instagram from "../components/Instagram/Instagram";
import MeetFounder from "../components/MeetFounder/MeetFounder";
import Navbar from '../components/Navbar/Navbar'
import Reviews from "../components/reviews/Reviews";
import Transformations from "../components/Transformations/Transformations";

import "./About.css";

const About = () => {
  return (
    <>
      <Navbar />

      <section className="Fitness-Studio">
        <div className="Stronger3">
          <img src={gemini} />
          <p>About Us</p>
        </div>

        <div className="Fitness">
          <h1>Meet the Team <span>Behind</span> Your Fitness Success</h1>
          <div className="Fitness-p">
            <p>HerStrength is the fitness studio designed for women who want to transform their bodies, minds, and lifestyles.</p>
          </div>
        </div>

        <div className="main-image" />
      </section>

      <Reviews />
      <MeetFounder />
      <Transformations />
      <GetStarted />
      <Instagram />
      <Footer />
    </>
  );
};

export default About;