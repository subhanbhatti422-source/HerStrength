import React from 'react'
import "./GetStarted.css";

const GetStarted = () => {
  return (
    <>
    <section className="Get-Started">

  {/* Left Image */}
  <div className="started-left-img">
    <img src="https://framerusercontent.com/images/cJEOMZEz07nt73BZccXwZxbug.jpg?scale-down-to=512&width=880&height=720" alt="" />
  </div>

  {/* Center Content */}
  <div className="started-content">
    <div className="driven-badge">
      <span>✦</span> Get Started
    </div>

    <h2 className="started-heading">
      Ready to <span>Unleash</span><br />
      Your Strength?
    </h2>

    <p className="started-desc">
      Join a community of women building confidence, resilience, and lasting
      results. Your journey starts with one powerful your choice.
    </p>

    <button className="started-btn">Book Trial Training Now ↗</button>
  </div>

  {/* Right Image */}
  <div className="started-right-img">
    <img src="https://framerusercontent.com/images/OKo8hQAHLbGlsrMr0xzfRXYKkx0.jpg?scale-down-to=512&width=880&height=720" alt="" />
  </div>

</section>
    </>
  )
}

export default GetStarted
