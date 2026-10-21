// imports
import { Outlet } from 'react-router'
import NavBar from './NavBar'


// universal app layout
const Layout = () => {
    return (
        <>
            <NavBar />
            <Outlet />
        </>
    )
}

export default Layout