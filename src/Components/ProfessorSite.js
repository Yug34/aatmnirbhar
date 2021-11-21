import { Link } from "react-router-dom";

function ProfSite(props) {
    return (
      <div className="professor-site">
          Hey I'm a professor!
          URL of this page is: TODO
          Inspired by https://cs.uwaterloo.ca/~dberry/
          https://pages.cpsc.ucalgary.ca/~waycock/
          <Link to="/joinUsProf">JoinUsProf</Link>
          <Link to="/whatWeDoProf">WhatWeDoProf</Link>
          <button onClick={() => props.switchSite(true)}>Click Me!</button>
      </div>
    );
  }
  
export default ProfSite;