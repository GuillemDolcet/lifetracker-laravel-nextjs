import ApplicationLogo from '@/components/ApplicationLogo'
import ThemeToggle from "@/components/ThemeToggle";

export const metadata = {
    title: 'Laravel',
}

const Layout = ({children}) => {
    return (
        <>
            <ThemeToggle/>
            <div className="page page-center border-primary">
                <div className="container py-4 ">
                    <div className="text-center mb-4">
                        <ApplicationLogo/>
                    </div>
                    {children}
                </div>
            </div>
        </>
    )
}

export default Layout
