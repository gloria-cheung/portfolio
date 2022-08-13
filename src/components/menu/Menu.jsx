import "./Menu.scss";

export default function Menu(props) {
  const { menuOpen } = props;

  const menuClasses = `menu ${menuOpen ? "active" : ""}`;

  return (
    <div className={menuClasses}>
      <ul>
        <li>
          <a href="#intro">Home</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#works">Works</a>
        </li>
        <li>
          <a href="#education">Education</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  );
}
