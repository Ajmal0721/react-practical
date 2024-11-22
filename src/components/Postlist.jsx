// src/components/PostList.jsx
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPostsAsync } from "../redux/actions";
import { Container, Row, Col, Card, Button } from "react-bootstrap"; // Make sure this is correct

const PostList = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(fetchPostsAsync());
  }, [dispatch]);

  return (
    <Container>
      <Row>
        {posts.map((post) => (
          <Col key={post.id} md={4}>
            <Card>
              <Card.Img variant="top" src={post.image} />
              <Card.Body>
                <Card.Title>{post.title}</Card.Title>
                <Card.Text>{post.description}</Card.Text>
                <Button variant="primary">Read more</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default PostList;
