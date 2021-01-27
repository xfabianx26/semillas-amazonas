import React from "react";
import SocialIcons from "./SocialIcons";
import '../footer.css';
import '../social.css';

const Footer = () => {
  return (
    <footer className="py-4">
      <div className="container">
        <div className="row justify-content-between text-center">
        <div className="col-md-12 text-md-right">
            <SocialIcons/>
          </div>
          <div className="col-md-12 text-md-left">
            <p className="footer">
              
              <p className="creadoresPoyecto">
                &copy;Fabian Andres Ortiz,  &copy;Wilmer,  &copy;Daniel.
              </p>
            </p>
            
          </div>
        
        </div>
      </div>
    </footer>
  );
};

export default Footer;