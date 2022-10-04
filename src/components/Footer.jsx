import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="icons">
        <a href="/">
          <i className="fab fa-facebook"></i>
        </a>
        <a href="/">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="/">
          <i className="fab fa-youtube"></i>
        </a>
        <div className="bottom-footer">
          <p className="company-name">
            Copyright &copy; Oltiva, All Rights Reserved 2017
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
