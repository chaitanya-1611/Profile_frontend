import React from 'react';
import MapModal from './MapModal';

const ProfileCard = ({ profile, onClick }) => {
    const [showMapModal, setShowMapModal] = React.useState(false);

    const toggleeMapModal = () => {
        setShowMapModal(!showMapModal);
    };

    return (
        <div className="profile-card" onClick={onClick}>
            <img src={profile.image} alt={profile.name} />
            <h3>{profile.name}</h3>
            <p>{profile.description}</p>
            <p><strong>Hobbies:</strong> {profile.hobbies}</p>
            <p><strong>Interests:</strong> {profile.interests}</p>
            <button onClick={(e) => { e.stopPropagation(); toggleeMapModal(); }}>Summary</button>
            {showMapModal && <MapModal address={profile.address} onClose={toggleeMapModal} />}
        </div>
    );
};

export default ProfileCard;
