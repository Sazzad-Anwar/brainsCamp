import React, { Fragment, useEffect } from 'react';
import { Dialog, Transition } from '@headlessui/react'

const Modal = ({ closeModal, open, children, className }) => {

    let modalClass = '  inline-block mx-auto p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white dark:text-white dark:bg-darkLight shadow-xl rounded-xl';

    modalClass += className ? `${className} ` : '';


    return (
        <Transition appear show={open} as={Fragment}>
            <Dialog
                as="div"
                className="fixed inset-0 z-50 overflow-y-auto backdrop-blur-sm"
                onClose={closeModal}
            >
                <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />
                <div className="min-h-screen px-4 text-center">
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <Dialog.Overlay className="fixed inset-0" />
                    </Transition.Child>

                    {/* This element is to trick the browser into centering the modal contents. */}
                    <span
                        className="inline-block h-screen align-middle"
                        aria-hidden="true"
                    >
                        &#8203;
                    </span>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0 scale-95"
                        enterTo="opacity-100 scale-100"
                        leave="ease-inrem duration-200"
                        leaveFrom="opacity-100 scale-100"
                        leaveTo="opacity-0 scale-95"
                    >
                        <div className={`${className ? className : ''} inline-block mx-auto p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white dark:text-white dark:bg-darkLight shadow-xl rounded-xl`}>
                            {children}
                        </div>
                    </Transition.Child>
                </div>
            </Dialog>
        </Transition>
    )
}

export default Modal