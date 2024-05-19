import "./footer.scss";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footerListContainer">
        <ul>
          <li>
            <a href="#">
              <strong>Home</strong>
            </a>
          </li>
          <li>
            <a href="#">Categories</a>
          </li>
          <li>
            <a href="#">Devices</a>
          </li>
          <li>
            <a href="#">Pricing</a>
          </li>
          <li>
            <a href="#">FAQ</a>
          </li>
        </ul>
        <ul>
          <li>
            <a href="#">
              <strong>Movies</strong>
            </a>
          </li>
          <li>
            <a href="#">Gernes</a>
          </li>
          <li>
            <a href="#">Trending</a>
          </li>
          <li>
            <a href="#">New Release</a>
          </li>
          <li>
            <a href="#">Popular</a>
          </li>
        </ul>
        <ul>
          <li>
            <a href="#">
              <strong>Shows</strong>
            </a>
          </li>
          <li>
            <a href="#">Gernes</a>
          </li>
          <li>
            <a href="#">Trending</a>
          </li>
          <li>
            <a href="#">New Release</a>
          </li>
          <li>
            <a href="#">Popular</a>
          </li>
        </ul>
        <ul>
          <li>
            <a href="#">
              <strong>Support</strong>
            </a>
          </li>
          <li>
            <a href="#">Contact Us</a>
          </li>
        </ul>
        <ul>
          <li>
            <a href="#">
              <strong>Subscription</strong>
            </a>
          </li>
          <li>
            <a href="#">Plans</a>
          </li>
          <li>
            <a href="#">Features</a>
          </li>
        </ul>
        <ul>
          <li>
            <strong>Connect With Us</strong>
          </li>
          <li className="icons">
            <a href="#"><img src="./fb.png" alt="" /></a>
            <a href="#"><img src="./x.png" alt="" /></a>
            <a href="#"><img src="./linkdin.png" alt="" /></a>
          </li>
        </ul>
      </div>
      <div className="footerEnd">
        <div className="footerEndContainer">
          <p>@2023 streamvib, All Rights Reserved</p>
          <div className="links">
            <a href="#">Terms of Use</a>
            <a href="#">Privacy Policy</a>
            <a className="borderNone" href="#">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
