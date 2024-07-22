import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useAuth } from "./auth"

const Login = () => {
    const navigate = useNavigate()

    const [user, setUser] = useState('')
    const auth = useAuth()

    const handleLogin = () => {
        auth.login(user)
        navigate('/profile')
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