import { Link } from "react-router-dom";

function ProfSite(props) {
    return (
      <div className="professor-site">
          <h2 className="centered-text">Aatmnirbhar Club</h2>
          <div className="greyBox" id="disclaimer">
              This isn't the actual Aatmnirbhar website, this is something I made for fun.
              I have recently been looking for MSc supervisors and have thus looked at a <b>LOT</b> of websites made by professors.
              I made this to imitate a website that a professor would make for their research group... ish. It is an art I can't replicate!
              To view the actual website, <button onClick={() => props.switchSite(true)}>Click Me!</button>
          </div>
          <hr />
          <Link to="/joinUsProf">Join Us!</Link>
          <Link to="/peopleProf">People</Link>
          <div>
            <p>
                <i>Yug Gajjar</i>
            </p>
            <p>
                <tt>yug.gjr@gmail.com</tt>
            </p>
            <p>000-111-2222 (home)</p>
            <p>333-444-5555 (FAX)</p>
            <p><small>But please use email, as I'm not even sure the phone still works.</small></p>
          </div>
      </div>
    );
}

// Inspired by https://cs.uwaterloo.ca/~dberry/
// https://pages.cpsc.ucalgary.ca/~aycock/
export default ProfSite;