'use client'

import ForgotPasswordForm from "@/components/forms/ForgotPasswordForm";
import {useTranslations} from "next-intl"
import CardTitle from "@/components/ui/CardTitle";
import CardDescription from "@/components/ui/CardDescription";
import {Link} from "@/i18n/routing";
import {useAuth} from "@/hooks/auth";

const Page = () => {
    const { forgotPassword } = useAuth({
        middleware: 'guest',
        redirectIfAuthenticated: '/admin',
    })

    const translations = useTranslations('Auth')

    return (
        <>
            <div className="container-tight">
                <div className="card card-md">
                    <div className="card-body">
                        <CardTitle>{translations('forgot_password')}</CardTitle>
                        <CardDescription>{translations('forgot_password_description')}</CardDescription>
                        <ForgotPasswordForm submitRequest={forgotPassword}/>
                    </div>
                </div>
                <div className="text-center text-secondary mt-3">
                    {translations('forget_it')}, <Link href="/auth/login">{translations('send_me_back')}</Link> {translations('to_the_sign_in')}
                </div>
            </div>
        </>
    )
}

export default Page