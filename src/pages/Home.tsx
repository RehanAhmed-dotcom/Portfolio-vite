import {
  FaSquareFacebook,
  FaLinkedin,
  FaGithub,
  FaStackOverflow,
} from "react-icons/fa6";
import "../main.css";
const Home = () => {
  return (
    <div className="Home">
      <div className="Container">
        <h1>I am Rehan Ahmed</h1>
        <h3>Freelancer, Web Developer, App Developer</h3>
        <div className="SocialLinks">
          <a href="https://github.com/RehanAhmed-dotcom" target="_blank">
            <FaGithub color={"white"} />
          </a>
          <a
            href="https://www.linkedin.com/in/rehan-ahmed-44b36719a/"
            target="_blank"
          >
            <FaLinkedin color={"white"} />
          </a>
          <a
            href="https://stackoverflow.com/users/14407122/rehan-ahmed"
            target="_blank"
          >
            <FaStackOverflow color={"white"} />
          </a>
          <a href="https://www.facebook.com/rehan5607959/" target="_blank">
            <FaSquareFacebook color={"white"} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
