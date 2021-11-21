import { Link } from "react-router-dom";

function ProfSite(props) {
    return (
      <div className="professor-site">
          Hey I'm a professor!
          <Link to="/joinUsProf">JoinUsProf</Link>
          <button onClick={() => props.switchSite(true)}>Click Me!</button>
      </div>
    );
  }
  
export default ProfSite;