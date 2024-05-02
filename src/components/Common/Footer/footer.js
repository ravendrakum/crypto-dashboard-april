import React from "react";
import "./styles.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import EmailIcon from "@mui/icons-material/Email";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import {Link} from 'react-router-dom'


function Footer() {
  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  return (
    <div className="footer">
      <h2 className="logo" onClick={() => topFunction()}>
        CryptoTracker<span>.</span>
      </h2>
      <div className="social-links">
        <Link to="https://facebook.com">
          <FacebookIcon className="social-link" />
        </Link>
        <Link to="mailto:avivashishta@gmail.com">
          <EmailIcon className="social-link" />
        </Link>
        <Link to="https://www.twitter.com">
          <TwitterIcon className="social-link" />
        </Link>
        <Link to="https://www.instagram.com">
          <InstagramIcon className="social-link" />
        </Link>
      </div>
    </div>
  );
}

export default Footer;