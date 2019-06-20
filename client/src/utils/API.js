import axios from "axios";
// const crypto = require("crypto");
// const PUBLICKEY = "cb68fc2ec155c195822ef51f03beb395";
// const PRIVATEKEY = "12ae1f4be3a7ee1916245e66d313f38211fb9302";
// let BASEURL = "http://gateway.marvel.com/v1/public/characters?apikey="+PUBLICKEY
// const ts = "123456";
// const hash = crypto.createHash('md5').update(ts + PRIVATEKEY + PUBLICKEY).digest('hex');
// const hash2 = "9b3594d4bca485cc92c92df5b5eff447"
// BASEURL += "&ts="+ts+"&hash="+hash;
// const APIKEY = "0db9f4b1065e8cfb7c27c09e33769e9ffd41a534";

const APIKEY2 = "976a6326";

export default {
  search: function(query) {
    return axios.get("http://www.omdbapi.com/?t="+query+"&apikey="+APIKEY2);
  },
  themed: function(query) {
    console.log(("http://www.omdbapi.com/?type="+query+"&apikey="+APIKEY2));
    return axios.get("http://www.omdbapi.com/?type="+query+"&apikey="+APIKEY2);
  }
};
