import axios from "axios";

export const getUsers = async (setUsers, setExecuteQuery) => {
  const options = { method: "GET", url: "http://localhost:5000/usuarios" };

  await axios
    .request(options)
    .then(function (response) {
      setUsers(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });
    setExecuteQuery(false);
};