import { Person, Mail, LinkedIn, GitHub } from "@material-ui/icons";
import "./Topbar.scss";

export default function Topbar(props) {
  const { onClick, menuOpen } = props;

  const topbarClasses = `topbar ${menuOpen ? "active" : ""}`;

  return (
    <div className={topbarClasses}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            GC
          </a>
          <div className="itemContainer">
            <Person className="icon" />
            <span>647 801 3218</span>
          </div>
          <div className="itemContainer">
            <Mail className="icon" />
            <a href="mailto:gloriacheung812@gmail.com">
              gloriacheung812@gmail.com
            </a>
          </div>
          <div className="itemContainer">
            <LinkedIn className="icon" />
            <a href="http://www.linkedin.com/in/gloria-cheung">LinkedIn</a>
          </div>
          <div className="itemContainer">
            <GitHub className="icon" />
            <a href="http://www.github.com/gloria-cheung">GitHub</a>
          </div>
        </div>

        <div className="right">
          <div className="hamburger" onClick={onClick}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
