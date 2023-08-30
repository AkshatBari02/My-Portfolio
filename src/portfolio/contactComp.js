import { Link } from "react-router-dom";
import DrawerAppBar from "./NavComp";
import "./contactcomp.css";

function ContactComp() {
  return (
    <>
      <DrawerAppBar />
      <div className="contact-content" style={{}}>
        <div
          style={{ marginTop: "-47px", animation: "slideFromLeft 1s forwards" }}
        >
          <h1 className="heading">Contact Me:</h1>
          <div>
            <img
              src={require(`./portfolio images/gmail.png`)}
              alt="GitHub"
              className="gmail-img"
            />
            <Link to="akshatbari.ab@gmail.com">
              <span className="contact-link">akshatbari.ab@gmail.com</span>
            </Link>
          </div>

          <h1 className="heading">Hire Me:</h1>
          <div>
            <img
              src={require(`./portfolio images/linkedin.png`)}
              alt="LinkedIn"
              className="linkedin-img"
            />
            <Link to="https://www.linkedin.com/in/akshat-bari-45531b256">
              <span className="contact-link">
                https://www.linkedin.com/in/akshat-bari-45531b256/
              </span>
            </Link>
          </div>

          <h1 className="heading">Track Me:</h1>
          <div>
            <img
              src={require(`./portfolio images/social.png`)}
              alt="GitHub"
              className="git-img"
            />
            <Link to="https://github.com/AkshatBari02">
              <span className="contact-link">
                https://github.com/AkshatBari02/
              </span>
            </Link>
          </div>

          <h1 className="heading">Social Links:</h1>
          <div>
            <img
              src={require(`./portfolio images/instagram.png`)}
              alt="Instagram"
              className="insta-img"
            />
            <Link to="https://www.instagram.com/akshat_bari/">
              <span className="contact-link">
                https://www.instagram.com/akshat_bari/
              </span>
            </Link>
          </div>
        </div>
        <div style={{ animation: "slideFromRight 1s forwards" }}>
          <img
            src={require(`./portfolio images/contact.jpg`)}
            alt=""
            className="contact-img"
          />
        </div>
      </div>
    </>
  );
}
export default ContactComp;
