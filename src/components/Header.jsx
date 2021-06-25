import { Link } from 'react-router-dom'

const Header = (props) => {
    return (
        <header className="w-full">
            <nav className="font-sans flex flex-col text-center content-center sm:flex-row sm:text-left sm:justify-between py-2 px-6 bg-white shadow sm:items-baseline ">
                <div className="mb-2 sm:mb-0 inner" >

                    <a href="/" className="text-2xl no-underline text-grey-darkest hover:text-blue-dark font-sans font-bold">ALTYKIN</a>
                    <br />
                    <span className="text-xs text-grey-dark">Software Engineer. Bug Hunter.</span>

                </div>

                <div className="sm:mb-0 self-center">
                    <div className="h-10" style={{ display: "table-cell", verticalAlign: "middle" }}>
                        <Link to="/" className="text-md no-underline text-grey-darker hover:text-blue-dark ml-2 px-1">whoami</Link>
                        <Link to="/projects" className="text-md no-underline text-grey-darker hover:text-blue-dark ml-2 px-1">my_projects</Link>
                        <Link to="/skills" className="text-md no-underline text-grey-darker hover:text-blue-dark ml-2 px-1">my_skills</Link>
                    </div>

                </div>
            </nav>
        </header>
    )
}

export default Header