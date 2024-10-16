import React, { useState } from 'react';
import {
    MDBContainer,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBRow,
    MDBCol,
    MDBInput,
}
    from 'mdb-react-ui-kit';
import { Link, useNavigate } from 'react-router-dom';
import type { InputUser, IResponse } from '../../lib/types';
import { apiSignup, Axios } from '../../lib/api';


export function Signup() {
    const [user, setUser] = useState<InputUser>({
        name: '',
        surname: '',
        login: '',
        password: ''
    })
    const navigate = useNavigate();
    const [error, setError] = useState<string>('')
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        !user.name.trim() ? setError('Please fill your name.') : !user.surname.trim() ? setError('Please fill your surname.') : !user.login.trim() ? setError('Please fill your login.') : !user.password.trim() ? setError('Please fill your password.')
            : apiSignup(user).then((res: IResponse) => {
                if (res.status === 'ok') {
                    navigate('/login')
                }else{
                    setError(res.message)
                }
            })
    }

    return (
        <MDBContainer fluid>

            <MDBRow className='d-flex justify-content-center align-items-center'>

                <MDBCol lg='8'>

                    <MDBCard className='my-5 rounded-3' style={{ maxWidth: '600px' }}>
                        <MDBCardImage src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/img3.webp' className='w-100 rounded-top' alt="Sample photo" />

                        <MDBCardBody className='px-5'>

                            <h3 className="mb-4 pb-2 pb-md-0 mb-md-5 px-md-2">Registration Info</h3>
                            {error && <p style={{ color: "red", fontWeight: "bold" }}>{error}</p>}

                            <form onSubmit={(e) => handleSubmit(e)}>
                                <MDBInput
                                    wrapperClass='mb-4'
                                    label='Name'
                                    type='text'
                                    value={user.name}
                                    onChange={(e) => setUser({ ...user, name: e.target.value })}
                                />
                                <MDBInput
                                    wrapperClass='mb-4'
                                    label='Surname'
                                    type='text'
                                    value={user.surname}
                                    onChange={(e) => setUser({ ...user, surname: e.target.value })}
                                />
                                <MDBInput
                                    wrapperClass='mb-4'
                                    label='Login'
                                    type='text'
                                    value={user.login}
                                    onChange={(e) => setUser({ ...user, login: e.target.value })}
                                />
                                <MDBInput
                                    wrapperClass='mb-4'
                                    label='Password'
                                    type='text'
                                    value={user.password}
                                    onChange={(e) => setUser({ ...user, password: e.target.value })}
                                />
                                <button type='submit' className='btn btn-outline-info' >Submit</button>
                            </form>

                            <p>Already have an account? <Link to={'/login'}>Login Now</Link></p>


                        </MDBCardBody>
                    </MDBCard>

                </MDBCol>
            </MDBRow>

        </MDBContainer>
    );
}
