'use client'

import Button from '@/components/Button'
import Input from '@/components/Input'
import Label from '@/components/Label'
import { useAuth } from '@/hooks/auth'
import { useState } from 'react'
import {useTranslations} from "next-intl"

const RegisterForm = () => {
    const translations = useTranslations('Auth')

    const { register } = useAuth({
        middleware: 'guest',
        redirectIfAuthenticated: '/admin',
    })

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirmation, setPasswordConfirmation] = useState('')
    const [errors, setErrors] = useState([])

    const submitForm = event => {
        event.preventDefault()

        register({
            name,
            email,
            password,
            password_confirmation: passwordConfirmation,
            setErrors,
        })
    }

    return (
        <form onSubmit={submitForm}>
            {/* Name */}
            <div className="mb-3">
                <Label htmlFor="name" className="form-label">Name</Label>
                <Input
                    id="name"
                    type="text"
                    value={name}
                    placeholder={translations('placeholder_name')}
                    className="form-control"
                    errors={errors.name}
                    onChange={event => setName(event.target.value)}
                    required
                    autoFocus
                />
            </div>

            {/* Email Address */}
            <div className="mb-3">
                <Label htmlFor="email" className="form-label">Email</Label>
                <Input
                    id="email"
                    type="email"
                    value={email}
                    placeholder={translations('placeholder_email')}
                    errors={errors.email}
                    className="form-control"
                    onChange={event => setEmail(event.target.value)}
                    required
                />
            </div>

            {/* Password */}
            <div className="mb-3">
                <Label htmlFor="password" className="form-label">Password</Label>
                <Input
                    id="password"
                    type="password"
                    value={password}
                    placeholder={translations('placeholder_password')}
                    errors={errors.password}
                    className="form-control"
                    onChange={event => setPassword(event.target.value)}
                    required
                    autoComplete="new-password"
                />
            </div>

            {/* Confirm Password */}
            <div className="mb-3">
                <Label htmlFor="passwordConfirmation" className="form-label">Confirm Password</Label>
                <Input
                    id="passwordConfirmation"
                    type="password"
                    value={passwordConfirmation}
                    placeholder={translations('placeholder_confirm_password')}
                    errors={errors.password_confirmation}
                    className="form-control"
                    onChange={event =>
                        setPasswordConfirmation(event.target.value)
                    }
                    required
                />
            </div>

            <div className="flex items-center justify-end mt-4">
                <Button type="submit" className="btn-primary w-100">{translations('create_account')}</Button>
            </div>
        </form>
    )
}

export default RegisterForm