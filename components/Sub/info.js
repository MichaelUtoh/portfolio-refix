import React from 'react';
import CardsComponent from './cards';
import StoryBox from './storyline';

const DeveloperInfo = () => {
  return (
    <>
        <div className="flex flex-col m-4">
            <StoryBox />
            <CardsComponent />
        </div>
    </>
  );
};

export default DeveloperInfo;
