import {image} from "../data/data";

const About = () => {
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>I am A certified software developer ready to work</p>
      <img src={image} alt="I made this"></img>
    </div>
  );
};

export default About;
