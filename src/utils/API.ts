import axios from "axios";

const BASEURL = "https://randomuser.me/api/";

const randomUserSearch = {
  search: () => axios.get(BASEURL).then((res) => res.data.results[0]),
};

export default randomUserSearch;
