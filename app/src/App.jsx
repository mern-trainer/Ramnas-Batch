import { Fragment } from "react"
import Header from "./Components/Header"
import HeroSection from "./Components/HeroSection"
import Explore from "./Components/Explore"

// import Button from "react-bootstrap/Button" // default import
// import Alert from "react-bootstrap/Alert"

import { Button, Image, Navbar, Nav, NavDropdown, Container, Carousel, Card, Form } from "react-bootstrap" // named import
import { FaArrowAltCircleRight, FaArrowAltCircleLeft, FaEnvelope } from "react-icons/fa";
import { FaLocationDot, FaPhone } from "react-icons/fa6"
import Responsive from "./Pages/Responsive"
import States from "./Pages/states"
import PasswordGenerator from "./Pages/PasswordGenerator"
import Mapping from "./Pages/Mapping"
import TodoList from "./Pages/TodoList"
import ParentComponent from "./Pages/ParentComponent"

const App = () => {

   return <Fragment>
      {/* <States /> */}
      {/* <Mapping /> */}
      {/* <TodoList /> */}
      <ParentComponent />
      {/* <PasswordGenerator /> */}
      {/* <Responsive /> */}
      {/* <Navbar expand="lg" className="bg-body-tertiary">
         <Container fluid>
            <Navbar.Brand href="/">
               <Image src="./logo.png" width={150}/>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
               <Nav className="me-auto">
                  <Nav.Link href="#home">Home</Nav.Link>
                  <Nav.Link href="#link">Link</Nav.Link>
                  <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                     <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                     <NavDropdown.Item href="#action/3.2">
                        Another action
                     </NavDropdown.Item>
                     <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                     <NavDropdown.Divider />
                     <NavDropdown.Item href="#action/3.4">
                        Separated link
                     </NavDropdown.Item>
                  </NavDropdown>
               </Nav>
            </Navbar.Collapse>
         </Container>
      </Navbar>
      
      <Carousel nextIcon={<FaArrowAltCircleRight />} prevIcon={<FaArrowAltCircleLeft />}>
         <Carousel.Item interval={1000}>
            <Image className="w-100" style={{height: "500px"}} src="https://img.freepik.com/free-vector/flat-horizontal-banner-template-black-friday-sale_23-2150852978.jpg?semt=ais_hybrid"/>
            <Carousel.Caption>
               <h3>First slide label</h3>
            </Carousel.Caption>
         </Carousel.Item>
         <Carousel.Item interval={4000}>
            <Image className="w-100" style={{height: "500px"}} src="https://t3.ftcdn.net/jpg/04/65/46/52/360_F_465465254_1pN9MGrA831idD6zIBL7q8rnZZpUCQTy.jpg"/>
            <Carousel.Caption>
               <h3>Second slide label</h3>
            </Carousel.Caption>
         </Carousel.Item>
         <Carousel.Item interval={8000}>
            <Image className="w-100" style={{height: "500px"}} src="https://graphicsfamily.com/wp-content/uploads/edd/2022/06/Free-E-commerce-Product-Banner-Design-with-Green-Colors-scaled.jpg"/>
            <Carousel.Caption>
               <h3>Third slide label</h3>
            </Carousel.Caption>
         </Carousel.Item>
      </Carousel>

      <div className="d-flex gap-3 mt-3 overflow-auto">
      <Card style={{ width: '15rem' }} className="flex-shrink-0">
         <Card.Img variant="top" src="../src/Assets/image.png" />
         <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text className="text-truncate">
               Some quick example text to build on the card title and make up the
               bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
         </Card.Body>
      </Card>
      <Card style={{ width: '15rem' }} className="flex-shrink-0">
         <Card.Img variant="top" src="../src/Assets/image.png" />
         <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text className="text-truncate">
               Some quick example text to build on the card title and make up the
               bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
         </Card.Body>
      </Card>
      <Card style={{ width: '15rem' }} className="flex-shrink-0">
         <Card.Img variant="top" src="../src/Assets/image.png" />
         <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text className="text-truncate">
               Some quick example text to build on the card title and make up the
               bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
         </Card.Body>
      </Card>
      <Card style={{ width: '15rem' }} className="flex-shrink-0">
         <Card.Img variant="top" src="../src/Assets/image.png" />
         <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text className="text-truncate">
               Some quick example text to build on the card title and make up the
               bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
         </Card.Body>
      </Card>
      <Card style={{ width: '15rem' }} className="flex-shrink-0">
         <Card.Img variant="top" src="../src/Assets/image.png" />
         <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text className="text-truncate">
               Some quick example text to build on the card title and make up the
               bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
         </Card.Body>
      </Card>
      <Card style={{ width: '15rem' }} className="flex-shrink-0">
         <Card.Img variant="top" src="../src/Assets/image.png" />
         <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text className="text-truncate">
               Some quick example text to build on the card title and make up the
               bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
         </Card.Body>
      </Card>
      <Card style={{ width: '15rem' }} className="flex-shrink-0">
         <Card.Img variant="top" src="../src/Assets/image.png" />
         <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text className="text-truncate">
               Some quick example text to build on the card title and make up the
               bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
         </Card.Body>
      </Card>
      </div>

      <div className="d-flex gap-4 mt-4 px-4 flex-column flex-md-row">
         <div className="w-100">
            <div><FaLocationDot /> Kerala, India</div>
            <div><FaEnvelope /> sample@gmail.com</div>
            <div><FaPhone /> +91 9876543210</div>
         </div>
         <Form className="w-100">
            <Form.Group>
               <Form.Label>Name</Form.Label>
               <Form.Control type="text" placeholder="Enter your name"/>
            </Form.Group>
            <Form.Group>
               <Form.Label>Message</Form.Label>
               <Form.Control as="textarea" placeholder="Enter your name"/>
            </Form.Group>
            <Button className="mt-2 w-100" variant="success" size="sm">Send Message</Button>
         </Form>
      </div> */}
   </Fragment> 

}

export default App


