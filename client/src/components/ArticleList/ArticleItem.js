import React from "react";
import { Input, TextArea, FormBtn } from "../../components/Form";
import { Container, Row, Col } from "../Grid";
// RecipeListItem renders a bootstrap list item containing data from the recipe api call
export const ArticleItem = props => (
  <li className="list-group-item">
    <Container>
      <Row>
        <Col size="xs-8 sm-9">
          <p>{props.headline}</p>
          <a rel="noreferrer noopener" target="_blank" href={props.href}>Go to Article!</a>
          <FormBtn onClick={props.save} type = "success" data-headline = {props.headline} data-link = {props.href} >Save Article </FormBtn>
        </Col>
      </Row>
    </Container>
  </li>
);
