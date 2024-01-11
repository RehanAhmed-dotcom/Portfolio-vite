import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
const About = () => {
  return (
    <div className="About">
      <div className="topContainer">
        <div className="userInfo">
          <div className="imageView">
            <img
              src={"/src/assets/me.jpg"}
              alt="no image"
              width="100%"
              height="100%"
            />
          </div>
          <div className="userContent">
            <h2>
              im a ux /ui designer austin based who loves clean, simple & unique
              design. i also enjoy crafting brand identities, icons, &
              ilustration work.
            </h2>
            <p>
              To an English person, it will seem like simplified English, as a
              skeptical Cambridge friend of mine told me what Occidental is. The
              European languages are members of the same family.English person.
            </p>
          </div>
        </div>
        <Carousel>
          <div>
            <img src="src/assets/1.jpeg" />
            <p className="legend">Legend 1</p>
          </div>
          <div>
            <img src="assets/2.jpeg" />
            <p className="legend">Legend 2</p>
          </div>
          <div>
            <img src="assets/3.jpeg" />
            <p className="legend">Legend 3</p>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default About;
