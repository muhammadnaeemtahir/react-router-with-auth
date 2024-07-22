import { Link, Outlet } from "react-router-dom"

export const Products = () => {
    return (
        <>
            <input type="search" placeholder="search products..." />
            <nav>
                <Link to='featured'>Fetured</Link>
                <Link to='new'>New</Link>
            </nav>
            <Outlet />
        </>
    )
}