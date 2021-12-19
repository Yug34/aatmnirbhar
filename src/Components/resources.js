import React from "react";

const resources = [
  {
    title: "Shell scripting",
    points: [
      "Tutorial went well, don't you think? Tons of questions!",
      'Most of what we went through can easily be found in <a href="https://missing.csail.mit.edu/">MIT\'s Missing Semester</a>, a really good course.',
      'An overview of the <a href="https://www.thegeekstuff.com/2010/09/linux-file-system-structure/">Linux Directory Structure</a>.',
    ],
  },
  {
    title: "Version Control: Git basics, open sourcing, PRs & stuff",
    points: [
      '<a href="https://www.theodinproject.com/paths/foundations/courses/foundations/lessons/setting-up-git">The Odin Project\'s guide</a> to setting up git.',
      'Slide images for local, centralized and distributed VCS taken from <a href="https://git-scm.com/book/en/v2/Getting-Started-About-Version-Control">here<a/>, do read through the article if you want.',
      'Other than creating or cloning repositories, we went over: <tt><b>git init, status, add, commit, diff, push, pull, branch, checkout</b></tt> and these should cover most of your use cases. <a href="https://git-scm.com/docs">Here\'s</a> the documentation for these commands.',
      'To get a feel of GitHub\'s Pull Request mechanism, contribute to <a href="https://github.com/firstcontributions/first-contributions">this repository</a>.',
      'For beyond the commands we went through, <a href="http://think-like-a-git.net/sections/about-this-site/who-this-site-is-for.html"> another guide</a>!',
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

export default resourcesRendered;
