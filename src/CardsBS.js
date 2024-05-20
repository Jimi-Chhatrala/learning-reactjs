import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";

function CardsBS() {
  return (
    <Container>
      <Row>
        <Col md={4}>
          <Card bg="warning" border="danger">
            <Card.Img src="images/image1.jpg" />
            <Card.ImgOverlay>
              <Card.Title>Card Title</Card.Title>
              <Card.Subtitle>Card Sub Title</Card.Subtitle>
              <Card.Text>
                This is a Card Text. Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Perspiciatis, quis cum labore tempora fugit
                quibusdam?
              </Card.Text>
              <Card.Link href="#">Click Here</Card.Link>
              <div className="d-grid">
                <Button variant="danger">Read More...</Button>
              </div>
            </Card.ImgOverlay>
          </Card>
        </Col>
        <Col md={4}>
          <Card bg="success">
            <Card.Header>This is Card Header</Card.Header>
            <Card.Img src="images/image1.jpg" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Subtitle>Card Sub Title</Card.Subtitle>
              <Card.Text>
                This is a Card Text. Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Perspiciatis, quis cum labore tempora fugit
                quibusdam?
              </Card.Text>
              <div className="d-grid">
                <Button variant="primary">Read More...</Button>
              </div>
            </Card.Body>
            <Card.Footer>This is Card Footer</Card.Footer>
          </Card>
        </Col>
        <Col md={4}>
          <Card bg="secondary">
            <Card.Img src="images/image1.jpg" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Subtitle>Card Sub Title</Card.Subtitle>
              <Card.Text>
                This is a Card Text. Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Perspiciatis, quis cum labore tempora fugit
                quibusdam?
              </Card.Text>
              <div className="d-grid">
                <Button variant="success">Read More...</Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default CardsBS;
