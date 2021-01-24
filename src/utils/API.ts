import axios from "axios";

const BASEURL = "https://randomuser.me/api/?results=5&nat=us,gb,au";

const randomUserSearch = {
  getRandomEmployeeInfo: async () => {
    const request = await axios.get(BASEURL).then((res) => res.data.results);
    return request;
  },
};

export default randomUserSearch;
