import { useGoogleLogin } from "@react-oauth/google";
import Image from "next/image";
import {useTranslations} from "next-intl";
import {useAuth} from '@/hooks/auth'
import {useEffect, useState} from "react";

export default function GoogleLogin() {
    const [errors, setErrors] = useState([])

    const translations = useTranslations('Auth')

    const {loginWithGoogle} = useAuth({
        middleware: 'guest',
        redirectIfAuthenticated: '/admin',
    })

    const handleLogin = (credentialResponse) => {
        loginWithGoogle({
            setErrors,
            token: credentialResponse.access_token,
        })
    };

    const handleLoginError = (err) => {
        toast.error(err)
    };

    const login = useGoogleLogin({
        onSuccess: handleLogin,
        onError: handleLoginError,
    });

    useEffect(() => {
        if (!errors || Object.keys(errors).length === 0) return;

        if (typeof errors === 'object') {
            Object.values(errors).flat().forEach(error => toast.error(error));
        }
    }, [errors])

    return (
        <>
            <a onClick={() => login()} className="btn btn-4 w-100">
                <Image src="/images/google.svg" width="18" height="18" alt="google" className="me-2"/> {translations('login_google')}
            </a>
        </>
    );
}
