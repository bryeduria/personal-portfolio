import { Component } from "react";
import NavLinks from "./NavLinks";

class Nav extends Component {
  render() {
    return (
      <nav className="font-sans flex flex-col text-center content-center sm:flex-row sm:text-left sm:justify-between py-2 px-6 bg-white shadow sm:items-baseline w-full">
        <div className="mb-2 sm:mb-0 inner">
          <a
            href="/"
            className="text-2xl no-underline text-grey-darkest hover:text-blue-dark font-sans font-bold"
          >
            ALTYKIN
          </a>
          <br />
          <span className="text-xs text-grey-dark">
            Bug Hunter. Software Developer.
          </span>
        </div>

        <NavLinks />
      </nav>
    );
  }
}

export default Nav;
