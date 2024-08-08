"use client"
import React from 'react'
import { Button } from '@/components/ui/button'
import { FcGoogle } from "react-icons/fc";
import { AiOutlineSlack } from "react-icons/ai";
import { signIn } from 'next-auth/react';



const page = () => {

    const onClick = (provider: "google" | "slack") => {
        signIn(provider, {
            callbackUrl: '/',
        });
    };

    return (
        <div className='max-w-7xl mx-auto  min-h-[80vh] flex justify-center items-center'>
            <div className='flex justify-center items-center'>

                <div className=" w-[400px] h-[300px]">
                    <form className=" rounded px-2 pt-6 pb-8 mb-4 h-full">
                        <div
                            className="mb-4 flex items-center gap-2 border justify-center p-2 text-xl cursor-pointer rounded"
                            onClick={() => onClick('google')}
                        >
                            <FcGoogle /> <p>Sigin with Google</p>
                        </div>
                        <div
                            className="mb-4 flex items-center gap-2 border justify-center p-2 text-xl cursor-pointer  rounded"
                            onClick={() => onClick('slack')}
                        >
                            <AiOutlineSlack /> <p>Sigin with Slack</p>
                        </div>

                        <p className="text-center text-gray-500 text-xs">
                            &copy;2024 Cobalt Corp. All rights reserved.
                        </p>
                    </form>
                </div>

            </div>

        </div>
    )
}

export default page