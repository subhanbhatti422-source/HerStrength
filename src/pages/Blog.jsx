import Footer from "../components/Footer/Footer";
import Instagram from "../components/Instagram/Instagram";
import Navbar from "../components/Navbar/Navbar";
import "./Blog.css";


const Blog = () => {
  return (
   <>

   <Navbar/>

   
   <section className="Blog-Section">
  <div className="blog-header">
    <div>
      <div className="driven-badge">
        <span>✦</span> Blog
      </div>
      <h2 className="blog-heading">
       Inspiration, Fitness <br /> Tips and Insights
      </h2>
    </div>
  <p>Stay motivated and informed with expert advice, client <br /> stories, and practical fitness & nutrition tips designed to <br /> help you reach your goals.

</p>
  </div>

  <div className="blog-cards">
    <div className="blog-card">
      <div className="blog-img blog-img1">
        <span className="blog-tag">Stretching</span>
      </div>
      <h3>5 Simple Stretches to Improve Flexibility at Home</h3>
      <p>August 26, 2025</p>
    </div>
    <div className="blog-card">
      <div className="blog-img blog-img2">
        <span className="blog-tag">Nutrition</span>
      </div>
      <h3>Nutrition Made Simple: Building a Balanced Plate</h3>
      <p>September 30, 2025</p>
    </div>
    <div className="blog-card">
      <div className="blog-img blog-img3">
        <span className="blog-tag">Fitness</span>
      </div>
      <h3>The Power of Group Training: Why Community Matters</h3>
      <p>September 30, 2025</p>
    </div>
  </div>
  <div className="blog-cards">
    <div className="blog-card">
      <div className="blog-img blog-img4">
        <span className="blog-tag">Stretching</span>
      </div>
      <h3>Why Community is the Secret to Fitness Success</h3>
      <p>September 30, 2025</p>
    </div>
    <div className="blog-card">
      <div className="blog-img blog-img5">
        <span className="blog-tag">Nutrition</span>
      </div>
      <h3>Lasting Strength Results Start with Nutrition</h3>
      <p>September 23, 2025</p>
    </div>
    <div className="blog-card">
      <div className="blog-img blog-img6">
        <span className="blog-tag">Fitness</span>
      </div>
      <h3>Why Stretching Is the Secret to Stronger, Safe Workouts</h3>
      <p>August 26, 2025</p>
    </div>
  </div>
</section>
   

   <Instagram/>

   <Footer/>
   </>
  )
}

export default Blog
