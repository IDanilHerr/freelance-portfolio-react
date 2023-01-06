import vk from "./../../img/icons/vk.svg";
import instagram from "./../../img/icons/instagram.svg";
import twitter from "./../../img/icons/twitter.svg";
import linkedIn from "./../../img/icons/linkedIn.svg";
import gitHub from "./../../img/icons/gitHub.svg";

import "./style.css";

const Footer = () => {
    return (
        <footer className="footer">
          <div className="container">
              <div className="footer__wrapper">
                  <ul className="social">
                      <li className="social__item"><a href="https://vk.com/danya_domofon"><img src={vk} alt="Link" /></a></li>
                      <li className="social__item"><a href="https://www.instagram.com/danilherr/"><img src={instagram} alt="Link" /></a></li>
                      <li className="social__item"><a href="#!"><img src={twitter} alt="Link" /></a></li>
                      <li className="social__item"><a href="https://github.com/IDanilHerr"><img src={gitHub} alt="Link" /></a></li>
                      <li className="social__item"><a href="https://www.linkedin.com/in/danil-herr-214106261/"><img src={linkedIn} alt="Link" /></a></li>
                  </ul>
                  <div className="copyright">
                      <p>© 2022 frontend-danil-herr</p>
                  </div>
              </div>
          </div>
      </footer>
    );
}
 
export default Footer;