import { useEffect, useState } from "react"
import { NavLink, Outlet, useNavigate } from "react-router-dom"
import { apiVerify } from "../../lib/api"
import { IAcount } from "../../lib/types"

export const Layout = () => {
    const [acount, setAcount] = useState<IAcount | null>(null)
    const navigate = useNavigate()
    useEffect(() => {
        apiVerify()
            .then(response => {
                if (!response.user) {
                    navigate("/login")
                } else {
                    setAcount(response.user as IAcount)
                }
            })
    }, [])

    return acount && <>
        <nav>
            <NavLink to="/profile" end> Profile </NavLink>
            <NavLink to="/profile/settings" > Settings </NavLink>
            <NavLink to="/profile/followers"> Followers </NavLink>
            <NavLink to="/profile/photos"> Photos </NavLink>
        </nav>

        <div style={{ padding: 20 }}>
            <Outlet />
            <p>{acount.name} {acount.surname}</p>
        </div>
    </>
}