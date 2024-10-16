import { useState } from "react"
import { LoginUser } from "../lib/types"
import { apiUpdateLogin } from "../lib/api"
import { useNavigate } from "react-router-dom"


export const EditLogin = () => {
    const navigate = useNavigate()
    const [error, setError] = useState<string>("")
    const [user, setUser] = useState<LoginUser>({ login: '', password: '' })
    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault()
        apiUpdateLogin(user)
            .then(response => {
                if (response.status == 'error' && response.message) {
                    setError(response.message)
                } else {
                    setError("")
                    navigate("/profile")
                }
            })
    }
    return <div className="stgs-item-cont">
        <h4>Change Login</h4>

        {error && <p className="text-danger">{error}</p>}
        <form onSubmit={handleSubmit}>
            <input className="stgs-input"
                placeholder="Login"
                type='text'
                value={user.login}
                onChange={e => setUser({ ...user, login: e.target.value })}
            />
            <br />
            <input className="stgs-input"
                placeholder="Password"
                type='password'
                value={user.password}
                onChange={e => setUser({ ...user, password: e.target.value })}

            />
            <br />
            <button className="stgs-btn">Save Login</button>
        </form>


    </div>
}