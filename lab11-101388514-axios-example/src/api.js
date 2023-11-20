import axios from "axios";

const getPersons = async () => {
    const respone =  axios.get("https://randomuser.me/api/", {
        params: {
            results: 10
        }
    
    });
    return (await respone).data.results
}

export default getPersons;






    