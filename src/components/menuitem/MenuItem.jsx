import "./MenuItem.scss";

export default function MenuItem(props) {
  const { item, onClick } = props;
  const title = item.slice(0, 1).toUpperCase() + item.slice(1);
  // console.log(window.top.location.hash);
  const redirectTo = () => {
    onClick();
    window.top.location.hash = item;
  };
  return (
    <li onClick={redirectTo}>
      <span>{title}</span>
    </li>
  );
}
