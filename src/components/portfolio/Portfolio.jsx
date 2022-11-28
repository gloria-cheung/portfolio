import { useEffect, useState } from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import PortfolioItem from "../portfolioItem/PortfolioItem";
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

  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {list.map((item) => (
          <PortfolioList
            {...item}
            key={item.id}
            active={selected === item.id}
            setSelected={setSelected}
          />
        ))}
      </ul>
      <div className="container">
        {data.map((item) => (
          <PortfolioItem key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
}
