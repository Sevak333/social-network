import { useState } from "react";
import { userPasswords } from "../lib/types";
import { useNavigate } from "react-router-dom";
import { apiUpdatePassword } from "../lib/api";


export const EditPassword = () => {
    const navigate = useNavigate()
    const [error, setError] = useState("")
    const [status, setStatus] = useState("")
    const [userPasswords, setUserPasswords] = useState<userPasswords>({ old: '', newpwd: '' })


    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault()
        apiUpdatePassword(userPasswords)
            .then(response => {
                if (response.status == 'error' && response.message) {
                    setError(response.message)
                    setStatus("")
                } else {
                    setError("")
                    setStatus("Password is changed")
                }
            })
    }
    const verifyPasswords = (second: any) => {
        if (second != userPasswords.newpwd) { setError("Passwords is not equal") }
        else { setError("") }
    }
    return <div className="stgs-item-cont">
        <h4>Change Password</h4>
        {error && <p className="text-danger">{error}</p>}
        {status && <p className="text-success">{status}</p>}
        <form onSubmit={handleSubmit}>
            <input className="stgs-input"
                placeholder="Old Password"
                type='password'
                value={userPasswords.old}
                onChange={e => setUserPasswords({ ...userPasswords, old: e.target.value })}
            />
            <br />
            <input className="stgs-input"
                placeholder="New Password"
                type='password'
                value={userPasswords.newpwd}
                onChange={e => setUserPasswords({ ...userPasswords, newpwd: e.target.value })}
            />
            <br />
            <input className="stgs-input"
                placeholder="Renter New Password"
                type='password'
                onChange={e => verifyPasswords(e.target.value)}

            />
            <br />
            <button className="stgs-btn">Save Password</button>
        </form>


    </div>
}