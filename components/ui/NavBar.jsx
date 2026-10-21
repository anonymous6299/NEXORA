// imports
import { Link, useLocation } from "react-router";

// navlink component
const NavLink = ({to,label}) => {
    // hooks init
    const loc = useLocation();

    // component
    return <Link to={to}><p className={`transition border-b-2 px-3 pb-1 ${loc.pathname===to?"text-black border-black":"text-gray-400 hover:text-gray-700 border-transparent"}`}>{label}</p></Link>
}

// component
const NavBar = () => {
    // navlinks array
    const navlinks = ["home", "saved", "about", "contact"];

    return (

        // parent nav
        <div className="flex justify-between items-center w-full border-b border-gray-100 py-5 px-40">
            {/* brand */}
            <Link to={"/"}><p className="uppercase text-xl brand font-bold font-display">nexora</p></Link>
            
            {/* navlinks */}
            <div className="flex justify-between items-center capitalize text-sm space-x-5">
                {
                    navlinks.map((ele, pos) => {
                        return <NavLink to={pos>0?`/${ele}`:"/"} key={pos} label={ele}/>
                    })
                }
            </div>
        </div>
    )
}

export default NavBar