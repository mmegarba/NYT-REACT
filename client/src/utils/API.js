import axios from "axios";

export default {
  // Gets all books

findArticles: function(query) {

  console.log(query)

  return axios.get("https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=ee52d5c340a94fc691cf137de26fd825" + query);
},

  getArticles: function() {
    return axios.get("/api/articles");
  },
  // Gets the book with the given id
  getArticle: function(id) {
    return axios.get("/api/articles/" + id);
  },
  // Deletes the book with the given id
  deleteArticle: function(id) {
    return axios.delete("/api/articles/" + id);
  },
  // Saves a book to the database
  saveArticle: function(bookData) {
    return axios.post("/api/articles", bookData);
  }
};
