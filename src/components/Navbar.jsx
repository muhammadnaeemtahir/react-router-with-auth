import { NavLink } from "react-router-dom"
import { useAuth } from './auth'

const Navbar = () => {


    const NavLinkStyles = ({ isActive }) => {
        return {
            fontWeight: isActive ? "bold" : "normal",
            color: isActive ? "red:" : "black",
            textDecoration: isActive ? "underline" : "none"
        }
    }

    const auth = useAuth()

    return (
        <>
            <nav className="primary-nav">
                <NavLink style={NavLinkStyles} to='/'>Home</NavLink>
                <NavLink style={NavLinkStyles} to='/about'>About</NavLink>
                <NavLink style={NavLinkStyles} to='/products'>Products</NavLink>
                <NavLink style={NavLinkStyles} to='/users'>Users</NavLink>
                <NavLink style={NavLinkStyles} to='/profile'>Profile</NavLink>
                {
                    !auth.user && <NavLink style={NavLinkStyles} to='/login'>Login</NavLink>
                }

            </nav>
        </>
    )
}

export default Navbar