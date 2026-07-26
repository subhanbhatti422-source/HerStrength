import "./Testimonials.css";

import girl1 from "../../assets/images/image8.jpg";
import girl2 from "../../assets/images/image23.jpg";
import girl3 from "../../assets/images/image7.jpg";
import girl4 from "../../assets/images/image8.jpg";
import review1 from "../../assets/images/image23.jpg";
import review2 from "../../assets/images/image24.jpg";
import review4 from "../../assets/images/image1.jpg";
import review5 from "../../assets/images/image8.jpg";
import review6 from "../../assets/images/image13.jpg";
import review7 from "../../assets/images/image16.jpg";

const Testimonials = () => {
  return (
  <>
    <section className="Testimonials">
      <div className="driven-badge">
        <span>✦</span> Testimonials
      </div>
    
      <h2 className="testimonial-heading">
        What Our <span>Members</span> Say
      </h2>
    
      <p className="testimonial-sub">800+ Satisfied Clients</p>
    
      {/* Row 1 - Right direction */}
      <div className="testimonial-wrapper">
        <div className="testimonial-track track-right">
    
          {[
            { name: "Sofia", age: 40, text: "HerStrength gave me more than fitness—it gave me confidence, energy, and a supportive community I truly belong to.", img: girl1 },
            { name: "Nora", age: 24, text: "The trainers understand women's bodies and goals. Their support pushed me beyond limits I never thought possible—and I love it.", img: girl2 },
            { name: "Chloe", age: 44, text: "From day one, I felt welcome and encouraged. The trainers push me while keeping workouts fun, safe, and totally effective.", img: girl3 },
            { name: "Clara", age: 34, text: "The group training sessions keep me motivated and inspired. I've never enjoyed working out this much in my life.", img: girl4 },
            { name: "Sofia", age: 40, text: "HerStrength gave me more than fitness—it gave me confidence, energy, and a supportive community I truly belong to.", img: girl1 },
            { name: "Nora", age: 24, text: "The trainers understand women's bodies and goals. Their support pushed me beyond limits I never thought possible—and I love it.", img: girl2 },
            { name: "Chloe", age: 44, text: "From day one, I felt welcome and encouraged. The trainers push me while keeping workouts fun, safe, and totally effective.", img: girl3 },
            { name: "Clara", age: 34, text: "The group training sessions keep me motivated and inspired. I've never enjoyed working out this much in my life.", img: girl4 },
          ].map((r, i) => (
            <div className="review-card" key={i}>
              <div className="review-stars">★★★★★</div>
              <p className="review-text">"{r.text}"</p>
              <div className="review-person">
                <img src={r.img} alt={r.name} />
                <div>
                  <b>{r.name}</b>
                  <p>{r.age} years old</p>
                </div>
              </div>
            </div>
          ))}
    
        </div>
      </div>
    
      {/* Row 2 - Left direction */}
      <div className="testimonial-wrapper">
        <div className="testimonial-track track-left">
    
          {[
            { name: "Elena", age: 33, text: "I always struggled to stay consistent. Now, with HerStrength's guidance and support, fitness has become my favorite lifestyle habit.", img: review7 },
            { name: "Amira", age: 26, text: "I used to hate working out, but HerStrength completely changed that. Now I look forward to every single session.", img: review4 },
            { name: "Jade", age: 31, text: "Every session feels empowering and purposeful. I leave HerStrength stronger, happier, and more confident in both body and mind.", img: review2 },
            { name: "Anna", age: 29, text: "Before HerStrength, gyms felt intimidating. Now I feel confident, supported, and stronger every time I walk in.", img: review2 },
            { name: "Elena", age: 33, text: "I always struggled to stay consistent. Now, with HerStrength's guidance and support, fitness has become my favorite lifestyle habit.", img: review1 },
            { name: "Amira", age: 26, text: "I used to hate working out, but HerStrength completely changed that. Now I look forward to every single session.", img: girl3 },
            { name: "Jade", age: 31, text: "Every session feels empowering and purposeful. I leave HerStrength stronger, happier, and more confident in both body and mind.", img: review5 },
            { name: "Anna", age: 29, text: "Before HerStrength, gyms felt intimidating. Now I feel confident, supported, and stronger every time I walk in.", img: review6 },
          ].map((r, i) => (
            <div className="review-card" key={i}>
              <div className="review-stars">★★★★★</div>
              <p className="review-text">"{r.text}"</p>
              <div className="review-person">
                <img src={r.img} alt={r.name} />
                <div>
                  <b>{r.name}</b>
                  <p>{r.age} years old</p>
                </div>
              </div>
            </div>
          ))}
    
        </div>
      </div>
    </section>
  </>
  )
}

export default Testimonials
