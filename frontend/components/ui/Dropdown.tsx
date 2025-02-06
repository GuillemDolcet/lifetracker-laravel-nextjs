import { Menu, Transition } from '@headlessui/react'
import { Fragment } from 'react'

const Dropdown = ({
                      contentClasses = 'py-1 bg-white',
                      trigger,
                      children,
                  }) => {
    return (
        <Menu as="div" className="dropdown">
            {({ open }) => (
                <>
                    <Menu.Button as={Fragment}>{trigger}</Menu.Button>

                    <Transition
                        show={open}
                        enter="transition ease-out duration-200"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95">
                        <div
                            className={`dropdown-menu dropdown-menu-end dropdown-menu-arrow show dropdown-custom`}>
                            <Menu.Items
                                className={`${contentClasses}`}
                                static>
                                {children}
                            </Menu.Items>
                        </div>
                    </Transition>
                </>
            )}
        </Menu>
    )
}

export default Dropdown
