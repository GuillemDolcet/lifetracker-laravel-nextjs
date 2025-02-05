'use client'

import { useAuth } from '@/hooks/auth'
import Navigation from '@/app/[locale]/admin/Navigation'
import Loading from '@/app/[locale]/admin/Loading'
import Header from "@/app/[locale]/admin/Header";

const AppLayout = ({ children }) => {
    const { user, logout } = useAuth({ middleware: 'auth' })

    if (!user) {
        return <Loading />
    }

    return (
        <>
            <div className="page border-primary">
                <Header user={user} logout={logout} />
                <div className="min-h-screen bg-gray-100">
                    <Navigation user={user} />

                    <main>{children}</main>
                </div>
            </div>
        </>
    )
}

export default AppLayout