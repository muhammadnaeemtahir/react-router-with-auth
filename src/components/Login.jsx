import { useState } from "react"
import { useNavigate, useLocation } from "react-router-dom"
import { useAuth } from "./auth"

const Login = () => {
    const navigate = useNavigate()
    const location = useLocation()

    const redirectPath = location.state?.path || '/'

    const [user, setUser] = useState('')
    const auth = useAuth()

    const handleLogin = () => {
        auth.login(user)
        navigate(redirectPath, { replace: true })
    }

    return (
        <div>
            <h2>Login Page</h2>
            <label htmlFor="">
                Username: <input type="text" value={user} onChange={(e) => setUser(e.target.value)} name="" id="" />
            </label>
            <button onClick={handleLogin}>Login</button>
        </div>
    )
}

export default Login