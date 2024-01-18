import { useState } from "react";
import { portfolioData } from "../Components/dataCarousal";
const Portfolio = () => {
  const [toggle, setToggle] = useState(0);
  const toggleHover = (id: number) => {
    setToggle(id);
  };
  return (
    <div className="Portfolio">
      <div className="topContainer">
        <div className="firstdiv">
          <h2>MY PORTFOLIO</h2>
          <div className="portfolio_category">
            <a>All</a>
            <a>App</a>
            <a>Web</a>
          </div>

          <div className="grid-container">
            {portfolioData.map((item) => (
              <div
                className="grid-item"
                onMouseEnter={() => {
                  toggleHover(item.id);
                }}
                onMouseLeave={() => {
                  toggleHover(0);
                }}
              >
                <div
                  className={
                    toggle == item.id ? "bottomDivShow" : "bottomDivHidden"
                  }
                >
                  <div className="nameColumn">
                    <p> {item.name}</p>
                    <p> {item.description}</p>
                  </div>
                  <div>plus</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
