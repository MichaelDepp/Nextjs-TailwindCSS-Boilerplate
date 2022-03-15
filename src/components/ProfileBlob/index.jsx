import React from 'react';

const ProfileBlob = (props) => {
    return (
        <div>
            <img
                className="animate-bounce object-contain w-96 h-96 p-4"
                src={props.image}
                // src="https://randomuser.me/api/portraits/women/81.jpg"
                alt="user image"
            />
        </div>
    );
};

export default ProfileBlob;
