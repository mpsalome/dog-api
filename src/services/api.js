function get(theUrl) {
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.open("GET", theUrl, false);
  xmlHttp.send(null);
  return xmlHttp.responseText;
}

export default {
  getAllBreeds() {
    var json = JSON.parse(get("https://dog.ceo/api/breeds/list/all"));
    return json;
  },
  getImageBy(breed) {
    var json = JSON.parse(
      get(`https://dog.ceo/api/breed/${breed}/images/random`)
    );
    return json;
  },
  getImageBySub(breed, subbreed) {
    var json = JSON.parse(
      get(`https://dog.ceo/api/breed/${breed}/${subbreed}/images/random`)
    );
    return json;
  }
};
