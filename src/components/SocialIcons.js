import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faFacebook,
  faTwitter,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Socialicons() {
  return (
    
    <div class="row text-center">
      
      <p class="col">
   
        <a
          href="/"
          className="facebook social"
        >
          <FontAwesomeIcon icon={faFacebook} size="3x" color="#00acee" />
        </a>
        <a
          href="/"
          className="instagram social"
        >
          <FontAwesomeIcon icon={faInstagram} size="3x" color="#fff"  />
        </a>
        <a href="/" className="twitter social">
          <FontAwesomeIcon icon={faTwitter} size="3x" color="#00acee" />
        </a>
        <a href="/" className="linkedin social">
          <FontAwesomeIcon icon={faLinkedin} size="3x" color="#fff" />
        </a>
      </p>
    </div>
    
  );
}