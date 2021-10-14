
const GetToken = () => {
    return `Bearer ${localStorage.getItem('token')}`;
}

export default GetToken;
