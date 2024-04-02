import MainImage from "/whoamI.png"
function Contact() {
  return (
    <div className="page-background">
      <h1>Contact Me</h1>
      <img className="contact-image" src={MainImage}></img>
      <p>
        Email: bex@sendponymum.com
        <br/> OR 
        <br/>click on one of the links
        <br />
      </p>
      <span className="buttonGroup">
        <a
          href="https://www.facebook.com/sendponymum"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa fa-facebook" aria-hidden="true"></i>
        </a>
        <a
          href="https://www.instagram.com/sendponymum/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa fa-instagram" aria-hidden="true"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/rebecca-m-938a28145/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa fa-linkedin" aria-hidden="true"></i>
        </a>
      </span>
    </div>
  );
}

export default Contact;
