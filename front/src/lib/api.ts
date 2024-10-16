import axios from "axios";
import { BASE_URL } from "./constants";
import { InputUser, IResponse, LoginUser, userPasswords } from "./types";

export const Axios = axios.create({
    baseURL: BASE_URL,
    withCredentials: true
})

export const apiSignup = async (user: InputUser): Promise<IResponse> => {
    const response = await Axios.post('/signup', user)
    return response.data
}

export const apiLogin = async (user: LoginUser): Promise<IResponse> => {
    const response = await Axios.post('/login', user)
    return response.data
}

export const apiVerify = async (): Promise<IResponse> => {
    const response = await Axios.get('/verify')
    return response.data
}

export const apiUpdateLogin = async (body: LoginUser): Promise<IResponse> => {
    const response = await Axios.patch("/update/login", body)
    return response.data
}

export const apiUpdatePassword = async (body: userPasswords): Promise<IResponse> => {
    const response = await Axios.patch("/update/password", body)
    return response.data
}

export const LogOut = async (): Promise<IResponse> => {
    const response = await Axios.post("/logout")
    return response.data
}