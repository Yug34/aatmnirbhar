import { Link } from "react-router-dom";
import anyBrowser from "../Images/anybrowser.gif";
import React from "react";

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
      {/*<Link to="/joinUsProf">Join Us!</Link>*/}
      {/*<Link to="/peopleProf">People</Link>*/}
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
          <p>
            Honorable mentions (?):
            <ul>{honorableRendered}</ul>
          </p>
        </div>
        <hr />
        <div className="greyBox">
          The background color of this website is a bit of a mystery to me. I
          don't know why it's so dark, but I do know that it's a dark blue.{" "}
          {"<--"} This was generated by GitHub CoPilot.
        </div>
      </div>
    </div>
  );
}

const resources = [
  {
    title: "Shell scripting",
    points: [
      "Tutorial went well, don't you think? Tons of questions!",
      'Most of what we went through can easily be found in <a href="https://missing.csail.mit.edu/">MIT\'s Missing Semester</a>, a really good course.',
      'An overview of the Linux directory structure: <a href="https://www.thegeekstuff.com/2010/09/linux-file-system-structure/">Linux Directory Structure</a>',
    ],
  },
];

const resourcesRendered = resources.map((resource) => (
  <div key={resource.title}>
    <h3>
      <b>
        <i>{resource.title}</i>
      </b>
    </h3>
    <ul>
      {resource.points.map((point) => (
        <li dangerouslySetInnerHTML={{ __html: point }} />
      ))}
    </ul>
  </div>
));

const inspirationSites = [
  {
    creditFor: '"Any Browser" gif from -',
    professorName: "Prof. Dr. Daniel Berry",
    siteLink: "https://cs.uwaterloo.ca/~dberry/",
  },
  {
    creditFor:
      'All the grEys, <a href="https://imgur.com/a/U8B1Zfq">and NOT grAys(!)</a> taken from - <a href="https://sites.google.com/site/aycockprize/">Aycock Prize</a> and',
    professorName: "Prof. Dr. John Aycock",
    siteLink: "https://pages.cpsc.ucalgary.ca/~aycock/",
  },
  {
    creditFor:
      "The (home) & (FAX) part, the tasteful background color and horizontal rules from -",
    professorName: "Prof. Dr. Jeffrey Ullman",
    siteLink: "http://infolab.stanford.edu/~ullman/",
  },
];

const inspirationsRendered = inspirationSites.map((insp) => (
  <li>
    <p
      dangerouslySetInnerHTML={{ __html: insp.creditFor + " " }}
      style={{ display: "inline" }}
    />
    <b>
      {insp.professorName}: <a href={insp.siteLink}>{insp.siteLink}</a>
    </b>
  </li>
));

const honorableMentions = [
  {
    profName: "Prof. Dr. Julien Arino",
    link: "https://server.math.umanitoba.ca/~jarino/courses/math2720/",
    description:
      "I thought of doing something similar to this where you would HAVE TO highlight everything on the webpage to make sense of stuff, but I remembered mobile users exist",
  },
];

const honorableRendered = honorableMentions.map((site) => (
  <li>
    {site.description + ": "}
    <b>{site.profName + " - "}</b>
    <a href={site.link}>{site.link}</a>
  </li>
));

export default ProfSite;
