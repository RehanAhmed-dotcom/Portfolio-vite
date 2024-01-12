import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import CarouselItem from "../Components/CarouselItem";
import { dataCarousal, responsive } from "../Components/dataCarousal";
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
        <div className="carousel">
          <Carousel
            swipeable={true}
            draggable={true}
            showDots={true}
            responsive={responsive}
            arrows={false}
            ssr={true} // means to render carousel on server-side.
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={3000}
            keyBoardControl={true}
            customTransition="all .5"
            transitionDuration={500}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            deviceType={"desktop"}
            dotListClass="carousel-dot"
            itemClass="carousel-item-padding-40-px"
          >
            {dataCarousal.map((item) => (
              <CarouselItem
                image={item.image}
                heading={item.heading}
                detail={item.detail}
              />
            ))}
          </Carousel>
        </div>

        {/* <div className="carousel">
          <CCarousel controls indicators dark>
            <CCarouselItem>
              <CImage
                className="d-block w-100"
                src={"/src/assets/avatar.jpg"}
                alt="slide 1"
              />
              <CCarouselCaption className="d-none d-md-block">
                <h5>First slide label</h5>
                <p>
                  Some representative placeholder content for the first slide.
                </p>
              </CCarouselCaption>
            </CCarouselItem>
            <CCarouselItem>
              <CImage
                className="d-block w-100"
                src={"/src/assets/avatar.jpg"}
                alt="slide 2"
              />
              <CCarouselCaption className="d-none d-md-block">
                <h5>Second slide label</h5>
                <p>
                  Some representative placeholder content for the first slide.
                </p>
              </CCarouselCaption>
            </CCarouselItem>
            <CCarouselItem>
              <CImage
                className="d-block w-100"
                src={"/src/assets/avatar.jpg"}
                alt="slide 3"
              />
              <CCarouselCaption className="d-none d-md-block">
                <h5>Third slide label</h5>
                <p>
                  Some representative placeholder content for the first slide.
                </p>
              </CCarouselCaption>
            </CCarouselItem>
          </CCarousel>
        </div> */}
      </div>
    </div>
  );
};

export default About;
