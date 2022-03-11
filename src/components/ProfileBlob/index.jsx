const ProfileBlob = (props) => {
    return (
        <div className="animate-bounce bg-theme-primary w-64 h-64 lg:w-96 lg:h-96 rounded-lg">
            <img
                className="object-contain w-64 h-64 lg:w-96 lg:h-96 p-4"
                src={props.image}
                // src="https://randomuser.me/api/portraits/women/81.jpg"
                alt="user image"
            />
        </div>
    );
};

export default ProfileBlob;
