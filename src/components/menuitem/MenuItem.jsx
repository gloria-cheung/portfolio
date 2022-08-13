import "./MenuItem.scss";

export default function MenuItem(props) {
  const { item, onClick } = props;
  const title = item.slice(0, 1).toUpperCase() + item.slice(1);
  return (
    <li onClick={onClick}>
      <a href={`#${item}`}>{title}</a>
    </li>
  );
}
