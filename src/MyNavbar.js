import React from "react";
import { Col, Container, Nav, NavDropdown, Navbar, Row } from "react-bootstrap";

function MyNavbar() {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <Navbar fixed="top" variant="dark" bg="dark" expand="md">
              <Container>
                <Navbar.Brand href="#">
                  <img
                    src="logo192.png"
                    width="30"
                    height="30"
                    className="align-top"
                  />
                  &nbsp; My Website
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="my-nav" />
                <Navbar.Collapse id="my-nav">
                  <Nav className="me-auto fw-bold">
                    <Nav.Link href="#">Home</Nav.Link>
                    {/* <Nav.Link href="#">Services</Nav.Link> */}
                    <NavDropdown title="Services" id="my-nav">
                      <NavDropdown.Header>Heading 1</NavDropdown.Header>
                      <NavDropdown.Item href="#">Service 1</NavDropdown.Item>
                      <NavDropdown.Item href="#">Service 2</NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Header>Heading 2</NavDropdown.Header>
                      <NavDropdown.Item href="#">Service 3</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="#">About</Nav.Link>
                    <Nav.Link href="#">Contact</Nav.Link>
                  </Nav>
                  <Navbar.Text>
                    Sign In Here <a href="#">Login</a>
                  </Navbar.Text>
                </Navbar.Collapse>
              </Container>
            </Navbar>
          </Col>
        </Row>
        <Row>
          <Col>
            <h2>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem,
              dolor distinctio amet nobis dolore excepturi ad. Fugiat
              laboriosam, accusantium laborum autem explicabo recusandae
              corporis optio rerum suscipit quasi placeat totam, odit est
              accusamus vitae dolore ipsum provident maiores! Dolorum deleniti
              molestias quod natus beatae temporibus tempore voluptate, aliquid
              praesentium repudiandae. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Veritatis, laudantium libero dolores, doloribus
              vitae illo ex saepe, modi unde pariatur nulla est facere molestias
              fugit rem quos aliquid eum adipisci. Dicta blanditiis magnam totam
              deserunt rem repellendus corporis saepe unde. Quisquam, maxime
              debitis? Quaerat dolor soluta ad. Quae ipsa amet distinctio
              voluptatibus nostrum reiciendis explicabo quibusdam nobis odit.
              Maxime possimus fugiat nihil ullam quo est. Repudiandae suscipit
              repellat laboriosam veritatis saepe, autem eos iste at quisquam.
              Voluptatum placeat impedit quas, voluptatem hic tenetur labore
              rerum exercitationem quibusdam quasi voluptas recusandae
              reprehenderit provident eum odit quaerat ipsa, nam cumque neque
              officiis, velit possimus. Molestias sint fugit nesciunt
              consequatur aspernatur? Accusantium, facere consequuntur amet odit
              mollitia magnam saepe quas quos aut id? Harum perspiciatis
              voluptas eaque doloremque similique velit, earum eius molestias
              provident et possimus cupiditate officia voluptatum! Id, itaque
              quas? Nemo, a? Sed minima quas iure molestiae, mollitia eaque
              doloribus itaque nihil suscipit incidunt ad nulla enim distinctio
              voluptate et reiciendis dignissimos consequuntur? Harum eius amet
              sed tempore dolor aliquid esse? Maxime hic veritatis numquam
              dolores ipsum quae aliquid a atque asperiores animi aut iure,
              sapiente ipsam incidunt, similique aliquam nobis amet recusandae
              ullam. Facere, ducimus porro delectus quaerat nobis, quia quidem
              ipsam quisquam aliquam voluptates fugit labore esse corrupti atque
              quod officia, quos at? Autem repudiandae sint, totam adipisci
              similique odit voluptate eaque ad, exercitationem temporibus
              quaerat illum provident accusamus nam reiciendis impedit
              voluptatibus ut vitae hic nemo et officia nihil eveniet. Nobis
              aliquam officia ipsam est assumenda velit nostrum repellat
              nesciunt, dolore necessitatibus voluptate, ratione vel,
              consequatur rem porro possimus sunt quae quas. Dolorem fugit
              assumenda laudantium nostrum aut et ea non maxime. Nobis, aperiam
              labore. Deleniti dignissimos distinctio alias! Itaque, id ab!
              Ratione beatae delectus consequuntur corporis ducimus, magni earum
              quam molestias ipsum dolorum eius cupiditate amet sapiente
              adipisci consectetur fuga aliquam rerum voluptas itaque
              laboriosam. Minus voluptas illo quia, doloremque sapiente eaque
              dignissimos expedita fuga, sed ratione eos aut dolorem aliquid
              animi ex hic itaque! A quis inventore accusamus vitae fugit libero
              quisquam, assumenda ex dolore nemo id alias pariatur vero optio
              deleniti enim repellat dolores sint! Saepe reiciendis accusantium
              quis quam delectus. Impedit perferendis natus, quae quam maiores
              ratione libero harum quidem id in, recusandae corporis tempore
              maxime iste officia nostrum nesciunt ullam voluptatum dignissimos!
              Hic est quidem explicabo, earum consequatur tempora ipsa aperiam
              velit ab quaerat possimus tenetur mollitia quis id, cumque
              consectetur incidunt sapiente suscipit maxime repudiandae! Modi
              veniam nemo doloribus quis temporibus. Ut molestiae deserunt
              voluptate voluptas neque sit at sequi sunt numquam nemo
              cupiditate, dolor similique quasi fuga quas iste optio fugit
              consequuntur perferendis, nesciunt adipisci sint, aliquam enim?
              Doloremque dolorum quos doloribus, alias iste porro, qui magni
              corrupti, earum inventore velit temporibus expedita! Deleniti
              rerum corrupti repudiandae necessitatibus, quia doloribus eveniet
              suscipit, consectetur quidem, accusantium harum atque! Temporibus
              ad ipsum delectus quod pariatur sed eius, architecto, illum
              quibusdam natus officia quas nostrum nam consectetur? Molestiae
              odio quae autem itaque sed provident enim vitae eaque, sit
              pariatur, cupiditate eos culpa veniam{" "}
              <quod className="lorem200"></quod>
            </h2>
            <h2>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem,
              dolor distinctio amet nobis dolore excepturi ad. Fugiat
              laboriosam, accusantium laborum autem explicabo recusandae
              corporis optio rerum suscipit quasi placeat totam, odit est
              accusamus vitae dolore ipsum provident maiores! Dolorum deleniti
              molestias quod natus beatae temporibus tempore voluptate, aliquid
              praesentium repudiandae. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Veritatis, laudantium libero dolores, doloribus
              vitae illo ex saepe, modi unde pariatur nulla est facere molestias
              fugit rem quos aliquid eum adipisci. Dicta blanditiis magnam totam
              deserunt rem repellendus corporis saepe unde. Quisquam, maxime
              debitis? Quaerat dolor soluta ad. Quae ipsa amet distinctio
              voluptatibus nostrum reiciendis explicabo quibusdam nobis odit.
              Maxime possimus fugiat nihil ullam quo est. Repudiandae suscipit
              repellat laboriosam veritatis saepe, autem eos iste at quisquam.
              Voluptatum placeat impedit quas, voluptatem hic tenetur labore
              rerum exercitationem quibusdam quasi voluptas recusandae
              reprehenderit provident eum odit quaerat ipsa, nam cumque neque
              officiis, velit possimus. Molestias sint fugit nesciunt
              consequatur aspernatur? Accusantium, facere consequuntur amet odit
              mollitia magnam saepe quas quos aut id? Harum perspiciatis
              voluptas eaque doloremque similique velit, earum eius molestias
              provident et possimus cupiditate officia voluptatum! Id, itaque
              quas? Nemo, a? Sed minima quas iure molestiae, mollitia eaque
              doloribus itaque nihil suscipit incidunt ad nulla enim distinctio
              voluptate et reiciendis dignissimos consequuntur? Harum eius amet
              sed tempore dolor aliquid esse? Maxime hic veritatis numquam
              dolores ipsum quae aliquid a atque asperiores animi aut iure,
              sapiente ipsam incidunt, similique aliquam nobis amet recusandae
              ullam. Facere, ducimus porro delectus quaerat nobis, quia quidem
              ipsam quisquam aliquam voluptates fugit labore esse corrupti atque
              quod officia, quos at? Autem repudiandae sint, totam adipisci
              similique odit voluptate eaque ad, exercitationem temporibus
              quaerat illum provident accusamus nam reiciendis impedit
              voluptatibus ut vitae hic nemo et officia nihil eveniet. Nobis
              aliquam officia ipsam est assumenda velit nostrum repellat
              nesciunt, dolore necessitatibus voluptate, ratione vel,
              consequatur rem porro possimus sunt quae quas. Dolorem fugit
              assumenda laudantium nostrum aut et ea non maxime. Nobis, aperiam
              labore. Deleniti dignissimos distinctio alias! Itaque, id ab!
              Ratione beatae delectus consequuntur corporis ducimus, magni earum
              quam molestias ipsum dolorum eius cupiditate amet sapiente
              adipisci consectetur fuga aliquam rerum voluptas itaque
              laboriosam. Minus voluptas illo quia, doloremque sapiente eaque
              dignissimos expedita fuga, sed ratione eos aut dolorem aliquid
              animi ex hic itaque! A quis inventore accusamus vitae fugit libero
              quisquam, assumenda ex dolore nemo id alias pariatur vero optio
              deleniti enim repellat dolores sint! Saepe reiciendis accusantium
              quis quam delectus. Impedit perferendis natus, quae quam maiores
              ratione libero harum quidem id in, recusandae corporis tempore
              maxime iste officia nostrum nesciunt ullam voluptatum dignissimos!
              Hic est quidem explicabo, earum consequatur tempora ipsa aperiam
              velit ab quaerat possimus tenetur mollitia quis id, cumque
              consectetur incidunt sapiente suscipit maxime repudiandae! Modi
              veniam nemo doloribus quis temporibus. Ut molestiae deserunt
              voluptate voluptas neque sit at sequi sunt numquam nemo
              cupiditate, dolor similique quasi fuga quas iste optio fugit
              consequuntur perferendis, nesciunt adipisci sint, aliquam enim?
              Doloremque dolorum quos doloribus, alias iste porro, qui magni
              corrupti, earum inventore velit temporibus expedita! Deleniti
              rerum corrupti repudiandae necessitatibus, quia doloribus eveniet
              suscipit, consectetur quidem, accusantium harum atque! Temporibus
              ad ipsum delectus quod pariatur sed eius, architecto, illum
              quibusdam natus officia quas nostrum nam consectetur? Molestiae
              odio quae autem itaque sed provident enim vitae eaque, sit
              pariatur, cupiditate eos culpa veniam{" "}
              <quod className="lorem200"></quod>
            </h2>
            <h2>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem,
              dolor distinctio amet nobis dolore excepturi ad. Fugiat
              laboriosam, accusantium laborum autem explicabo recusandae
              corporis optio rerum suscipit quasi placeat totam, odit est
              accusamus vitae dolore ipsum provident maiores! Dolorum deleniti
              molestias quod natus beatae temporibus tempore voluptate, aliquid
              praesentium repudiandae. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Veritatis, laudantium libero dolores, doloribus
              vitae illo ex saepe, modi unde pariatur nulla est facere molestias
              fugit rem quos aliquid eum adipisci. Dicta blanditiis magnam totam
              deserunt rem repellendus corporis saepe unde. Quisquam, maxime
              debitis? Quaerat dolor soluta ad. Quae ipsa amet distinctio
              voluptatibus nostrum reiciendis explicabo quibusdam nobis odit.
              Maxime possimus fugiat nihil ullam quo est. Repudiandae suscipit
              repellat laboriosam veritatis saepe, autem eos iste at quisquam.
              Voluptatum placeat impedit quas, voluptatem hic tenetur labore
              rerum exercitationem quibusdam quasi voluptas recusandae
              reprehenderit provident eum odit quaerat ipsa, nam cumque neque
              officiis, velit possimus. Molestias sint fugit nesciunt
              consequatur aspernatur? Accusantium, facere consequuntur amet odit
              mollitia magnam saepe quas quos aut id? Harum perspiciatis
              voluptas eaque doloremque similique velit, earum eius molestias
              provident et possimus cupiditate officia voluptatum! Id, itaque
              quas? Nemo, a? Sed minima quas iure molestiae, mollitia eaque
              doloribus itaque nihil suscipit incidunt ad nulla enim distinctio
              voluptate et reiciendis dignissimos consequuntur? Harum eius amet
              sed tempore dolor aliquid esse? Maxime hic veritatis numquam
              dolores ipsum quae aliquid a atque asperiores animi aut iure,
              sapiente ipsam incidunt, similique aliquam nobis amet recusandae
              ullam. Facere, ducimus porro delectus quaerat nobis, quia quidem
              ipsam quisquam aliquam voluptates fugit labore esse corrupti atque
              quod officia, quos at? Autem repudiandae sint, totam adipisci
              similique odit voluptate eaque ad, exercitationem temporibus
              quaerat illum provident accusamus nam reiciendis impedit
              voluptatibus ut vitae hic nemo et officia nihil eveniet. Nobis
              aliquam officia ipsam est assumenda velit nostrum repellat
              nesciunt, dolore necessitatibus voluptate, ratione vel,
              consequatur rem porro possimus sunt quae quas. Dolorem fugit
              assumenda laudantium nostrum aut et ea non maxime. Nobis, aperiam
              labore. Deleniti dignissimos distinctio alias! Itaque, id ab!
              Ratione beatae delectus consequuntur corporis ducimus, magni earum
              quam molestias ipsum dolorum eius cupiditate amet sapiente
              adipisci consectetur fuga aliquam rerum voluptas itaque
              laboriosam. Minus voluptas illo quia, doloremque sapiente eaque
              dignissimos expedita fuga, sed ratione eos aut dolorem aliquid
              animi ex hic itaque! A quis inventore accusamus vitae fugit libero
              quisquam, assumenda ex dolore nemo id alias pariatur vero optio
              deleniti enim repellat dolores sint! Saepe reiciendis accusantium
              quis quam delectus. Impedit perferendis natus, quae quam maiores
              ratione libero harum quidem id in, recusandae corporis tempore
              maxime iste officia nostrum nesciunt ullam voluptatum dignissimos!
              Hic est quidem explicabo, earum consequatur tempora ipsa aperiam
              velit ab quaerat possimus tenetur mollitia quis id, cumque
              consectetur incidunt sapiente suscipit maxime repudiandae! Modi
              veniam nemo doloribus quis temporibus. Ut molestiae deserunt
              voluptate voluptas neque sit at sequi sunt numquam nemo
              cupiditate, dolor similique quasi fuga quas iste optio fugit
              consequuntur perferendis, nesciunt adipisci sint, aliquam enim?
              Doloremque dolorum quos doloribus, alias iste porro, qui magni
              corrupti, earum inventore velit temporibus expedita! Deleniti
              rerum corrupti repudiandae necessitatibus, quia doloribus eveniet
              suscipit, consectetur quidem, accusantium harum atque! Temporibus
              ad ipsum delectus quod pariatur sed eius, architecto, illum
              quibusdam natus officia quas nostrum nam consectetur? Molestiae
              odio quae autem itaque sed provident enim vitae eaque, sit
              pariatur, cupiditate eos culpa veniam{" "}
              <quod className="lorem200"></quod>
            </h2>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default MyNavbar;
