import React from "react";

const inspirationSites = [
  {
    creditFor: '"Any Browser" gif from',
    professorName: "Prof. Dr. Daniel Berry",
    siteLink: "https://cs.uwaterloo.ca/~dberry/",
  },
  {
    creditFor:
      'All the grEys, <a href="https://imgur.com/a/U8B1Zfq">and NOT grAys(!)</a> taken from <a href="https://sites.google.com/site/aycockprize/">Aycock Prize</a> and',
    professorName: "Prof. Dr. John Aycock",
    siteLink: "https://pages.cpsc.ucalgary.ca/~aycock/",
  },
  {
    creditFor:
      "The (home) & (FAX) part, the tasteful background color and horizontal rules from",
    professorName: "Prof. Dr. Jeffrey Ullman",
    siteLink: "http://infolab.stanford.edu/~ullman/",
  },
  {
    creditFor:
      "Originally I was going to make the website perform a whole bunch of HTTP requests and change the URL when you visit its webpages, but since that's quite annoying (and wasteful! -- green computing and what not), I decided to make this an SPA much like this professor, except the links can still change, giving you the professor website <i>feel</i>",
    professorName: "Prof. Dr. Clark Verbrugge",
    siteLink: "http://www.sable.mcgill.ca/~clump/",
  },
  {
    creditFor:
      "I thought of doing something similar to this where you would HAVE TO highlight everything on the webpage to make sense of stuff, but I remembered mobile users exist",
    professorName: "Prof. Dr. Julien Arino",
    siteLink: "https://server.math.umanitoba.ca/~jarino/courses/math2720/",
  },
];

const inspirationsRendered = inspirationSites.map((inspiration) => (
  <li>
    <p
      dangerouslySetInnerHTML={{ __html: inspiration.creditFor + " - " }}
      style={{ display: "inline" }}
    />
    <b>
      {inspiration.professorName}:{" "}
      <a href={inspiration.siteLink}>
        {inspiration.siteLink.length > 40 ? "Site" : inspiration.siteLink}
      </a>
    </b>
  </li>
));

export default inspirationsRendered;
