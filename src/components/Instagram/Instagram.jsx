import React from 'react'
import "./Instagram.css";

const Instagram = () => {
  return (
    <>
    <section className="Instagram-Section">
  <div className="driven-badge">
    <span>✦</span> We Are in Instagram
  </div>
  <h2 className="insta-heading">
    Follow Us for <span>Daily</span> Tips<br />and Inspiration
  </h2>

  <div className="insta-grid">
    <img src="https://framerusercontent.com/images/l2pa1qbFNhGVH7HiX68cw5vJKE.jpg?scale-down-to=512&width=960&height=960" alt="" />
    <img src="https://framerusercontent.com/images/nEUKtexD23cazyRlJja2ATvf1yM.jpg?scale-down-to=512&width=960&height=960" alt="" />
    <img src="https://framerusercontent.com/images/QtUl6zctEph80BY8SMj9wnI6Y.jpg?scale-down-to=512&width=960&height=960" alt="" />
    <img src="https://framerusercontent.com/images/65LJP7P4SDcMfdJHa9e1VVHPoaA.jpg?scale-down-to=512&width=960&height=960" alt="" />
  </div>

  <button className="insta-btn">Follow Our Instagram ↗</button>
</section>
    </>
  )
}

export default Instagram
