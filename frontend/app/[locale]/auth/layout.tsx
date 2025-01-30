import ApplicationLogo from '@/components/ApplicationLogo'
import ThemeToggle from "@/components/ThemeToggle";

export const metadata = {
    title: 'Laravel',
}

const Layout = ({children}) => {
    return (
        <>
            <div className="page border-primary">
                <div className="p-3 cursor-pointer d-flex align-items-center justify-content-end">
                    <ThemeToggle/>
                </div>
                <div className="container justify-content-center py-4 mt-auto mb-auto">
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
