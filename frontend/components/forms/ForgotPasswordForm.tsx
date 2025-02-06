'use client'

import Button from '@/components/ui/Button'
import Input from '@/components/ui/Input'
import Label from '@/components/ui/Label'
import {useState} from 'react'
import {useTranslations} from "next-intl"
import {IconMail} from "@tabler/icons-react";
import { toast } from 'react-toastify';

export default function ForgotPasswordForm({submitRequest}) {
    const translations = useTranslations('Auth')
    const translationsSucess = useTranslations('Success')

    const [email, setEmail] = useState('')
    const [errors, setErrors] = useState([])

    const submitForm = event => {
        event.preventDefault()

        submitRequest({ email, setErrors, handleResponse })
    }

    function handleResponse(response) {
        const translatedSuccess = translationsSucess(response.data.status.code);

        toast.success(translatedSuccess !== 'Success.' + response.data.status.code ? translatedSuccess : response.data.status.message)
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
                        set={setEmail}
                        setErrors={setErrors}
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