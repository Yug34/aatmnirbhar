import { Link } from "react-router-dom";
import React from "react";

function PeopleProf() {
  return (
    <div className="professor-site">
      <Link to="/">
        <h1 className="centered-text">Aatmnirbhar</h1>
      </Link>
      <hr />
      <h3 className="centered-text">People</h3>
      <div className="greyBox">
      <p>
          I made this club to help students who were interested primarily in Software
          Engineering, by guiding them to the point where they could learn things off
          the internet <b>independently</b>; hence "Aatm (self) nirbhar (dependent)".
          I did this because I was tired of seeing so many students go for outsourced
          and contract-based software development jobs in name-and-shame'd firms like{" "}
          <a href="https://www.reddit.com/r/cscareerquestions/comments/eu88if/name_and_shame_tata_consultancy_services/">
            TCS
          </a>
          . I tasked myself with the goal of getting a couple of capable
          students out of "
          <a href="https://www.reddit.com/r/learnprogramming/comments/qrlx5m/what_exactly_is_tutorial_hell/">
            tutorial hell
          </a>
          " and teach them enough so that they could branch out of just
          following tutorials and start their own projects, ones they'd actually
          want to create.
        </p>
        <p>
          I was the only one teaching, so I could only take on a couple of
          students. And I really only knew Software Engineering/WebDev, not this
          fancy new stuff called Deep Learning, so I decided to get more people
          to help this club function, both, to teach more students as well as
          expand the domains Aatmnirbhar covers.
        </p>
        <p>
          Currently, Aatmnirbhar is:
          <ul>
            <li>
              <a href="https://www.linkedin.com/in/yug34/">Yug Gajjar</a>:
              Software Engineering in general.
            </li>
            <li>
              <a href="https://www.linkedin.com/in/pratikawaik/">
                Pratik Awaik
              </a>
              : Web development.
            </li>
            <li>
              <a href="https://www.linkedin.com/in/dhruv-bhavsar-293960189/">
                Dhruv Bhavsar
              </a>
              : Machine Learning and everything related.
            </li>
          </ul>
        </p>
        <p>
          Want to join us and help other students? Mail me your CV at{" "}
          <a href="mailto:yug.gjr@gmail.com">yug.gjr@gmail.com</a>, with a
          couple of times in week where you'd be available to have a chat on
          Zoom.
        </p>
      </div>
      <hr />
    </div>
  );
}

export default PeopleProf;
