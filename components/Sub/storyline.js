import React from 'react';

const StoryBox = () => {
  return (
        <>
            <p className="title-header mb-10 text-center text-[#313131] text-9xl" id="story">Who Am I</p>
            <div className="flex items-center py-20">

                <div className="flex flex-wrap mx-auto w-10/12">
                    <div className="p-2 w-6/12">
                        <h2 className="font-thin text-4xl text-green-300">Hi</h2>
                        <p className="mt-1 text-gray-300 sm:w-full storybox-text">
                            My name is Michael Utoh, I am a software developer, specializing in building Interesting experiences.
                        </p>
                    </div>

                    {/* <div className="w-4/12">
                        <h2 className="font-bold text-2xl text-white">Hi!</h2>
                        <p className="text-gray-400 sm:w-full storybox-text">
                            I am Michael, A Web Developer from Lagos, I write Python and JavaScript Languages, Using Django Rest Framework & React Library along the way.
                        </p>
                    </div> */}

                    <div className="p-2 w-6/12">
                        <h2 className="font-bold text-2xl text-white">Hi!</h2>
                        <p className="mt-1 text-gray-400 sm:w-full storybox-text">
                            I am Michael, A Web Developer from Lagos, I write Python and JavaScript Languages, Using Django Rest Framework & React Library along the way.
                        </p>
                    </div>
                </div>

            </div>
        </>
    )
};

export default StoryBox;
