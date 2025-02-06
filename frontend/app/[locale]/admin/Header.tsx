import ApplicationLogo from "@/components/ui/ApplicationLogo";
import Dropdown from "@/components/ui/Dropdown";
import {DropdownText} from "@/components/ui/DropdownLink";
import { IconChevronDown } from '@tabler/icons-react';
import {useTranslations} from "next-intl";
import UserAvatar from "@/components/users/UserAvatar";

const Header = ({ user, logout }) => {
    const translations = useTranslations('Auth')

    return (
        <header className="navbar navbar-expand-md d-print-none">
            <div className="container-xxl">
                <div className="row m-0 justify-content-between w-100">
                    <h1 className="navbar-brand navbar-brand-autodark d-none-navbar-horizontal pe-0 pe-md-3 col mt-1 mb-1">
                        <ApplicationLogo/>
                    </h1>
                    <div className="ms-2 nav-item dropdown d-flex justify-content-between justify-content-sm-end mt-1 mb-1 col-12 col-lg-4 col-xl-4 align-items-center">
                        <Dropdown trigger={
                            <div className="d-flex lh-1 text-reset p-0 cursor-pointer">
                                <UserAvatar avatarBase64={user.avatar}/>
                                <div className="ps-2">
                                    <div>{user.name}</div>
                                    <div className="mt-1 small text-secondary text-end">{user.email}</div>
                                </div>
                                <span className="text-muted ms-2"><IconChevronDown/></span>
                            </div>
                        }>
                            <DropdownText onClick={() => logout()}>
                                {translations('logout')}
                            </DropdownText>
                        </Dropdown>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
