

'use client';

import CustomButton from "../forms/CustomButton";
import Modal from "./Modal";
import useSignUpModal from "@/app/hooks/useSignUpModal";


const SignUpModal = () => {

    const signupModal = useSignUpModal()

    const content = ( 
        <>
            <h2 className="mb-6 text-2xl">Welcome to BookNChill, Please Sign up</h2>
            <form className="px-4 pb-4">
                <input placeholder="Enter your Email" type='email' className="w-full h-10 px-4 mb-4 border border-gray-300 rounded-xl "></input>

                <input placeholder="Enter your Password" type='password' className="w-full h-10 px-4 mb-4 border border-gray-300 rounded-xl "></input>
                <input placeholder="Confirm your Password" type='password' className="w-full h-10 px-4 mb-4 border border-gray-300 rounded-xl "></input>

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

            isOpen={signupModal.isOpen}
            close = {signupModal.close}
            label="Log in"
            content= {content}
        />
    )
}

export default SignUpModal;