import { BsCardChecklist } from "react-icons/bs";
import { FaMobile, FaLaptopCode, FaCamera, FaEdit } from "react-icons/fa";
import { GoSun } from "react-icons/go";
export const dataCarousal = [
  {
    image: <FaMobile color={"#b8a07e"} />,
    heading: "Mobile Apps",
    detail: "Best designed application with responsiveness",
  },
  {
    image: <FaLaptopCode color={"#b8a07e"} />,
    heading: "Web Apps",
    detail: "Best designed Web apps with responsiveness",
  },
  {
    image: <FaCamera color={"#b8a07e"} />,
    heading: "Photographer",
    detail: "Best pictures captured",
  },
  {
    image: <FaEdit color={"#b8a07e"} />,
    heading: "UI/UX",
    detail: "Best designed application and web apps",
  },
  {
    image: <GoSun color={"#b8a07e"} />,
    heading: "Analytics",
    detail: "Best predicted information about given situations",
  },
  {
    image: <BsCardChecklist color={"#b8a07e"} />,
    heading: "Brand identifier",
    detail: "Best predictions about firms",
  },
];
export const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    // slidesToSlide: 4, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    // slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    // slidesToSlide: 1, // optional, default to 1.
  },
};
