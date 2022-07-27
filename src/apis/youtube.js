import axios from "axios";

const KEY = "AIzaSyCdew2ewKmQxWLpc_3IvFYqkUMrmVt_13Q";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
