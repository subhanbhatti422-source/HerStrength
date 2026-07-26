import onlyLogo from "../../assets/images/only-logo.svg";
import { useState, useEffect } from "react";
const Reviews = () => {


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
  return (
    <>
    <section className="only-logo">
    
    <div className="logo-p">
        <img src={onlyLogo} />
        <h2>Our Mission is <span>empower</span>individuals to <br /> <span>achieve</span> lasting <span>transformations</span> through <br /> <span> personalized</span> training, <span>smart</span> nutrition, <br /> and a <span>supportive</span>community.</h2>
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

      
    </>
  )
}

export default Reviews
