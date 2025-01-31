'use client'

import ForgotPasswordForm from "@/components/forms/ForgotPasswordForm";
import {useTranslations} from "next-intl"
import CardTitle from "@/components/CardTitle";
import CardDescription from "@/components/CardDescription";

const Page = () => {
    const translations = useTranslations('Auth')

    return (
        <>
            <div className="container-tight">
                <div className="card card-md">
                    <div className="card-body">
                        <CardTitle>{translations('forgot_password')}</CardTitle>
                        <CardDescription>{translations('forgot_password_description')}</CardDescription>
                        <ForgotPasswordForm/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Page