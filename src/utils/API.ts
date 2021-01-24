import axios from "axios";

const BASEURL = "https://randomuser.me/api/";

const randomUserSearch = {
  search: async (searchRequests: number) => {
    const employees = [];
    for (let i: number = 0; i <= searchRequests; i++) {
      const request = await axios
        .get(BASEURL)
        .then((res) => res.data.results[0]);
      employees.push(request);
    }
    return employees;
  },
};

export default randomUserSearch;
