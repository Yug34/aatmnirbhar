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
