import { Outlet } from "react-router-dom";

export default function Root() {
    return (
      <>
        <div id="sidebar">
          <div>
            <h2>Bienvenu sur mon portfolio!</h2>
          </div>
          <nav>
            <ul>
              <li>
                <a href={`/pages/1`}>My Profile</a>
              </li>
              <li>
                <a href={`/pages/2`}>My Career</a>
              </li>
              <li>
                <a href={`/pages/3`}>My projects</a>
              </li>
              <li>
                <a href={`/pages/4`}>Login</a>
              </li>
            </ul>
          </nav>
        </div>
        <div id="detail">
        <Outlet />
        </div>
      </>
    );
  }