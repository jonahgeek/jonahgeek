import {
  Mailbox,
  Mailbox2,
  Telephone,
  TelephoneFill,
  Twitter,
} from "react-bootstrap-icons";
import { BrowserRouter as Router, Link } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <div className="container pt-5">
          <div className="row pt-5 mt-5 px-auto">
            <div className="offset-md-4 col-md-4 mt-5 text-center">
              <div className="bg-white p-2">
                <h2 className="header">Jonathan Mwebaze</h2>
                <h1 className="sub-header">Code & Design</h1>
                <ul class="nav justify-content-center">
                  <li class="nav-item">
                    <Link class="nav-link" to="/works">
                      Works
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link class="nav-link" to="/about-me">
                      About Me
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link class="nav-link" to="/writings">
                      Writings
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link class="nav-link" to="/reach-me">
                      Reach Me
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="wrap p-2 px-5">
                <small>
                  Made by Jonahgeek, Unless proven otherwise.
                </small>
              </div>
            </div>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
