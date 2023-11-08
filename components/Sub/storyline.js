import React from 'react';

const StoryBox = () => {
    const str = "</div>"
    return (
        <>
            <p className="title-header my-10 text-center text-[#313131] text-9xl" id="story">Who Am I</p>
            <div className="flex items-center py-10">

                <div className="flex flex-wrap mx-auto w-10/12">
                    <div className="mx-auto p-2 md:w-full lg:w-8/12">
                        <h2 className="font-thin text-6xl text-green-300">Hi</h2>
                        <p className="mt-1 text-gray-300 sm:w-full text-sm md:text-md lg:text-lg storybox-text">
                            My name is Michael Utoh, I am a fullstack web developer, crafting Interesting experiences and
                            revolutionalizing the internet, one <span className="text-green-300">{str}</span> at a time.
                        </p>
                    </div>

                </div>

            </div>
        </>
    )
};

export default StoryBox;
