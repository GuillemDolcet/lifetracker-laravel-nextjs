import { useTranslations } from "next-intl";

interface InputProps {
    disabled?: boolean;
    className?: string;
    errors?: string[]; // El error puede ser un array de strings o undefined
    [key: string]: any; // Otros props que puedas necesitar (por ejemplo, 'value', 'onChange', etc.)
}

export default function Input({ disabled = false, className, errors, ...props }: InputProps) {
    const translations = useTranslations('Errors');

    return (
        <>
            <input
                disabled={disabled}
                className={`${className} ${errors ? 'is-invalid' : ''}`}
                {...props}
            />
            {errors && Array.isArray(errors) &&
                errors.map((err, index) => (
                    <div key={index} className="invalid-feedback mb-1">
                        {translations(`${err.replace(/\.$/, '')}`)}
                    </div>
                ))
            }
        </>
    );
}
