import { useGoogleLogin } from "@react-oauth/google";
import Image from "next/image";
import {useTranslations} from "next-intl";
import {useAuth} from '@/hooks/auth'

export default function GoogleLogin() {
    const translations = useTranslations('Auth')

    const {loginWithGoogle} = useAuth({
        middleware: 'guest',
        redirectIfAuthenticated: '/admin',
    })

    const handleLogin = (credentialResponse) => {
        // Decodificamos el token para obtener los datos del usuario
        console.log("Datos del usuario:", credentialResponse.access_token);

        // Aquí puedes realizar otras acciones como guardar los datos en tu backend
        loginWithGoogle({
            token: credentialResponse.access_token,
        })
    };

    const handleLoginError = (err) => {
        console.log("Error al iniciar sesión", err);
    };

    const login = useGoogleLogin({
        onSuccess: handleLogin,
        onError: handleLoginError,
    });

    return (
        <button onClick={() => login()} className="btn w-100">
            <Image src="/google.svg" width="24" height="24" alt="google" className="me-2"/> {translations('login_google')}
        </button>
    );
}
