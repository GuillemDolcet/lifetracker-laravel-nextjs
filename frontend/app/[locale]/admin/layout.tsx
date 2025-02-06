'use client'

import {useAuth} from '@/hooks/auth'
import Loading from '@/app/[locale]/admin/loading'
import Header from "@/app/[locale]/admin/Header";

const AdminLayout = ({children}) => {
    const {user, logout} = useAuth({middleware: 'auth'})

    if (!user) {
        return <Loading/>
    }

    return (
        <>
            <div className="page border-primary">
                <Header user={user} logout={logout}/>
                <div className="page-wrapper">
                    <div className="page-header">
                        <div className="container-xxl">
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AdminLayout