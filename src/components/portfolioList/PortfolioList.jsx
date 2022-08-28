import "./PortfolioList.scss";

export default function PortfolioList(props) {
  const { title, active, setSelected, id } = props;
  return (
    <li
      className={active ? "portfolioList active" : "portfolioList"}
      onClick={() => setSelected(id)}
    >
      {title}
    </li>
  );
}
