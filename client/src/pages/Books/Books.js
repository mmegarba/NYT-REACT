import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import DeleteBtn from "../../components/DeleteBtn";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";
import {ArticleItem,ArticleList} from "../../components/ArticleList"
class Books extends Component {


  state = {
    articles: [],
    savedArticles:[],
    topic: "",
    startYear: "",
    endYear: ""
  }

  componentDidMount() {
    // this.loadArticles();
  }
//
//
//
    loadArticles = () => {
      API.getArticles()
      .then(res => this.setState({ savedArticles: res.data }))
      .catch(err => console.log(err));

};
//
//
//
//
//   //
//   // loadBooks = () => {
//   //   API.getBooks()
//   //
//   //     .then(res => this.setState({ books: res.data }))
//   //     .catch(err => console.log(err));
//   // };
//
//
  handleInputChange = event => {
    // Destructure the name and value properties off of event.target
    // Update the appropriate state
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };
//
//
//
//
saveArticle = (Article) =>{

console.log(Article)
// API.saveArticle(newArticle)
// .then(res => this.setState({ books: this.state.books.concat([newBook]) }))
// .catch(err => console.log(err));
//
// }
//
// deleteBook = event =>{
//
//
// API.deleteBook(newBook)
// .then(res => this.setState({ books: this.state.books.concat([newBook]) }))
// .catch(err => console.log(err));
//
}


// this.setState({ articles: res.data })

    findArt = event => {

      event.preventDefault();


const query = "&q=" + this.state.topic + "+" + this.state.startyear + "+" + this.state.endyear


      API.findArticles(query)
      .then(res => this.setState({articles:res.data.response.docs}) )
      .catch(err => console.log(err));

};


  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="xs-12">
            <Jumbotron>
              <h1>New York Times Article Scrubber</h1>
            </Jumbotron>

          </Col>
        </Row>
        <Row>
          <Col size="xs-12">

          <div>
          <form>
                <Input name="topic" placeholder="Topic (required)"
                onChange={this.handleInputChange} />
                <Input name="startyear" placeholder="Start Year (required)"
                onChange={this.handleInputChange}/>
                <Input name="endyear" placeholder="End Year (Optional)"
                onChange={this.handleInputChange}/>
                <FormBtn onClick={this.findArt} type="success"> Search</FormBtn>
              </form>
          </div>

          </Col>
        </Row>

        <Row>
          <Col size="xs-12">
          {!this.state.articles.length ? (
                          <h1 className="text-center">No Articles to Display</h1>
                        ) : (
                          <ArticleList>
                            {this.state.articles.map(articles => {
                              return (
                                <ArticleItem
                                  key={articles.headline.main}
                                  headline={articles.headline.main}
                                  href={articles.web_url}
                                  save={this.saveArticle(articles)}
                                />
                              );
                            })}
                          </ArticleList>
                        )}
          </Col>
        </Row>


        <Row>
          <Col size="xs-12">
          {this.state.savedArticles.length ? (
                          <List>
                            {this.state.savedArticles.map(articles => (
                              <ListItem key={articles._id}>
                                <a href={articles.web_url}>
                                  <strong>
                                    {articles.headline} by {articles.byline.original}
                                  </strong>
                                <DeleteBtn onClick ={this.deleteBook} />
                                    </a>
                              </ListItem>
                            ))}
                          </List>
                        ) : (
                          <h3>No Saved Articles</h3>
                        )}
          </Col>
        </Row>
      </Container>
    );
  }
}


export default Books;
