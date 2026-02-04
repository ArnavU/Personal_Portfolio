
export const fetchLeetCodeStats = async (username, params) => {
    const enviroment = import.meta.env?.VITE_ENVIRONMENT || "";
    let base_url = "";
    if(enviroment=="development") {
        base_url = "http://localhost:3000"
    } 

    const queryString = new URLSearchParams({username, ...params}).toString();

    try {
        const response = await fetch(`${base_url}/api/leetcode?${queryString}`);
        const data = await response.json();
        return data;
    } catch(err) {
        console.log("Error in catch in frontend: ", err);
        return new Error(err.message);
    }
}