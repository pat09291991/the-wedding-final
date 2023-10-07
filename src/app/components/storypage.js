import React from "react"

export default function StoryPage() {

    return (
        <div className='min-h-screen py-12 px-3'>
            <div className="flex flex-col sm:items-center mb-12">
                <div>
                    <p className="mb-12">
                        <span className='border-b-4 border-teal-800 pb-4 text-xl text-sky-900'>
                            The Date
                        </span>
                    </p>
                    <span className="text-2xl sm:text-4xl text-sky-900">Thursday</span><br />
                    <span className="text-2xl sm:text-4xl text-sky-900">December 21</span><br />
                    <span className="text-2xl sm:text-4xl text-sky-900">2023</span>
                </div>
            </div>

            <div className="flex flex-col items-end mb-24 sm:pe-24">
                <div>
                    <p className="mb-12">
                        <span className='border-b-4 border-teal-800 pb-4 text-xl text-sky-900'>
                            The Invite
                        </span>
                    </p>
                    <span className="text-lg sm:text-xl text-gray-500">Please join us as we</span><br />
                    <span className="text-lg sm:text-xl text-gray-500">exchange our sacred vows</span><br />
                    <span className="text-lg sm:text-xl text-gray-500">and solemnly pronounce our</span><br />
                    <span className="text-lg sm:text-xl text-gray-500">commitment by saying 'I do'.</span><br />
                    <p className="text-xl mt-8 font-semibold underline underline-offset-8 text-sky-900">RSVP</p>
                </div>
            </div>

            <div className="relative sm:px-20 md:px-20 lg:px-28 xl:ps-72">
                <div className="flex flex-col sm:flex-col-reverse mb-12">
                    <div className="relative">
                        <p className="leading-[0]">
                            <span className='text-[12rem] text-transparent invite-numbers'>
                                12
                            </span>
                        </p>
                        <img
                            src="/images/1stimage.jpg"
                            className="z-10 rounded-[2.5rem] relative w-1/2 sm:w-1/2"
                        />
                    </div>
                </div>

                <div className="flex flex-col items-end relative sm:ml-36 -mt-24 sm:-mt-36 z-0">
                    <div className="relative">
                        <img
                            src="/images/bridge.jpg"
                            className="z-40 rounded-[2.5rem] relative w-full sm:w-full"
                        />
                        <p className="mb-12 z-0 relative leading-[0] mt-12 sm:mt-24 text-end">
                            <span className="pb-4 text-[12rem] text-transparent invite-numbers">
                                21
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}