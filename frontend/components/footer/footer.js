import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faAngellist, faGithub } from "@fortawesome/free-brands-svg-icons";


const footerItem = () => (
        <footer id="bottom">
          {/* <div className="col">
            <ul className="clean-list">
              <li>About Us</li>
              <li>Fair Trade Music Policy</li>
              <li>Jobs</li>
              <div id="custom-item">
                <span>
                  <span id="lng-color">Apps:&nbsp;&nbsp;</span>
                  <span id="und">Android </span>
                  <span id="lng-color">|&nbsp;</span>
                  <span id="und">iOS</span>
                </span>
              </div>
              <li>Buttons / Logos</li>
              <li></li>
              <li>Terms of Use</li>
              <li>Privacy</li>
              <li>Copyrite Policy</li>
            </ul>
          </div>
          <div className="col">
            <ul className="clean-list">
              <li>Gift Cards</li>
              <li>Bandcamp Daily</li>
              <li>Facebook</li>
              <li>Twitter | Status</li>
              <li>Instagram</li>
              <li>Contact/Help</li>
            </ul>
          </div> */}
        <div className="col">
          <ul id='social-media-list'>
            <li> <a href="https://www.linkedin.com/in/edward-garrett-9b54b5b1/" ><FontAwesomeIcon icon={faLinkedin} size='6x' color='black'/></a></li>
            <li> <a href="https://angel.co/u/edward-garrett-1" ><FontAwesomeIcon icon={faAngellist} size='6x' color='black'/></a></li>
            <li> <a href="https://github.com/egarrett3" ><FontAwesomeIcon icon={faGithub} size='6x' color='black'/></a></li>
          </ul>
        </div>
          {/* <div className="col">
            <ul className="clean-list">
              <li>Login</li>
              <li>BandChamp for Artists</li>
              <li>BandChamp for Fans</li>
              <li>BandChamp for Labels</li>
              <li>Mobile View</li>
              <li></li>
              <div id="lng-box">
                <span id="lng-color">Language:&nbsp;</span>
                <span id="und">English</span>
              </div>
            </ul>
          </div> */}
        </footer>
)

export default footerItem;