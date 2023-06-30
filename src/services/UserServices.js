import axios from "axios";

export const getUsers = async (setUsers) => {
  try {
    const response = await axios.get("/api/users");
    if (response.status === 200) {
      setUsers(response.data.users);
    }
  } catch (err) {
    console.error(err);
  }
};

export const followUnfollowUser = async (
  followUnfollowFlag,
  followUserId,
  setUser,
  users,
  setUsers
) => {
  try {
    const response = await axios.post(
      "/api/users/" + followUnfollowFlag + "/" + followUserId,
      {},
      {
        headers: { authorization: localStorage.getItem("authenticationToken") },
      }
    );
    if (response.status === 200) {
      setUser(response.data.user);
      setUsers(
        users.map((eachUser) =>
          eachUser._id === response.data.user._id
            ? { ...response.data.user }
            : eachUser._id === response.data.followUser._id
            ? { ...response.data.followUser }
            : eachUser
        )
      );
    }
  } catch (err) {
    console.error(err);
  }
};
