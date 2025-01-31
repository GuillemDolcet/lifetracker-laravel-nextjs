'use client'

import Button from '@/components/Button'
import Input from '@/components/Input'
import Label from '@/components/Label'
import {useAuth} from '@/hooks/auth'
import {useState} from 'react'
import {useTranslations} from "next-intl"
import {IconMail} from "@tabler/icons-react";

export default function ForgotPasswordForm() {
    const translations = useTranslations('Auth')

    const { forgotPassword } = useAuth({
        middleware: 'guest',
        redirectIfAuthenticated: '/admin',
    })

    const [email, setEmail] = useState('')
    const [errors, setErrors] = useState([])
    const [status, setStatus] = useState(null)

    const submitForm = event => {
        event.preventDefault()

        forgotPassword({ email, setErrors, setStatus })
    }

    return (
        <>
            <form onSubmit={submitForm}>
                {/* Email Address */}
                <div>
                    <Label htmlFor="email">{translations('email')}</Label>
                    <Input
                        id="email"
                        type="email"
                        name="email"
                        value={email}
                        errors={errors.email}
                        className="form-control"
                        placeholder={translations('placeholder_email')}
                        onChange={event => setEmail(event.target.value)}
                        required
                        autoFocus
                    />
                </div>
                <div className="flex items-center justify-end mt-4">
                    <Button type="submit" className="btn-primary w-100">
                        <IconMail stroke={2} className="me-2"/>{translations('send_reset_link')}
                    </Button>
                </div>
            </form>
        </>
    )
};