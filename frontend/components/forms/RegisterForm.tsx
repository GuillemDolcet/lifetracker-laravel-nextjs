'use client'

import Button from '@/components/ui/Button'
import Input from '@/components/ui/Input'
import Label from '@/components/ui/Label'
import { useState } from 'react'
import {useTranslations} from "next-intl"

export default function RegisterForm ({submitRequest}) {
    const translations = useTranslations('Auth')

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirmation, setPasswordConfirmation] = useState('')
    const [errors, setErrors] = useState([])

    const submitForm = event => {
        event.preventDefault()

        submitRequest({
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
                    name="name"
                    value={name}
                    placeholder={translations('placeholder_name')}
                    className="form-control"
                    errors={errors.name}
                    set={setName}
                    setErrors={setErrors}
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
                    name="email"
                    placeholder={translations('placeholder_email')}
                    errors={errors.email}
                    className="form-control"
                    set={setEmail}
                    setErrors={setErrors}
                    required
                />
            </div>

            {/* Password */}
            <div className="mb-3">
                <Label htmlFor="password" className="form-label">Password</Label>
                <Input
                    id="password"
                    type="password"
                    name="password"
                    value={password}
                    placeholder={translations('placeholder_password')}
                    errors={errors.password}
                    className="form-control"
                    set={setPassword}
                    setErrors={setErrors}
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
                    name="password_confirmation"
                    value={passwordConfirmation}
                    placeholder={translations('placeholder_confirm_password')}
                    errors={errors.password_confirmation}
                    className="form-control"
                    set={setPasswordConfirmation}
                    setErrors={setErrors}
                    required
                />
            </div>

            <div className="flex items-center justify-end mt-4">
                <Button type="submit" className="btn-primary w-100">{translations('create_account')}</Button>
            </div>
        </form>
    )
}