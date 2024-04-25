import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


const Nav = (props) => {

    return (
        <nav className="max-w-screen-xl mx-auto w-full">
            <div className="flex flex-wrap items-center justify-between py-4 px-12">
                <Link to="/" data-link className="flex items-center space-x-3 rtl:space-x-reverse"><img src="/assets/logo/teabox_logo.png" alt="Logo"/></Link>

                <div className="block w-auto" id="navbar-default">
                    <ul className="font-medium flex md:p-0 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse border-0 dark:bg-gray-800 md:dark:bg-gray-900">
                        <li>
                            <Link to="/macollection" data-link className="block py-2 text-black font-bold tracking-wide mb-1 border-b-2 border-transparent hover:border-b-black hover:border-b-black  md:hover:bg-transparent md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" aria-current="page">{props.link2}</Link>
                        </li>   
                    </ul>
                </div>
            </div>
        </nav>
    );
}

Nav.defaultProps = {
    link2: 'ma collection'
}

Nav.propTypes = {
    link2: PropTypes.string.isRequired
}

export default Nav;