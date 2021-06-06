import { Component } from 'react';
import NavLinks from './NavLinks';

class Nav extends Component {
    render() {
        return <nav class="font-sans flex flex-col text-center content-center sm:flex-row sm:text-left sm:justify-between py-2 px-6 bg-white shadow sm:items-baseline w-full">
            <div class="mb-2 sm:mb-0 inner">
                <a class="text-2xl no-underline text-grey-darkest hover:text-blue-dark font-sans font-bold">ALTYKIN</a><br />
                <span class="text-xs text-grey-dark">Bug Hunter. Software Developer.</span>
            </div>

            <NavLinks />
        </nav>
    }
}


export default Nav;