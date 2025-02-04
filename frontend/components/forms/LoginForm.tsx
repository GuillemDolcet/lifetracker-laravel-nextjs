'use client'

import Button from '@/components/Button'
import Input from '@/components/Input'
import Label from '@/components/Label'
import {Link} from '@/i18n/routing';
import {useAuth} from '@/hooks/auth'
import {useEffect, useState} from 'react'
import {useRouter} from 'next/navigation'
import {useTranslations} from "next-intl"

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

    const submitForm = async event => {
        event.preventDefault()

        login({
            email,
            password,
            remember: shouldRemember,
            setErrors,
        })
    }

    return (
        <>
            <form onSubmit={submitForm}>
                {/* Email */}
                <div className="mb-3">
                    <Label htmlFor="email" className="form-label">
                        {translations('email')}
                    </Label>
                    <Input
                        id="email"
                        type="email"
                        name="email"
                        value={email}
                        placeholder={translations('placeholder_email')}
                        className="form-control"
                        errors={errors.email}
                        set={setEmail}
                        setErrors={setErrors}
                        required
                        autoFocus
                    />
                </div>

                {/* Password */}
                <div className="mb-2">
                    <Label htmlFor="password" className="form-label">
                        {translations('password')}
                        <span className="form-label-description">
                              <Link href="/auth/forgot-password"
                                    className="underline text-sm text-gray-600 hover:text-gray-900">
                                  {translations('forgot_password')}
                              </Link>
                            </span>
                    </Label>
                    <Input
                        id="password"
                        type="password"
                        name="password"
                        value={password}
                        placeholder={translations('placeholder_password')}
                        className="form-control"
                        errors={errors.password}
                        set={setPassword}
                        setErrors={setErrors}
                        required
                        autoComplete="current-password"
                    />
                </div>

                {/* Remember Me */}
                <div>
                    <Label
                        htmlFor="remember_me"
                        className="form-check">
                        <Input
                            id="remember_me"
                            type="checkbox"
                            name="remember"
                            className="form-check-input"
                            onChange={event =>
                                setShouldRemember(event.target.checked)
                            }
                        />
                        <span className="form-check-label">{translations('remember_me')}</span>
                    </Label>
                </div>
                <div className="flex items-center justify-end mt-4">
                    <Button type="submit" className="btn-primary w-100">{translations('sign_in')}</Button>
                </div>
            </form>
        </>
    )
};