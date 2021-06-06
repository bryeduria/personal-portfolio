import { Component } from 'react';

class NavLinks extends Component {

    render() {
        return (
            <div class="sm:mb-0 self-center">
                <a href="#whoami" class="text-md no-underline text-black hover:text-blue-dark ml-2 px-1">whoami</a>
                <a href="#my_projects" class="text-md no-underline text-grey-darker hover:text-blue-dark ml-2 px-1">my_projects</a>
                <a href="#my_skills" class="text-md no-underline text-grey-darker hover:text-blue-dark ml-2 px-1">my_skills</a>
            </div>
        )
    }
}



export default NavLinks;