import { Link, Outlet, useSearchParams } from "react-router-dom"

export const Users = () => {
    const [searchParams, setSearchParams] = useSearchParams()

    const showActiveUsers = searchParams.get('filter') === 'active'

    const users = [
        {
            id: '1',
            name: 'User 1'
        },
        {
            id: '2',
            name: 'User 2'
        },
        {
            id: '3',
            name: 'User 3'
        },
        {
            id: '4',
            name: 'User 4'
        },
        {
            id: '5',
            name: 'User 5'
        },
    ]

    return (
        <>
            <nav>
                <Link to='admin'>admin</Link>

                {
                    users && users.length > 0 && users.map(user => (
                        <Link key={user.id} to={user.id}>{user.name}</Link>
                    ))
                }

            </nav>
            <Outlet />

            <button onClick={() => setSearchParams({ filter: 'active' })}>Active Users</button>
            <button onClick={() => setSearchParams({})}>Reset Filter</button>

            {showActiveUsers ? (<h2>Showing active users</h2>) : (<h2>Showing all users</h2>)}

        </>
    )
}