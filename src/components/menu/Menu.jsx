import MenuItem from "../menuitem/MenuItem";
import "./Menu.scss";

export default function Menu(props) {
  const { menuOpen, onClick } = props;

  const menuClasses = `menu ${menuOpen ? "active" : ""}`;

  const menuItems = ["intro", "portfolio", "works", "education", "contact"].map(
    (item) => {
      return <MenuItem item={item} onClick={onClick} />;
    }
  );
  return (
    <div className={menuClasses}>
      <ul>{menuItems}</ul>
    </div>
  );
}
