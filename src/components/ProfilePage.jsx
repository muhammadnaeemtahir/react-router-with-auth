
import { useNavigate } from "react-router-dom"
import { useAuth } from "./auth"

const ProfilePage = () => {
    const navigate = useNavigate()

    const auth = useAuth()

    const handleLogout = () => {
        auth.logout()
        navigate('/')
    }

    return (
        <>
            <h1>Welcome, {auth.user}</h1>
            <button onClick={handleLogout}>Logout</button>
        </>
    )
}

export default ProfilePage