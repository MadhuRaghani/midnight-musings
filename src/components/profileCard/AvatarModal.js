import React, { useRef } from "react";
import { MdOutlineAccountCircle, MdHighlightOff } from "react-icons/md";
import Modal from "react-modal";

const AvatarModal = ({
  isAvatarModalOpen,
  setIsAvatarModalOpen,
  updatedProfileData,
  setUpdatedProfileData,
}) => {
  const avatarRef = useRef();

  const avatarOptionsSelectHandler = (e, item) => {
    e.stopPropagation();
    setUpdatedProfileData({
      ...updatedProfileData,
      profile_pic: item,
    });
    setIsAvatarModalOpen(!isAvatarModalOpen);
  };

  const AVATARS_LINK = "https://res.cloudinary.com/djbnm7p4c/image/upload";

  const AVATAR_IMGS = [
    "/v1688969911/avatars/1_wmb7qq.png",
    "/v1688969911/avatars/2_nqmxfu.png",
    "/v1688969912/avatars/3_uqvmvk.png",
    "/v1688969912/avatars/4_fwupux.png",
    "/v1688969912/avatars/5_pk1q79.png",
    "/v1688969912/avatars/6_c4bapv.png",
    "/v1688969912/avatars/7_ozrnpl.png",
    "/v1688969912/avatars/8_cfqjt1.png",
  ];

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
      width: "32rem",
      height: "20rem",
    },
  };

  Modal.setAppElement("body");

  return (
    <Modal isOpen={isAvatarModalOpen} style={customStyles}>
      <div className="avatarModal_container">
        <div className="flex-row justify-space-between">
          <div className="avatarModal_choose">
            <span className="avatarModal_chooseIcon">
              <MdOutlineAccountCircle />
            </span>
            <span className="avatarModal_chooseText">Choose Avatar</span>
          </div>
          <div className="avatarModal_choose">
            <span onClick={(e) => setIsAvatarModalOpen(false)}>
              <MdHighlightOff />
            </span>
          </div>
        </div>
        <div className="avatarOptions-container" ref={avatarRef}>
          <div className="avatarOptions-Imgcontainer">
            {AVATAR_IMGS.map((item, id) => (
              <div
                key={id}
                onClick={(e) => {
                  avatarOptionsSelectHandler(e, AVATARS_LINK + item);
                }}
                className="avatarOptions-Img"
              >
                <img src={AVATARS_LINK + item} alt={item} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default AvatarModal;
