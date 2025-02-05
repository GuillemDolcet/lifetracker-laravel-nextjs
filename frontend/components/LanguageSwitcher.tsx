'use client';

import {useParams} from 'next/navigation';
import {useTransition, useState} from 'react';
import {Locale, routing, usePathname, useRouter} from '@/i18n/routing';
import {useLocale, useTranslations} from 'next-intl';
import Image from "next/image";
import Dropdown from "@/components/Dropdown";
import {DropdownText} from "@/components/DropdownLink";

export default function LanguageSwitcher({ className }) {
    const router = useRouter();
    const [isPending, startTransition] = useTransition();
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

    return (
        <Dropdown trigger={
            <a href="#" className="nav-link d-flex lh-1 text-reset p-0 show me-3">
                <Image src={`/images/${locale}.png`} width="32" height="32" alt={locale}/>
            </a>
        }>
            {routing.locales
                .filter((cur) => cur !== locale)
                .map((cur) => (
                    <DropdownText key={cur} onClick={() => onSelectChange(cur)}>
                        <Image src={`/images/${cur}.png`} width="32" height="32" alt={cur}/>
                        <div className="fw-medium ms-2">{translations(cur)}</div>
                    </DropdownText>
                ))
            }
        </Dropdown>
    )
}