'use client'

import {useTranslations} from "next-intl"
import {Link} from '@/i18n/routing';
import CardTitle from "@/components/CardTitle";
import RegisterForm from "@/components/forms/RegisterForm";

const Register = () => {
    const translations = useTranslations('Auth')
    return (
        <>
            <div className="container-tight">
                <div className="card card-md">
                    <div className="card-body">
                        <CardTitle>{translations('create_account')}</CardTitle>
                        <RegisterForm />
                    </div>
                </div>
            </div>
            <div className="text-center text-secondary mt-3">
                {translations('have_account_?')} <Link href="/auth/login">{translations('sign_in')}</Link>
            </div>
        </>
    )
}

export default Register
