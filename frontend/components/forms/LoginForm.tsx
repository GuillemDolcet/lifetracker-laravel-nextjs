'use client'

import Button from '@/components/Button'
import Input from '@/components/Input'
import Label from '@/components/Label'
import Link from 'next/link'
import {useAuth} from '@/hooks/auth'
import {useEffect, useState} from 'react'
import {useRouter} from 'next/navigation'
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
        if (router.reset?.length > 0 && Array.isArray(errors) && errors.length === 0) {
            setStatus(atob(router.reset))
        } else {
            setStatus(null)
        }
    })

    useEffect(() => {
        if (!errors || Object.keys(errors).length === 0) return;

        if (typeof errors === 'object') {
            Object.values(errors).flat().forEach(error => toast.error(error));
        }
    }, [errors])

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
            <div className="card-body">
                <h2 className="h2 text-center mb-4">{translations('login_to_your_account')}</h2>
                <form onSubmit={submitForm}>
                    {/* Email */}
                    <div className="mb-3">
                        <Label htmlFor="email" className="form-label bold">
                            {translations('email')}
                        </Label>
                        <Input
                            id="email"
                            type="email"
                            value={email}
                            placeholder={translations('placeholder_email')}
                            className="form-control"
                            error={errors.email}
                            onChange={event => setEmail(event.target.value)}
                            required
                            autoFocus
                        />
                    </div>

                    {/* Password */}
                    <div className="mb-2">
                        <Label htmlFor="password" className="form-label bold">
                            {translations('password')}
                            <span className="form-label-description">
                              <Link
                                  href="/forgot-password"
                                  className="underline text-sm text-gray-600 hover:text-gray-900">
                                {translations('forgot_password')}
                                </Link>
                        </span>
                        </Label>
                        <Input
                            id="password"
                            type="password"
                            value={password}
                            placeholder={translations('placeholder_password')}
                            className="form-control"
                            error={errors.password}
                            onChange={event => setPassword(event.target.value)}
                            required
                            autoComplete="current-password"
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
                    <div className="flex items-center justify-end mt-4">
                        <Button type="submit" className="btn-primary w-100">{translations('sign_in')}</Button>
                    </div>
                </form>
            </div>
            <div className="hr-text w-100">or</div>
            <div className="row">
                <div className="col">
                    <GoogleOAuthProvider clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}>
                        <GoogleLogin/>
                    </GoogleOAuthProvider>
                </div>
            </div>
        </>
    )
};