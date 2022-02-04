import React from 'react';

const HambergerMenu = ({ style }) => {
  return (
    <>
        <div className={style}>
            <ul className="flex flex-col">
                <li>Home</li>
                <li>About</li>
            </ul>
        </div>
    </>
  );
};

export default HambergerMenu;
