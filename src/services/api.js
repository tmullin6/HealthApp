const URL = "http://localhost:8000/api";

const createUser= user=>{

const options = {
    method: "POST",
    mode: "cors",
    headers: {
        "Accept": "applicaton/json",
        "Content-Type": "application/json"
    },
    body: JSON.stringify(user)
};

return fetch(`${URL}/signup`,options);

}

export default {createUser};