import { Link } from "react-router-dom";
import React from "react";

function JoinUsProf() {
  return (
    <div className="professor-site">
      <Link to="/">
        <h1 className="centered-text">Aatmnirbhar</h1>
      </Link>
      <hr />
      <div className="greyBox">
        <p>
          Want to join us as a student? Mail me your CV/resume at{" "}
          <small className="monospace-font">yug.gjr@gmail.com</small>.
        </p>
        <p>
          Since we are a small team with only so much time, we cannot accept and
          guide everyone that applies, so we are selective and are looking for
          students who have some general programming or development experience,
          your field of interest is not very important, skills transfer.
        </p>
        <p>
          If you have a GitHub profile, and you are willing to share it, please
          do so in the mail or include it your CV.
        </p>
      </div>
      <hr />
    </div>
  );
}

export default JoinUsProf;
