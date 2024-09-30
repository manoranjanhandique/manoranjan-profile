import { Link } from "react-router-dom";
const Header=()=>{
    return (
        <header className="flex bg-gray-800 items-end p-2">
            <div className="ml-auto">
                <nav className="">
                    <ul className="flex space-x-6 px-4">
                    <li className="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white" aria-current="page"><Link to="/">Home</Link></li>
                    <li className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"><Link to="/skills">Skills</Link></li>
                    <li className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"><Link to="#">About me</Link></li>
                    <li className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"><Link to="/about">Contact</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
      
    )
}

export default Header;