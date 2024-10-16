export interface IUser {
    id: number;
    name: string;
    surname: string;
    login: string;
    password: string;
    isPrivate: number;
    cover: string;
    picture: string;
}



export type InputUser = Pick<IUser, 'name' | 'surname' | 'login' | 'password'>
export type LoginUser = Pick<IUser, 'login' | 'password'>
export type IAcount = Omit<IUser, 'login' | 'password'>
export type userPasswords = Pick<IUserPasswords, 'old' | 'newpwd'>


export interface IUserPasswords {
    status: string;
    old: string;
    newpwd: string;
}




export interface IResponse {
    status: string;
    message: string;
    user?: IUser;
    payload?: unknown;
}