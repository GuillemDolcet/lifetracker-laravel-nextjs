'use client'

import LoginForm from '@/components/forms/LoginForm'

const Login = () => {
    return (
        <>
            <div className="container-tight">
                <div className="card card-md">
                    <div className="card-body">
                        <LoginForm/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login
