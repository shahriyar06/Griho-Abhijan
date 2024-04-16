import { useContext } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Page/FirebaseProvider/FirebaseProvider";


const Navbar = () => {

    const { signout, user } = useContext(AuthContext);
    const navigate = useNavigate()
    const location = useLocation()
    const from = location?.state || '/'

    const handlesociallogout = logoutProvider =>{
        logoutProvider()
        .then(result => {
            if(result.user){
                navigate(from)
            }
        })
    }

    const Navbar = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/about'>About Us</NavLink></li>
    </>

    return (
        <div className="lg:w-11/12 mx-auto">
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {Navbar}
                        </ul>
                    </div>
                    <a className="lg:text-5xl font-extrabold">Griho Abhijan</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-lg">
                        {Navbar}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ? <button onClick={() => handlesociallogout(signout)}><Link  className="btn btn-outline text-[#4ade80] hover:text-[#FFFFFF] hover:bg-[#4ade80] hover:border-[#4ade80] lg:text-lg mr-5">Log Out</Link></button> 
                            :
                            <div>
                                <Link to='/login' className="btn btn-outline text-[#4ade80] hover:text-[#FFFFFF] hover:bg-[#4ade80] hover:border-[#4ade80] lg:text-lg mr-5">Log In</Link>
                                <Link to='/register' className="btn btn-outline text-[#4ade80] hover:text-[#FFFFFF] hover:bg-[#4ade80] hover:border-[#4ade80] text-lg">Register</Link>
                            </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;