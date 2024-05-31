import React from "react";
import { Carousel, Col, Container, Row } from "react-bootstrap";

function MyCarousel() {
  return (
    <div>
      <>
        <Container className="bg-dark">
          <Row>
            <Col>
              {/* <Carousel fade> */}
              {/* <Carousel slide={false}> */}
              {/* <Carousel variant="dark"> */}
              {/* <Carousel interval={500}> */}
              <Carousel>
                {/* <Carousel.Item interval={500}> */}
                <Carousel.Item>
                  <img src="images/image4.jpg" className="d-block w-100" />
                  <Carousel.Caption>
                    <h3>First Image</h3>
                    <p>Description of first image.</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img src="images/image5.jpg" className="d-block w-100" />
                  <Carousel.Caption>
                    <h3>Second Image</h3>
                    <p>Description of second image.</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img src="images/image7.jpg" className="d-block w-100" />
                  <Carousel.Caption>
                    <h3>Third Image</h3>
                    <p>Description of third image.</p>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </Col>
          </Row>
        </Container>
      </>
    </div>
  );
}

export default MyCarousel;
