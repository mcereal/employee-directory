import axios from "axios";

const BASEURL = "https://randomuser.me/api/?results=5&nat=us,gb,au";

const randomUserSearch = {
  getRandomEmployeeInfo: () =>
    axios.get(BASEURL).then((res) => res.data.results),
};

export default randomUserSearch;
