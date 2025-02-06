'use client'

import Button from '@/components/ui/Button'
import Input from '@/components/ui/Input'
import Label from '@/components/ui/Label'
import {useState} from 'react'
import {useTranslations} from "next-intl"

export default function PasswordResetForm({submitRequest}) {
    const translations = useTranslations('Auth')

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirmation, setPasswordConfirmation] = useState('')
    const [errors, setErrors] = useState([])

    const submitForm = async event => {
        event.preventDefault()

        submitRequest({
            email,
            password,
            password_confirmation: passwordConfirmation,
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
                <div className="mb-3">
                    <Label htmlFor="password" className="form-label">
                        {translations('password')}
                    </Label>
                    <Input
                        id="password"
                        type="password"
                        name="password"
                        value={password}
                        placeholder={translations('placeholder_new_password')}
                        className="form-control"
                        errors={errors.password}
                        set={setPassword}
                        setErrors={setErrors}
                        required
                        autoFocus
                    />
                </div>

                {/* Password */}
                <div className="mb-3">
                    <Label htmlFor="password" className="form-label">
                        {translations('password')}
                    </Label>
                    <Input
                        id="passwordConfirmation"
                        type="password"
                        name="passwordConfirmation"
                        value={passwordConfirmation}
                        placeholder={translations('placeholder_confirm_new_password')}
                        className="form-control"
                        errors={errors.password_confirmation}
                        set={setPasswordConfirmation}
                        setErrors={setErrors}
                        required
                        autoFocus
                    />
                </div>
                <div className="flex items-center justify-end mt-4">
                    <Button type="submit" className="btn-primary w-100">{translations('reset_password')}</Button>
                </div>
            </form>
        </>
    )
};