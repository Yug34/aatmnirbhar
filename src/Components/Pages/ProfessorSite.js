import { Link } from "react-router-dom";
import React from "react";

import anyBrowser from "../../Images/anybrowser.gif";
import resourcesRendered from "../resources";
import inspirationsRendered from "../inspirations";

function ProfSite(props) {
  return (
    <div className="professor-site">
      <h1 className="centered-text">Aatmnirbhar</h1>
      <hr />
      <div className="greyBox" id="disclaimer">
        <b>A tiny note:</b> I have recently been looking for MSc supervisors and
        have thus looked at a <b>LOT</b> of websites made by professors. I tried
        to imitate a website that a professor would make for their research
        group... ish. It is an art that I can't replicate!
      </div>
      <hr />
      <Link to="/joinUsProf">Join Us!</Link>
      <Link to="/peopleProf">People</Link>
      <h2>Resources</h2>
      <div id="resourcesList">{resourcesRendered}</div>
      <div>
        <p>
          <i>Yug Gajjar</i>
        </p>
        <p>
          <small className="monospace-font">yug.gjr@gmail.com</small>
        </p>
        <p>000-111-2222 (home)</p>
        <p>333-444-5555 (FAX)</p>
        <p>
          <small>
            But please use email, as I'm not even sure the phone still works.
          </small>
        </p>
        <img src={anyBrowser} alt="anyBrowser" id="anyBrowser" />
        <hr />
        <div className="greyBox">
          <p>This site was mostly inspired by:</p>
          <ul>{inspirationsRendered}</ul>
        </div>
        <hr />
        <div className="greyBox">
          The background color of this website is a bit of a mystery to me. I
          don't know why it's so dark, but I do know that it's a dark blue.
          {" <--"} This was generated by GitHub CoPilot.
        </div>
      </div>
    </div>
  );
}

export default ProfSite;