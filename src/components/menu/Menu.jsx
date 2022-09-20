import MenuItem from "../menuitem/MenuItem";
import "./Menu.scss";

export default function Menu(props) {
  const { menuOpen, onClick } = props;

  const menuClasses = `menu ${menuOpen ? "active" : ""}`;

  const data = ["intro", "about", "portfolio", "works", "contact"];
  const menuItems = data.map((item) => {
    return <MenuItem item={item} onClick={onClick} key={data.indexOf(item)} />;
  });
  return (
    <div className={menuClasses}>
      <ul>{menuItems}</ul>
    </div>
  );
}
