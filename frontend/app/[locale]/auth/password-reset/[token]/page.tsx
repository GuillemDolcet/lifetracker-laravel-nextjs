'use client'

import {useTranslations} from "next-intl"
import CardTitle from "@/components/CardTitle";
import {useAuth} from "@/hooks/auth";
import PasswordResetForm from "@/components/forms/PasswordResetForm";

const Page = () => {
    const { resetPassword } = useAuth({
        middleware: 'guest',
        redirectIfAuthenticated: '/admin',
    })

    const translations = useTranslations('Auth')

    return (
        <>
            <div className="container-tight">
                <div className="card card-md">
                    <div className="card-body">
                        <CardTitle>{translations('reset_password')}</CardTitle>
                        <PasswordResetForm submitRequest={resetPassword}/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Page