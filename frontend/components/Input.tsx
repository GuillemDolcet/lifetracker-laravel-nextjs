import { useTranslations } from "next-intl";

interface InputProps {
    disabled?: boolean;
    className?: string;
    errors?: string[]; // The error can be an array of strings or undefined
    name: string; // Added 'name' as part of props to make the field dynamic
    setErrors: (errors: any) => void;
    set: (value: any) => void;
    [key: string]: any; // Other props you might need (like 'value', 'onChange', etc.)
}

export default function Input({ disabled = false, className, errors, set, setErrors, name, ...props }: InputProps) {
    const translations = useTranslations('Errors');

    // Handle the change in the input field
    const handleChange = (event) => {
        set(event.target.value);

        // Clear the error for the specific field when the value changes
        setErrors((prevErrors) => {
            const newErrors = { ...prevErrors };
            delete newErrors[name]; // Remove the error for the specific field using the 'name' prop
            return newErrors;
        });
    };

    // Function to get the translated error message
    function getErrorMessage(err) {
        // If the error is a string, return it directly without translation
        if (typeof err === "string") {
            return err;
        }

        // If the error is an object and has a code, try to translate it
        if (typeof err === "object" && err.code) {
            const translatedMessage = translations(err.code);

            // If the translation exists, return it; otherwise, return the original message
            return translatedMessage !== 'Errors.' + err.code ? translatedMessage : err.message;
        }

        // If none of the conditions are met, return a generic error message
        return translations('unknown');
    }

    return (
        <>
            <input
                disabled={disabled}
                className={`${className} ${errors ? 'is-invalid' : ''}`}
                onChange={event => handleChange(event)}
                name={name} // Ensure 'name' is passed to each input
                {...props}
            />
            {errors && Array.isArray(errors) &&
                errors.map((err, index) => (
                    <div key={index} className="invalid-feedback mb-1">
                        {getErrorMessage(err)} {/* Display the translated error message */}
                    </div>
                ))
            }
        </>
    );
}
