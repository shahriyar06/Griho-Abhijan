import { useContext } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Page/FirebaseProvider/FirebaseProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Navbar = () => {

    const { signout, user } = useContext(AuthContext);
    const navigate = useNavigate()
    const location = useLocation()
    const from = location?.state || '/'

    const handlesociallogout = logoutProvider => {
        logoutProvider()
            .then(result => {
                toast("Success register!");
                if (result.user) {
                    navigate(from)
                }
            })
    }

    const Navbar = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/property'>Property</NavLink></li>
        {
            user && <li><NavLink to='/profile'>Update Profile</NavLink></li>
        }
    </>

    return (
        <div className="lg:w-11/12 mx-auto mt-8">
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
                        user ? <div className="flex gap-5 items-center" >
                            <div  className="tooltip" data-tip={user.displayName}>
                                <img className="w-10 h-10 rounded-full" src={user?.photoURL || "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"} />
                            </div>
                            <button onClick={() => handlesociallogout(signout)}><Link className="btn btn-outline text-[#4ade80] hover:text-[#FFFFFF] hover:bg-[#4ade80] hover:border-[#4ade80] lg:text-lg mr-5">Log Out</Link></button><ToastContainer /> </div>
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