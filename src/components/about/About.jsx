import { Button } from "react-bootstrap";
import "./About.scss";

export default function About() {
  return (
    <div className="about" id="about">
      <div className="container">
        <h1>About Me</h1>
        <p className="description">
          Hi! My name is Gloria. Here is a quick summary so that you guys can
          get to know a little bit more about me! After I graduated from the
          University of Toronto, I started off my career as a Pharmacist. Along
          the way, I ventured off into starting my own custom cake business,
          BakedByGloria, where I would design and create cakes for all sorts of
          different occassions. As I was creating my website to launch my
          business, I found this process incredibly challenging, yet rewarding.
          However, my abilities were limited as I didn't truly know how to code.
          After some dabbling in learning through free online resources, I
          decided it was finally time to enroll in an official course at
          Lighthouse Labs to better my skills. This bootcamp has taught me
          invaluable programing skills and brought me up to date with the latest
          cutting edge web technologies. I am passionate about creating seamless
          user interfaces that can generate maximum results.
        </p>
        <div className="btn-container">
          <Button variant="light" className="ps-4 pe-4">
            <a href="https://resume.creddle.io/resume/imj2eatltrt">
              View Resume
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}
