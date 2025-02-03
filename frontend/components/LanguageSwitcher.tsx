'use client';

import {useParams} from 'next/navigation';
import {useTransition, useState} from 'react';
import {Locale, routing, usePathname, useRouter} from '@/i18n/routing';
import {useLocale, useTranslations} from 'next-intl';
import Image from "next/image";

export default function LanguageSwitcher({ className }) {
    const router = useRouter();
    const [isPending, startTransition] = useTransition();
    const [show, setShow] = useState(false);
    const pathname = usePathname();
    const params = useParams();
    const translations = useTranslations('Idioms');
    const locale = useLocale();

    function onSelectChange(locale) {
        const nextLocale = locale as Locale;

        startTransition(() => {
            router.replace(
                // @ts-expect-error -- TypeScript will validate that only known `params`
                // are used in combination with a given `pathname`. Since the two will
                // always match for the current route, we can skip runtime checks.
                {pathname, params},
                {locale: nextLocale}
            );
        });
    }

    function openDropdown() {
        setShow(prev => !prev);
    }

    return (
        <div className={`${className} dropdown`}>
            <a href="#" className="nav-link d-flex lh-1 text-reset p-0 show" onClick={openDropdown}>
                <Image src={`/images/${locale}.png`} width="32" height="32" alt={locale}/>
            </a>
            <div className={"dropdown-menu dropdown-menu-end dropdown-menu-arrow language-switcher " + (show ? 'show' : '')}>
                {routing.locales.map((cur) => (
                    <div className="dropdown-item" key={cur} onClick={() => onSelectChange(cur)} disabled={isPending}>
                        <Image src={`/images/${cur}.png`} width="32" height="32" alt={cur}/>
                        <div className="fw-medium ms-2">{translations(cur)}</div>
                    </div>
                ))}
            </div>
        </div>
    )
}