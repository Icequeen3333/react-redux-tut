// src/js/actions/index.js
// ...
// our new action creator. Will it work?
// src/js/actions/index.js
export function addArticle(payload) {
  return { type: "ADD_ARTICLE", payload }
};
export function getData() {
  return function(dispatch) {
    return fetch("https://jsonplaceholder.typicode.com/posts")
      .then(response => response.json())
      .then(json => {
        dispatch({ type: "DATA_LOADED", payload: json });
      });
  };
}