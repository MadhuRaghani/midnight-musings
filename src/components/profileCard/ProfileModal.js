import { MdOutlineAddPhotoAlternate, MdHighlightOff } from "react-icons/md";
import AvatarModal from "./AvatarModal";
import { useContext, useState } from "react";
import Modal from "react-modal";
import { AuthContext } from "../../contexts/AuthContext";
import { updateUser } from "../../services/AuthServices";

const ProfileModal = ({ editUserProfileModal, setEditUserProfileModal }) => {
  const { user, setUser } = useContext(AuthContext);

  const [updatedProfileData, setUpdatedProfileData] = useState(user);
  const [isAvatarModalOpen, setIsAvatarModalOpen] = useState(false);

  const cancelHandler = () => {
    setUpdatedProfileData(user);
    setEditUserProfileModal(false);
  };

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      backgroundColor: "#813772",
      color: "#fff",
    },
  };

  Modal.setAppElement("body");

  return (
    <Modal isOpen={editUserProfileModal} style={customStyles}>
      <section className="profModal-section">
        <div className="profModal_container flex-column">
          <div className="profModal_container-header">
            <span className="title">Edit Profile</span>
            <span
              onClick={() => {
                cancelHandler();
              }}
              className="closeModal"
            >
              <MdHighlightOff className="github-icons" />
            </span>
          </div>
          <div className="profModal_ImgContainer">
            <img src={updatedProfileData?.profile_pic} alt="profile" />
            <span
              className="alternateImg"
              onClick={() => {
                setIsAvatarModalOpen(true);
              }}
            >
              <MdOutlineAddPhotoAlternate />
            </span>
            {isAvatarModalOpen && (
              <AvatarModal
                isAvatarModalOpen={isAvatarModalOpen}
                setIsAvatarModalOpen={setIsAvatarModalOpen}
                setUpdatedProfileData={setUpdatedProfileData}
                updatedProfileData={updatedProfileData}
              />
            )}
          </div>
          <div className="profModal_section type-1">
            <div>
              <label htmlFor="profModal_firstname">First Name</label>
              <input
                id="profModal_firstname"
                placeholder="Firstname"
                type="text"
                className="profModal_firstname"
                onChange={(e) => {
                  setUpdatedProfileData((prev) => ({
                    ...prev,
                    firstName: e.target.value,
                  }));
                }}
                value={updatedProfileData.firstName}
              />
            </div>
            <div>
              <label htmlFor="profModal_lastname">Last Name</label>
              <input
                id="profModal_lastname"
                placeholder="Lastname"
                type="text"
                className="profModal_lastname"
                onChange={(e) => {
                  setUpdatedProfileData((prev) => ({
                    ...prev,
                    lastName: e.target.value,
                  }));
                }}
                value={updatedProfileData.lastName}
              />
            </div>
          </div>
          <div className="profModal_section type-2">
            <label htmlFor="profModal_website">Link</label>
            <input
              id="profModal_website"
              type="text"
              placeholder="Website Link"
              onChange={(e) => {
                setUpdatedProfileData((prev) => ({
                  ...prev,
                  website: e.target.value,
                }));
              }}
              value={updatedProfileData.website}
            />
          </div>
          <div className="profModal_section type-2">
            <label htmlFor="profModal_bio">Bio</label>
            <textarea
              id="profModal_bio"
              placeholder="Bio"
              maxLength={100}
              onChange={(e) => {
                setUpdatedProfileData((prev) => ({
                  ...prev,
                  bio: e.target.value,
                }));
              }}
              value={updatedProfileData.bio}
            ></textarea>
            <span className="bioLength">
              {Number(100 - updatedProfileData.bio.length)}/100
            </span>
          </div>
          <button
            onClick={() => {
              updateUser(setUser, updatedProfileData);
              setEditUserProfileModal(false);
            }}
            className="updateProfileBtn"
          >
            Update
          </button>
        </div>
      </section>
    </Modal>
  );
};

export default ProfileModal;
