import { useState } from "react";
import left from "../../assets/left.png";
import vector from "../../assets/Vector.png";
import vector2 from "../../assets/Vector2.png";
import buisness from "../../assets/buisness.png";
import buisness2 from "../../assets/buisness2.png";
import buisness3 from "../../assets/buisness3.png";
import buisness4 from "../../assets/buisness4.png";
import FB from "../../assets/FB.png";
import IN from "../../assets/IN.png";
import TW from "../../assets/TW.png";
import rating from "../../assets/rating.png";
import right2 from "../../assets/right2.png";
import Avatar from "../../assets/Avatar.png";
import "./index.css";

function Choose() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleParagraph = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <div className="Choose">
        <div className="choose-left">
          <img src={left} alt="left" />
        </div>
        <div className="choose-right">
          <p>Why choose us</p>
          <h1>Proven Expertise in Complex IT Solutions</h1>
          <p>
            Assertively streamline interactive interfaces after value-added
            infrastructures. Authoritatively fabricate fully tested
            methodologies before. Holistic deliver end-to-end architectures
            rather than economically sound benefits. Progressively simplify
            end-to-end paradigms. Assertively streamline interactive interfaces
            after value-added infrastructure.
          </p>

          <div className="stroll" onClick={() => toggleParagraph(0)}>
            <h1>An Award Winning Company</h1>
            <img src={openIndex === 0 ? vector2 : vector} alt="" />
          </div>
          {openIndex === 0 && (
            <p>
              Assertively streamline interactive interfaces after value-added
              infrastructures. Authoritatively fabricate fully tested
              methodologies before. Holistic deliver.
            </p>
          )}
          <div className="stroll-hr"></div>

          <div className="stroll" onClick={() => toggleParagraph(1)}>
            <h1>Quick Research and Solutions</h1>
            <img src={openIndex === 1 ? vector2 : vector} alt="" />
          </div>
          {openIndex === 1 && (
            <p>
              Assertively streamline interactive interfaces after value-added
              infrastructures. Authoritatively fabricate fully tested
              methodologies before. Holistic deliver end sound benefits.
            </p>
          )}
          <div className="stroll-hr"></div>

          <div className="stroll" onClick={() => toggleParagraph(2)}>
            <h1>Dedicated Support 24/7</h1>
            <img src={openIndex === 2 ? vector2 : vector} alt="" />
          </div>
          {openIndex === 2 && (
            <p>
              Assertively streamline interactive interfaces after value-added
              infrastructures. Authoritatively fabricate fully tested
              methodologies before. Holistic deliver.
            </p>
          )}
          <div className="stroll-hr"></div>

          <div className="stroll" onClick={() => toggleParagraph(3)}>
            <h1>Quick Support & Tech Solution</h1>
            <img src={openIndex === 3 ? vector2 : vector} alt="" />
          </div>
          {openIndex === 3 && (
            <p>
              Assertively streamline interactive interfaces after value-added
              infrastructures. Authoritatively fabricate fully tested
              methodologies before. Holistic deliver.
            </p>
          )}
        </div>
      </div>
      <div className="buisness">
        <h1>Ready To Transform Your Business?</h1>
        <div className="buisness-block">
          <div className="buisness-img">
            <img src={buisness} alt="" />
          </div>
          <div className="buisness-info">
            <h1>Tech Solution</h1>
            <p>
              Assertively streamline interactive interfaces after value-added
              infrastructures. Authoritatively fabricate fully tested
              methodologies before. Holistic deliver end sound benefits.
            </p>
          </div>
        </div>
        <div className="buisness-block">
          <div className="buisness-img">
            <img src={buisness2} alt="" />
          </div>
          <div className="buisness-info">
            <h1>IT Project Solution</h1>
            <p>
              Assertively streamline interactive interfaces after value-added
              infrastructures. Authoritatively fabricate fully tested
              methodologies before. Holistic deliver end sound benefits.
            </p>
          </div>
        </div>
        <div className="buisness-block">
          <div className="buisness-img">
            <img src={buisness3} alt="" />
          </div>
          <div className="buisness-info">
            <h1>Quick Support</h1>
            <p>
              Assertively streamline interactive interfaces after value-added
              infrastructures. Authoritatively fabricate fully tested
              methodologies before. Holistic deliver end sound benefits.
            </p>
          </div>
        </div>
        <div className="buisness-block">
          <div className="buisness-img">
            <img src={buisness4} alt="" />
          </div>
          <div className="buisness-info">
            <h1>Solving IT Challenges</h1>
            <p>
              Assertively streamline interactive interfaces after value-added
              infrastructures. Authoritatively fabricate fully tested
              methodologies before. Holistic deliver end sound benefits.
            </p>
          </div>
        </div>
      </div>

      <div className="projects">
        <div className="projects-blocks">
          <p id="pr1">Projects</p>
          <h1>Awesome Works For Our Clients</h1>
          <p>
            Assertively streamline interactive interfaces after value a
            infrastructures. Authoritatively fabricate fully tested
            methodologies before Holistic deliver end-to-end architectures
            rather sound benefits.
          </p>
          <div className="pr-blocks">
            <div className="projects-block tech1">
              <div className="project-info">
                <p id="tech1">TECH</p>
                <h1>TECH Tech Cover Industry</h1>
                <p>There are many variations of passages</p>
              </div>
            </div>
            <div className="projects-block tech2">
              <div className="project-info">
                <p id="tech1">TECH</p>
                <h1>TECH Tech Cover Industry</h1>
                <p>There are many variations of passages</p>
              </div>
            </div>
            <div className="projects-block tech3">
              <div className="project-info">
                <p id="tech1">TECH</p>
                <h1>TECH Tech Cover Industry</h1>
                <p>There are many variations of passages</p>
              </div>
            </div>
            <div className="projects-block tech4">
              <div className="project-info">
                <p id="tech1">TECH</p>
                <h1>TECH Tech Cover Industry</h1>
                <p>There are many variations of passages</p>
              </div>
            </div>
            <div className="projects-block tech5">
              <div className="project-info">
                <p id="tech1">TECH</p>
                <h1>TECH Tech Cover Industry</h1>
                <p>There are many variations of passages</p>
              </div>
            </div>
            <div className="projects-block tech6">
              <img src={right2} alt="" />
              <h1>View all services</h1>
            </div>
          </div>
        </div>
      </div>

      <div className="Our-team">
        <p>Our Team</p>
        <h1>Our Professional Team member</h1>
        <div className="our-team-block">
          <img src={FB} alt="" />
          <img src={IN} alt="" />
          <img src={TW} alt="" />
        </div>
        <h1>Eleanor Pena</h1>
        <p>Senior Developer</p>
      </div>
      <div className="Testiominal">
        <p>Testimonial</p>
        <h1>Trusted by more than 1000+ company’s around the world</h1>
        <div className="testimional-block">
          <img src={rating} alt="" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quisque
            amet habitant integer pretium hendrerit enim. Lobortis sed phasellus
            auctor
          </p>
          <div className="testimional-span">
            <img src={Avatar} alt="" />
            <h3>Paula Brooks</h3>
            <p>Business Analyst</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Choose;
