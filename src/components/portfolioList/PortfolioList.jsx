import "./PortfolioList.scss";

export default function PortfolioList(props) {
  const { title } = props;
  return <li className="portfolioList">{title}</li>;
}
