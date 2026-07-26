import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../../assets/images/logo.svg";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const close = () => setMenuOpen(false);

  return (
    <>
      <div className="nav">

        <Link to="/" onClick={close}>
          <img src={logo} alt="logo" />
        </Link>


        <div className="menu">
          <Link to="/">Home</Link>
          <Link to="/programs">Programs</Link>
          <Link to="/programs#pricing">Pricing</Link>
          <Link to="/programs#faqs">FAQs</Link>
          <Link to="/about">About</Link>
          <Link to="/results">Results</Link>
          <Link to="/blog">Blog</Link>
        </div>

        <button className="nav-cta">Get in Touch</button>


        <button
          className={`hamburger ${menuOpen ? "hamburger--open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className="bar bar1" />
          <span className="bar bar2" />
          <span className="bar bar3" />
        </button>

      </div>


      {menuOpen && <div className="mob-backdrop" onClick={close} />}


      <div className={`mob-drawer ${menuOpen ? "mob-drawer--open" : ""}`}>

        <div className="mob-drawer-top">
          <Link to="/" onClick={close}>
            <img src={logo} alt="logo" />
          </Link>
          <button className="mob-close" onClick={close}>✕</button>
        </div>

        <div className="mob-badge">
          <span>✦</span> Women's Fitness Studio
        </div>

        <nav className="mob-links">
          {[
            { to: "/", label: "Home" },
            { to: "/programs", label: "Programs" },
            { to: "/programs#pricing", label: "Pricing" },
            { to: "/programs#faqs", label: "FAQs" },
            { to: "/about", label: "About" },
            { to: "/results", label: "Results" },
            { to: "/blog", label: "Blog" },
          ].map(({ to, label }, i) => (
            <Link
              key={label}
              to={to}
              onClick={close}
              style={{ animationDelay: `${i * 0.055}s` }}
              className={menuOpen ? "mob-link-animate" : ""}
            >
              {label}
            </Link>
          ))}
        </nav>

        <Link to="/contact" className="mob-cta" onClick={close}>
          Get in Touch ↗
        </Link>

        <p className="mob-tagline">Stronger Starts Here.</p>

      </div>
    </>
  );
};

export default Navbar;