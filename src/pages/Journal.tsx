import { portfolioData } from "../Components/dataCarousal";
const Journal = () => {
  return (
    <div className="Portfolio">
      <div className="topContainer">
        <div className="firstdiv">
          <h2>JOURNAL edited by saad</h2>

          <div className="grid-container">
            {portfolioData.map((item) => (
              <>
                <div className="grid-item">
                  <div className={"bottomDivShow"}>
                    <div className="nameColumn">
                      <p>{item.name}</p>
                      <p>{item.description}</p>
                    </div>
                    <div>plus</div>
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Journal;
