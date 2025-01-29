'use client'

import Button from '@/components/Button'
import Input from '@/components/Input'
import InputError from '@/components/InputError'
import Label from '@/components/Label'
import Link from 'next/link'
import {useAuth} from '@/hooks/auth'
import {useEffect, useState} from 'react'
import {useRouter} from 'next/navigation'
import AuthSessionStatus from '@/app/[locale]/auth/AuthSessionStatus'
import {IconMail, IconKey} from '@tabler/icons-react'
import {useTranslations} from "next-intl"
import {GoogleOAuthProvider} from "@react-oauth/google";
import GoogleLogin from "@/components/socials/GoogleLogin";

export default function LoginForm() {
    const translations = useTranslations('Auth')

    const router = useRouter()

    const {login} = useAuth({
        middleware: 'guest',
        redirectIfAuthenticated: '/admin',
    })

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [shouldRemember, setShouldRemember] = useState(false)
    const [errors, setErrors] = useState([])
    const [status, setStatus] = useState(null)

    useEffect(() => {
            if (router.reset?.length > 0 && errors.length === 0) {
                setStatus(atob(router.reset))
            } else {
                setStatus(null)
            }
        }
    )

    const submitForm = async event => {
        event.preventDefault()

        login({
            email,
            password,
            remember: shouldRemember,
            setErrors,
            setStatus,
        })
    }

    return (
        <>
            <AuthSessionStatus className="mb-4" status={status}/>
            <h2 className="h2 text-center mb-4">{translations('login_to_your_account')}</h2>
            <form onSubmit={submitForm}>
                {/* Email */}
                <div className="input-group">
                    <Label htmlFor="email" className={"input-group-text"}>
                        <IconMail stroke={2}/>
                    </Label>
                    <Input
                        id="email"
                        type="email"
                        value={email}
                        placeholder={translations('placeholder_email')}
                        className="form-control"
                        onChange={event => setEmail(event.target.value)}
                        required
                        autoFocus
                    />
                    <InputError messages={errors.email} className="mt-2"/>
                </div>

                {/* Password */}
                <div className="input-group mt-3">
                    <Label htmlFor="password" className={"input-group-text"}>
                        <IconKey stroke={2}/>
                    </Label>

                    <Input
                        id="password"
                        type="password"
                        value={password}
                        placeholder={translations('placeholder_password')}
                        className="form-control"
                        onChange={event => setPassword(event.target.value)}
                        required
                        autoComplete="current-password"
                    />

                    <InputError
                        messages={errors.password}
                        className="mt-2"
                    />
                </div>

                {/* Remember Me */}
                <div className="block mt-4">
                    <label
                        htmlFor="remember_me"
                        className="inline-flex items-center">
                        <input
                            id="remember_me"
                            type="checkbox"
                            name="remember"
                            className="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                            onChange={event =>
                                setShouldRemember(event.target.checked)
                            }
                        />
                        <span className="ml-2 text-sm text-gray-600">{translations('remember_me')}</span>
                    </label>
                </div>
                <GoogleOAuthProvider clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}>
                    <GoogleLogin/>
                </GoogleOAuthProvider>
                <div className="flex items-center justify-end mt-4">
                    <Link
                        href="/forgot-password"
                        className="underline text-sm text-gray-600 hover:text-gray-900">
                        {translations('forgot_password')}
                    </Link>

                    <Button className="ml-3">{translations('login')}</Button>
                </div>
            </form>
        </>
)
};