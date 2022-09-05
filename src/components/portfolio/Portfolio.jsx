import { useEffect, useState } from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import "./Portfolio.scss";
import {
  featuredPortfolio,
  reactPortfolio,
  rubyPortfolio,
  widgetPortfolio,
} from "../../data";

export default function Portfolio() {
  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([]);
  const list = [
    {
      id: "featured",
      title: "Featured",
    },
    {
      id: "react",
      title: "React",
    },
    {
      id: "ruby",
      title: "Ruby",
    },
    {
      id: "widget",
      title: "Widget",
    },
  ];

  useEffect(() => {
    switch (selected) {
      case "featured":
        setData(featuredPortfolio);
        break;
      case "react":
        setData(reactPortfolio);
        break;
      case "ruby":
        setData(rubyPortfolio);
        break;
      case "widget":
        setData(widgetPortfolio);
        break;
      default:
        setData(featuredPortfolio);
    }
  }, [selected]);
  const clickHandler = (item) => {
    window.location.href = item.source;
  };

  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {list.map((item) => (
          <PortfolioList
            {...item}
            active={selected === item.id}
            setSelected={setSelected}
          />
        ))}
      </ul>
      <div className="container">
        {data.map((item) => (
          <div className="item">
            <img src={item.img} alt="" onClick={() => clickHandler(item)} />

            <h3>{item.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
