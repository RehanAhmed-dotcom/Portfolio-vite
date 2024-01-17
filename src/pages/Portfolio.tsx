import { portfolioData } from "../Components/dataCarousal";
const Portfolio = () => {

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
{portfolioData.map(item=>(
  <div className="grid-item">
    <div className="bottomDiv">

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
