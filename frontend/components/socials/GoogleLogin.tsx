import { useGoogleLogin } from "@react-oauth/google";
import Image from "next/image";
import {useTranslations} from "next-intl";

export default function GoogleLogin() {
    const translations = useTranslations('Auth')

    const handleLogin = (credentialResponse) => {
        // Este es el token JWT que obtenemos
        const token = credentialResponse.credential;

        // Decodificamos el token para obtener los datos del usuario
        console.log("Datos del usuario:", token);

        // Aquí puedes realizar otras acciones como guardar los datos en tu backend
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
