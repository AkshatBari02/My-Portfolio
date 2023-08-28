import { Link } from "react-router-dom";

function ContactComp() {
  return (
    <>
      <div style={{ padding: "40px", color: "white",display:"flex" }}>
        <div style={{marginTop:"-47px",animation: "slideFromLeft 1s forwards"}}>
        <h1>Contact Me:</h1>
        <div style={{ paddingLeft: "50px" }}>
          <img
            src={require(`./portfolio images/gmail.png`)}
            alt="GitHub"
            style={{ height: "30px", width: "30px", marginRight: "20px" }}
          />
          <Link to="akshatbari.ab@gmail.com">
            <span className="contact-link">akshatbari.ab@gmail.com</span>
          </Link>
            </div>

        <h1>Hire Me:</h1>
        <div style={{ paddingLeft: "50px" }}>
          <img
            src={require(`./portfolio images/linkedin.png`)}
            alt="LinkedIn"
            style={{ height: "30px", width: "30px", marginRight: "20px" }}
          />
          <Link to="https://www.linkedin.com/in/akshat-bari-45531b256">
            <span className="conatct-link">https://www.linkedin.com/in/akshat-bari-45531b256/</span>
          </Link>
        </div>

        <h1>Track Me:</h1>
        <div style={{ paddingLeft: "50px" }}>
          <img
            src={require(`./portfolio images/social.png`)}
            alt="GitHub"
            style={{ height: "30px", width: "30px", marginRight: "20px" }}
          />
          <Link to="https://github.com/AkshatBari02">
            <span className="contact-link">https://github.com/AkshatBari02/</span>
          </Link>
        </div>

        <h1>Social Links:</h1>
        <div style={{ paddingLeft: "50px" }}>
          <img
            src={require(`./portfolio images/instagram.png`)}
            alt="Instagram"
            style={{ height: "30px", width: "30px", marginRight: "20px" }}
          />
          <Link to="https://www.instagram.com/akshat_bari/">
            <span className="contact-link">https://www.instagram.com/akshat_bari/</span>
          </Link>
        </div>
            
        </div>
        <div style={{ animation: "slideFromRight 1s forwards" }}>
            <img src={require(`./portfolio images/contact.jpg`)} alt="" style={{height:"450px",width:"450px",marginLeft:"225px",borderRadius:"15px"}}/>
        </div>
      </div>
    </>
  );
}
export default ContactComp;
