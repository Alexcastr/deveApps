import { useUser } from "context/userContext";

const UserInfo = ({ data }) => {
  const {userData} = useUser();
  return (
    <div className="buttonContainer">
      <img src={data.picture}  className="userImg"/>
      <p  className="userInfo">{userData.name}</p>
    </div>
  );
};

export default UserInfo;
