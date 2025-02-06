'use client'

import LoginForm from '@/components/forms/LoginForm'
import {useTranslations} from "next-intl"
import {GoogleOAuthProvider} from "@react-oauth/google";
import GoogleLogin from "@/components/socials/GoogleLogin";
import {Link} from '@/i18n/routing';
import CardTitle from "@/components/ui/CardTitle";
import {useAuth} from "@/hooks/auth";

const Login = () => {
    const translations = useTranslations('Auth')

    const {login, loginWithGoogle} = useAuth({
        middleware: 'guest',
        redirectIfAuthenticated: '/admin',
    })

    return (
        <>
            <div className="container-tight">
                <div className="card card-md">
                    <div className="card-body">
                        <CardTitle>{translations('login_to_your_account')}</CardTitle>
                        <LoginForm submitRequest={login} />
                    </div>
                    <div className="hr-text w-100">or</div>
                    <div className="card-body">
                        <div className="row">
                            <div className="col">
                                <GoogleOAuthProvider clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}>
                                    <GoogleLogin submitRequest={loginWithGoogle}/>
                                </GoogleOAuthProvider>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-center text-secondary mt-3">
                {translations('dont_have_account_yet')} <Link href="/auth/register">{translations('sign_up')}</Link>
            </div>
        </>
    )
}

export default Login
