
'use client';

import CustomButton from "../forms/CustomButton";
import Modal from "./Modal";
import useLoginModal from "@/app/hooks/useLoginModal";


const LoginModal = () => {

    const loginModal = useLoginModal()

    const content = (

        <>
            <h2 className="mb-6 text-2xl">Welcome to BookNChill, Please Login</h2>
            <form className="px-4 pb-4">
                <input placeholder="Enter your Email" type='email' className="w-full h-10 px-4 mb-4 border border-gray-300 rounded-xl "></input>

                <input placeholder="Enter your Password" type='password' className="w-full h-10 px-4 mb-4 border border-gray-300 rounded-xl "></input>

                <div className="p-5 bg-airbnb text-white rounded-xl opacity-50">
                    The error message
                </div>
                <CustomButton
                    label="Submit"
                    onClick={() => console.log('Test')}
                />
            </form>

        </>
    )
    return (
        <Modal

            isOpen={loginModal.isOpen}
            close = {loginModal.close}
            label="Log in"
            content= {content}
        />
    )
}

export default LoginModal;