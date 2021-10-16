import { useUser } from "context/userContext";

const UserInfo = ({ data }) => {
  const {userData} = useUser();
  return (
    <div>
      <img src={data.picture}  className="userImg"/>
      <p  className="userInfo">{userData.name}</p>
    </div>
  );
};

export default UserInfo;
